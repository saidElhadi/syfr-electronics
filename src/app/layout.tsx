import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional LED Display Solutions | SyFr Electronics",
  description: "Premium LED display solutions including outdoor LED displays, indoor LED screens, and curved LED displays.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const direction = getLangDir(locale);

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${direction === 'rtl' ? 'font-arabic' : ''}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
