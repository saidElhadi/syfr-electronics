import { NextRequest, NextResponse } from 'next/server';
import { mockArticles } from '@/lib/mockData';

const CMS_BASE_URL = process.env.CMS_BASE_URL;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Article slug is required' },
        { status: 400 }
      );
    }

    // If CMS_BASE_URL is configured, use the real CMS
    if (CMS_BASE_URL) {
      const cmsUrl = `${CMS_BASE_URL}/articles/${slug}`;
      
      const response = await fetch(cmsUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          return NextResponse.json(
            { error: 'Article not found' },
            { status: 404 }
          );
        }
        return NextResponse.json(
          { error: `CMS API Error: ${response.status} ${response.statusText}` },
          { status: response.status }
        );
      }

      const data = await response.json();
      
      return NextResponse.json({
        data: data.data || data,
        meta: data.meta || {
          timestamp: new Date().toISOString(),
          version: 'v1',
          requestId: Math.random().toString(36).substr(2, 9)
        }
      });
    }

    // Use mock data if CMS is not configured
    const article = mockArticles.find(a => a.slug === slug || a.id === slug);
    
    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      data: article,
      meta: {
        timestamp: new Date().toISOString(),
        version: 'v1',
        requestId: Math.random().toString(36).substr(2, 9)
      }
    });

  } catch (error) {
    console.error('Article API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article' },
      { status: 500 }
    );
  }
}
