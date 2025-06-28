"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductDisplayCard from './ProductDisplayCard';
import transparentLEDImage from '@/assets/led-pannel.jpg';

export default function TransparentLEDSection() {
  const t = useTranslations('homepage');

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            
            {/* Content Side */}
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-semibold px-4 py-2 rounded-full">
                  Transparent LED
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {t('productCategories.transparent.title')}
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('productCategories.transparent.description')}
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-4 py-2 rounded-lg font-medium">Transparent</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-4 py-2 rounded-lg font-medium">Light Weight</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-4 py-2 rounded-lg font-medium">Glass Integration</span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm px-4 py-2 rounded-lg font-medium">Storefront Ready</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products?category=transparent-led"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  {t('productCategories.transparent.cta')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-purple-500 text-purple-600 dark:text-purple-400 font-semibold px-8 py-4 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:w-1/2">
              <ProductDisplayCard
                gradientFrom="from-purple-100"
                gradientTo="to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50"
                image={transparentLEDImage}
                imageAlt="Transparent LED Display showing see-through capabilities"
                productName="Transparent LED Display"
                productSpecs="P3.91 • 70% Transparency • Glass Mount"
                className="lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
