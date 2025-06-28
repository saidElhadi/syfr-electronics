"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductDisplayCard from './ProductDisplayCard';
import { useDirection } from '@/hooks/useDirection';
import flexibleDisplayImage from '@/assets/curved-led-display-done.png';
import flexibleDisplayImageWhite from '@/assets/curved-led-display.jpg';
import Image from 'next/image';

export default function FlexibleDisplaysSection() {
    const t = useTranslations('homepage');
    const { isRTL } = useDirection();

    return (
        <section className="bg-gradient-to-bl from-red-50 to-purple-50 dark:from-slate-800/20 dark:to-indigo-900/20">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="relative flex flex-col lg:flex-row items-center gap-12">
                        {/* Visual Side */}
                        <div className="relative w-full h-[672px]">
                            <div className="">
                                <Image 
                                    src={flexibleDisplayImageWhite} 
                                    alt='' 
                                    fill
                                    className="w-full h-auto "
                                />
                                
                                {/* Text overlay positioned in empty spaces */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6">
                                    {/* Top text area */}
                                    <div className={`max-w-xs ${isRTL ? 'mr-auto text-left' : 'ml-auto text-right'}`}>
                                        <h2 className={`text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2 ${isRTL ? 'text-left' : 'text-right'}`}>
                                            {t('productCategories.flexible.title')}
                                        </h2>
                                        <p className={`text-lg text-white drop-shadow-md leading-relaxed ${isRTL ? 'text-left' : 'text-right'}`}>
                                            {t('productCategories.flexible.description')}
                                        </p>
                                    </div>
                                    
                                    {/* Bottom text area */}
                                    <div className={`max-w-xs space-y-4 ${isRTL ? 'mr-auto text-left' : 'ml-auto text-right'}`}>
                                        <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-start' : 'justify-end'}`}>
                                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-semibold text-sm px-3 py-1 rounded-lg">Flexible</span>
                                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-3 py-1 rounded-lg">Curved</span>
                                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm px-3 py-1 rounded-lg">360°</span>
                                        </div>
                                        
                                        <div className="flex flex-col gap-2">
                                            <Link
                                                href="/products?category=flexible-led"
                                                className={`inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                                            >
                                                {t('productCategories.flexible.cta')}
                                                <svg className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 font-semibold px-6 py-3 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 text-sm"
                                            >
                                                Get Quote
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
