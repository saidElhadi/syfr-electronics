import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const baseUrl = 'https://syfrelectronics.com'
  const locales = ['en', 'fr', 'ar']
  const currentDate = new Date().toISOString()

  // In a real application, you would fetch these from your CMS/database
  const sampleBlogPosts = [
    'led-display-technology-guide-2025',
    'outdoor-led-installation-best-practices',
    'choosing-right-pixel-pitch-led-display',
    'led-display-maintenance-tips',
    'virtual-production-led-technology',
    'curved-led-displays-advantages',
    'led-display-color-calibration',
    'energy-efficient-led-displays',
    'led-display-weather-protection',
    'indoor-vs-outdoor-led-displays'
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${locales.map(locale =>
    sampleBlogPosts.map(slug => `
  <url>
    <loc>${baseUrl}/${locale}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    ${locales.map(altLocale => `
    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}/blog/${slug}"/>`).join('')}
  </url>`).join('')
  ).join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
