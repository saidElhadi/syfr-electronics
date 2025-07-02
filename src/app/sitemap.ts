import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://syfrelectronics.com'
  const locales = ['en', 'fr', 'ar']
  const currentDate = new Date()
  
  // Core pages with high priority
  const corePages = [
    {
      path: '/',
      changeFrequency: 'daily' as const,
      priority: 1.0
    },
    {
      path: '/products',
      changeFrequency: 'daily' as const,
      priority: 0.9
    },
    {
      path: '/categories',
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    {
      path: '/parts',
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/blog',
      changeFrequency: 'daily' as const,
      priority: 0.8
    },
    {
      path: '/about-us',
      changeFrequency: 'monthly' as const,
      priority: 0.7
    },
    {
      path: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }
  ]

  // Category pages
  const categoryPages = [
    {
      path: '/categories/standard-led-displays-indoor-outdoor',
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/categories/flexible-led-displays',
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/categories/all-in-one-led-displays-kiosks',
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/categories/virtual-production-led-displays',
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }
  ]

  // Industry pages (common industry targets for LED displays)
  const industryPages = [
    {
      path: '/industries/led-displays-in-retail',
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      path: '/industries/led-displays-in-education',
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      path: '/industries/led-displays-in-entertainment',
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      path: '/industries/led-displays-transportation-industry',
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      path: '/industries/sports',
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      path: '/industries/led-displays-corporate-events',
      changeFrequency: 'weekly' as const,
      priority: 0.7
    }
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Add localized versions of all pages
  locales.forEach(locale => {
    // Core pages
    corePages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${page.path}`,
            'fr': `${baseUrl}/fr${page.path}`,
            'ar': `${baseUrl}/ar${page.path}`
          }
        }
      })
    })

    // Category pages
    categoryPages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${page.path}`,
            'fr': `${baseUrl}/fr${page.path}`,
            'ar': `${baseUrl}/ar${page.path}`
          }
        }
      })
    })

    // Industry pages
    industryPages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            'en': `${baseUrl}/en${page.path}`,
            'fr': `${baseUrl}/fr${page.path}`,
            'ar': `${baseUrl}/ar${page.path}`
          }
        }
      })
    })
  })

  // Add default locale redirects (without locale prefix)
  corePages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFrequency,
      priority: page.priority * 0.9, // Slightly lower priority than localized versions
      alternates: {
        languages: {
          'en': `${baseUrl}/en${page.path}`,
          'fr': `${baseUrl}/fr${page.path}`,
          'ar': `${baseUrl}/ar${page.path}`
        }
      }
    })
  })

  return sitemap
}
