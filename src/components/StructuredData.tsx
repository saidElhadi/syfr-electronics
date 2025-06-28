import Script from 'next/script';
import { contactInfo } from '@/data/contact';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": contactInfo.company,
    "description": contactInfo.description,
    "url": contactInfo.website,
    "logo": `${contactInfo.website}/logo.png`,
    "image": `${contactInfo.website}/led-display-hero.jpg`,
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address.street,
      "addressLocality": contactInfo.address.city,
      "addressRegion": contactInfo.address.state,
      "postalCode": contactInfo.address.postalCode,
      "addressCountry": contactInfo.address.country
    },
    "sameAs": [
      contactInfo.social.linkedin,
      contactInfo.social.twitter,
      contactInfo.social.facebook
    ],
    "foundingDate": contactInfo.foundingYear,
    "numberOfEmployees": contactInfo.employees,
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
    "name": contactInfo.company,
    "url": contactInfo.website,
    "description": contactInfo.description,
    "publisher": {
      "@type": "Organization",
      "name": contactInfo.company
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${contactInfo.website}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LED Display Solutions",
    "description": contactInfo.description,
    "provider": {
      "@type": "Organization",
      "name": contactInfo.company
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
        "item": contactInfo.website
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
