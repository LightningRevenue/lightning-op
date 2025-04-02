import React, { useEffect } from 'react';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import CookieConsent from '../components/regular/CookieConsent';
import Hero from '../components/home/Hero';
import DespreNoi from '../components/home/DespreNoi';
import Servicii from '../components/home/Servicii';
import Avantaje from '../components/home/Avantaje';
import Proces from '../components/home/Proces';
import Expertiza from '../components/home/Expertiza';
import Rezultate from '../components/home/Rezultate';
import RecentBlogPosts from '../components/home/RecentBlogPosts';
import Contact from '../components/home/Contact';
import StartupPanel from '../components/home/StartupPanel';
import LimitedOfferBubble from '../components/regular/LimitedOfferBubble';

const Home = () => {

  // Track page view when component mounts
  useEffect(() => {
    trackEvent('page_view', 'home');
  }, []);

  // Function to track user interactions
  const trackEvent = async (event, section, additionalData = {}) => {
    try {
      const response = await fetch('https://backend-logic-lght-849100326888.europe-west1.run.app/api/track', {
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
        title="Agenție Marketing Digital & Web Development | Lightning Revenue"
        description="Transformăm afaceri prin strategii digitale integrate. Experți în marketing digital, dezvoltare web, SEO și social media. Creștem vizibilitatea și conversiile afacerii tale cu soluții personalizate și rezultate măsurabile."
        keywords="marketing digital bucuresti, agentie dezvoltare web, servicii SEO romania, marketing online profesional, webdesign responsive, optimizare site, creare website, digital marketing expert, promovare online, campanii PPC, social media marketing, consultanta SEO, crestere conversii, generare leaduri, strategie digitala, dezvoltare ecommerce, UX/UI design, content marketing, branding digital"
        canonical="https://www.lightning-revenue.com/"
      />
      <SchemaOrg 
        type="WebSite"
        name="Lightning Revenue"
        description="Agenție premium de marketing digital și dezvoltare web din România, specializată în creșterea afacerilor în mediul online"
      />
      
      {/* Schema.org Organization markup îmbunătățit */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lightning Revenue",
          "url": "https://www.lightning-revenue.com/",
          "logo": "https://www.lightning-revenue.com/logo.png",
          "description": "Agenție de marketing digital și dezvoltare web cu focus pe rezultate măsurabile și ROI. Oferim servicii complete de marketing online, SEO, web development și consultanță digitală.",
          "foundingDate": "2020",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+40-000-000-000",
            "contactType": "customer service",
            "availableLanguage": ["Romanian", "English"],
            "email": "contact@lightning-revenue.com"
          },
          "sameAs": [
            "https://www.facebook.com/lightningoperational/",
            "https://www.linkedin.com/company/lightningoperational/",
            "https://www.instagram.com/lightningoperational/"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Romania"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Exemplu 123",
            "addressLocality": "București",
            "postalCode": "000000",
            "addressCountry": "RO"
          }
        })}
      </script>

      {/* Schema.org FAQPage markup pentru întrebări frecvente */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Ce servicii de marketing digital oferă Lightning Revenue?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Oferim o gamă completă de servicii digitale incluzând: optimizare SEO, dezvoltare web, marketing pe social media, campanii PPC, content marketing, email marketing și consultanță strategică."
              }
            },
            {
              "@type": "Question",
              "name": "Cum poate ajuta SEO afacerea mea?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO îmbunătățește vizibilitatea site-ului dvs. în rezultatele organice ale motoarelor de căutare, aducând trafic țintit, crescând autoritatea domeniului și generând leads calificați pentru afacerea dvs."
              }
            },
            {
              "@type": "Question",
              "name": "Cât durează să văd rezultate cu serviciile voastre?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timpul variază în funcție de serviciu și obiective. Campaniile PPC pot genera rezultate imediate, în timp ce SEO și content marketing necesită 3-6 luni pentru rezultate semnificative. Oferim rapoarte lunare detaliate pentru a urmări progresul."
              }
            }
          ]
        })}
      </script>

      <Header />
      <LimitedOfferBubble />
      
      <main>
        <StartupPanel />
        <Hero onView={trackSectionView('hero')} trackEvent={trackEvent} />
        <DespreNoi onView={trackSectionView('despre-noi')} trackEvent={trackEvent} />
        <Avantaje onView={trackSectionView('avantaje')} trackEvent={trackEvent} />
        <Servicii onView={trackSectionView('servicii')} trackEvent={trackEvent} />
        <Proces onView={trackSectionView('proces')} trackEvent={trackEvent} />
        <Expertiza onView={trackSectionView('expertiza')} trackEvent={trackEvent} />
        <Rezultate onView={trackSectionView('rezultate')} trackEvent={trackEvent} />
        <RecentBlogPosts onView={trackSectionView('recent-blogs')} />
        <Contact onView={trackSectionView('contact')} trackEvent={trackEvent} />
      </main>

      <Footer />
    </>
  );
};

export default Home;