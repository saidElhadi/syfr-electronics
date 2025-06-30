// API utility functions for CMS integration
export interface Product {
  id: string;
  name: string;
  description: string;
  category?: string;
  category_id?: string;
  subcategory?: string;
  price?: string | number;
  images: string[];
  specifications: Record<string, any> | null;
  inStock?: boolean;
  stock_quantity?: number;
  featured?: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
  sku?: string;
  product_type?: string;
  status?: string;
  datasheet_url?: string;
  video_url?: string;
  product_categories?: any;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  parentId?: string;
  productCount: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  featuredImage?: string;
  status?: 'draft' | 'published' | 'archived';
  author_name?: string;
  hasImage?: boolean;
  meta?: Record<string, any>;
}

export interface ArticleAnalytics {
  totalViews: number;
  uniqueViews: number;
  averageReadTime: number;
  bounceRate: number;
  shareCount: number;
  commentCount: number;
  engagementRate: number;
}

export interface ArticlesQueryParams {
  // Pagination
  page?: number;
  limit?: number;
  
  // Search & Filtering
  search?: string;
  q?: string;
  status?: 'draft' | 'published' | 'archived';
  author?: string;
  tags?: string;
  featured?: boolean;
  hasImage?: boolean;
  
  // Date Filtering
  dateFrom?: string;
  dateTo?: string;
  
  // Sorting
  sortBy?: 'title' | 'created_at' | 'updated_at' | 'published_at' | 'author_name';
  sortOrder?: 'asc' | 'desc';
  
  // Additional Data
  include?: string;
}

export interface ArticleAnalyticsParams {
  period?: '7d' | '30d' | '90d' | '1y' | 'all';
  groupBy?: 'day' | 'week' | 'month';
  include?: string;
}

export interface ApiResponse<T> {
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  filters?: Record<string, any>;
  meta?: {
    timestamp: string;
    version: string;
    requestId: string;
  };
}

export interface PartImage {
  url: string;
  tags: string[];
  order: number;
}

export interface Part {
  id: string;
  name: string;
  description?: string;
  category?: string;
  category_id?: string;
  compatibility?: string[];
  price?: string | number;
  specifications: Record<string, any> | null;
  inStock?: boolean;
  stock_quantity?: number;
  images: PartImage[];
  created_at: string;
  updated_at: string;
  sku?: string;
  part_type?: string;
  status?: string;
  manufacturer?: string;
  part_number?: string;
}

// API base URL - using local API routes to proxy CMS requests
const API_BASE_URL = '/api';

// Generic fetch function with error handling
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  // Handle both client and server environments
  let url: string;
  
  if (typeof window === 'undefined') {
    // Server-side: need absolute URL
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXTAUTH_URL 
      ? process.env.NEXTAUTH_URL 
      : 'http://localhost:3000';
    url = `${baseUrl}${API_BASE_URL}${endpoint}`;
  } else {
    // Client-side: relative URL is fine
    url = `${API_BASE_URL}${endpoint}`;
  }

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      // Enhanced error handling for different status codes
      let errorMessage = `API Error: ${response.status} ${response.statusText}`;
      
      try {
        const errorData = await response.json();
        if (errorData.error) {
          errorMessage = errorData.error;
        }
        if (errorData.details) {
          errorMessage += ` - ${errorData.details}`;
        }
      } catch {
        // If we can't parse the error response, use the default message
      }
      
      throw new Error(errorMessage);
    }
    
    const data = await response.json();
    
    // For the new API format, return the full response object
    // For backward compatibility, if there's a 'data' property, return the wrapped data
    if (data.data !== undefined) {
      return data;
    }
    
    // For legacy responses, return as-is
    return data;
  } catch (error) {
    console.error(`API fetch error for ${endpoint}:`, error);
    throw error;
  }
}

// Products API
export async function getProducts(params: Record<string, any> = {}): Promise<Product[]> {
  const query = new URLSearchParams(params).toString();
  const response = await apiFetch<ApiResponse<Product[]> | Product[]>(`/products${query ? `?${query}` : ''}`);
  // Handle both new and legacy response formats
  return Array.isArray(response) ? response : response.data;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await apiFetch<ApiResponse<Product> | Product>(`/products/${id}`);
  // Handle both new and legacy response formats
  return 'data' in response ? response.data : response;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const response = await apiFetch<ApiResponse<Product[]> | Product[]>('/products?featured=true');
  // Handle both new and legacy response formats
  return Array.isArray(response) ? response : response.data;
}

