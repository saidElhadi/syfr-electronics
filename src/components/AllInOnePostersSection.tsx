"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductDisplayCard from '@/components/ProductDisplayCard';
import { useDirection } from '@/hooks/useDirection';
// Import your image - replace with your actual image path
import allInOneImage from '@/assets/allinone-led.png';
import Image from 'next/image';

export default function AllInOnePostersSection() {
  const t = useTranslations('homepage');
  const { isRTL } = useDirection();

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col gap-12 items-center ${isRTL ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

            {/* Content Side */}
            <div className="lg:w-2/3 space-y-6">

              <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                {t('productCategories.allInOne.title')}
              </h2>

              <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                {t('productCategories.allInOne.description')}
              </p>

              <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 font-semibold text-sm px-4 py-2 rounded-lg">All-in-One Posters/Kiosks</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm px-4 py-2 rounded-lg font-medium">Plug & Play</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm px-4 py-2 rounded-lg font-medium">Portable</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm px-4 py-2 rounded-lg font-medium">Wi-Fi</span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm px-4 py-2 rounded-lg font-medium">Touch Control</span>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`}>
                <Link
                  href="/products?category=all-in-one"
                  className={`inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-semibold px-8 py-4 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('productCategories.allInOne.cta')}
                  <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-orange-500 text-orange-600 dark:text-orange-400 text-sm font-semibold px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            {/* Uncomment and replace with your actual image import */}
            {/* <ProductDisplayCard
              gradientFrom="from-orange-100 to-red-100"
              gradientTo="dark:from-orange-800/50 dark:to-red-800/50"
              image={allInOneImage}
              imageAlt="All-in-One LED Display"
              productName="P2.5 Poster Display"
              productSpecs="Wi-Fi • 1080p • Touch Ready"
              aspectRatio="portrait"
              className="lg:w-1/3"
              hideBanner
            /> */}
            <div className="relative lg:w-1/3 flex flex-row items-center">
              <Image src={allInOneImage} alt="All-in-One LED Display" className="w-full h-auto aspect-[9/16]" />
              {/* <Image src={allInOneImage} alt="All-in-One LED Display" className="w-full h-auto " /> */}
            </div>
            {/* Temporary placeholder until you add your image */}
            {/* <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-800/50 dark:to-red-800/50 rounded-2xl p-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                    <div className="aspect-[9/16] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Add your All-in-One Display image here</p>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-300">P2.5 Poster Display</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Wi-Fi • 1080p • Touch Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
