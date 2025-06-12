"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname, redirect } from '@/i18n/routing';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log('Current locale:', locale);
    console.log('Current pathname:', pathname);
    console.log('Current window location:', window.location.href);
  }, [locale, pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // Language switcher function
  const changeLanguage = (newLocale: string) => {
    console.log('Changing language to:', newLocale);
    console.log('Current pathname:', pathname);

    redirect({ href: pathname.replace(/^\/(en|fr|ar)(?=\/|$)/, newLocale), locale: newLocale });
  };
  return (
    <nav className={`${isScrolled
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'
        : 'bg-white dark:bg-gray-900'
      } border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300 ease-in-out`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? 'h-12' : 'h-16'
          }`}>          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`font-bold text-gray-900 dark:text-white transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'
              }`}>
              SyFr Electronics
            </Link>
          </div>          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                href="/products"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('products')}
              </Link>
              <Link
                href="/parts"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('parts')}
              </Link>
              <Link
                href="/about-us"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('about')}
              </Link>
              <Link
                href="/blog"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('blog')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('contact')}
              </Link>

              {/* Language Switcher */}
              <div className="relative ml-4">
                <select
                  value={pathname.split('/')[1]}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm"
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                </select>
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
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
        >          <div className="px-2 pt-2 pb-3 mb-3 space-y-1 sm:px-3 bg-gray-50 dark:bg-gray-800 rounded-lg mt-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('home')}
            </Link>
            <Link
              href="/products"
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('products')}
            </Link>
            <Link
              href="/parts"
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('parts')}
            </Link>
            <Link
              href="/about-us"
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('about')}
            </Link>
            <Link
              href="/blog"
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('blog')}
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {t('contact')}
            </Link>

            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-gray-300 dark:border-gray-600">
              <select
                value={locale}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
