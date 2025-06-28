"use client"
import { useTranslations } from 'next-intl';

interface AdvantageItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function AdvantagesSection() {
    const t = useTranslations('homepage.whatWeDo');

    const advantages: AdvantageItem[] = [
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
    );
}
