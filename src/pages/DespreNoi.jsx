import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaChartLine, FaCogs, FaHandshake, FaAward } from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const DespreNoi = () => {
  const seoTags = [
    "Agenție Digitală",
    "Marketing Online",
    "Web Development",
    "SEO Expert",
    "Social Media",
    "Digital Growth"
  ];

  const servicii = [
    {
      icon: <FaCogs />,
      title: "Dezvoltare Web",
      description: "Site-uri responsive, aplicații web și platforme e-commerce optimizate pentru performanță"
    },
    {
      icon: <FaChartLine />,
      title: "SEO & Analytics",
      description: "Strategii SEO personalizate și analiză detaliată pentru creșterea vizibilității online"
    },
    {
      icon: <FaRocket />,
      title: "Marketing Digital",
      description: "Campanii de marketing personalizate pentru maximizarea ROI-ului"
    },
    {
      icon: <FaUsers />,
      title: "Social Media",
      description: "Gestionare profesională a rețelelor sociale și creștere organică"
    }
  ];

  const rezultate = [
    {
      cifra: "+150%",
      text: "Creștere Trafic",
      descriere: "Pentru clienții noștri"
    },
    {
      cifra: "95%",
      text: "Clienți Mulțumiți",
      descriere: "Feedback pozitiv"
    },
    {
      cifra: "+200%",
      text: "ROI Mediu",
      descriere: "În campaniile noastre"
    }
  ];

  return (
    <>
      <SEO 
        title="Despre LightningRevenue | Agenție Marketing Digital & Web Development"
        description="Suntem o echipă pasionată de specialiști în marketing digital, dezvoltare web și SEO, dedicați creșterii afacerii tale online. Descoperă povestea și serviciile noastre complete."
        keywords="agenție marketing digital, web development românia, SEO expert, social media marketing, digital agency, marketing online, dezvoltare web, optimizare SEO"
        canonical="https://www.lightningrevenue.ro/despre-noi"
      />
      <SchemaOrg 
        type="AboutPage"
        name="LightningRevenue"
        description="Agenție specializată în marketing digital și dezvoltare web"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F5F5F7]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                  Creștem 
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Afaceri Online
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                  O echipă tânără și pasionată, dedicată transformării viziunii tale digitale în realitate
                </p>

                <motion.div 
                  className="flex flex-wrap justify-center gap-3 mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {seoTags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium hover:bg-white hover:shadow-md transition-all cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
                    Povestea Noastră
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600">
                    <p>
                      LightningRevenue a luat naștere din pasiunea pentru digital și dorința de a ajuta 
                      afacerile să prospere în mediul online. Cu o experiență colectivă în marketing digital, 
                      dezvoltare web și SEO, am creat o agenție care pune accent pe rezultate măsurabile și 
                      creștere sustenabilă.
                    </p>
                    <p>
                      Deși suntem o echipă mică, această structură ne permite să fim agili, să ne adaptăm 
                      rapid la schimbările din piață și să oferim atenție personalizată fiecărui client. 
                      Credem în construirea de relații pe termen lung și în creșterea împreună cu clienții noștri.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-2 gap-6"
                >
                  <div className="bg-[#F5F5F7] p-8 rounded-2xl">
                    <FaHandshake className="text-4xl text-primary mb-4" />
                    <h3 className="font-bold text-xl mb-2">Parteneriat</h3>
                    <p className="text-gray-600">Creștem împreună cu clienții noștri</p>
                  </div>
                  <div className="bg-[#F5F5F7] p-8 rounded-2xl">
                    <FaAward className="text-4xl text-primary mb-4" />
                    <h3 className="font-bold text-xl mb-2">Calitate</h3>
                    <p className="text-gray-600">Focus pe excelență în livrare</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#F5F5F7]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
                  Servicii Complete pentru
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Creșterea Ta Online
                  </span>
                </h2>
                <p className="text-xl text-gray-600">
                  Oferim soluții integrate care acoperă toate aspectele prezenței tale digitale
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {servicii.map((serviciu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl"
                  >
                    <div className="text-3xl text-primary mb-4">{serviciu.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{serviciu.title}</h3>
                    <p className="text-gray-600">{serviciu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
                  Rezultate care
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Vorbesc de la Sine
                  </span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {rezultate.map((rezultat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-8 bg-[#F5F5F7] rounded-2xl"
                  >
                    <div className="text-4xl font-bold text-primary mb-4">{rezultat.cifra}</div>
                    <h3 className="text-xl font-bold mb-2">{rezultat.text}</h3>
                    <p className="text-gray-600">{rezultat.descriere}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#F5F5F7]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
                  Pregătit să Creștem
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Împreună?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  Hai să discutăm despre cum putem transforma viziunea ta digitală în realitate
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
                >
                  Contactează-ne Acum
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DespreNoi;