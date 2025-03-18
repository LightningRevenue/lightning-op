const fs = require('fs');
const posts = require('../blog-data/posts.json');

const generateSitemap = () => {
  const baseUrl = 'https://www.lightning-revenue.com';
  
  // Start XML content
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add blog index page
  xml += `  <url>
    <loc>${baseUrl}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>\n`;

  // Add individual blog posts
  posts.posts.forEach(post => {
    xml += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  // Write to file
  fs.writeFileSync('./public/sitemap.xml', xml);
  console.log('Sitemap generated successfully!');
};

// Run the generator
generateSitemap();