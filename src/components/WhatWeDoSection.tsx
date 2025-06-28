"use client"
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { useDirection } from '@/hooks/useDirection';

export default function WhatWeDoSection() {
  const t = useTranslations('homepage.whatWeDo');
  const { isRTL } = useDirection();

  const advantages = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: t('advantages.items.pricing.title'),
      description: t('advantages.items.pricing.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: t('advantages.items.supplyChain.title'),
      description: t('advantages.items.supplyChain.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('advantages.items.quality.title'),
      description: t('advantages.items.quality.description')
    }
  ];

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
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              {t('advantages.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                    {advantage.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{t('cta.title')}</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'justify-center sm:justify-end' : 'justify-center'}`}>
                <a 
                  href="/products"
                  className={`inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('cta.primaryButton')}
                  <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  {t('cta.secondaryButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
