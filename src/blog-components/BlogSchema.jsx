import { useEffect } from 'react';

const BlogSchema = ({ post }) => {
  useEffect(() => {
    const fullContent = (post.content?.intro || '') + 
      (post.content?.sections?.map(section => section.content)?.join('') || '') +
      (post.content?.conclusion?.content || '');

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: `https://www.lightning-revenue.com${post.heroImage || post.image}`,
      datePublished: post.date,
      dateModified: post.lastModified || post.date,
      articleBody: fullContent || post.content || post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author.name,
        image: `https://www.lightning-revenue.com${post.author.avatar}`,
        jobTitle: post.author.role || post.author.bio,
        sameAs: [
          post.author.social?.linkedin,
          post.author.social?.twitter
        ].filter(Boolean)
      },
      publisher: {
        '@type': 'Organization',
        name: 'LightningRevenue',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.lightning-revenue.com/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.lightning-revenue.com/blog/${post.slug}`
      },
      keywords: [...(post.categories || []), ...(post.tags || [])].join(', '),
      articleSection: post.categories?.[0],
      inLanguage: 'ro-RO',
      about: post.meta?.toolsRequired?.join(', '),
      accessibilityControl: post.meta?.difficulty,
      timeRequired: post.meta?.readingTime
    };

    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [post]);

  return null;
};

export default BlogSchema;