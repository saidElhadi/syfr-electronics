import { NextRequest, NextResponse } from 'next/server';
import { mockArticles } from '@/lib/mockData';

const CMS_BASE_URL = process.env.CMS_BASE_URL;

// Helper function to filter and paginate mock data
function filterAndPaginateArticles(articles: any[], searchParams: URLSearchParams) {
  let filtered = [...articles];

  // Apply filters
  const search = searchParams.get('search');
  const slug = searchParams.get('slug');
  const status = searchParams.get('status');
  const author = searchParams.get('author');
  const tags = searchParams.get('tags');
  const featured = searchParams.get('featured');
  const dateFrom = searchParams.get('dateFrom');
  const dateTo = searchParams.get('dateTo');

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(searchLower) ||
      article.content.toLowerCase().includes(searchLower) ||
      article.excerpt.toLowerCase().includes(searchLower) ||
      article.author.toLowerCase().includes(searchLower)
    );
  }

  if (slug) {
    filtered = filtered.filter(article => article.slug === slug);
  }

  if (status) {
    filtered = filtered.filter(article => article.status === status);
  }

  if (author) {
    filtered = filtered.filter(article => 
      article.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (tags) {
    const tagList = tags.split(',').map(t => t.trim().toLowerCase());
    filtered = filtered.filter(article => 
      article.tags.some((tag: string) => 
        tagList.some(searchTag => tag.toLowerCase().includes(searchTag))
      )
    );
  }

  if (featured === 'true') {
    filtered = filtered.filter(article => article.featured === true);
  }

  if (dateFrom) {
    filtered = filtered.filter(article => 
      new Date(article.publishedAt) >= new Date(dateFrom)
    );
  }

  if (dateTo) {
    filtered = filtered.filter(article => 
      new Date(article.publishedAt) <= new Date(dateTo)
    );
  }

  // Apply sorting
  const sortBy = searchParams.get('sortBy') || 'published_at';
  const sortOrder = searchParams.get('sortOrder') || 'desc';

  filtered.sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'title':
        aValue = a.title;
        bValue = b.title;
        break;
      case 'created_at':
        aValue = new Date(a.createdAt);
        bValue = new Date(b.createdAt);
        break;
      case 'updated_at':
        aValue = new Date(a.updatedAt);
        bValue = new Date(b.updatedAt);
        break;
      case 'published_at':
      default:
        aValue = new Date(a.publishedAt);
        bValue = new Date(b.publishedAt);
        break;
    }

    if (sortOrder === 'desc') {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    } else {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    }
  });

  // Apply pagination
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = filtered.slice(startIndex, endIndex);
  const total = filtered.length;
  const totalPages = Math.ceil(total / limit);

  return {
    data: paginatedData,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // If CMS_BASE_URL is configured, use the real CMS
    if (CMS_BASE_URL) {
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
    }

    // Use mock data if CMS is not configured
    const result = filterAndPaginateArticles(mockArticles, searchParams);
    
    return NextResponse.json({
      data: result.data,
      pagination: result.pagination,
      filters: Object.fromEntries(searchParams.entries()),
      meta: {
        timestamp: new Date().toISOString(),
        version: 'v1',
        requestId: Math.random().toString(36).substr(2, 9)
      }
    });

  } catch (error) {
    console.error('Articles API proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}
