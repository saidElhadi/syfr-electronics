import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';

interface ProductCategoryCardProps {
  title: string;
  description: string;
  cta: string;
  href: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
  badge: string;
  tags: string[];
  tagColor: string;
  className?: string;
}

export default function ProductCategoryCard({
  title,
  description,
  cta,
  href,
  gradientFrom,
  gradientTo,
  icon,
  badge,
  tags,
  tagColor,
  className = ""
}: ProductCategoryCardProps) {
  const locale = useLocale();

  return (
    <div className={`group block relative overflow-hidden ${className}`}>
      {/* Main Image/Background */}
      <div className={`relative w-full h-full bg-gradient-to-br ${gradientFrom} ${gradientTo} transition-all duration-500 group-hover:scale-105`}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
        
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
        
        {/* Badge */}
        <div className="absolute top-4 right-4 opacity-90">
          <span className="backdrop-blur-sm bg-white/20 text-white px-3 py-1 text-xs font-semibold border border-white/30">
            {badge}
          </span>
        </div>
      </div>

      {/* Expandable Glass Bottom Title Bar */}
      <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-t border-white/20 dark:border-gray-700/50 transition-all duration-500 ease-out group-hover:h-full overflow-hidden h-20">
        {/* Always visible title section */}
        <div className="p-4 pb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">
            {title}
          </h3>
          <div className="flex flex-wrap gap-1 mt-1 opacity-80">
            {tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Expanded content - visible on hover */}
        <div className="px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {description}
            </p>
            
            {/* All Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="flex items-center justify-center">
              <Link 
                href={`/${locale}${href}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 transition-colors text-sm"
              >
                {cta}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
