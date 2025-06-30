import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const baseUrl = 'https://syfr-electronics.com'
  const locales = ['en', 'fr', 'ar']
  const currentDate = new Date().toISOString()

  // In a real application, you would fetch these from your database/CMS
  const sampleProducts = [
    'p2-5-indoor-led-panel',
    'p4-outdoor-led-display', 
    'p10-outdoor-billboard',
    'p3-91-indoor-rental',
    'flexible-led-strip',
    'curved-led-panel',
    'transparent-led-display',
    'vp-series-led-wall',
    'xr-studio-led-panel'
  ]

  const productCategories = [
    'standard-led-displays-indoor-outdoor',
    'flexible-led-displays',
    'all-in-one-led-displays-kiosks', 
    'virtual-production-led-displays'
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${locales.map(locale => 
    productCategories.map(category => `
  <url>
    <loc>${baseUrl}/${locale}/categories/${category}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    ${locales.map(altLocale => `
    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}/categories/${category}"/>`).join('')}
  </url>`).join('')
  ).join('')}
  ${locales.map(locale =>
    sampleProducts.map(productId => `
  <url>
    <loc>${baseUrl}/${locale}/products/${productId}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    ${locales.map(altLocale => `
    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}/products/${productId}"/>`).join('')}
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
