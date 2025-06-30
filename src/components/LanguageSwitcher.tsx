"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const getLocalizedPath = (newLocale: string) => {
    // Remove the current locale from the pathname if it exists
    const segments = pathname.split('/').filter(Boolean);
    
    // Check if first segment is a locale
    if (segments.length > 0 && ['en', 'fr', 'ar'].includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    
    return `/${segments.join('/')}`;
  };

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    
    const newPath = getLocalizedPath(newLocale);
    
    startTransition(() => {
      // Use replace to avoid back/forward issues and force reload
      window.location.replace(newPath);
    });
  };

  return (
    <div className="relative">
      <label htmlFor="language-select" className="sr-only">
        Select language
      </label>
      <select
        id="language-select"
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        disabled={isPending}
        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm disabled:opacity-50 transition-opacity"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
      </select>
      {isPending && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center rounded-md">
          <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
