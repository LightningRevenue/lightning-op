import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaBookReader } from 'react-icons/fa';
import calculateReadingTime from '../utils/readingTime';

const BlogCard = ({ post }) => {
  const fullContent = (post.content?.intro || '') + 
    (post.content?.sections?.map(section => section.content)?.join('') || '') +
    (post.content?.conclusion?.content || '');
  
  const readingTime = calculateReadingTime(fullContent || post.excerpt);

  return (
    <article className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
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
            {post.categories.map((category) => (
              <span 
                key={category}
                className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-8 h-8 rounded-full"
                loading="lazy"
              />
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
    </article>
  );
};

export default BlogCard;