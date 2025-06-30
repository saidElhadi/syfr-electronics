import { getArticles } from '@/lib/api';
import { Link } from '@/i18n/routing';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SyFr Electronics Blog - Latest Electronics News & Tutorials',
  description: 'Stay updated with the latest electronics trends, product reviews, tutorials, and industry insights from SyFr Electronics.',
};

// Featured article card component
function FeaturedArticleCard({ article }: { article: any }) {
  return (
    <article className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          {article.featuredImage ? (
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold rounded-full">
              {article.category || 'Featured'}
            </span>
            <span className="text-sm text-slate-500 dark:text-gray-400">
              {new Date(article.publishedAt || article.created_at).toLocaleDateString()}
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
            <Link href={`/blog/${article.slug}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              {article.title}
            </Link>
          </h2>
          
          <p className="text-slate-600 dark:text-gray-300 mb-6 text-lg leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
          
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.slice(0, 3).map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full text-xs text-slate-700 dark:text-gray-300 border border-slate-200/20 dark:border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <Link 
            href={`/blog/${article.slug}`}
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group/link"
          >
            Read More
            <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

// Regular article card component
function ArticleCard({ article }: { article: any }) {
  return (
    <article className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        {article.featuredImage ? (
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
            <svg className="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded">
            {article.category || 'Article'}
          </span>
          <span className="text-xs text-slate-500 dark:text-gray-400">
            {new Date(article.publishedAt || article.created_at).toLocaleDateString()}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white leading-tight">
          <Link href={`/blog/${article.slug}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            {article.title}
          </Link>
        </h3>
        
        <p className="text-slate-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
        
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 2).map((tag: string) => (
              <span key={tag} className="px-2 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <Link 
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors text-sm group/link"
        >
          Read Article
          <svg className="w-3 h-3 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default async function Blog() {
  try {
    // Get all published articles
    const articlesResponse = await getArticles({
      status: 'published',
      sortBy: 'published_at',
      sortOrder: 'desc',
      limit: 50
    });

    const articles = Array.isArray(articlesResponse) 
      ? articlesResponse 
      : (articlesResponse.data || []);

    // Get featured article (first one)
    const featuredArticle = articles[0];
    const regularArticles = articles.slice(1);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm opacity-80">
                <span className="flex items-center gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200/20 dark:border-white/10">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-white">Industry Insights</span>
                </span>
                <span className="flex items-center gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200/20 dark:border-white/10">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-white">Expert Tutorials</span>
                </span>
                <span className="flex items-center gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200/20 dark:border-white/10">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700 dark:text-white">Latest Trends</span>
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                SyFr Electronics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Blog
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Stay updated with the latest electronics trends, product reviews, tutorials, and industry insights from our team of experts
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-slate-200/20 dark:border-white/10">
                  <div className="text-2xl font-bold text-cyan-500">{articles.length}+</div>
                  <div className="text-sm text-slate-600 dark:text-gray-300">Articles</div>
                </div>
                <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-slate-200/20 dark:border-white/10">
                  <div className="text-2xl font-bold text-cyan-500">Weekly</div>
                  <div className="text-sm text-slate-600 dark:text-gray-300">Updates</div>
                </div>
                <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-slate-200/20 dark:border-white/10">
                  <div className="text-2xl font-bold text-cyan-500">Expert</div>
                  <div className="text-sm text-slate-600 dark:text-gray-300">Authors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {articles.length > 0 ? (
              <div className="space-y-16">
                {/* Featured Article */}
                {featuredArticle && (
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Article</h2>
                    </div>
                    <FeaturedArticleCard article={featuredArticle} />
                  </div>
                )}
                
                {/* Regular Articles Grid */}
                {regularArticles.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Latest Articles ({regularArticles.length})
                      </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {regularArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    No Articles Yet
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400">
                    We're working on bringing you the latest electronics insights. Check back soon!
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error fetching articles:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                SyFr Electronics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Blog
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Stay updated with the latest electronics trends, product reviews, tutorials, and industry insights
              </p>
            </div>
          </div>
        </section>
        
        {/* Error Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Unable to Load Articles
                </h3>
                <p className="text-slate-600 dark:text-gray-400 mb-6">
                  We're experiencing technical difficulties. Please try again later.
                </p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
