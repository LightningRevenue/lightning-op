import React from 'react';
import { 
  FaPalette, FaGlobe, FaServer, FaImage, FaFileAlt, FaToolbox,
  FaRegCopy, FaGlobeAmericas, FaNetworkWired, FaCheck, FaPenFancy, FaChartLine
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import Contact from '../components/home/Contact';

const Branding = () => {
  const features = [
    {
      icon: <FaGlobe />,
      title: "Domain Management",
      description: "Înregistrare, transfer și administrare profesională a domeniilor web pentru business-ul tău."
    },
    {
      icon: <FaServer />,
      title: "DNS & Hosting",
      description: "Configurare DNS, găzduire și management domenii cu suport tehnic 24/7."
    },
    {
      icon: <FaPalette />,
      title: "Design Logo",
      description: "Creație logo-uri originale și memorabile care reflectă identitatea brandului tău."
    },
    {
      icon: <FaImage />,
      title: "Identitate Vizuală",
      description: "Dezvoltare brand book și materiale vizuale pentru o identitate consistentă."
    },
    {
      icon: <FaFileAlt />,
      title: "Brand Guidelines",
      description: "Ghiduri complete de utilizare a elementelor de brand și materiale corporate."
    },
    {
      icon: <FaToolbox />,
      title: "Brand Kit Digital",
      description: "Pachete complete de materiale pentru prezența online și offline a brandului."
    }
  ];

  const domainServices = [
    {
      icon: <FaGlobeAmericas />,
      name: "Înregistrare Domenii",
      description: "Toate extensiile populare"
    },
    {
      icon: <FaNetworkWired />,
      name: "DNS Management",
      description: "Configurare & optimizare"
    },
    {
      icon: <FaCheck />,
      name: "Protecție Domenii",
      description: "Securitate & backup"
    },
    {
      icon: <FaPenFancy />,
      name: "Branding Digital",
      description: "Identitate completă"
    }
  ];

  const services = [
    {
      icon: <FaGlobe />,
      title: "Domain Services",
      description: "Servicii complete pentru domeniile tale web",
      features: [
        "Înregistrare domenii noi",
        "Transfer domenii existente",
        "Configurare DNS și Email",
        "Protecție WHOIS și domeniu"
      ]
    },
    {
      icon: <FaPalette />,
      title: "Brand Identity",
      description: "Dezvoltare identitate vizuală completă",
      features: [
        "Logo design profesional",
        "Paletă culori & tipografie",
        "Materiale corporate",
        "Social media kit"
      ]
    },
    {
      icon: <FaRegCopy />,
      title: "Brand Voice",
      description: "Definirea vocii și personalității brandului",
      features: [
        "Strategie comunicare",
        "Ton of voice",
        "Messaging guidelines",
        "Content strategy"
      ]
    }
  ];

  const metrics = [
    {
      icon: <FaChartLine />,
      title: "Domenii Gestionate",
      value: "1000+",
      description: "Pentru clienții noștri"
    },
    {
      icon: <FaPalette />,
      title: "Proiecte Branding",
      value: "250+",
      description: "Identity complete"
    },
    {
      icon: <FaCheck />,
      title: "Satisfacție Clienți",
      value: "99%",
      description: "Recenzii pozitive"
    }
  ];

  const faq = [
    {
      question: "Ce extensii de domenii oferiți?",
      answer: "Oferim toate extensiile populare (.ro, .com, .eu, etc) precum și extensii noi (gTLDs). Vă ajutăm să alegeți extensia potrivită pentru business-ul dvs."
    },
    {
      question: "Cât durează procesul de branding?",
      answer: "Un proiect complet de branding durează între 3-6 săptămâni, incluzând research, design, revizuiri și livrarea tuturor materialelor."
    },
    {
      question: "Ce include un pachet complet de branding?",
      answer: "Pachetul complet include: logo design, brand guidelines, materiale corporate (cărți de vizită, template-uri, etc), social media kit și manual de brand."
    }
  ];

  return (
    <>
      <SEO 
        title="Servicii Branding & Domenii | Identitate Vizuală & Domain Management"
        description="Servicii profesionale de branding și management domenii. Creăm identități de brand memorabile și asigurăm prezența ta online completă."
        keywords="branding, logo design, identitate vizuală, brand guidelines, înregistrare domenii, dns management, hosting domenii, brand identity"
        canonical="https://www.lightningoperational.ro/branding"
      />
      <SchemaOrg 
        type="Service"
        name="Servicii Branding și Domain Management"
        description="Servicii complete de branding și administrare domenii pentru prezență online profesională"
        provider="Lightning Revenue"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="font-heading text-5xl font-bold mb-8 leading-tight text-gray-900">
                  Branding & Domain
                  <span className="block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                    Management
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Construiește o identitate memorabilă și asigură-ți prezența online cu servicii complete de branding și administrare domenii.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className="text-primary text-3xl mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Domain Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Servicii Complete
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {domainServices.map((service, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-md transition-all">
                    <div className="text-4xl text-primary mb-4">{service.icon}</div>
                    <h3 className="font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Procesul Nostru
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Discovery & Research</h3>
                    <p className="text-gray-600">Înțelegem obiectivele și valorie brandului tău pentru o strategie personalizată.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Concept & Design</h3>
                    <p className="text-gray-600">Dezvoltăm concepte creative și elemente vizuale distinctive.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementare & Setup</h3>
                    <p className="text-gray-600">Configurăm toate elementele tehnice și livrăm materialele finale.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Support & Management</h3>
                    <p className="text-gray-600">Oferim suport continuu și gestionăm toate aspectele tehnice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Pachete de Servicii
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="text-3xl text-primary mb-6">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary shrink-0" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Rezultate și Expertiză
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl">
                    <div className="text-3xl text-primary mb-4">{metric.icon}</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <h3 className="font-bold text-lg mb-2">{metric.title}</h3>
                    <p className="text-gray-600">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Întrebări Frecvente
              </h2>
              <div className="space-y-6">
                {faq.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Branding;