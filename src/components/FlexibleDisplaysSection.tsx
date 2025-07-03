"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useDirection } from '@/hooks/useDirection';
import flexibleDisplayImageWhite from '@/assets/flexible-display.jpg';
import Image from 'next/image';

export default function FlexibleDisplaysSection() {
    const t = useTranslations('homepage');
    const { isRTL } = useDirection();

    return (
        <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className={`flex flex-col my-auto aspect-[3/2] gap-12 items-center ${isRTL ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

                        {/* Visual Side */}
                        <div className="relative lg:w-1/3 h-full aspect-auto flex flex-row items-center">
                            <Image src={flexibleDisplayImageWhite} alt="Flexible LED Display" className="w-full h-auto aspect-auto" fill/>
                        </div>

                        {/* Content Side */}
                        <div className="lg:w-2/3 space-y-6">

                            <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                {t('productCategories.flexible.title')}
                            </h2>

                            <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                {t('productCategories.flexible.description')}
                            </p>

                            <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'}`}>
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-semibold text-sm px-4 py-2 rounded-lg">Flexible Displays</span>
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-4 py-2 rounded-lg font-medium">Curved</span>
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-4 py-2 rounded-lg font-medium">360°</span>
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-4 py-2 rounded-lg font-medium">Bendable</span>
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-4 py-2 rounded-lg font-medium">Creative</span>
                            </div>

                            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:justify-end' : 'sm:justify-start'}`}>
                                <Link
                                    href="/products?category=flexible-led"
                                    className={`inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm font-semibold px-8 py-4 rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    {t('productCategories.flexible.cta')}
                                    <svg className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2 rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center border-2 border-green-500 text-green-600 dark:text-green-400 text-sm font-semibold px-8 py-4 rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
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
