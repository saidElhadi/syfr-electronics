"use client"
import { useDirection } from '@/hooks/useDirection';
import { contactInfo } from '@/data/contact';

export default function Contact() {
  const { isRTL } = useDirection();
  
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>
          
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className={`font-medium ${isRTL ? 'text-right' : 'text-left'}`}>Address</h3>
                <p className={`text-gray-600 dark:text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {contactInfo.address.street}<br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.postalCode}
                </p>
              </div>
              
              <div>
                <h3 className={`font-medium ${isRTL ? 'text-right' : 'text-left'}`}>Phone</h3>
                <p className={`text-gray-600 dark:text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {contactInfo.phoneFormatted}
                </p>
              </div>
              
              <div>
                <h3 className={`font-medium ${isRTL ? 'text-right' : 'text-left'}`}>Email</h3>
                <p className={`text-gray-600 dark:text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {contactInfo.email}
                </p>
              </div>
              
              <div>
                <h3 className={`font-medium ${isRTL ? 'text-right' : 'text-left'}`}>Business Hours</h3>
                <p className={`text-gray-600 dark:text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {contactInfo.businessHours.weekdays}<br />
                  {contactInfo.businessHours.saturday}<br />
                  {contactInfo.businessHours.sunday}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
