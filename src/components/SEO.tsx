
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Personal Installment Loans - Fast & Transparent | Cash Bear Loans",
  description = "Get approved for personal loans up to $5,000 with Cash Bear Loans. Texas-based lender offering transparent terms, competitive rates from 5.99% to 34.99% APR (max 34.99%), and funding in 1-2 days. We do not offer loans with APR ≥ 36%.",
  keywords = "personal loans, installment loans, texas lender, cash loans, fast loans, transparent lending, emergency loans, debt consolidation, bad credit loans",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noIndex = false
}) => {
  const fullTitle = title.includes('Cash Bear Loans') ? title : `${title} | Cash Bear Loans`;
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');
  
  // Default Open Graph and Twitter values
  const finalOgTitle = ogTitle || fullTitle;
  const finalOgDescription = ogDescription || description;
  const finalTwitterTitle = twitterTitle || finalOgTitle;
  const finalTwitterDescription = twitterDescription || finalOgDescription;
  const finalTwitterImage = twitterImage || ogImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Cash Bear Loans" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={finalTwitterTitle} />
      <meta name="twitter:description" content={finalTwitterDescription} />
      <meta name="twitter:image" content={finalTwitterImage} />
      <meta name="twitter:site" content="@CashBearLoans" />
      <meta name="twitter:creator" content="@CashBearLoans" />

      {/* Additional Meta Tags for Financial Services */}
      <meta name="author" content="Cash Bear Loans" />
      <meta name="publisher" content="Cash Bear Loans" />
      <meta name="application-name" content="Cash Bear Loans" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="2551 Interstate 45 N" />
      <meta name="business:contact_data:locality" content="Conroe" />
      <meta name="business:contact_data:region" content="TX" />
      <meta name="business:contact_data:postal_code" content="77304" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="1-800-CASH-BEAR-LOANS" />
      <meta name="business:contact_data:email" content="support@cashbearloan.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;