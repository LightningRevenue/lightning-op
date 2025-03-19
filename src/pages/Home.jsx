import React, { useEffect, useState } from 'react';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import CookieConsent from '../components/regular/CookieConsent';
import Hero from '../components/home/Hero';
import DespreNoi from '../components/home/DespreNoi';
import Servicii from '../components/home/Servicii';
import Expertiza from '../components/home/Expertiza';
import Rezultate from '../components/home/Rezultate';
import RecentBlogPosts from '../components/home/RecentBlogPosts';
import Contact from '../components/home/Contact';
import { Link } from 'react-router-dom';
import { FaQuestion, FaCheckCircle, FaArrowRight, FaCode, FaChartLine, FaSearch, FaBullhorn } from 'react-icons/fa';

const Home = () => {

  // Track page view when component mounts
  useEffect(() => {
    trackEvent('page_view', 'home');
  }, []);

  // Function to track user interactions
  const trackEvent = async (event, section, additionalData = {}) => {
    try {
      const response = await fetch('http://localhost:5000/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event,
          page: 'home',
          section,
          additionalData
        })
      });
      
      if (!response.ok) {
        console.error('Error tracking event');
      }
    } catch (error) {
      console.error('Tracking error:', error);
    }
  };

  // Wrap section components with tracking functionality
  const trackSectionView = (section) => {
    return () => trackEvent('section_view', section);
  };

  return (
    <>
      <CookieConsent />
      <SEO 
        title="Agenție Marketing Digital & Web Development"
        description="Creăm experiențe digitale excepționale care transformă afaceri. Servicii complete de marketing digital, dezvoltare web și SEO pentru creșterea afacerii tale online."
        keywords="marketing digital, dezvoltare web, SEO, social media, agenție marketing România, creare website, optimizare SEO, marketing online, promovare online, web design responsive, agenție profesională marketing, strategie digitală, campanii PPC, Google Ads, content marketing, branding digital, analiză trafic website, e-commerce, UX/UI design, WordPress, Shopify, soluții personalizate web, creștere conversii online, prezență digitală, copywriting SEO, audit website, consultanță digitală, ROI marketing, lead generation, performanță digitală"
        canonical="https://www.lightning-revenue.ro/"
      />
      <SchemaOrg 
        type="WebSite"
        name="Lightning Operational"
        description="Agenție premium de marketing digital și dezvoltare web din România"
      />
      {/* Additional schema for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lightning Operational",
          "url": "https://www.lightning-revenue.ro/",
          "logo": "https://www.lightning-revenue.ro/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+40-000-000-000",
            "contactType": "customer service",
            "availableLanguage": ["Romanian", "English"]
          },
          "sameAs": [
            "https://www.facebook.com/lightningoperational/",
            "https://www.linkedin.com/company/lightningoperational/",
            "https://www.instagram.com/lightningoperational/"
          ]
        })}
      </script>
      {/* LocalBusiness schema for improved local SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Lightning Operational",
          "image": "https://www.lightning-revenue.ro/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Exemplu 123",
            "addressLocality": "București",
            "postalCode": "000000",
            "addressCountry": "RO"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.4268",
            "longitude": "26.1025"
          },
          "priceRange": "€€€",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          }
        })}
      </script>
      <Header />
      
      <main>
        <Hero onView={trackSectionView('hero')} trackEvent={trackEvent} />
        <DespreNoi onView={trackSectionView('despre-noi')} trackEvent={trackEvent} />
        <Servicii onView={trackSectionView('servicii')} trackEvent={trackEvent} />
        <Expertiza onView={trackSectionView('expertiza')} trackEvent={trackEvent} />
        <Rezultate onView={trackSectionView('rezultate')} trackEvent={trackEvent} />
        <Contact onView={trackSectionView('contact')} trackEvent={trackEvent} />
        <RecentBlogPosts onView={trackSectionView('recent-blogs')} />
      </main>

      <Footer />
    </>
  );
};

export default Home;