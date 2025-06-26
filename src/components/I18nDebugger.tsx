"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const I18nDebugger = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const [messages, setMessages] = useState<any>(null);
  
  // Try to get translations from different namespaces
  let t: any, tNav: any, tCommon: any;
  
  try {
    t = useTranslations('homepage');
  } catch (error) {
    console.error("Error getting homepage translations:", error);
  }
  
  try {
    tNav = useTranslations('navigation');
  } catch (error) {
    console.error("Error getting navigation translations:", error);
  }
  
  try {
    tCommon = useTranslations('common');
  } catch (error) {
    console.error("Error getting common translations:", error);
  }

  useEffect(() => {
    console.log("🔍 I18n Debugger - Full State:");
    console.log("  Current locale:", locale);
    console.log("  Current pathname:", pathname);
    console.log("  Window location:", typeof window !== 'undefined' ? window.location.href : 'SSR');
    
    // Test specific translation keys
    const testKeys = [
      'hero.title',
      'hero.trustIndicators.experience',
      'hero.subtitle'
    ];
    
    testKeys.forEach(key => {
      try {
        if (t) {
          const value = t(key);
          console.log(`  ✅ homepage.${key}:`, value);
        } else {
          console.log(`  ❌ No homepage translations available for key: ${key}`);
        }
      } catch (error) {
        console.log(`  ❌ Error getting homepage.${key}:`, error instanceof Error ? error.message : String(error));
      }
    });
    
    // Test navigation keys
    const navKeys = ['home', 'products', 'parts', 'about', 'blog', 'contact'];
    navKeys.forEach(key => {
      try {
        if (tNav) {
          const value = tNav(key);
          console.log(`  ✅ navigation.${key}:`, value);
        } else {
          console.log(`  ❌ No navigation translations available for key: ${key}`);
        }
      } catch (error) {
        console.log(`  ❌ Error getting navigation.${key}:`, error instanceof Error ? error.message : String(error));
      }
    });
    
    // Try to access raw messages
    try {
      if (t && typeof t.raw === 'function') {
        const rawMessages = t.raw('');
        console.log("  📦 Raw messages structure:", rawMessages);
        setMessages(rawMessages);
      }
    } catch (error) {
      console.log("  ❌ Could not access raw messages:", error);
    }
  }, [locale, pathname, t, tNav, tCommon]);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px',
      maxHeight: '400px',
      overflow: 'auto'
    }}>
      <h4>🔍 I18n Debug Panel</h4>
      <div><strong>Locale:</strong> {locale}</div>
      <div><strong>Path:</strong> {pathname}</div>
      <div><strong>Translations loaded:</strong> {t ? '✅' : '❌'}</div>
      <div><strong>Navigation loaded:</strong> {tNav ? '✅' : '❌'}</div>
      
      {t && (
        <div>
          <strong>Sample translations:</strong>
          <div>Title: {t('hero.title', { fallback: 'NOT_FOUND' })}</div>
          <div>Experience: {t('hero.trustIndicators.experience', { fallback: 'NOT_FOUND' })}</div>
        </div>
      )}
      
      {tNav && (
        <div>
          <strong>Navigation:</strong>
          <div>Home: {tNav('home', { fallback: 'NOT_FOUND' })}</div>
          <div>Products: {tNav('products', { fallback: 'NOT_FOUND' })}</div>
        </div>
      )}
    </div>
  );
};

export default I18nDebugger;
