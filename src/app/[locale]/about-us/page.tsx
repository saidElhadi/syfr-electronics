export default function AboutUs() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="space-y-6">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              SyFr Electronics has been at the forefront of electronic innovation for over a decade. 
              We are committed to providing high-quality electronic products and solutions that meet 
              the evolving needs of our customers.
            </p>
          </section>
          
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To deliver cutting-edge electronic solutions that enhance lives and drive technological 
              advancement, while maintaining the highest standards of quality and customer service.
            </p>
          </section>
          
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Innovation and Excellence</li>
              <li>• Customer-Centric Approach</li>
              <li>• Quality and Reliability</li>
              <li>• Sustainable Practices</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
