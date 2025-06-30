"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useDirection } from '@/hooks/useDirection';

import heroImg from '@/assets/hero-img.png'

export default function HeroSection() {
  const t = useTranslations('homepage');
  const { isRTL } = useDirection();

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 text-slate-900 dark:text-white py-4 md:py-6 lg:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            {/* Trust Indicators */}
            <div className={`flex flex-wrap ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'} items-center gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8 text-xs sm:text-sm opacity-80 dark:opacity-90`}>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-200/20 dark:border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700 dark:text-white">{t('hero.trustIndicators.experience')}</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-200/20 dark:border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700 dark:text-white">{t('hero.trustIndicators.installations')}</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-200/20 dark:border-white/10">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-700 dark:text-white">{t('hero.trustIndicators.support')}</span>
              </span>
            </div>

            {/* Main Headline - SEO Optimized */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              {t('hero.title').split(' ').slice(0, 1).join(' ')}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-400">
                {t('hero.title').split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Subheading with primary keywords */}
            <h2 className={`text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-200 mb-6 md:mb-8 leading-relaxed ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              {t('hero.subtitle')}
            </h2>

            {/* Value Proposition */}
            <p className={`text-base sm:text-lg text-slate-500 dark:text-gray-300 mb-8 md:mb-10 ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'} max-w-lg lg:max-w-none mx-auto lg:mx-0`}>
              {t('hero.valueProposition')}
            </p>
            {/* Social Proof Numbers */}
            <div className={`grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 ${isRTL ? 'text-center lg:text-right' : 'text-center lg:text-left'}`}>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-200/20 dark:border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500 dark:text-cyan-400">500+</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-300">{t('hero.socialProof.projects')}</div>
              </div>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-200/20 dark:border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500 dark:text-cyan-400">99.9%</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-300">{t('hero.socialProof.uptime')}</div>
              </div>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-slate-200/20 dark:border-white/10">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500 dark:text-cyan-400">48hrs</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-gray-300">{t('hero.socialProof.response')}</div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-2 lg:order-1 flex flex-col gap-3 lg:gap-6">
            <div className="relative w-full h-[500px] mx-auto max-w-lg lg:max-w-none">
              <Image
                src={heroImg}
                alt="Professional LED Display Installation"
                fill
                className="object-cover  rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full h-auto border border-slate-200/20 dark:border-white/10"
                priority
                quality={90}
              />
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
            </div>
            {/* Primary CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'} items-center mb-8 md:mb-12`}>
              <Link
                href="/products"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 dark:from-cyan-600 dark:to-blue-700 dark:hover:from-cyan-700 dark:hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                {t('hero.ctaPrimary')}
                <svg className={`w-4 h-4 sm:w-5 sm:h-5 group-hover:${isRTL ? '-translate-x-1' : 'translate-x-1'} transition-transform ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="group border-2 border-slate-300 dark:border-white text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-white hover:text-slate-900 dark:hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                {t('hero.ctaSecondary')}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.456-5.094A7.963 7.963 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
