import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import BlogPost from '../blog-components/BlogPost';
import posts from '../blog-data/posts.json';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // If post doesn't exist, redirect to blog index
    if (!posts.posts.find(p => p.slug === slug)) {
      navigate('/blog');
    }
  }, [slug, navigate]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <BlogPost posts={posts.posts} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;