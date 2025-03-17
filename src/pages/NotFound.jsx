import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaCalendarAlt, FaArrowRight, FaLaptopCode, FaSearch, FaBullhorn, FaPaintBrush } from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 60 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 60000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-primary" />,
      title: 'Dezvoltare Web',
      description: 'Site-uri și aplicații web optimizate pentru conversie și experiență utilizator excepțională.',
      link: '/dezvoltare-web'
    },
    {
      icon: <FaSearch className="text-4xl text-blue-600" />,
      title: 'Optimizare SEO',
      description: 'Strategii SEO avansate pentru vizibilitate organică și trafic de calitate.',
      link: '/optimizare-seo'
    },
    {
      icon: <FaBullhorn className="text-4xl text-green-600" />,
      title: 'Marketing Digital',
      description: 'Campanii de marketing personalizate pentru maximizarea ROI-ului.',
      link: '/marketing-digital'
    },
    {
      icon: <FaPaintBrush className="text-4xl text-purple-600" />,
      title: 'Branding',
      description: 'Creează o identitate vizuală memorabilă și construiește încredere.',
      link: '/branding'
    }
  ];

  return (
    <>
      <SEO 
        title="Pagină Negăsită | Explorează Serviciile Noastre | LightningRevenue"
        description="Ne pare rău, dar pagina căutată nu există. Descoperă serviciile noastre de dezvoltare web, SEO, marketing digital și branding pentru a-ți transforma afacerea."
        keywords="404, pagina negasita, dezvoltare web, SEO, marketing digital, branding, servicii digitale"
        canonical="https://www.lightningrevenue.ro/404"
        robots="noindex, follow"
      />
      <SchemaOrg 
        type="WebPage"
        name="Pagină Negăsită"
        description="Explorează serviciile noastre complete de transformare digitală"
      />
      <Header />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* 404 Message */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-3xl font-bold mb-4">Oops! Pagina nu a fost găsită</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ne pare rău, dar pagina pe care o cauți nu există. 
                În schimb, descoperă cum te putem ajuta să-ți transformi afacerea:
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Află mai multe <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Ebook CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <FaBook className="text-4xl text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Ghid Gratuit: Digitalizarea Afacerii în 5 Pași
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Descoperă cum să-ți transformi afacerea pentru era digitală cu ghidul nostru complet.
                    </p>
                    <Link
                      to="/ebook-digitalizare"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:opacity-90 transition-colors"
                    >
                      <FaBook className="text-sm" />
                      Descarcă Ghidul
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Consultation CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <FaCalendarAlt className="text-4xl text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Programează o Consultație Gratuită
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Discută cu experții noștri și află cum putem accelera creșterea afacerii tale.
                    </p>
                    <Link
                      to="/programari"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:opacity-90 transition-colors"
                    >
                      <FaCalendarAlt className="text-sm" />
                      Programează Acum
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Back to Home */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">Vei fi redirecționat către pagina principală în curând...</p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                Mergi la Pagina Principală <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;