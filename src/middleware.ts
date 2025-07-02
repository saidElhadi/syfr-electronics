import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 

const locales = ["en", "fr", "ar"] as const;
export default createMiddleware({
  locales,
  defaultLocale: "en",
});
 
export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
