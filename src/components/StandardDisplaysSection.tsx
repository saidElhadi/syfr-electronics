"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductDisplayCard from '@/components/ProductDisplayCard';
import { useDirection } from '@/hooks/useDirection';
// Import your image - replace with your actual image path
import standardLedImage from '@/assets/outdoor-indoor-led.png';

export default function StandardDisplaysSection() {
    const t = useTranslations('homepage');
    const { isRTL } = useDirection();

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col-reverse items-center gap-8">

                        {/* Content Side */}
                        <div className="w-full space-y-4">

                            <div className={`grid grid-cols-1 md:grid-cols-4 gap-2 ${isRTL ? 'md:grid-flow-dense' : ''}`}>
                                <h2 className={`md:col-span-3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white ${isRTL ? 'text-center md:text-right md:col-start-1' : 'text-center md:text-left'}`}>
                                    {t('productCategories.standard.title')}
                                </h2>
                                <div className={`md:col-span-1 flex flex-wrap gap-1 ${isRTL ? 'md:col-start-4 justify-center md:justify-end' : 'justify-center md:justify-start'}`}>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold text-sm px-4 py-2 rounded-lg">Standard Displays</span>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-2 rounded-lg font-medium items-center">P1.25-P10</span>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-2 rounded-lg font-medium items-center">IP65/IP54</span>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-2 rounded-lg font-medium items-center">4K/8K</span>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-2 rounded-lg font-medium items-center">High Brightness</span>
                                </div>
                            </div>


                            <div className={`grid grid-cols-1 md:grid-cols-4 gap-2 ${isRTL ? 'md:grid-flow-dense' : ''}`}>
                                <p className={`md:col-span-3 text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-center md:text-right md:col-start-1' : 'text-center md:text-left'}`}>
                                    {t('productCategories.standard.description')}
                                </p>

                                <div className={`flex flex-col gap-4 ${isRTL ? 'md:col-start-4' : ''}`}>
                                    <Link
                                        href="/products?category=standard-panels"
                                        className={`inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-semibold px-8 py-4 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                                    >
                                        {t('productCategories.standard.cta')}
                                        <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center border-2 border-blue-500 text-blue-600 dark:text-blue-400 text-sm font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
                                    >
                                        Get Quote
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Visual Side */}
                        {/* Uncomment and replace with your actual image import */}
                        <ProductDisplayCard
                            gradientFrom="from-blue-100 to-cyan-100"
                            gradientTo="dark:from-blue-800/50 dark:to-cyan-800/50"
                            image={standardLedImage}
                            imageAlt="Standard LED Display"
                            productName="P4 Outdoor LED Display"
                            productSpecs="IP65 • 6000 nits • 4K Ready"
                        />


                    </div>
                </div>
            </div>
        </section>
    );
}
