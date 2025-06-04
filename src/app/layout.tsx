import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional LED Display Solutions | Outdoor, Indoor & Curved LED Screens | SyFr Electronics",
  description: "Premium LED display solutions including outdoor LED displays, indoor LED screens, and curved LED displays. Complete LED parts, installation, and 24/7 support. 15+ years experience, 10,000+ installations worldwide.",
  keywords: [
    "LED displays",
    "outdoor LED displays",
    "indoor LED screens", 
    "curved LED displays",
    "LED display parts",
    "LED modules",
    "LED display installation",
    "LED screen rental",
    "digital signage",
    "LED billboard",
    "stadium LED displays",
    "retail LED displays",
    "LED control systems",
    "LED power supplies",
    "professional LED displays"
  ],
  authors: [{ name: "SyFr Electronics" }],
  creator: "SyFr Electronics",
  publisher: "SyFr Electronics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://syfr-electronics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Professional LED Display Solutions | SyFr Electronics",
    description: "Premium outdoor, indoor & curved LED displays with complete parts and installation services. 15+ years experience, 24/7 support.",
    url: 'https://syfr-electronics.com',
    siteName: 'SyFr Electronics',
    images: [
      {
        url: '/led-display-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional LED Display Solutions by SyFr Electronics',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Professional LED Display Solutions | SyFr Electronics",
    description: "Premium outdoor, indoor & curved LED displays with complete parts and installation services.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
