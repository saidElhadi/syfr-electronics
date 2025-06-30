"use client"
import { useState } from 'react';
import { useDirection } from '@/hooks/useDirection';
import { contactInfo } from '@/data/contact';
import { sendEmail, countryCodes } from '@/lib/emailjs';

export default function Contact() {
  const { isRTL } = useDirection();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    countryCode: '+1',
    phoneNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const fullPhoneNumber = formData.phoneNumber ? `${formData.countryCode}${formData.phoneNumber}` : '';
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.title,
        phone_number: fullPhoneNumber,
        message: formData.message,
        to_name: contactInfo.company,
      };

      const result = await sendEmail(templateParams);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', title: '', countryCode: '+1', phoneNumber: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className={`text-2xl font-semibold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>Get in Touch</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg">
                <p className="text-green-800 dark:text-green-200">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-lg">
                <p className="text-red-800 dark:text-red-200">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Name or Company Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="Your Name or Company Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="title" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Subject/Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="Subject of your inquiry"
                />
              </div>

              {/* Phone Number with Country Code */}
              <div>
                <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Phone Number (Optional)
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className={`px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'} min-w-[120px]`}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} ({country.country})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                    placeholder="123456789"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                  placeholder="Additional details or questions..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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
