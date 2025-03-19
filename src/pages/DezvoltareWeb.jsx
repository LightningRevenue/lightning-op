import React from 'react';
import { 
  FaCode, FaRocket, FaMobile, FaDatabase, FaSearch, FaShieldAlt,
  FaReact, FaNodeJs, FaPhp, FaWordpress, FaShoppingCart, FaChartLine,
  FaQuestion, FaClock, FaMoneyBillWave, FaStar
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import Contact from '../components/home/Contact';

const DezvoltareWeb = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Dezvoltare Front-end",
      description: "Interfețe moderne și responsive utilizând tehnologii de ultimă generație precum React, Next.js și Tailwind CSS."
    },
    {
      icon: <FaDatabase />,
      title: "Dezvoltare Back-end",
      description: "Arhitecturi robuste și scalabile, API-uri RESTful și integrări cu diverse servicii și baze de date."
    },
    {
      icon: <FaMobile />,
      title: "Design Responsive",
      description: "Site-uri perfect adaptate pentru toate dispozitivele, de la desktop la mobile, cu experiență optimă de utilizare."
    },
    {
      icon: <FaSearch />,
      title: "Optimizare SEO",
      description: "Implementare tehnică SEO avansată pentru maximizarea vizibilității în motoarele de căutare."
    },
    {
      icon: <FaRocket />,
      title: "Performanță",
      description: "Optimizare pentru viteză de încărcare și performanță, scor PageSpeed Insights excelent."
    },
    {
      icon: <FaShieldAlt />,
      title: "Securitate",
      description: "Implementare protocoale de securitate și protecție împotriva vulnerabilităților web."
    }
  ];

  const technologies = [
    {
      icon: <FaReact />,
      name: "React.js",
      description: "Dezvoltare aplicații web moderne și interactive"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      description: "Backend scalabil și performant"
    },
    {
      icon: <FaPhp />,
      name: "PHP",
      description: "Soluții web robuste și fiabile"
    },
    {
      icon: <FaWordpress />,
      name: "WordPress",
      description: "CMS personalizat și optimizat"
    }
  ];

  const projectTypes = [
    {
      icon: <FaShoppingCart />,
      title: "Magazine Online",
      description: "Platforme e-commerce complete cu sisteme de plăți, gestiune stoc și integrări multiple",
      features: ["Coș de cumpărături", "Sisteme de plată", "Managementul produselor", "Optimizare conversii"]
    },
    {
      icon: <FaChartLine />,
      title: "Aplicații Web",
      description: "Aplicații web complexe pentru automatizarea și optimizarea proceselor de business",
      features: ["Dashboard-uri interactive", "Sisteme CRM", "Automatizări", "Integrări API"]
    },
    {
      icon: <FaRocket />,
      title: "Landing Pages",
      description: "Pagini de destinație optimizate pentru conversii și rezultate măsurabile",
      features: ["Design conversion-focused", "A/B Testing", "Formulare optimizate", "Tracking avansat"]
    }
  ];

  const benefits = [
    {
      icon: <FaClock />,
      title: "Timp de Încărcare Rapid",
      value: "< 2s",
      description: "Optimizare pentru viteza de încărcare"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Rata de Conversie",
      value: "+150%",
      description: "Creștere medie după optimizare"
    },
    {
      icon: <FaStar />,
      title: "Satisfacție Clienți",
      value: "98%",
      description: "Feedback pozitiv confirmat"
    }
  ];

  const faq = [
    {
      question: "Cât durează dezvoltarea unui website?",
      answer: "Durata variază în funcție de complexitatea proiectului. Un site de prezentare poate fi gata în 2-4 săptămâni, în timp ce o platformă e-commerce complexă poate necesita 2-3 luni."
    },
    {
      question: "Ce include pachetul de mentenanță?",
      answer: "Pachetul de mentenanță include actualizări de securitate, backup-uri regulate, monitorizare performanță, suport tehnic și actualizări minore de conținut."
    },
    {
      question: "Site-ul va fi optimizat pentru mobil?",
      answer: "Da, toate proiectele noastre sunt dezvoltate folosind principiul Mobile First și sunt perfect adaptate pentru toate dispozitivele."
    }
  ];

  return (
    <>
      <SEO 
        title="Servicii Dezvoltare Web Professional | Lightning Operational"
        description="Expert în dezvoltare web și creare site-uri. Oferim soluții web personalizate, optimizate SEO și performante pentru afacerea ta. Consultație gratuită!"
        keywords="dezvoltare web, creare site, web design, programare web, dezvoltare aplicatii web, site responsive, site wordpress, site prezentare, landing page, magazin online, e-commerce"
        canonical="https://www.lightningoperational.ro/dezvoltare-web"
      />
      <SchemaOrg 
        type="Service"
        name="Servicii Dezvoltare Web"
        description="Servicii profesionale de dezvoltare web și creare site-uri pentru afaceri"
        provider="Lightning Operational"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="font-heading text-5xl font-bold mb-8 leading-tight text-gray-900">
                  Servicii Premium de
                  <span className="block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                    Dezvoltare Web
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformăm viziunea ta într-o prezență web remarcabilă, cu focus pe experiența utilizatorului, performanță și conversii.
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

              <div className="bg-gray-50 rounded-3xl p-12 mb-20">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                    Procesul Nostru de Dezvoltare
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Analiză și Planificare</h3>
                        <p className="text-gray-600">Înțelegem obiectivele tale de business și planificăm arhitectura optimă pentru proiectul tău.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Design și Prototipare</h3>
                        <p className="text-gray-600">Creăm design-ul și prototipul interactiv pentru validarea conceptului și experienței utilizatorului.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Dezvoltare și Testare</h3>
                        <p className="text-gray-600">Implementăm soluția folosind cele mai bune practici și tehnologii, cu testare riguroasă.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Lansare și Optimizare</h3>
                        <p className="text-gray-600">Lansăm proiectul și oferim suport continuu pentru optimizare și performanță.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-medium transition-all duration-300"
                >
                  Solicită o Ofertă Personalizată
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
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Tehnologii Utilizate
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <div className="text-4xl text-primary mb-4">{tech.icon}</div>
                    <h3 className="font-bold mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Tipuri de Proiecte
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projectTypes.map((project, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="text-3xl text-primary mb-6">{project.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Beneficii Măsurabile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl">
                    <div className="text-3xl text-primary mb-4">{benefit.icon}</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{benefit.value}</div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                      <FaQuestion className="text-primary" />
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
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
                Procesul Nostru de Dezvoltare
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analiză și Planificare</h3>
                    <p className="text-gray-600">Înțelegem obiectivele tale de business și planificăm arhitectura optimă pentru proiectul tău.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Design și Prototipare</h3>
                    <p className="text-gray-600">Creăm design-ul și prototipul interactiv pentru validarea conceptului și experienței utilizatorului.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dezvoltare și Testare</h3>
                    <p className="text-gray-600">Implementăm soluția folosind cele mai bune practici și tehnologii, cu testare riguroasă.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lansare și Optimizare</h3>
                    <p className="text-gray-600">Lansăm proiectul și oferim suport continuu pentru optimizare și performanță.</p>
                  </div>
                </div>
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

export default DezvoltareWeb;