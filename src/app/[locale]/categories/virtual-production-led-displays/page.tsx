import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Virtual Production LED Displays | SyFr Electronics',
  description: 'Professional-grade LED walls designed specifically for virtual production, XR applications, and film studios with ultra-low latency and perfect color accuracy.',
};

export default function VirtualProductionLEDDisplaysPage() {
  const t = useTranslations('categories.virtualproduction');
  const common = useTranslations('categories.common');

  const products = [
    {
      id: '7',
      name: 'VP Series LED Wall',
      description: 'Professional virtual production LED wall with ultra-low latency and perfect color reproduction.',
      image: '/assets/virtualset.jpg',
      features: ['Ultra-low Latency', 'High Refresh Rate', 'Color Accurate', 'Genlock Support']
    },
    {
      id: '8',
      name: 'XR Studio LED Panel',
      description: 'Specialized LED panels for extended reality applications and immersive environments.',
      image: '/assets/virtualset.jpg',
      features: ['XR Optimized', 'Camera Tracking', 'Real-time Rendering', 'Seamless Tiles']
    }
  ];

  const specifications = [
    {
      title: t('specifications.latency.title'),
      value: t('specifications.latency.value'),
      description: t('specifications.latency.description')
    },
    {
      title: t('specifications.refreshRate.title'),
      value: t('specifications.refreshRate.value'),
      description: t('specifications.refreshRate.description')
    },
    {
      title: t('specifications.colorAccuracy.title'),
      value: t('specifications.colorAccuracy.value'),
      description: t('specifications.colorAccuracy.description')
    },
    {
      title: t('specifications.brightnessControl.title'),
      value: t('specifications.brightnessControl.value'),
      description: t('specifications.brightnessControl.description')
    }
  ];

  const applications = [
    t('applications.film'),
    t('applications.broadcast'),
    t('applications.xr'),
    t('applications.virtualEvents'),
    t('applications.training'),
    t('applications.product')
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
                  <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.ultraLowLatency')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.cinemaQuality')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.cameraOptimized')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.realtimeRendering')}</span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="/assets/virtualset.jpg"
                alt={t('pageTitle')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg dark:shadow-gray-900/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{t('specificationsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{spec.title}</h3>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">{spec.value}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg dark:shadow-gray-900/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('applicationsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full mr-3"></span>
                <span className="text-gray-700 dark:text-gray-300">{application}</span>
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
                <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
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
                          <span className="w-1 h-1 bg-red-500 dark:bg-red-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block bg-red-600 dark:bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 dark:hover:bg-red-600 transition-colors"
                  >
                    {common('viewDetails')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Features Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">{t('technicalTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('technicalFeatures.cameraOptimization.title')}</h3>
              <p className="text-gray-300 dark:text-gray-200 mb-4">
                {t('technicalFeatures.cameraOptimization.description')}
              </p>
              <ul className="text-gray-300 dark:text-gray-200 space-y-2">
                <li>• High refresh rates (up to 7680Hz)</li>
                <li>• Anti-moiré technology</li>
                <li>• Professional color spaces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('technicalFeatures.realtimePerformance.title')}</h3>
              <p className="text-gray-300 dark:text-gray-200 mb-4">
                {t('technicalFeatures.realtimePerformance.description')}
              </p>
              <ul className="text-gray-300 dark:text-gray-200 space-y-2">
                <li>• Sub-millisecond latency</li>
                <li>• Genlock synchronization</li>
                <li>• Frame-accurate timing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-500 dark:to-pink-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-red-100 dark:text-red-50 mb-6">
            {t('ctaDescription')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 dark:text-red-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
