'use client';

import { getArticleBySlug } from "@/lib/api";
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface IndustryProps {
  params: Promise<{ slug: string }>;
}

const page = ({ params }: IndustryProps) => {
    const [industry, setIndustry] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchIndustry = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const { slug } = await params;
                const industryData = await getArticleBySlug(slug);
                const industryInfo = Array.isArray(industryData.data)
                    ? industryData.data[0]
                    : industryData.data;

                if (!industryInfo) {
                    setError('Industry information not found');
                    return;
                }

                console.log(industryData);
                setIndustry(industryInfo);
            } catch (err) {
                console.error('Error fetching industry:', err);
                setError('Failed to load industry information');
            } finally {
                setLoading(false);
            }
        };

        fetchIndustry();
    }, [params]);

    if (loading) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-900">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                        <p className="text-lg text-slate-600 dark:text-gray-300">Loading industry information...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !industry) {
        return (
            <div className="min-h-screen bg-white dark:bg-slate-900">
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="text-6xl mb-4">😕</div>
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            {error || 'Industry Information Not Found'}
                        </h1>
                        <p className="text-slate-600 dark:text-gray-300 mb-6">
                            The industry information you're looking for doesn't exist or couldn't be loaded.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button 
                                onClick={() => router.back()}
                                className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300"
                            >
                                Go Back
                            </button>
                            <Link 
                                href="/industries"
                                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                            >
                                Browse Industries
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
            <div className="min-h-screen bg-white dark:bg-slate-900">
                {/* Hero Banner with Featured Image */}
                <section className="relative h-[30vh] min-h-[300px] overflow-hidden">
                    {industry.featured_image_url ? (
                        <Image
                            src={industry.featured_image_url}
                            alt={industry.title}
                            fill
                            className="object-cover"
                            sizes="70vw"
                            priority
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900" />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <div className="max-w-4xl">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-3 text-sm text-white/80 mb-6">
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                <Link href="/industries" className="hover:text-white transition-colors">
                                    Industries
                                </Link>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                <span className="text-white">{industry.title}</span>
                            </nav>

                            {/* Industry Category Badge */}
                            <div className="mb-6">
                                <span className="inline-flex items-center px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-lg border border-blue-500/20">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h2M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                    Industry Solutions
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                                {industry.title}
                            </h1>

                            {/* Excerpt */}
                            {industry.excerpt && (
                                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                                    {industry.excerpt}
                                </p>
                            )}

                            {/* CTA Button */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Get Industry Solutions
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 border border-white/20"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto">
                            {/* Industry Overview */}
                            <div className="mb-16">
                                <div className="grid lg:grid-cols-3 gap-12">
                                    {/* Content Column */}
                                    <div className="lg:col-span-2">
                                        <div className="prose prose-lg max-w-none
                                            prose-headings:text-slate-900 dark:prose-headings:text-white 
                                            prose-headings:font-bold prose-headings:leading-tight
                                            prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-0
                                            prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-12 prose-h2:text-blue-600 dark:prose-h2:text-blue-400
                                            prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-8
                                            prose-p:text-slate-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                                            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                                            prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
                                            prose-ul:my-6 prose-ol:my-6 prose-ul:space-y-2 prose-ol:space-y-2
                                            prose-li:text-slate-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed
                                            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 
                                            prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
                                            prose-blockquote:text-slate-700 dark:prose-blockquote:text-gray-300
                                            prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
                                            prose-table:border-collapse prose-table:w-full
                                            prose-th:bg-slate-100 dark:prose-th:bg-slate-700 prose-th:px-4 prose-th:py-3 prose-th:text-left
                                            prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-slate-200 dark:prose-td:border-slate-600"
                                            dangerouslySetInnerHTML={{ __html: industry.content || '' }}
                                        />
                                    </div>

                                    {/* Sidebar */}
                                    <div className="lg:col-span-1">
                                        <div className="sticky top-8 space-y-8">
                                            {/* Key Benefits */}
                                            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Key Benefits
                                                </h3>
                                                <ul className="space-y-3 text-sm text-slate-600 dark:text-gray-300">
                                                    <li className="flex items-start gap-2">
                                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        High-quality LED displays
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Custom solutions
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Expert support
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Competitive pricing
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Contact CTA */}
                                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                                                <h3 className="text-lg font-bold mb-3">Ready to Transform Your Industry?</h3>
                                                <p className="text-blue-100 mb-4 text-sm">
                                                    Get expert consultation and custom LED display solutions tailored to your industry needs.
                                                </p>
                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm w-full justify-center"
                                                >
                                                    Contact Us Today
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </Link>
                                            </div>

                                            {/* Tags */}
                                            {industry.tags && industry.tags.length > 0 && (
                                                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Related Topics</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {industry.tags.map((tag: string) => (
                                                            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-gray-300 text-sm rounded-lg">
                                                                #{tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Related Industries or Call to Action */}
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700">
                                <div className="text-center max-w-3xl mx-auto">
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                        Need Custom LED Solutions for Your Industry?
                                    </h2>
                                    <p className="text-slate-600 dark:text-gray-300 mb-8 text-lg">
                                        Our team of experts can design and implement LED display solutions specifically tailored to your industry requirements and business objectives.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                        >
                                            Get Quote
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href="/featured-projects"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600"
                                        >
                                            View Case Studies
                                        </Link>
                                        <Link
                                            href="/industries"
                                            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg transition-all duration-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600"
                                        >
                                            All Industries
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
}

export default page;