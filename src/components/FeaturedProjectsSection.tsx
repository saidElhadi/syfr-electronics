"use client"
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useDirection } from '@/hooks/useDirection';
import ProjectCard, { ProjectCardProps } from './ProjectCard';
import tvStudioImg from '@/assets/tv-studio.jpg';
import mallImg from '@/assets/mall.jpg';
import landscapingImg from '@/assets/landscaping.jpg';
import latestProjectImg from '@/assets/latest.jpg'
import Image from 'next/image';

export default function FeaturedProjectsSection() {
  const t = useTranslations('homepage');
  const locale = useLocale();
  const { isRTL } = useDirection();

  // Project data array - unified structure
  const projects = [
    {
      key: 'tvProduction',
      icon: (
        <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      tags: ["P6", "IP65"],
      tagColors: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      url: "led-installation-tv-studio",
      img: tvStudioImg
    },
    {
      key: 'mallInstallations',
      icon: (
        <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 10a2 2 0 01-2 2H8a2 2 0 01-2-2L5 9z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      tags: ["Transparent", "P3.9"],
      tagColors: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      url: "led-installations-malls-shops",
      img: mallImg
    },
    {
      key: 'landscaping',
      icon: (
        <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      tags: ["P1.25", "HDR"],
      tagColors: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      url: "illuminating-landscapes-led-display-installation",
      img: landscapingImg
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Desktop: Grid Layout, Mobile: Stacked */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">

          {/* Left Section - Featured Image with Title/Subtitle */}
          <div className="flex flex-col">
            {/* Main Featured Image - 2/3 height */}
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 rounded-2xl overflow-hidden mb-6 group">
              {/* Left side image */}
              <div className="relative w-full h-full">
                <Image src={latestProjectImg} alt='Antix LED Finished Projects' fill className="object-cover" />

              </div>
              <div className={`absolute ${isRTL ? 'top-6 right-6' : 'top-6 left-6'}`}>
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {locale === 'fr' ? 'Nouveau' : locale === 'ar' ? 'جديد' : 'Latest'}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
            </div>

            {/* Title and Subtitle - 1/3 height */}
            <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('featuredProjects.title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('featuredProjects.subtitle')}
              </p>
            </div>
          </div>          {/* Right Section - Three Project Cards */}
          <div className="flex flex-col gap-6 h-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.key}
                title={t(`featuredProjects.${project.key}.title`)}
                description={t(`featuredProjects.${project.key}.description`)}
                icon={project.icon}
                gradient={project.gradient}
                tags={project.tags}
                tagColors={project.tagColors}
                url={project.url}
                img={project.img}
              />
            ))}

            {/* See all projects btn */}
            <div className="text-center ">
              <Link
                href="/blog"
                className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                {t('featuredProjects.viewAllProjects')}
                <svg className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>


        </div>

        {/* Call to Action */}

      </div>
    </section>
  );
}
