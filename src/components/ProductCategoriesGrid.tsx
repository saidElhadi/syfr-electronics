"use client"
import { useTranslations } from 'next-intl';
import ProductCategoryCard from '@/components/ProductCategoryCard';

export default function ProductCategoriesGrid() {
  const t = useTranslations('homepage');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1 mb-12 h-[90vh] rounded-2xl p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">

        {/* All-in-One - 1x1 */}
        <ProductCategoryCard
          title={t('productCategories.allInOne.title')}
          description={t('productCategories.allInOne.description')}
          cta={t('productCategories.allInOne.cta')}
          href="/products?category=all-in-one"
          gradientFrom="from-orange-500"
          gradientTo="to-red-600"
          badge="All-in-One"
          tags={['Plug & Play', 'Portable', 'Wi-Fi']}
          tagColor="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
          className="col-span-1 md:col-span-1 lg:col-span-2 row-span-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          icon={
            <svg className="w-14 h-14 lg:w-16 lg:h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          }
        />

        <ProductCategoryCard
          title={t('productCategories.standard.title')}
          description={t('productCategories.standard.description')}
          cta={t('productCategories.standard.cta')}
          href="/products?category=standard-panels"
          gradientFrom="from-blue-500"
          gradientTo="to-cyan-600"
          badge="Standard"
          tags={['P1.25-P10', 'IP65/IP54', '4K/8K']}
          tagColor="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
          className="col-span-1 md:col-span-2 lg:col-span-3 row-span-3 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          icon={
            <svg className="w-16 h-16 lg:w-20 lg:h-20 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
        {/* XR/VP - Tall 1x2 */}
        <ProductCategoryCard
          title={t('productCategories.xrVp.title')}
          description={t('productCategories.xrVp.description')}
          cta={t('productCategories.xrVp.cta')}
          href="/products?category=xr-virtual-production"
          gradientFrom="from-indigo-500"
          gradientTo="to-purple-600"
          badge="XR/VP"
          tags={['HDR', 'High Refresh', 'Color Accuracy']}
          tagColor="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
          className="col-span-3 row-span-3 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          icon={
            <svg className="w-16 h-16 lg:w-20 lg:h-20 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          }
        />




        {/* Transparent LED - 1x1 */}
        <ProductCategoryCard
          title={t('productCategories.transparent.title')}
          description={t('productCategories.transparent.description')}
          cta={t('productCategories.transparent.cta')}
          href="/products?category=transparent-led"
          gradientFrom="from-purple-500"
          gradientTo="to-pink-600"
          badge="Transparent"
          tags={['Transparent', 'Light']}
          tagColor="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
          className="col-span-1 row-span-1 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          icon={
            <svg className="w-14 h-14 lg:w-16 lg:h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          }
        />

        {/* Flexible LED - Wide 2x1 */}
        <ProductCategoryCard
          title={t('productCategories.flexible.title')}
          description={t('productCategories.flexible.description')}
          cta={t('productCategories.flexible.cta')}
          href="/products?category=flexible-led"
          gradientFrom="from-green-500"
          gradientTo="to-teal-600"
          badge="Flexible"
          tags={['Bend', '360°']}
          tagColor="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
          className="col-span-2 row-span-1 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
          icon={
            <svg className="w-14 h-14 lg:w-16 lg:h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
            </svg>
          }
        />



      </div>
    </div>
  );
}
