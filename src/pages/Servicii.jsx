import React from 'react';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import DiscountPopup from '../components/regular/DiscountPopup';
import ServiciiHero from '../components/servicii/ServiciiHero';
import ServiciiLista from '../components/servicii/ServiciiLista';
import ServiciiProces from '../components/servicii/ServiciiProces';
import Contact from '../components/home/Contact';

const Servicii = () => {
  return (
    <>
      <SEO 
        title="Servicii Complete de Marketing Digital și Dezvoltare Web"
        description="Descoperă serviciile noastre premium de marketing digital, dezvoltare web, SEO și social media. Soluții personalizate pentru creșterea afacerii tale online."
        keywords="marketing digital bucuresti, dezvoltare web, seo romania, social media marketing, google ads, web design responsive, optimizare seo, creare website, promovare online, marketing b2b"
        canonical="https://www.lightningoperational.ro/servicii"
      />
      <SchemaOrg />
      <Header />
      <DiscountPopup />
      
      <main>
        <ServiciiHero />
        <ServiciiLista />
        <ServiciiProces />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Servicii;