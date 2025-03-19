import React, { useEffect } from 'react';
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
import Contact from '../components/home/Contact';

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
        keywords="marketing digital, dezvoltare web, SEO, social media, agenție marketing România, creare website, optimizare SEO, marketing online, promovare online, web design responsive"
        canonical="https://www.lightning-revenue.ro/"
      />
      <SchemaOrg 
        type="WebSite"
        name="Lightning Operational"
        description="Agenție premium de marketing digital și dezvoltare web din România"
      />
      <Header />
      
      <main>
        <Hero onView={trackSectionView('hero')} trackEvent={trackEvent} />
        <DespreNoi onView={trackSectionView('despre-noi')} trackEvent={trackEvent} />
        <Servicii onView={trackSectionView('servicii')} trackEvent={trackEvent} />
        <Expertiza onView={trackSectionView('expertiza')} trackEvent={trackEvent} />
        <Rezultate onView={trackSectionView('rezultate')} trackEvent={trackEvent} />
        <Contact onView={trackSectionView('contact')} trackEvent={trackEvent} />
      </main>

      <Footer />
    </>
  );
};

export default Home;