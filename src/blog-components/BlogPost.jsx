import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaClock, FaBookReader, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaList, FaTools, FaBrain, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import BlogSchema from './BlogSchema';
import calculateReadingTime from '../utils/readingTime';
import NewsletterSubscribe from './NewsletterSubscribe';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = ({ posts }) => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  const [showToc, setShowToc] = useState(false);
  const [headings, setHeadings] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const articleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (articleRef.current) {
        const totalHeight = articleRef.current.clientHeight;
        const windowHeight = window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / (totalHeight - windowHeight)) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on post load
    window.scrollTo(0, 0);

    // Extract headings from structured content
    if (post?.content?.sections) {
      const extractedHeadings = post.content.sections.map(section => ({
        id: section.id,
        text: section.title
      }));
      setHeadings(extractedHeadings);
    } else if (post?.content && typeof post.content === 'string') {
      // Legacy format handling
      const parser = new DOMParser();
      const doc = parser.parseFromString(post.content, 'text/html');
      const headingElements = doc.querySelectorAll('h2');
      const extractedHeadings = Array.from(headingElements).map(heading => ({
        id: heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        text: heading.textContent
      }));
      setHeadings(extractedHeadings);

      // Add IDs to actual headings in content
      const contentWithIds = post.content.replace(
        /<h2>(.*?)<\/h2>/g,
        (match, content) => {
          const id = content.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return `<h2 id="${id}">${content}</h2>`;
        }
      );
      post.content = contentWithIds;
    }

    // Prefetch next post images
    const currentIndex = posts.findIndex(p => p.slug === slug);
    if (currentIndex < posts.length - 1) {
      const nextPost = posts[currentIndex + 1];
      if (nextPost.heroImage || nextPost.image) {
        const img = new Image();
        img.src = nextPost.heroImage || nextPost.image;
      }
    }
  }, [slug, posts, post]);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Articolul nu a fost găsit</h2>
        <Link to="/blog" className="text-primary hover:underline">
          Înapoi la Blog
        </Link>
      </div>
    );
  }

  // For blog posts with new structure, use content.intro + sections content
  const fullContent = (post.content?.intro || '') + 
    (post.content?.sections?.map(section => section.content)?.join('') || '') +
    (post.content?.conclusion?.content || '');
    
  const readingTime = calculateReadingTime(fullContent || post.content || post.excerpt);
  const shareUrl = `https://www.lightning-revenue.com/blog/${slug}`;

  return (
    <>
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
        style={{ opacity: readingProgress > 0 ? 1 : 0 }}
      >
        <div 
          className="h-full bg-primary transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <motion.article 
        ref={articleRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12"
      >
        {/* WhatsApp CTA Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/40743959914"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all"
          >
            <FaWhatsapp className="text-xl" />
            <span className="font-medium">Consultanță Gratuită</span>
          </a>
        </div>

        <SEO 
          title={post.title}
          description={post.excerpt}
          keywords={[...post.categories, ...post.tags].join(', ')}
          ogImage={post.heroImage}
          type="article"
        />
        <BlogSchema post={post} />
        
        {/* Back to Blog Link */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <FaArrowLeft />
          <span>Înapoi la Blog</span>
        </Link>
        
        <header className="text-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {post.categories.map((category) => (
              <span 
                key={category}
                className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{post.title}</h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <div className="text-left">
                <span className="block font-medium">{post.author.name}</span>
                <span className="text-sm">{post.author.role}</span>
              </div>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <FaBookReader />
              <span>{readingTime}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <FaClock />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('ro-RO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>
          {/* Difficulty and Tools */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
              <FaBrain className="text-primary" />
              <span>Dificultate: {post.meta.difficulty}</span>
            </div>
            {post.meta.toolsRequired && (
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                <FaTools className="text-primary" />
                <span>Instrumente: {post.meta.toolsRequired.join(', ')}</span>
              </div>
            )}
          </div>
        </header>

        {post.heroImage && (
          <img 
            src={post.heroImage}
            alt={post.title}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl mb-12"
            loading="eager"
          />
        )}

        {/* Share Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-gray-600 font-medium">Distribuie:</span>
          <div className="flex gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sky-500 hover:bg-sky-50 rounded-full transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Table of Contents */}
        {headings.length > 0 && (
          <div className="mb-8">
            <button
              onClick={() => setShowToc(!showToc)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <FaList />
              <span>Cuprins</span>
            </button>
            {showToc && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-6 bg-gray-50 rounded-xl"
              >
                <nav>
                  <ul className="space-y-3">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {/* Introduction */}
          <div dangerouslySetInnerHTML={{ __html: post.content.intro }} />

          {/* Content Sections */}
          {post.content.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-12">
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
              
              {section.image && (
                <figure className="mt-6">
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="rounded-lg"
                    loading="lazy"
                  />
                  {section.imageAlt && (
                    <figcaption className="text-center text-gray-600 mt-2">
                      {section.imageAlt}
                    </figcaption>
                  )}
                </figure>
              )}

              {section.callout && (
                <div className={`my-6 p-6 rounded-xl bg-${section.callout.type === 'tip' ? 'blue' : 'yellow'}-50 border-l-4 border-${section.callout.type === 'tip' ? 'blue' : 'yellow'}-500`}>
                  <h4 className="text-lg font-bold mb-2">{section.callout.title}</h4>
                  <div dangerouslySetInnerHTML={{ __html: section.callout.content }} />
                </div>
              )}

              {section.codeExample && (
                <div className="my-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">{section.codeExample.title}</h4>
                  <SyntaxHighlighter
                    language={section.codeExample.language}
                    style={tomorrow}
                    className="rounded-lg"
                  >
                    {section.codeExample.code}
                  </SyntaxHighlighter>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          {post.content.conclusion && (
            <section className="mt-12">
              <h2>{post.content.conclusion.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content.conclusion.content }} />
            </section>
          )}

          {/* Resources */}
          {post.content.resources && post.content.resources.length > 0 && (
            <section className="mt-12">
              <h2>Resurse Utile</h2>
              <ul className="space-y-4">
                {post.content.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>{resource.title}</span>
                    </a>
                    <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Newsletter Subscribe */}
        <div className="my-16">
          <NewsletterSubscribe variant="minimal" />
        </div>

        {/* Tags */}
        {post.tags && (
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Etichete</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">
              {post.author.name}
              <span className="text-gray-500 font-normal ml-2">
                {post.author.role}
              </span>
            </h3>
            <p className="text-gray-600 mb-2">{post.author.bio}</p>
            <div className="flex gap-2">
              {post.author.social?.linkedin && (
                <a
                  href={post.author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {post.author.social?.twitter && (
                <a
                  href={post.author.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-sky-600"
                >
                  <FaTwitter size={20} />
                </a>
              )}
            </div>
          </div>
        </footer>
      </motion.article>
    </>
  );
};

export default BlogPost;