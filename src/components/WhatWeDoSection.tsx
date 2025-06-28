"use client"
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { useDirection } from '@/hooks/useDirection';
import { Link } from '@/i18n/routing';

export default function WhatWeDoSection() {
    const t = useTranslations('homepage.whatWeDo');
    const { isRTL } = useDirection();

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Main Content */}
                    <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>

                        {/* Left Side - What We Do */}
                        <div className={isRTL ? 'lg:col-start-2' : ''}>
                            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                {t('title')}
                            </h2>
                            <div className="space-y-6">
                                <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                    {t('description1Start')}
                                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                                        {t('description1Highlight')}
                                    </span>
                                    {t('description1End')}
                                </p>
                                <p className={`text-lg text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
                                    {t('description2Start')}
                                    <span className="font-semibold text-green-600 dark:text-green-400">
                                        {t('description2Highlight')}
                                    </span>
                                    {t('description2End')}
                                </p>
                                <div className={`bg-blue-50 dark:bg-blue-900/20 ${isRTL ? 'border-r-4 border-blue-500 rounded-l-lg' : 'border-l-4 border-blue-500 rounded-r-lg'} p-6`}>
                                    <p className={`text-blue-800 dark:text-blue-200 font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
                                        {t('callout')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Supply Chain Visual */}
                        <div className={`relative ${isRTL ? 'lg:col-start-1' : ''}`}>
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white">
                                <div className={`text-center mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-2xl font-bold mb-2">{t('supplyChain.title')}</h3>
                                    <p className="text-blue-100">{t('supplyChain.subtitle')}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <span>{t('supplyChain.features.manufacturers')}</span>
                                    </div>
                                    <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        <span>{t('supplyChain.features.pricing')}</span>
                                    </div>
                                    <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                        <span>{t('supplyChain.features.quality')}</span>
                                    </div>
                                    <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                                        <span>{t('supplyChain.features.shipping')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Advantages Grid */}


                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">{t('cta.title')}</h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                {t('cta.description')}
                            </p>
                            <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'justify-center sm:justify-end' : 'justify-center'}`}>
                                <Link
                                    href="/products"
                                    className={`inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    {t('cta.primaryButton')}
                                    <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                                >
                                    {t('cta.secondaryButton')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
