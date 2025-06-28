"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductDisplayCard from './ProductDisplayCard';
import interactiveLEDImage from '@/assets/led-pannel.jpg';

export default function InteractiveLEDSection() {
  const t = useTranslations('homepage');

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            
            {/* Content Side */}
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7M9 7h6M9 11h6m-3 4h3" />
                  </svg>
                </div>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-semibold px-4 py-2 rounded-full">
                  Interactive LED
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {t('productCategories.interactive.title')}
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('productCategories.interactive.description')}
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm px-4 py-2 rounded-lg font-medium">Touch</span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm px-4 py-2 rounded-lg font-medium">Sensors</span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm px-4 py-2 rounded-lg font-medium">Multi-Touch</span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm px-4 py-2 rounded-lg font-medium">Gesture Control</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products?category=interactive-led"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  {t('productCategories.interactive.cta')}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-yellow-500 text-yellow-600 dark:text-yellow-400 font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-white transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:w-1/2">
              <ProductDisplayCard
                gradientFrom="from-yellow-100"
                gradientTo="to-orange-100 dark:from-yellow-800/50 dark:to-orange-800/50"
                image={interactiveLEDImage}
                imageAlt="Interactive LED Display with touch capabilities"
                productName="Interactive LED Display"
                productSpecs="P2.5 • 10-Point Touch • IR Sensors"
                className="lg:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
