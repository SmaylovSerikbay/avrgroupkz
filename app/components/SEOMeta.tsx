import Head from 'next/head';

interface SEOMetaProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEOMeta({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/images/og-default.jpg',
  ogType = 'website'
}: SEOMetaProps) {
  return (
    <Head>
      {/* Основные мета-теги */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AVR Group" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph мета-теги для социальных сетей */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AVR Group" />
      <meta property="og:locale" content="ru_RU" />
      
      {/* Twitter Card мета-теги */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Дополнительные мета-теги для бизнеса */}
      <meta name="business:contact_data:street_address" content="Астана, Казахстан" />
      <meta name="business:contact_data:country_name" content="Казахстан" />
      <meta name="business:contact_data:phone_number" content="+77776875411" />
      <meta name="business:contact_data:website" content="https://avrgroup.kz" />
      
      {/* Структурированные данные для Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AVR Group",
            "url": "https://avrgroup.kz",
            "logo": "https://avrgroup.kz/images/logo.png",
            "description": "Компания по разработке мобильных приложений, веб-сайтов и VR/AR решений",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Астана",
              "addressCountry": "KZ"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+77776875411",
              "contactType": "customer service",
              "availableLanguage": ["Russian", "Kazakh", "English"]
            },
            "sameAs": [
              "https://wa.me/77776875411"
            ]
          })
        }}
      />
    </Head>
  );
}
