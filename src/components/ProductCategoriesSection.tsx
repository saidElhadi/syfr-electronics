"use client"
import { useTranslations } from 'next-intl';
import StandardDisplaysSection from '@/components/StandardDisplaysSection';
import AllInOnePostersSection from '@/components/AllInOnePostersSection';
import FlexibleDisplaysSection from '@/components/FlexibleDisplaysSection';
import TransparentLEDSection from '@/components/TransparentLEDSection';
import XRVirtualProductionSection from '@/components/XRVirtualProductionSection';
import InteractiveLEDSection from '@/components/InteractiveLEDSection';
import ProductCategoriesGrid from '@/components/ProductCategoriesGrid';

export default function ProductCategoriesSection() {
  const t = useTranslations('homepage');

  return (
    <>
      {/* Section Header */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('productCategories.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              {t('productCategories.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Individual Category Sections */}
      <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
          <StandardDisplaysSection />
          <XRVirtualProductionSection />
          <FlexibleDisplaysSection />
          <AllInOnePostersSection />
        </div>
      </div>


      {/* <TransparentLEDSection />
        <InteractiveLEDSection /> */}
      {/* Optional: Full Product Grid */}
      {/* <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Product Range
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our full catalog of LED display solutions
            </p>
          </div>
          <ProductCategoriesGrid />
        </div>
      </section> */}
    </>
  );
}
