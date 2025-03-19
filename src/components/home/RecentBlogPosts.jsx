import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaBookReader } from 'react-icons/fa';
import posts from '../../blog-data/posts.json';
import calculateReadingTime from '../../utils/readingTime';

const RecentBlogPosts = ({ onView }) => {
  // Get the latest 3 posts, sorted by date
  const recentPosts = [...posts.posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={onView}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ultimele Articole
          </h2>
          <p className="text-gray-600 text-lg">
            Descoperă cele mai recente insights și strategii din lumea digitală
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {recentPosts.map((post, index) => {
            const fullContent = (post.content?.intro || '') + 
              (post.content?.sections?.map(section => section.content)?.join('') || '') +
              (post.content?.conclusion?.content || '');
            
            const readingTime = calculateReadingTime(fullContent || post.excerpt);

            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  {(post.heroImage || post.image) && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.heroImage || post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.slice(0, 2).map((category) => (
                        <span 
                          key={category}
                          className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <FaBookReader className="text-primary" />
                          <span>{readingTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="text-primary" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('ro-RO', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-12"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Vezi toate articolele
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;