'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

// Import all-in-one LED display images
import allInOneLedImage from '@/assets/allinone-led.png';
import layerCopyImage from '@/assets/Layer 0 copy.png';

export default function AllInOneLEDDisplaysPage() {
  const t = useTranslations('categories.allinone');
  const common = useTranslations('categories.common');

  const products = [
    {
      id: '5',
      name: 'Interactive Touch Kiosk',
      description: 'Complete interactive kiosk solution with touch capability and integrated computing.',
      image: allInOneLedImage,
      features: ['Multi-touch Display', 'Built-in PC', 'Android OS', 'Custom Software']
    },
    {
      id: '6',
      name: 'Standalone Digital Poster',
      description: 'Self-contained digital signage solution with media player and remote management.',
      image: layerCopyImage,
      features: ['Built-in Media Player', 'Remote Control', 'Auto-scheduling', 'Cloud Management']
    }
  ];

  const features = [
    {
      title: t('featuresList.plugPlay.title'),
      description: t('featuresList.plugPlay.description'),
      icon: '🔌'
    },
    {
      title: t('featuresList.integratedComputing.title'),
      description: t('featuresList.integratedComputing.description'),
      icon: '💻'
    },
    {
      title: t('featuresList.touchCapability.title'),
      description: t('featuresList.touchCapability.description'),
      icon: '👆'
    },
    {
      title: t('featuresList.remoteManagement.title'),
      description: t('featuresList.remoteManagement.description'),
      icon: '🌐'
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
                  <span className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.integratedHardware')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.touchInteractive')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.plugPlay')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.remoteManagement')}</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <Image
                src={allInOneLedImage}
                alt={t('pageTitle')}
                fill
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={70}
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg dark:shadow-gray-900/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('whyChooseTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{common('featuredProducts')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          <span className="w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block bg-orange-600 dark:bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors"
                  >
                    {common('viewDetails')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg dark:shadow-gray-900/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('industriesTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Retail', 'Healthcare', 'Hospitality', 'Education', 'Corporate', 'Transportation', 'Government', 'Entertainment'].map((industry, index) => (
              <div key={index} className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-orange-100 dark:text-orange-50 mb-6">
            {t('ctaDescription')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 dark:text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
