"use client"
import { useTranslations } from 'next-intl';

export default function TrustSignalsFooter() {
  const t = useTranslations('homepage');

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">{t('trustSignals.projects.description')}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">{t('trustSignals.experience.description')}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">ISO 9001</div>
            <div className="text-gray-600 dark:text-gray-300">{t('trustSignals.certification.description')}</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">{t('trustSignals.support.description')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
