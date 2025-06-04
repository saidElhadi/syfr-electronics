'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts, type Product } from '@/lib/api';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const featuredProducts = await getFeaturedProducts(6);
        setProducts(featuredProducts);
      } catch (err) {
        setError('Failed to load featured products');
        console.error('Error loading featured products:', err);
        
        // Fallback to mock data if API fails
        setProducts([
          {
            id: '1',
            name: 'P3.91 Outdoor LED Display',
            description: 'High-brightness outdoor LED display perfect for stadiums and large venues',
            category: 'outdoor-led',
            price: 2499,
            images: ['/products/outdoor-led-p3.jpg'],
            specifications: { pixelPitch: '3.91mm', brightness: '5000 nits' },
            inStock: true,
            featured: true,
            tags: ['outdoor', 'stadium', 'high-brightness'],
            createdAt: '2024-01-01',
            updatedAt: '2024-06-01'
          },
          {
            id: '2', 
            name: 'P1.25 Indoor LED Screen',
            description: 'Ultra-fine pixel pitch indoor display for premium retail environments',
            category: 'indoor-led',
            price: 1899,
            images: ['/products/indoor-led-p1.jpg'],
            specifications: { pixelPitch: '1.25mm', resolution: '4K' },
            inStock: true,
            featured: true,
            tags: ['indoor', 'retail', 'ultra-fine'],
            createdAt: '2024-01-01',
            updatedAt: '2024-06-01'
          },
          {
            id: '3',
            name: 'Flexible Curved LED Panel',
            description: 'Innovative curved LED display for creative installations',
            category: 'curved-led',
            price: 3299,
            images: ['/products/curved-led.jpg'],
            specifications: { bendRadius: '1000mm', pixelPitch: '2.5mm' },
            inStock: true,
            featured: true,
            tags: ['curved', 'flexible', 'creative'],
            createdAt: '2024-01-01',
            updatedAt: '2024-06-01'
          }
        ]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Featured LED Displays
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-96 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error && products.length === 0) {
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Unable to load featured products at this time.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured LED Display Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our most popular LED display solutions trusted by businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                {product.images[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                {/* Stock Status */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    product.inStock 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  {product.price && (
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      ${product.price.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Key Specifications */}
                {product.specifications && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                        <span key={key} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                          {key}: {value}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/contact?product=${product.id}`}
                    className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2 px-4 rounded-lg font-semibold transition-colors text-sm"
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
