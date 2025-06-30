"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductDisplayCard from './ProductDisplayCard';
import { useDirection } from '@/hooks/useDirection';
import xrVpImage from '@/assets/virtualset.jpg';

export default function XRVirtualProductionSection() {
    const t = useTranslations('homepage');
    const { isRTL } = useDirection();

    return (
        <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-col items-center gap-8">

                        {/* Title and Tags */}
                        <div className="lg:w-fit mx-auto space-y-6">
                            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                {t('productCategories.xrVp.title')}
                            </h2>

                            <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
                                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-4 py-2 rounded-lg font-semibold"> XR/Virtual Production</span>
                                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-4 py-2 rounded-lg font-medium">HDR</span>
                                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-4 py-2 rounded-lg font-medium">High Refresh</span>
                                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-4 py-2 rounded-lg font-medium">Color Accuracy</span>
                                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm px-4 py-2 rounded-lg font-medium">Studio Grade</span>
                            </div>
                        </div>

                        {/* Image */}
                        {/* <div className="border border-red-500 w-full flex justify-center"> */}
                            <ProductDisplayCard
                                gradientFrom="from-indigo-100"
                                gradientTo="to-purple-100 dark:from-indigo-800/50 dark:to-purple-800/50"
                                image={xrVpImage}
                                imageAlt="XR/Virtual Production LED Wall setup in studio environment"
                                productName="XR/VP LED Wall"
                                productSpecs="P1.9 • 3840Hz • Rec.2020 • HDR10"
                                className="w-full "
                            />
                        {/* </div> */}


                        {/* Description and CTAs */}
                        <div className={`flex flex-col sm:flex-row w-full items-center space-y-6 mt-8 lg:mt-0 relative z-10 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                            <p className={`sm:w-3/5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-center sm:text-right' : 'text-center sm:text-left'}`}>
                                {t('productCategories.xrVp.description')}
                            </p>

                            <div className="sm:w-2/5 flex flex-col gap-4">
                                <Link 
                                    href="/products?category=xr-virtual-production"
                                    className={`inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    {t('productCategories.xrVp.cta')}
                                    <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link 
                                    href="/contact"
                                    className="inline-flex items-center justify-center border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
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
