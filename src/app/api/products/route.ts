import { NextRequest, NextResponse } from 'next/server';

const CMS_BASE_URL = 'https://syfr-electronics-cms.vercel.app/api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const queryString = searchParams.toString();
    
    const cmsUrl = `${CMS_BASE_URL}/products${queryString ? `?${queryString}` : ''}`;
    
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
    
    // Return the data, extracting from wrapper if needed
    return NextResponse.json(data.data || data);
  } catch (error) {
    console.error('Products API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products from CMS' },
      { status: 500 }
    );
  }
}
