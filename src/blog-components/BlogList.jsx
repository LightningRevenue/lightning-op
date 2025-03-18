import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTags, FaCalendarAlt } from 'react-icons/fa';
import BlogCard from './BlogCard';

const POSTS_PER_PAGE = 6;

const BlogList = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('toate');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(posts.flatMap(post => post.categories));
    return ['toate', ...Array.from(cats)];
  }, [posts]);

  // Filter posts by category and search term
  const filteredPosts = useMemo(() => {
    let filtered = posts;
    if (selectedCategory !== 'toate') {
      filtered = filtered.filter(post => post.categories.includes(selectedCategory));
    }
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.categories.some(cat => cat.toLowerCase().includes(searchLower))
      );
    }
    return filtered;
  }, [posts, selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Group posts by month
  const postsByMonth = useMemo(() => {
    const grouped = {};
    filteredPosts.forEach(post => {
      const date = new Date(post.date);
      const monthYear = date.toLocaleDateString('ro-RO', { month: 'long', year: 'numeric' });
      if (!grouped[monthYear]) {
        grouped[monthYear] = [];
      }
      grouped[monthYear].push(post);
    });
    return grouped;
  }, [filteredPosts]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search and Filter Section */}
      <div className="mb-12 space-y-6">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Caută articole..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <FaTags className="text-primary" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid with Animation */}
      {filteredPosts.length > 0 ? (
        Object.entries(postsByMonth).map(([monthYear, monthPosts], monthIndex) => (
          <motion.div
            key={monthYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: monthIndex * 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <FaCalendarAlt className="text-primary" />
              <h2 className="text-xl font-bold text-gray-900">{monthYear}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {monthPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            Nu am găsit articole care să corespundă criteriilor tale de căutare.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 hover:bg-gray-200 transition-colors"
          >
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-lg font-medium transition-colors
                ${currentPage === i + 1
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 disabled:opacity-50 hover:bg-gray-200 transition-colors"
          >
            Următor
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;