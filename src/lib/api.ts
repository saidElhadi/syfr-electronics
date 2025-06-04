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
  featuredImage?: string;
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
  images: string[];
  created_at: string;
  updated_at: string;
  sku?: string;
  part_type?: string;
  status?: string;
  manufacturer?: string;
}

// API base URL - using local API routes to proxy CMS requests
const API_BASE_URL = '/api';

// Generic fetch function with error handling
async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    // Handle CMS response structure that wraps data in a 'data' property
    return data.data || data;
  } catch (error) {
    console.error(`API fetch error for ${endpoint}:`, error);
    throw error;
  }
}

// Products API
export async function getProducts(params: Record<string, any> = {}): Promise<Product[]> {
  const query = new URLSearchParams(params).toString();
  return apiFetch<Product[]>(`/products${query ? `?${query}` : ''}`);
}
export async function getProduct(id: string): Promise<Product> {
  return apiFetch<Product>(`/products/${id}`);
}

// Product Categories API
export async function getProductCategories(params: Record<string, any> = {}): Promise<ProductCategory[]> {
  const query = new URLSearchParams(params).toString();
  return apiFetch<ProductCategory[]>(`/product-categories${query ? `?${query}` : ''}`);
}

// Parts API
export async function getParts(params: Record<string, any> = {}): Promise<Part[]> {
  const query = new URLSearchParams(params).toString();
  return apiFetch<Part[]>(`/parts${query ? `?${query}` : ''}`);
}
export async function getPart(id: string): Promise<Part> {
  return apiFetch<Part>(`/parts/${id}`);
}

// Parts Categories API
export async function getPartsCategories(params: Record<string, any> = {}): Promise<ProductCategory[]> {
  const query = new URLSearchParams(params).toString();
  return apiFetch<ProductCategory[]>(`/parts-categories${query ? `?${query}` : ''}`);
}

// Articles API
export async function getArticles(params: Record<string, any> = {}): Promise<Article[]> {
  const query = new URLSearchParams(params).toString();
  return apiFetch<Article[]>(`/articles${query ? `?${query}` : ''}`);
}
export async function getArticle(id: string): Promise<Article> {
  return apiFetch<Article>(`/articles/${id}`);
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
