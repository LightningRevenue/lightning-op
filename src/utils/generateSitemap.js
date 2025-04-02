const fs = require('fs');
const posts = require('../blog-data/posts.json');

const generateSitemap = () => {
  const baseUrl = 'https://www.lightning-revenue.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Start XML content
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n';

  // Add homepage
  xml += `  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // Add main pages
  const mainPages = [
    { url: 'despre-noi', freq: 'monthly', priority: '0.8' },
    { url: 'servicii', freq: 'weekly', priority: '0.9' },
    { url: 'portfolio', freq: 'weekly', priority: '0.8' },
    { url: 'parteneri', freq: 'monthly', priority: '0.7' },
    { url: 'programari', freq: 'daily', priority: '0.8' },
    { url: 'cariere', freq: 'weekly', priority: '0.6' },
  ];

  mainPages.forEach(page => {
    xml += `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  // Add service pages
  const servicePages = [
    { url: 'dezvoltare-web', freq: 'weekly', priority: '0.9' },
    { url: 'ecommerce', freq: 'weekly', priority: '0.9' },
    { url: 'optimizare-seo', freq: 'weekly', priority: '0.9' },
    { url: 'marketing-digital', freq: 'weekly', priority: '0.9' },
    { url: 'social-media', freq: 'weekly', priority: '0.9' },
    { url: 'branding', freq: 'weekly', priority: '0.9' },
    { url: 'hosting-security', freq: 'weekly', priority: '0.9' }
  ];

  servicePages.forEach(page => {
    xml += `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  // Add startup pages
  const startupPages = [
    { url: 'google-startups', freq: 'weekly', priority: '0.8' },
    { url: 'microsoft-startups', freq: 'weekly', priority: '0.8' },
    { url: 'amazon-startups', freq: 'weekly', priority: '0.8' },
    { url: 'mongodb-startups', freq: 'weekly', priority: '0.8' },
    { url: 'hubspot-startups', freq: 'weekly', priority: '0.8' },
    { url: 'intercom-startups', freq: 'weekly', priority: '0.8' },
    { url: 'stripe-startups', freq: 'weekly', priority: '0.8' },
    { url: 'finantare-startup', freq: 'weekly', priority: '0.8' }
  ];

  startupPages.forEach(page => {
    xml += `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  // Add legal pages
  const legalPages = [
    { url: 'termeni-si-conditii', freq: 'yearly', priority: '0.4' },
    { url: 'politica-confidentialitate', freq: 'yearly', priority: '0.4' },
    { url: 'politica-cookie', freq: 'yearly', priority: '0.4' }
  ];

  legalPages.forEach(page => {
    xml += `  <url>
    <loc>${baseUrl}/${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.freq}</changefreq>
    <priority>${page.priority}</priority>
  </url>\n`;
  });

  // Add blog index page
  xml += `  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>\n`;

  // Add individual blog posts with images
  posts.posts.forEach(post => {
    xml += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>\n`;
    
    // Add image if present
    if (post.heroImage) {
      xml += `    <image:image>
      <image:loc>${baseUrl}${post.heroImage}</image:loc>
      <image:title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')}</image:title>
    </image:image>\n`;
    }
    
    xml += `  </url>\n`;
  });

  xml += '</urlset>';

  // Write to file
  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated successfully!');
};

module.exports = generateSitemap;