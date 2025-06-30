"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import retailImg from "@/assets/retail-shopping.jpg"
import sportsImg from "@/assets/sports.jpg"
import transportationImg from "@/assets/transportation.jpg"
import corporateImg from "@/assets/corp-event.webp"
import entertainmentImg from "@/assets/entertainment.webp"
import educationImg from "@/assets/education.jpg"

import { Link } from '@/i18n/routing';

interface IndustryCardProps {
  name: string;
  image: StaticImageData;
  className?: string;
  url?: string;
}

function IndustryCard({ name, image, className = "", url }: IndustryCardProps) {
  return (
    <>
      {url ? (
        <Link href={`/industries/${url}`} className={`group ${className}`}>
          <div className="relative h-full bg-white dark:bg-gray-700 overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:z-50">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-2xl">
              <h3 className="font-semibold text-white text-lg p-4">{name}</h3>
            </div>
          </div>
        </Link>
      ) : (
        <div className={`group ${className}`}>
          <div className="relative h-full bg-white dark:bg-gray-700 overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:z-50">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-2xl">
              <h3 className="font-semibold text-white text-lg p-4">{name}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function IndustriesSection() {
  const t = useTranslations('homepage');

  const industries = [
    { name: t('industries.sectors.retail'), image: retailImg, id: 1 },
    { name: t('industries.sectors.sports'), image: sportsImg, id: 2 },
    { name: t('industries.sectors.transportation'), image: transportationImg, id: 3 },
    { name: t('industries.sectors.entertainment'), image: entertainmentImg, id: 5 },
    { name: t('industries.sectors.education'), image: educationImg, id: 6 },
    { name: t('industries.sectors.corporate'), image: corporateImg, id: 4 },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('industries.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-0 mb-16 min-h-[1000px]">
          {/* Row 1: [1][1][2] */}
          <IndustryCard
            name={industries[0].name}
            image={industries[0].image}
            className="col-span-2"
            url='led-displays-in-retail'
          />

          <IndustryCard
            name={industries[1].name}
            image={industries[1].image}
            className="col-span-1 row-span-2"
            url='sports'
          />

          {/* Row 2: [3][4][2] - continuing transportation */}
          <IndustryCard
            name={industries[2].name}
            image={industries[2].image}
            className="col-span-1"
            url='led-displays-transportation-industry'
          />

          <IndustryCard
            name={industries[3].name}
            image={industries[3].image}
            className="col-span-1"
            url='led-displays-in-entertainment'
          />

          <IndustryCard
            name={industries[4].name}
            image={industries[4].image}
            className="col-span-1"
            url='led-displays-in-education'
          />

          {/* Row 3: [5][6][6] */}
          <IndustryCard
            name={industries[5].name}
            image={industries[5].image}
            className="col-span-2"
            url='led-displays-corporate-events'
          />

        </div>
      </div>
    </section>
  );
}
