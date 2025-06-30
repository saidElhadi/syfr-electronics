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
                    <div className="flex flex-col lg:flex-col items-center gap-8">

                        {/* Title and Tags */}
                        <div className="lg:w-fit mx-auto space-y-6">
                            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                {t('productCategories.standard.title')}
                            </h2>

                            <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 rounded-lg font-semibold">Standard Displays</span>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 rounded-lg font-medium">P1.25-P10</span>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 rounded-lg font-medium">IP65/IP54</span>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 rounded-lg font-medium">4K/8K</span>
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-4 py-2 rounded-lg font-medium">High Brightness</span>
                            </div>
                        </div>

                        {/* Image */}
                        <ProductDisplayCard
                            gradientFrom="from-blue-100"
                            gradientTo="to-cyan-100 dark:from-blue-800/50 dark:to-cyan-800/50"
                            image={standardLedImage}
                            imageAlt="Standard LED Display"
                            productName="P4 Outdoor LED Display"
                            productSpecs="IP65 • 6000 nits • 4K Ready"
                            className="w-full "
                        />

                        {/* Description and CTAs */}
                        <div className={`flex flex-col sm:flex-row w-full items-center space-y-6 mt-8 lg:mt-0 relative z-10 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                            <p className={`sm:w-3/5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
                                {t('productCategories.standard.description')}
                            </p>

                            <div className="sm:w-2/5 flex flex-col gap-4">
                                <Link
                                    href="/products?category=standard-panels"
                                    className={`inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    {t('productCategories.standard.cta')}
                                    <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300"
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
