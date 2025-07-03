'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

// Import LED display images
import ledModuleImage from '@/assets/led-module.jpg';
import ledPanelImage from '@/assets/led-pannel.jpg';
import outdoorIndoorLedImage from '@/assets/outdoor-indoor-led.png';
import standardDisplayHeroImage from '@/assets/led-pannel.png';

export default function StandardLEDDisplaysPage() {
  const t = useTranslations('categories.standard');
  const common = useTranslations('categories.common');

  const products = [
    {
      id: '1',
      name: 'P2.5 Indoor LED Panel',
      description: 'High-resolution indoor LED panel with 2.5mm pixel pitch for stunning clarity.',
      image: ledModuleImage,
      features: ['2.5mm Pixel Pitch', '1920Hz Refresh Rate', 'Indoor Use', '500x500mm Module']
    },
    {
      id: '2',
      name: 'P4 Outdoor LED Display',
      description: 'Weather-resistant outdoor LED display with high brightness for daylight visibility.',
      image: outdoorIndoorLedImage,
      features: ['4mm Pixel Pitch', 'IP65 Waterproof', 'Outdoor Use', '6000+ Nits Brightness']
    },
    {
      id: '3',
      name: 'Standard LED Panel',
      description: 'Versatile LED panel suitable for various indoor and outdoor applications.',
      image: ledPanelImage,
      features: ['Flexible Installation', 'High Brightness', 'Long Lifespan', 'Energy Efficient']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">{common('breadcrumbs.home')}</Link></li>
            <li>/</li>
            <li><Link href="/categories" className="hover:text-blue-600 dark:hover:text-blue-400">{common('breadcrumbs.categories')}</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{t('pageTitle')}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg dark:shadow-gray-900/20 p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('pageTitle')}
              </h1>
              <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {t('pageSubtitle')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {t('pageDescription')}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.brightness')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.weatherResistant')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.energyEfficient')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.easyInstallation')}</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src={standardDisplayHeroImage}
                alt={t('pageTitle')}
                fill
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{common('featuredProducts')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-gray-900/30 transition-shadow">
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">{common('keyFeatures')}</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    {common('viewDetails')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-blue-100 dark:text-blue-50 mb-6">
            {t('ctaDescription')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 dark:text-blue-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
