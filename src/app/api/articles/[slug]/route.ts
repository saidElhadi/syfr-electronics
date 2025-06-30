import { NextRequest, NextResponse } from 'next/server';

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
    
    // Return the data in the expected format
    return NextResponse.json({
      data: data.data || data,
      meta: data.meta || {
        timestamp: new Date().toISOString(),
        version: 'v1',
        requestId: Math.random().toString(36).substr(2, 9)
      }
    });
  } catch (error) {
    console.error('Article API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch article from CMS' },
      { status: 500 }
    );
  }
}
