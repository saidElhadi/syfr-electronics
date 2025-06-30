import { NextRequest, NextResponse } from 'next/server';

const CMS_BASE_URL = process.env.CMS_BASE_URL;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    
    const cmsUrl = `${CMS_BASE_URL}/articles${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(cmsUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `CMS API Error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Return the data in the expected format
    return NextResponse.json({
      data: data.data || data,
      pagination: data.pagination || {
        page: 1,
        limit: 20,
        total: Array.isArray(data.data || data) ? (data.data || data).length : 0,
        totalPages: 1,
        hasNextPage: false,
        hasPrevPage: false
      },
      filters: data.filters || {},
      meta: data.meta || {
        timestamp: new Date().toISOString(),
        version: 'v1',
        requestId: Math.random().toString(36).substr(2, 9)
      }
    });
  } catch (error) {
    console.error('Articles API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles from CMS' },
      { status: 500 }
    );
  }
}
