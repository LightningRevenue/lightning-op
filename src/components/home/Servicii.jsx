import React from 'react';
import { Helmet } from 'react-helmet';
import { 
  FaLaptopCode, FaSearchPlus, FaChartLine, FaInstagram, 
  FaBullhorn, FaShoppingCart, FaRocket, FaShieldAlt,
  FaPiggyBank
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Servicii = () => {
  const servicii = [
    {
      id: 1,
      icon: <FaLaptopCode className="text-4xl" />,
      titlu: "Dezvoltare Web Profesională",
      descriere: "Creăm site-uri web responsive, rapide și optimizate pentru conversii. Folosim tehnologii moderne precum React, Next.js și Node.js",
      beneficii: ["Optimizare pentru viteza de încărcare", "Design responsive", "Integrare CMS", "Securitate avansată"],
      link: "/dezvoltare-web"
    },
    {
      id: 2,
      icon: <FaSearchPlus className="text-4xl" />,
      titlu: "Optimizare SEO Avansată",
      descriere: "Strategii SEO complete pentru creșterea vizibilității în Google. Analiză competitivă, optimizare on-page și link building",
      beneficii: ["Audit SEO complet", "Optimizare locală", "Raportare lunară", "Content marketing"],
      link: "/optimizare-seo"
    },
    {
      id: 3,
      icon: <FaChartLine className="text-4xl" />,
      titlu: "Marketing Digital Strategic",
      descriere: "Campanii de marketing personalizate cu focus pe ROI. Strategii integrate pentru maximizarea conversiilor",
      beneficii: ["PPC Management", "Email Marketing", "Marketing Automation", "Analiză și Raportare"],
      link: "/marketing-digital"
    },
    {
      id: 4,
      icon: <FaInstagram className="text-4xl" />,
      titlu: "Social Media Management",
      descriere: "Gestionare completă a prezenței sociale, crearea de conținut viral și campanii de advertising",
      beneficii: ["Content Creation", "Community Management", "Paid Advertising", "Influencer Marketing"],
      link: "/social-media"
    },
    {
      id: 5,
      icon: <FaBullhorn className="text-4xl" />,
      titlu: "Branding & Identitate",
      descriere: "Dezvoltare și consolidare a identității de brand prin strategii creative și comunicare consistentă",
      beneficii: ["Logo Design", "Brand Guidelines", "Voice & Tone", "Brand Strategy"],
      link: "/branding"
    },
    {
      id: 6,
      icon: <FaShoppingCart className="text-4xl" />,
      titlu: "E-Commerce Solutions",
      descriere: "Implementare și optimizare magazine online cu focus pe experiența utilizatorului și conversii",
      beneficii: ["Platforme Custom", "Optimizare UX", "Integrări Payment", "Analytics Setup"],
      link: "/ecommerce"
    },
    {
      id: 7,
      icon: <FaRocket className="text-4xl" />,
      titlu: "Growth Marketing",
      descriere: "Strategii de creștere accelerată bazate pe date și experimente continue",
      beneficii: ["A/B Testing", "CRO", "User Analytics", "Growth Hacking"],
      link: "/growth-marketing"
    },
    {
      id: 8,
      icon: <FaShieldAlt className="text-4xl" />,
      titlu: "Securitate & Mentenanță",
      descriere: "Protecție completă și mentenanță continuă pentru prezența ta online",
      beneficii: ["Security Audits", "Backup Systems", "Monitoring 24/7", "Update Management"],
      link: "/securitate"
    },
    {
      id: 9,
      icon: <FaPiggyBank className="text-4xl" />,
      titlu: "Finanțare Startup",
      descriere: "Asistență completă pentru accesarea finanțărilor și dezvoltarea sustenabilă a startup-ului tău",
      beneficii: [
        "Consultanță accesare fonduri",
        "Plan de afaceri profesionist",
        "Mentoring startup",
        "Conexiuni cu investitori"
      ],
      link: "/finantare-startup"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicii Complete de Marketing Digital, Dezvoltare Web și Finanțare Startup | Lightning</title>
        <meta name="description" content="Descoperă serviciile noastre premium de marketing digital, dezvoltare web, optimizare SEO și finanțare pentru startup-uri. Soluții personalizate pentru creșterea afacerii tale online." />
        <meta name="keywords" content="dezvoltare web, SEO, marketing digital, social media, e-commerce, securitate web, growth marketing, branding, finantare startup" />
      </Helmet>
      
      <section id="servicii" className="py-32 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                Servicii Premium pentru 
                <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                  Creșterea Afacerii Tale
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Oferim soluții digitale complete, adaptate nevoilor tale specifice
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicii.map((serviciu, index) => (
                <motion.div 
                  key={serviciu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 ease-out"
                >
                  <motion.div 
                    className="bg-primary/5 rounded-2xl w-16 h-16 flex items-center justify-center text-primary mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {serviciu.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{serviciu.titlu}</h3>
                  <p className="text-gray-600 mb-6">{serviciu.descriere}</p>
                  <ul className="space-y-2 mb-6">
                    {serviciu.beneficii.map((beneficiu, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {beneficiu}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={serviciu.link}
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Află mai multe
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/servicii" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                Vezi toate serviciile
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicii;