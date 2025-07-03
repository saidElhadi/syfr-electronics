"use client"
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { useDirection } from '@/hooks/useDirection';

// Import LED display category images
import allinonImg from "@/assets/allinone-led.png";
import flexibleImg from "@/assets/curved-led-display.jpg";
import standardImg from "@/assets/entertainment.webp";
import virtualProductionImg from "@/assets/virtualset.jpg";


// export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
//     const t = await getTranslations({ locale: params.locale, namespace: 'categories' });
    
//     return {
//         title: t('title'),
//         description: t('subtitle'),
//     };
// }

export default function CategoriesPage() {
    const t = useTranslations('categories');
    const common = useTranslations('common');
    const { isRTL } = useDirection();
    const categories = [
        {
            slug: 'standard-led-displays-indoor-outdoor',
            title: t('standard.title'),
            description: t('standard.description'),
            image: standardImg
        },
        {
            slug: 'flexible-led-displays',
            title: t('flexible.title'),
            description: t('flexible.description'),
            image: flexibleImg
        },
        {
            slug: 'all-in-one-led-displays-kiosks',
            title: t('allinone.title'),
            description: t('allinone.description'),
            image: allinonImg
        },
        {
            slug: 'virtual-production-led-displays',
            title: t('virtualproduction.title'),
            description: t('virtualproduction.description'),
            image: virtualProductionImg
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className={`flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">{common('breadcrumbs.home')}</Link></li>
                        <li>/</li>
                        <li><Link href="/categories" className="hover:text-blue-600 dark:hover:text-blue-400">{common('breadcrumbs.categories')}</Link></li>
                    </ol>
                </nav>
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/categories/${category.slug}`}
                            className="group bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-gray-900/30 transition-shadow duration-300"
                        >
                            <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={`${category.title} - ${category.description}`}
                                    fill
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    priority={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {category.title}
                                </h2>
                                <p className={`text-gray-600 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {category.description}
                                </p>
                                <div className={`mt-4 text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                                    {t('exploreCategory')} {isRTL ? '←' : '→'}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
