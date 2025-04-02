import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ post, title, description, keywords, canonical, robots, type = "website", ogImage }) => {
  // If post is provided, use post data, otherwise use direct props
  const pageTitle = post ? post.title : title;
  const pageDescription = post ? post.excerpt : description;
  const pageKeywords = post ? post.tags?.join(', ') : keywords;
  const pageImage = post ? `https://www.lightning-revenue.com${post.heroImage}` : ogImage;

  return (
    <Helmet>
      <html lang="ro" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {pageKeywords && <meta name="keywords" content={pageKeywords} />}
      {canonical && <link rel="canonical" href={`https://www.lightning-revenue.com${canonical.replace(/^https?:\/\/[^/]+/, '')}`} />}
      {robots && <meta name="robots" content={robots} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {pageImage && <meta property="og:image" content={pageImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {pageImage && <meta name="twitter:image" content={pageImage} />}

      {/* Structured Data for Blog Posts */}
      {post && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "keywords": post.tags.join(', '),
            "image": `https://www.lightning-revenue.com${post.heroImage}`,
            "datePublished": post.date,
            "dateModified": post.lastModified || post.date,
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "jobTitle": post.author.role
            },
            "publisher": {
              "@type": "Organization",
              "name": "Lightning Revenue",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.lightning-revenue.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.lightning-revenue.com/blog/${post.slug}`
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;