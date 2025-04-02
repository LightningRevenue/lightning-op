import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
        canonical="/blog"
      />
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="pt-32">
          <Routes>
            <Route index element={<BlogList posts={posts.posts} />} />
            <Route path="/:slug" element={<BlogPost posts={posts.posts} />} />
          </Routes>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;