import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flexible LED Displays | SyFr Electronics',
  description: 'Innovative flexible LED displays that bend and curve to fit any design. Perfect for creative installations and unique architectural requirements.',
};

export default function FlexibleLEDDisplaysPage() {
  const t = useTranslations('categories.flexible');
  const common = useTranslations('categories.common');

  const products = [
    {
      id: '3',
      name: 'Curved LED Display Panel',
      description: 'Seamlessly curved LED panels that create immersive viewing experiences.',
      image: '/assets/curved-led-display.jpg',
      features: ['Bendable Design', 'Seamless Connection', 'P3.91 Pixel Pitch', 'Lightweight']
    },
    {
      id: '4',
      name: 'Flexible LED Strip Display',
      description: 'Ultra-flexible LED strips perfect for creative and architectural applications.',
      image: '/assets/curved-led-display-done.png',
      features: ['360° Bendable', 'Cuttable Lengths', 'IP67 Rating', 'Easy Installation']
    }
  ];

  const applications = [
    t('applications.retail'),
    t('applications.architectural'),
    t('applications.creative'),
    t('applications.column'),
    t('applications.cylindrical'),
    t('applications.wave')
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
                  <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.flexibility')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.seamlessCurves')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.creativeFreedom')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
                  <span className="text-gray-700 dark:text-gray-300">{t('features.lightweightDesign')}</span>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="/assets/curved-led-display.jpg"
                alt={t('pageTitle')}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-lg dark:shadow-gray-900/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('applicationsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="flex items-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <span className="w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></span>
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
                          <span className="w-1 h-1 bg-purple-500 dark:bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-block bg-purple-600 dark:bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
                  >
                    {common('viewDetails')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-purple-100 dark:text-purple-50 mb-6">
            {t('ctaDescription')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-600 dark:text-purple-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
