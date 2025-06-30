import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    domains: ['jodevwqiunywrdzlaaex.supabase.co'],
  },
  // // Add font optimization
  // optimizeFonts: true,
  // Add experimental font loading optimization
  experimental: {
    optimizePackageImports: ['next/font'],
  },
};

export default withNextIntl(nextConfig);
