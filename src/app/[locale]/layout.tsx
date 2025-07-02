import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound, redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import type { Metadata } from "next";
import "./globals.css";
// Import local fonts - Arabic subsets for better performance
import '@fontsource/noto-sans-arabic/arabic-300.css';
import '@fontsource/noto-sans-arabic/arabic-400.css';
import '@fontsource/noto-sans-arabic/arabic-500.css';
import '@fontsource/noto-sans-arabic/arabic-600.css';
import '@fontsource/noto-sans-arabic/arabic-700.css';
import '@fontsource/noto-sans-arabic/arabic-800.css';
import '@fontsource/cairo/300.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import '@fontsource/cairo/800.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { getLangDir } from 'rtl-detect';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: "SyFr Electronics" }],
    creator: "SyFr Electronics",
    publisher: "SyFr Electronics",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://syfrelectronics.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
        'ar': '/ar'
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://syfrelectronics.com',
      siteName: 'SyFr Electronics',
      images: [
        {
          url: '/led-display-hero.jpg',
          width: 1200,
          height: 630,
          alt: 'Professional LED Display Solutions by SyFr Electronics',
        }
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/led-display-hero.jpg'],
      creator: '@syfrelectronics',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'google-verification-code',
      yandex: 'yandex-verification-code',
      yahoo: 'yahoo-verification-code',
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const direction = getLangDir(locale);

  if (!routing.locales.includes(locale as any)) {
    // redirect('/en')
    notFound()
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={direction}>
      {/* <head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="TKDkWyy5lKMFYeRkTzZXAQ" async></script>
        </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${direction === 'rtl' ? 'font-arabic' : ''}`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <StructuredData />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
