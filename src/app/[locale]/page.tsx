"use client"
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProductCategoriesSection from '@/components/ProductCategoriesSection';
import HeroSection from '@/components/HeroSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import LEDPartsSection from '@/components/LEDPartsSection';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import FinalCTASection from '@/components/FinalCTASection';
import TrustSignalsFooter from '@/components/TrustSignalsFooter';

export default function Home() {
  const t = useTranslations('homepage');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <WhatWeDoSection />
      <ProductCategoriesSection />
      <FeaturedProjectsSection />
      <LEDPartsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <FinalCTASection />
      <TrustSignalsFooter />
    </div>
  );
}
