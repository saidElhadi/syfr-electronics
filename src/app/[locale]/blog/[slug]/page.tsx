import { getArticleBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing'
import Image from 'next/image';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const articleResponse = await getArticleBySlug(slug);
    console.log(articleResponse);

    const article = Array.isArray(articleResponse.data) 
      ? articleResponse.data[0] 
      : articleResponse.data;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-3 text-sm text-slate-500 dark:text-gray-400 mb-8">
                <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/blog" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-slate-700 dark:text-gray-300">{article.title}</span>
              </nav>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                  {article.category || 'Article'}
                </span>
                <span className="text-sm text-slate-600 dark:text-gray-400">
                  {new Date(article.publishedAt || article.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                {article.author_name && (
                  <span className="text-sm text-slate-600 dark:text-gray-400">
                    By {article.author_name}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
                {article.title}
              </h1>

              {/* Excerpt */}
              {article.excerpt && (
                <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {article.excerpt}
                </p>
              )}

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-8">
                  {article.tags.map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-full text-sm text-slate-700 dark:text-gray-300 border border-slate-200/20 dark:border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {article.featured_image_url && (
          <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className=" mx-auto">
                <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={article.featured_image_url}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" mx-auto">
              <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12 border border-slate-200/50 dark:border-slate-700/50">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:text-slate-900 dark:prose-headings:text-white 
                    prose-headings:font-bold prose-headings:leading-tight
                    prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                    prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-cyan-600 dark:prose-h2:text-cyan-400
                    prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                    prose-p:text-slate-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
                    prose-ul:my-6 prose-ol:my-6
                    prose-li:text-slate-700 dark:prose-li:text-gray-300 prose-li:mb-2 prose-li:leading-relaxed
                    prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-700/50 
                    prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
                    prose-blockquote:text-slate-700 dark:prose-blockquote:text-gray-300 prose-blockquote:not-italic
                    prose-code:bg-slate-100 dark:prose-code:bg-slate-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                    prose-code:text-cyan-600 dark:prose-code:text-cyan-400 prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-slate-900 dark:prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-200 dark:prose-pre:border-slate-700
                    prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6 prose-pre:overflow-x-auto
                    prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
                    prose-table:my-8 prose-table:border-collapse
                    prose-th:bg-slate-100 dark:prose-th:bg-slate-700 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold
                    prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-slate-200 dark:prose-td:border-slate-600
                    prose-hr:border-slate-200 dark:prose-hr:border-slate-700 prose-hr:my-12"
                  dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />
              </article>

              {/* Article Footer */}
              <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Enjoyed this article?
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-6">
                    Explore more electronics insights and tutorials on our blog, or get in touch for custom LED display solutions.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/blog"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-200 dark:border-slate-600"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      More Articles
                    </Link>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                    >
                      Contact Us
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
