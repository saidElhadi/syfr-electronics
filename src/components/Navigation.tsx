"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useDirection } from '@/hooks/useDirection';
import { contactInfo } from '@/data/contact';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const { isRTL } = useDirection();
  const { direction } = useDirection();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const categories = [
    {
      slug: 'standard-led-displays-indoor-outdoor',
      key: 'standard'
    },
    {
      slug: 'flexible-led-displays', 
      key: 'flexible'
    },
    {
      slug: 'all-in-one-led-displays-kiosks',
      key: 'allinone'
    },
    {
      slug: 'virtual-production-led-displays',
      key: 'virtualproduction'
    }
  ];

  return (
    <nav className={`${isScrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
        : 'bg-white dark:bg-gray-900'
      } border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300 ease-in-out`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-12' : 'h-16'
          }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className={`font-bold text-gray-900 dark:text-white transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'
              }`}>
              {contactInfo.company}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`${isRTL ? 'mr-10 flex items-baseline space-x-reverse space-x-4' : 'ml-10 flex items-baseline space-x-4'}`}>
              <Link
                href={`/${locale}`}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                href={`/${locale}/products`}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('products')}
              </Link>
              
              {/* Categories Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <Link
                  href={`/${locale}/categories`}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  {t('categories')}
                  <svg 
                    className={`${isRTL ? 'mr-1' : 'ml-1'} w-4 h-4 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 ${
                  isCategoriesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                }`}>
                  <div className="py-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/${locale}/categories/${category.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {t(`categoriesDropdown.${category.key}`)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/${locale}/parts`}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('parts')}
              </Link>
              <Link
                href={`/${locale}/about-us`}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('about')}
              </Link>
              <Link
                href={`/${locale}/blog`}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('blog')}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('contact')}
              </Link>

              {/* Language Switcher */}
              <div className={`relative ${isRTL ? 'mr-4' : 'ml-4'}`}>
                <LanguageSwitcher />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 relative">
                <span
                  className={`left-0 absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                    }`}
                />
                <span
                  className={`left-0 absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2.5 ${isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                  className={`left-0 absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-2 pt-2 pb-3 mb-3 space-y-1 sm:px-3 bg-gray-50 dark:bg-gray-800 rounded-lg mt-2">
            <Link
              href={`/${locale}`}
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href={`/${locale}/products`}
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('products')}
            </Link>
            
            {/* Categories Section */}
            <div>
              <Link
                href={`/${locale}/categories`}
                onClick={closeMenu}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {t('categories')}
              </Link>
              
              {/* Categories Submenu */}
              <div className={`${isRTL ? 'mr-4' : 'ml-4'} mt-1 space-y-1`}>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/${locale}/categories/${category.slug}`}
                    onClick={closeMenu}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-1 text-sm transition-colors"
                  >
                    {t(`categoriesDropdown.${category.key}`)}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/parts`}
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('parts')}
            </Link>
            <Link
              href={`/${locale}/about-us`}
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('about')}
            </Link>
            <Link
              href={`/${locale}/blog`}
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('blog')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('contact')}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
