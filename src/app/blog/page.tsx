export default function Blog() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">SyFr Electronics Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest electronics trends, product reviews, tutorials, and industry insights
          </p>
        </section>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <article className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Featured</span>
                <span className="mx-2">•</span>
                <span>June 3, 2025</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">The Future of Electronics: Emerging Technologies in 2025</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover the groundbreaking technologies that are reshaping the electronics industry this year, 
                from quantum computing components to advanced IoT sensors.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Read More →
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog?category=tutorials" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="/blog?category=reviews" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Product Reviews
                  </a>
                </li>
                <li>
                  <a href="/blog?category=industry" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Industry News
                  </a>
                </li>
                <li>
                  <a href="/blog?category=tech-tips" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Tech Tips
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                <article className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Essential Tools for Electronics Beginners
                    </a>
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">May 28, 2025</p>
                </article>
                <article className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h4 className="font-semibold mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Understanding Arduino vs Raspberry Pi
                    </a>
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">May 25, 2025</p>
                </article>
                <article>
                  <h4 className="font-semibold mb-2">
                    <a href="#" className="hover:text-blue-600 transition-colors">
                      Top 10 Electronic Components Every Maker Needs
                    </a>
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">May 20, 2025</p>
                </article>
              </div>
            </div>
          </aside>
        </div>

        {/* Blog Posts Grid */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Tutorial • May 30, 2025</div>
                <h3 className="text-xl font-bold mb-3">Building Your First Circuit</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A step-by-step guide to creating your first electronic circuit using basic components.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read More →
                </button>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Review • May 27, 2025</div>
                <h3 className="text-xl font-bold mb-3">Best Multimeters of 2025</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our comprehensive review of the top multimeters for professionals and hobbyists.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read More →
                </button>
              </div>
            </article>

            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Industry • May 24, 2025</div>
                <h3 className="text-xl font-bold mb-3">The Rise of Sustainable Electronics</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  How the electronics industry is embracing eco-friendly practices and materials.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  Read More →
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