// Product Categories API
export async function getProductCategories(params: Record<string, any> = {}): Promise<ProductCategory[]> {
  const query = new URLSearchParams(params).toString();
  const response = await apiFetch<ApiResponse<ProductCategory[]> | ProductCategory[]>(`/product-categories${query ? `?${query}` : ''}`);
  // Handle both new and legacy response formats
  return Array.isArray(response) ? response : response.data;
}

// Parts API
export async function getParts(params: Record<string, any> = {}): Promise<Part[]> {
  const query = new URLSearchParams(params).toString();
  const response = await apiFetch<ApiResponse<Part[]> | Part[]>(`/parts${query ? `?${query}` : ''}`);
  // Handle both new and legacy response formats
  return Array.isArray(response) ? response : response.data;
}

export async function getPart(id: string): Promise<Part> {
  const response = await apiFetch<ApiResponse<Part> | Part>(`/parts/${id}`);
  // Handle both new and legacy response formats
  return 'data' in response ? response.data : response;
}

// Parts Categories API
export async function getPartsCategories(params: Record<string, any> = {}): Promise<ProductCategory[]> {
  const query = new URLSearchParams(params).toString();
  const response = await apiFetch<ApiResponse<ProductCategory[]> | ProductCategory[]>(`/parts-categories${query ? `?${query}` : ''}`);
  // Handle both new and legacy response formats
  return Array.isArray(response) ? response : response.data;
}

// Articles API
export async function getArticles(params: ArticlesQueryParams = {}): Promise<ApiResponse<Article[]>> {
  const query = new URLSearchParams();
  
  // Add all possible parameters to the query string
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });
  
  const queryString = query.toString();
  return apiFetch<ApiResponse<Article[]>>(`/articles${queryString ? `?${queryString}` : ''}`);
}

export async function getArticle(id: string, params: { include?: string } = {}): Promise<ApiResponse<Article>> {
  const query = new URLSearchParams();
  if (params.include) {
    query.append('include', params.include);
  }
  
  const queryString = query.toString();
  return apiFetch<ApiResponse<Article>>(`/articles/${id}${queryString ? `?${queryString}` : ''}`);
}

export async function getArticleBySlug(slug: string, params: { include?: string } = {}): Promise<ApiResponse<Article>> {
  console.log('test')
  const query = new URLSearchParams();
  if (params.include) {
    query.append('include', params.include);
  }

  const queryString = query.toString();
  return apiFetch<ApiResponse<Article>>(`/articles?slug=${slug}${queryString ? `&${queryString}` : ''}`);
}

export async function getArticlesAnalytics(params: ArticleAnalyticsParams = {}): Promise<ApiResponse<any>> {
  const query = new URLSearchParams();
  
  // Set defaults
  const {
    period = '30d',
    groupBy = 'day',
    include
  } = params;
  
  query.append('period', period);
  query.append('groupBy', groupBy);
  if (include) {
    query.append('include', include);
  }
  
  const queryString = query.toString();
  return apiFetch<ApiResponse<any>>(`/articles/analytics?${queryString}`);
}

// Convenience methods for common use cases
export async function getLatestArticles(limit: number = 10): Promise<ApiResponse<Article[]>> {
  return getArticles({
    status: 'published',
    sortBy: 'published_at',
    sortOrder: 'desc',
    limit
  });
}

export async function searchArticles(searchTerm: string, limit: number = 20): Promise<ApiResponse<Article[]>> {
  return getArticles({
    search: searchTerm,
    limit
  });
}

export async function getArticlesByAuthor(author: string, status: 'draft' | 'published' | 'archived' = 'published'): Promise<ApiResponse<Article[]>> {
  return getArticles({
    author,
    status
  });
}

export async function getFeaturedArticles(): Promise<ApiResponse<Article[]>> {
  return getArticles({
    featured: true,
    status: 'published'
  });
}

export async function getRecentArticlesWithStats(dateFrom: string): Promise<ApiResponse<Article[]>> {
  return getArticles({
    dateFrom,
    include: 'stats',
    sortBy: 'created_at',
    sortOrder: 'desc'
  });
}

// Stats for homepage
export async function getStats(): Promise<{
  totalProjects: number;
  yearsExperience: number;
  uptime: number;
  supportResponse: string;
}> {
  // This could come from your CMS or be static
  return {
    totalProjects: 500,
    yearsExperience: 15,
    uptime: 99.9,
    supportResponse: '48hrs'
  };
}
