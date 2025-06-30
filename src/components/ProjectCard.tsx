"use client"
import { useLocale } from 'next-intl';
import { useDirection } from '@/hooks/useDirection';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  tags: string[];
  tagColors: string;
  url?: string;
  img?: any
}

export default function ProjectCard({
  title,
  description,
  icon,
  gradient,
  tags,
  tagColors,
  url,   
  img
}: ProjectCardProps) {


  const locale = useLocale();
  const { isRTL } = useDirection();

  return (
    <Link href={`/featured-projects/${url}`} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex h-fit">
        <div className={`relative w-32 ${gradient} flex items-center justify-center`}>
          <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-lg" fill />
        </div>
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className={`text-lg font-bold text-gray-900 dark:text-white ${isRTL ? 'text-right' : 'text-left'}`}>
              {title}
            </h3>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-semibold ml-2">
              {locale === 'fr' ? 'Terminé' : locale === 'ar' ? 'مكتمل' : 'Completed'}
            </span>
          </div>
          <p className={`text-gray-600 dark:text-gray-300 text-sm mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            {description}
          </p>
          <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {tags.map((tag, index) => (
              <span key={index} className={`${tagColors} px-2 py-1 rounded text-xs`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
