import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {headers} from 'next/headers';

const SUPPORTED_LOCALES = ['en', 'fr', 'ar'];

export default getRequestConfig(async () => {
  // 1. Grab the locale from a custom header, cookie, or wherever you prefer
  const localeHeader = (await headers()).get('X-NEXT-INTL-LOCALE') || '';

  // 2. If it's in your supported list, great! Otherwise fallback
  const chosenLocale = SUPPORTED_LOCALES.includes(localeHeader)
    ? localeHeader
    : 'en';

  // 3. Return both `locale` and `messages`
  return {
    locale: chosenLocale,
    messages: (await import(`../../messages/${chosenLocale}.json`)).default
  };
});

