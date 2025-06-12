export default function HomeRoute() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Welcome to SyFr Electronics</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted partner for innovative electronic solutions. Discover our comprehensive 
            range of products and services designed to meet all your electronic needs.
          </p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">High Performance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Cutting-edge electronic products designed for optimal performance and reliability.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Professional technical support and consultation for all your electronic projects.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay ahead with our latest innovations and breakthrough electronic technologies.
            </p>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Explore our products and discover how SyFr Electronics can power your next project.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              View Products
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
