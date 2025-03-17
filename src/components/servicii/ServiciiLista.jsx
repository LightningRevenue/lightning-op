import React, { useState } from 'react';
import { FaCode, FaSearch, FaMegaport, FaFacebookF, FaServer, FaPalette, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiciiLista = () => {
  const [activeTab, setActiveTab] = useState('web');

  const servicii = {
    web: {
      icon: <FaCode />,
      title: "Dezvoltare Web",
      description: "Creăm site-uri web și aplicații performante care convertesc vizitatori în clienți",
      features: [
        "Design UI/UX personalizat și responsive",
        "Optimizare pentru viteză și performanță",
        "Integrare cu sisteme de management al conținutului",
        "Dezvoltare de aplicații web complexe",
        "Mentenanță și suport tehnic"
      ],
      benefits: "Site-uri web optimizate pentru conversie și experiență excelentă a utilizatorului",
      path: "/dezvoltare-web"
    },
    seo: {
      icon: <FaSearch />,
      title: "Optimizare SEO",
      description: "Strategii SEO complete pentru vizibilitate organică și clasare în topul rezultatelor Google",
      features: [
        "Audit SEO și analiza competiției",
        "Optimizare on-page și tehnică",
        "Creare de conținut optimizat SEO",
        "Link building și PR digital",
        "Monitorizare și raportare lunară"
      ],
      benefits: "Creșterea traficului organic și a poziționării în motoarele de căutare",
      path: "/optimizare-seo"
    },
    marketing: {
      icon: <FaMegaport />,
      title: "Marketing Digital",
      description: "Strategii integrate de marketing digital pentru creșterea și scalarea afacerii tale",
      features: [
        "Strategii personalizate de marketing",
        "Campanii Google Ads și remarketing",
        "Email marketing și automatizări",
        "Marketing de conținut",
        "Analiză și optimizare continuă"
      ],
      benefits: "ROI măsurabil și creșterea constantă a vânzărilor online",
      path: "/marketing-digital"
    },
    social: {
      icon: <FaFacebookF />,
      title: "Social Media",
      description: "Management profesionist al rețelelor sociale și creșterea engagement-ului",
      features: [
        "Strategii de conținut social media",
        "Creare și programare postări",
        "Campanii de advertising social",
        "Monitorizare și interacțiune",
        "Raportare și analiză detaliată"
      ],
      benefits: "Comunitate activă și prezență puternică în social media",
      path: "/social-media"
    },
    hosting: {
      icon: <FaServer />,
      title: "Hosting & Security",
      description: "Soluții complete de hosting, securitate și conformitate pentru mediul B2B",
      features: [
        "Hosting managed & cloud services",
        "Certificare ISO 27001",
        "Securitate avansată & firewall",
        "Backup & disaster recovery",
        "Monitorizare 24/7 & suport"
      ],
      benefits: "Infrastructură sigură și conformă cu standardele internaționale",
      path: "/hosting-security"
    },
    branding: {
      icon: <FaPalette />,
      title: "Branding & Identitate",
      description: "Construim identități de brand memorabile și asigurăm prezența ta online completă",
      features: [
        "Înregistrare și management domenii",
        "Hosting domenii și DNS management",
        "Design logo și identitate vizuală",
        "Brand guidelines și materiale",
        "Consultanță și strategie brand"
      ],
      benefits: "Identitate profesională și prezență online completă și coerentă",
      path: "/branding"
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-4xl font-bold mb-8 leading-tight text-gray-900">
              Servicii Complete de
              <span className="block text-primary">Marketing Digital</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Soluții integrate și personalizate pentru prezența ta online, 
              de la dezvoltare web la strategii complexe de marketing digital.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {Object.keys(servicii).map(key => (
              <button
                key={key}
                className={`p-6 text-center rounded-xl transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(key)}
              >
                <div className="text-2xl mb-3">
                  {servicii[key].icon}
                </div>
                <h3 className="font-medium text-sm">
                  {servicii[key].title}
                </h3>
              </button>
            ))}

          </div>

          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="text-4xl text-primary mb-6">
                  {servicii[activeTab].icon}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  {servicii[activeTab].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {servicii[activeTab].description}
                </p>
                <div className="mb-8">
                  <h4 className="font-bold mb-4 text-gray-900">Ce oferim:</h4>
                  <ul className="space-y-3">
                    {servicii[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  Beneficii: <span className="text-gray-600">{servicii[activeTab].benefits}</span>
                </p>
                <div className="mt-8">
                  <Link
                    to={servicii[activeTab].path}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Vezi Detalii Complete
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
              

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-transparent rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={activeTab === 'web' 
                        ? require('../../images/services/web-dev.png') 
                        : activeTab === 'marketing'
                        ? require('../../images/services/marketing.png')
                        : activeTab === 'seo'
                        ? require('../../images/services/seo.png')
                        : activeTab === 'social'
                        ? require('../../images/services/social-media.webp')
                        : activeTab === 'hosting'
                        ? require('../../images/services/security.png')
                        : activeTab === 'branding'
                        ? require('../../images/services/branding.webp')
                        : `/images/servicii/${activeTab}.jpg`}
                      alt={servicii[activeTab].title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciiLista;