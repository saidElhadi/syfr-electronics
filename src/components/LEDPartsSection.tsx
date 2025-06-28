"use client"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useDirection } from '@/hooks/useDirection';
import Image from 'next/image';

import ledModule from '@/assets/led-module.jpg'
import ledControl from '@/assets/led-pannel.jpg';
import ledPower from '@/assets/power-supply.webp';
import ledMounting from '@/assets/mounting-hardware.png';

export default function LEDPartsSection() {
  const t = useTranslations('homepage');
  const { isRTL } = useDirection();

  const partsData = [
    {
      id: 'modules',
      image: ledModule,
      titleKey: 'parts.components.modules.title',
      descriptionKey: 'parts.components.modules.description'
    },
    {
      id: 'control',
      image: ledControl,
      titleKey: 'parts.components.control.title',
      descriptionKey: 'parts.components.control.description'
    },
    {
      id: 'power',
      image: ledPower,
      titleKey: 'parts.components.power.title',
      descriptionKey: 'parts.components.power.description'
    },
    {
      id: 'mounting',
      image: ledMounting,
      titleKey: 'parts.components.mounting.title',
      descriptionKey: 'parts.components.mounting.description'
    }
  ];

  return (
    <section className="py-2 pt-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('parts.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('parts.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 mb-16 rounded-xl overflow-hidden">
          {partsData.map((part) => (
            <div key={part.id} className="group cursor-pointer col-span-1 md:col-span-1 lg:col-span-1">
              <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-full">
                {/* Vertical Image */}
                <div className="aspect-[3/4] md:aspect-[3/4] lg:aspect-[3/4] relative ">
                  <Image
                    src={part.image}
                    alt={t(part.titleKey)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Title and Description Container */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 transition-all duration-300">
                  {/* Title - Always visible */}
                  <h3 className="text-lg font-bold mb-2 transition-all duration-300 drop-shadow-md text-shadow-lg" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3), 1px 1px 1px rgba(0,0,0,0.7)'}}>
                    {t(part.titleKey)}
                  </h3>
                  
                  {/* Description - Expands on hover */}
                  <div className="max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-300 ease-out">
                    <p className="text-sm text-gray-200 leading-relaxed drop-shadow-md" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
                      {t(part.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="group cursor-pointer col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/products?category=parts">
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 h-full">
                <div className="aspect-[6/4] md:aspect-[3/4] lg:aspect-[3/4] relative flex flex-col items-center justify-center p-6 text-white">
                  <svg className={`w-12 h-12 mb-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <h3 className="text-lg font-bold text-center mb-2">
                    {t('parts.cta')}
                  </h3>
                  <p className="text-sm text-center text-blue-100">
                    Explore all our LED parts and components
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
