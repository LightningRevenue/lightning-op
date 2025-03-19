import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import SEO from '../components/seo/SEO';
import BlogList from '../blog-components/BlogList';
import BlogPost from '../blog-components/BlogPost';
import posts from '../blog-data/posts.json';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog | LightningRevenue - Noutăți și Sfaturi despre Marketing Digital"
        description="Descoperă articole și sfaturi despre marketing digital, dezvoltare web, SEO și strategii de creștere pentru afacerea ta online."
        keywords="blog marketing digital, sfaturi SEO, dezvoltare web, marketing online, digital trends"
        canonical="https://www.lightningoperational.ro/blog"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="pt-32">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Blog
                <span className="block text-primary">
                  Insights & Strategii
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Descoperă cele mai noi tendințe și strategii din lumea digitală
              </p>
            </motion.div>
          </div>

          <Routes>
            <Route index element={<BlogList posts={posts.posts} />} />
            <Route path=":slug" element={<BlogPost posts={posts.posts} />} />
          </Routes>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;