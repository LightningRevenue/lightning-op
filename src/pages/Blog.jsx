import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaNewspaper, FaEnvelope, FaRocket } from 'react-icons/fa';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <>
      <SEO 
        title="Blog | LightningRevenue - Noutăți și Sfaturi despre Marketing Digital"
        description="Fii la curent cu cele mai noi tendințe în marketing digital, dezvoltare web și SEO. Abonează-te la newsletter pentru a nu rata niciun articol!"
        keywords="blog marketing digital, sfaturi SEO, tendințe web development, marketing online, digital trends"
        canonical="https://www.lightningrevenue.ro/blog"
      />
      <SchemaOrg 
        type="WebPage"
        name="Blog LightningRevenue"
        description="Blog de marketing digital și dezvoltare web"
      />
      <Header />
      
      <main className="min-h-screen">
        <section className="pt-32 pb-20 bg-[#F5F5F7]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex justify-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2 
                    }}
                  >
                    <FaNewspaper className="text-6xl md:text-7xl text-primary" />
                  </motion.div>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                  Stai Pe Fază!
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Blog-ul Nostru Va Fi
                  </span>
                  <span className="block text-gray-900">
                    🚀 Disponibil În Curând 🚀
                  </span>
                </h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Pregătim conținut captivant despre marketing digital, dezvoltare web, 
                  și strategii de creștere pentru afacerea ta.
                </motion.p>
              </motion.div>

              <motion.div
                className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-4">Fii Primul Care Află!</h2>
                  <p className="text-gray-600">
                    Abonează-te la newsletter și primește notificări când publicăm articole noi.
                  </p>
                </div>

                {isSubscribed ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center text-primary"
                  >
                    <FaRocket className="text-4xl mx-auto mb-4" />
                    <p className="text-xl font-medium">
                      Mulțumim pentru abonare! 🎉
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Adresa ta de email"
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-primary text-white rounded-xl text-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Mă Abonez</span>
                      <FaRocket className="text-xl" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;