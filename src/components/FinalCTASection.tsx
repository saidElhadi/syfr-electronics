"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useDirection } from '@/hooks/useDirection';
import { contactInfo } from '@/data/contact';

export default function FinalCTASection() {
  const t = useTranslations('homepage');
  const { isRTL } = useDirection();

  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('finalCta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('finalCta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/contact"
              className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              {t('finalCta.ctaPrimary')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.456L3 21l2.456-5.094A7.963 7.963 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
            </Link>
            <Link
              href="/products"
              className={`group border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('finalCta.ctaSecondary')}
              <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Emergency Contact */}
          <div className="text-center">
            <p className="text-blue-200 mb-2">{t('finalCta.emergency.text')}</p>
            <a href={`tel:${contactInfo.phone}`} className="text-white font-bold text-xl hover:text-blue-200 transition-colors">
              📞 {contactInfo.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
