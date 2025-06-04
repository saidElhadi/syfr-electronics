import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyFr Electronics",
    "description": "Professional LED display solutions provider specializing in outdoor, indoor, and curved LED displays with complete parts and installation services.",
    "url": "https://syfr-electronics.com",
    "logo": "https://syfr-electronics.com/logo.png",
    "image": "https://syfr-electronics.com/led-display-hero.jpg",
    "telephone": "+1-555-123-4567",
    "email": "info@syfr-electronics.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Electronics Ave",
      "addressLocality": "Tech City",
      "addressRegion": "TC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/syfr-electronics",
      "https://twitter.com/syfrelectronics",
      "https://www.facebook.com/syfrelectronics"
    ],
    "foundingDate": "2008",
    "numberOfEmployees": "50-100",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "LED Display Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Outdoor LED Displays",
          "description": "Weather-resistant outdoor LED displays for billboards, stadiums, and digital signage"
        },
        {
          "@type": "OfferCatalog",
          "name": "Indoor LED Displays",
          "description": "High-resolution indoor LED screens for retail, corporate, and entertainment venues"
        },
        {
          "@type": "OfferCatalog",
          "name": "Curved LED Displays",
          "description": "Innovative curved and flexible LED displays for unique installations"
        },
        {
          "@type": "OfferCatalog",
          "name": "LED Display Parts",
          "description": "Complete range of LED modules, control systems, power supplies, and mounting hardware"
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SyFr Electronics",
    "url": "https://syfr-electronics.com",
    "description": "Professional LED display solutions including outdoor, indoor, and curved LED displays with complete parts and installation services.",
    "publisher": {
      "@type": "Organization",
      "name": "SyFr Electronics"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://syfr-electronics.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LED Display Solutions",
    "description": "Complete LED display solutions including design, installation, maintenance, and support services for outdoor, indoor, and curved LED displays.",
    "provider": {
      "@type": "Organization",
      "name": "SyFr Electronics"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "LED Display Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Display Installation",
            "description": "Professional installation services for all types of LED displays"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Display Maintenance",
            "description": "24/7 maintenance and support services with 99.9% uptime guarantee"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Display Consultation",
            "description": "Free consultation and custom design services for LED display projects"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://syfr-electronics.com"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
