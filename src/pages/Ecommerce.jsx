import React from 'react';
import { 
  FaShoppingCart, FaStore, FaMobileAlt, FaCreditCard, FaChartLine,
  FaShieldAlt, FaSync, FaTruck, FaBox, FaUsers, FaCogs, FaQuestion,
  FaWordpress, FaShopify, FaMagento, FaStore as FaStoreAlt, FaClock, FaMoneyBillWave,
  FaStar, FaTools, FaGlobe, FaRocket, FaUserFriends, FaLightbulb
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import Contact from '../components/home/Contact';

const Ecommerce = () => {
  const features = [
    {
      icon: <FaStore />,
      title: "Magazine Online Personalizate",
      description: "Platforme e-commerce create special pentru nevoile afacerii tale, cu focus pe experiența utilizatorului și conversii."
    },
    {
      icon: <FaMobileAlt />,
      title: "Design Responsive",
      description: "Magazine online optimizate pentru toate dispozitivele, oferind o experiență de cumpărare excelentă pe orice ecran."
    },
    {
      icon: <FaCreditCard />,
      title: "Sisteme de Plată",
      description: "Integrare cu multiple metode de plată și gateway-uri securizate pentru tranzacții sigure."
    },
    {
      icon: <FaChartLine />,
      title: "Analytics și Raportare",
      description: "Sisteme complete de analiză și raportare pentru monitorizarea performanței și luarea deciziilor."
    },
    {
      icon: <FaSync />,
      title: "Integrări Multiple",
      description: "Conectare cu sisteme ERP, contabilitate, curierat și alte servicii esențiale pentru e-commerce."
    },
    {
      icon: <FaShieldAlt />,
      title: "Securitate Avansată",
      description: "Protecție completă a datelor și tranzacțiilor, conformitate GDPR și certificare SSL."
    }
  ];

  const technologies = [
    {
      icon: <FaShopify />,
      name: "Shopify",
      description: "Platformă completă e-commerce"
    },
    {
      icon: <FaWordpress />,
      name: "WooCommerce",
      description: "Soluție flexibilă pentru WordPress"
    },
    {
      icon: <FaMagento />,
      name: "Magento",
      description: "Pentru magazine complexe"
    },
    {
      icon: <FaStoreAlt />,
      name: "Soluții Custom",
      description: "Dezvoltare personalizată"
    }
  ];

  const solutionTypes = [
    {
      icon: <FaBox />,
      title: "B2C E-commerce",
      description: "Magazine online pentru vânzare directă către consumatori",
      features: ["Catalog produse avansat", "Coș de cumpărături intuitiv", "Sistem de review-uri", "Program de fidelizare"]
    },
    {
      icon: <FaUsers />,
      title: "B2B E-commerce",
      description: "Platforme specializate pentru tranzacții business-to-business",
      features: ["Prețuri personalizate", "Comenzi în bulk", "Conturi corporate", "Fluxuri de aprobare"]
    },
    {
      icon: <FaTruck />,
      title: "Marketplace",
      description: "Platforme multi-vendor pentru multiple afaceri",
      features: ["Management vânzători", "Comisioane automate", "Dashboard vendor", "Sistem de dispute"]
    }
  ];

  const benefits = [
    {
      icon: <FaClock />,
      title: "Vânzări 24/7",
      value: "365",
      description: "Zile pe an de vânzări automate"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Creștere Vânzări",
      value: "+200%",
      description: "Creștere medie după implementare"
    },
    {
      icon: <FaStar />,
      title: "Satisfacție Clienți",
      value: "96%",
      description: "Rata de satisfacție confirmată"
    }
  ];

  const faq = [
    {
      question: "Cât durează implementarea unui magazin online?",
      answer: "Durata variază în funcție de complexitatea proiectului. Un magazin online de bază poate fi gata în 3-4 săptămâni, în timp ce o platformă complexă poate necesita 2-4 luni."
    },
    {
      question: "Ce platformă e-commerce este potrivită pentru afacerea mea?",
      answer: "Recomandarea platformei depinde de mai mulți factori: numărul de produse, buget, nevoi de personalizare, integrări necesare. Oferim consultanță pentru a alege soluția optimă."
    },
    {
      question: "Ce metode de plată pot integra în magazinul online?",
      answer: "Putem integra orice metodă de plată populară: card, PayPal, transfer bancar, plată la livrare, precum și soluții locale specifice pieței tale."
    }
  ];

  const additionalFeatures = [
    {
      icon: <FaTools />,
      title: "Managementul Produselor",
      description: "Sistem avansat de gestionare a produselor, stocurilor și variantelor cu import/export în masă."
    },
    {
      icon: <FaGlobe />,
      title: "Multi-language",
      description: "Suport pentru multiple limbi și valute, perfect pentru expansiune internațională."
    },
    {
      icon: <FaRocket />,
      title: "Marketing Automation",
      description: "Automatizări pentru email marketing, abandoned cart recovery și cross-selling."
    }
  ];

  const marketingSolutions = [
    {
      icon: <FaUserFriends />,
      title: "Remarketing",
      features: [
        "Facebook Pixel Integration",
        "Google Ads Remarketing",
        "Dynamic Product Ads",
        "Customer Segmentation"
      ]
    },
    {
      icon: <FaLightbulb />,
      title: "SEO E-commerce",
      features: [
        "Optimizare produse",
        "Rich Snippets",
        "Sitemap dinamic",
        "URL-uri optimizate"
      ]
    }
  ];

  const integrationOptions = [
    {
      title: "ERP & Contabilitate",
      systems: ["SAP", "Oracle", "Saga", "SmartBill"]
    },
    {
      title: "Curierat",
      systems: ["FanCourier", "Cargus", "DHL", "GLS"]
    },
    {
      title: "Plăți",
      systems: ["Stripe", "PayPal", "Mobilpay", "Netopia"]
    }
  ];

  return (
    <>
      <SEO 
        title="Creare Magazin Online | Soluții E-commerce Profesionale | Lightning Revenue"
        description="Dezvoltare magazine online personalizate pentru afacerea ta. Platforme e-commerce optimizate SEO, integrări multiple, suport 24/7. Creștem vânzările tale online!"
        keywords="magazin online, creare magazin online, platformă e-commerce, dezvoltare magazin online, woocommerce, shopify, magento, prestashop, soluții e-commerce, vânzări online, comerț electronic, optimizare seo magazin online, platformă marketplace"
        canonical="https://www.lightningoperational.ro/ecommerce"
      />
      <SchemaOrg 
        type="Service"
        name="Servicii E-commerce"
        description="Servicii profesionale de dezvoltare magazine online și soluții e-commerce"
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
                  Soluții Complete
                  <span className="block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                    E-commerce
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transformăm afacerea ta într-un motor de vânzări online, cu focus pe experiența clientului și optimizare pentru conversii.
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

              <div className="text-center">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full text-lg font-medium transition-all duration-300"
                >
                  Solicită o Consultație Gratuită
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

        {/* Benefits Section - Moved up to show value proposition early */}
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

        {/* Main Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
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

        {/* Solution Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Tipuri de Soluții
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutionTypes.map((solution, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                    <div className="text-3xl text-primary mb-6">{solution.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
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

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Platforme E-commerce
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

        {/* Integration Options Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Integrări Disponibile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {integrationOptions.map((option, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {option.systems.map((system, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Soluții de Marketing E-commerce
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {marketingSolutions.map((solution, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                    <div className="text-3xl text-primary mb-6">{solution.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600">
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

        {/* Additional Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Funcționalități Avansate
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalFeatures.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                    <div className="text-3xl text-primary mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Text Content Section - Moved towards the end for better content flow */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Crearea unui Magazin Online Profesional pentru Afacerea Ta
              </h2>
              
              {/* Key Benefits Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">De ce să Alegi un Magazin Online Professional?</h3>
                <p>
                  În era digitală actuală, prezența online nu mai este doar o opțiune, ci o necesitate pentru orice afacere care dorește să rămână competitivă. Un magazin online profesional reprezintă poarta ta către o piață globală, oferind clienților tăi posibilitatea de a cumpăra produsele tale 24/7, fără limitări geografice sau temporale.
                </p>
                <p>
                  La Lightning Revenue, dezvoltăm soluții e-commerce personalizate care transformă vizitatorii în clienți fideli. Platformele noastre sunt construite cu focus pe experiența utilizatorului, optimizare pentru motoarele de căutare (SEO) și rate de conversie maxime.
                </p>
              </div>

              {/* Advantages Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Avantajele unui Magazin Online Optimizat</h3>
                <ul className="space-y-4">
                  <li>
                    <strong>Creșterea Vânzărilor:</strong> Prin automatizarea proceselor de vânzare și implementarea strategiilor de marketing digital, magazinul tău online poate genera venituri constante, 24/7.
                  </li>
                  <li>
                    <strong>Prezență Globală:</strong> Eliminarea barierelor geografice îți permite să vinzi produsele la nivel național și internațional, accesând noi piețe și oportunități de creștere.
                  </li>
                  <li>
                    <strong>Reducerea Costurilor Operaționale:</strong> Automatizarea proceselor reduce necesitatea intervenției manuale, minimizând costurile cu personalul și eliminând multe cheltuieli asociate unui magazin fizic.
                  </li>
                  <li>
                    <strong>Date și Analize în Timp Real:</strong> Acces la statistici detaliate despre comportamentul clienților, preferințele de cumpărare și performanța produselor.
                  </li>
                </ul>
              </div>

              {/* Solutions Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Soluții E-commerce Adaptate Nevoilor Tale</h3>
                <p>
                  Fiecare afacere este unică, iar soluția e-commerce trebuie să reflecte această unicitate. De la magazine online B2C pentru retail, la platforme B2B complexe sau marketplace-uri multi-vendor, echipa noastră dezvoltă soluții personalizate care se adaptează perfect cerințelor specifice ale afacerii tale.
                </p>
                <p>
                  Platformele noastre e-commerce sunt construite folosind tehnologii moderne și scalabile precum WooCommerce, Shopify, Magento sau soluții custom, asigurând performanță optimă, securitate maximă și flexibilitate în dezvoltare.
                </p>
              </div>

              {/* SEO Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Optimizare SEO pentru E-commerce</h3>
                <p>
                  Un magazin online bine optimizat pentru motoarele de căutare este esențial pentru succesul în mediul digital. Implementăm cele mai bune practici SEO pentru e-commerce, incluzând:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Optimizare On-Page:</strong> Structură URL prietenoasă, meta descrieri optimizate, titluri SEO pentru categorii și produse.
                  </li>
                  <li>
                    <strong>Optimizare Tehnică:</strong> Viteză de încărcare optimizată, structură internă eficientă, implementare AMP pentru mobil.
                  </li>
                  <li>
                    <strong>Rich Snippets:</strong> Implementare schema.org pentru produse, review-uri și rating-uri, prețuri și disponibilitate.
                  </li>
                  <li>
                    <strong>Content Optimization:</strong> Descrieri unice pentru produse, blog integrat, ghiduri de cumpărare și content relevant pentru utilizatori.
                  </li>
                </ul>
              </div>

              {/* Integrations Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Integrări și Automatizări pentru Eficiență Maximă</h3>
                <p>
                  Un magazin online modern necesită multiple integrări pentru a funcționa eficient. Oferim integrări complete cu:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Sisteme ERP și Contabilitate:</strong> Saga, SmartBill, SAP, pentru gestiunea automată a stocurilor și contabilitate.
                  </li>
                  <li>
                    <strong>Servicii de Curierat:</strong> FanCourier, Cargus, DHL, pentru procesare automată a comenzilor și AWB-urilor.
                  </li>
                  <li>
                    <strong>Soluții de Plată:</strong> Card, PayPal, plată la livrare, rate online, pentru flexibilitate maximă în procesul de checkout.
                  </li>
                  <li>
                    <strong>Marketing Automation:</strong> Email marketing, abandoned cart recovery, cross-selling și up-selling automatizat.
                  </li>
                </ul>
              </div>

              {/* Security Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Securitate și Conformitate</h3>
                <p>
                  Securitatea datelor și conformitatea cu reglementările în vigoare sunt prioritare în dezvoltarea magazinelor online. Implementăm:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Certificare SSL:</strong> Criptare end-to-end pentru toate tranzacțiile și datele sensibile.
                  </li>
                  <li>
                    <strong>Conformitate GDPR:</strong> Implementare completă a cerințelor privind protecția datelor personale.
                  </li>
                  <li>
                    <strong>Securitate PCI-DSS:</strong> Pentru procesarea sigură a plăților cu cardul.
                  </li>
                  <li>
                    <strong>Backup și Monitorizare:</strong> Sisteme automate de backup și monitorizare 24/7 a securității.
                  </li>
                </ul>
              </div>

              {/* Support Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Suport și Mentenanță Continuă</h3>
                <p>
                  Succesul unui magazin online necesită atenție și îmbunătățiri continue. Oferim:
                </p>
                <ul className="space-y-4">
                  <li>
                    <strong>Suport Tehnic 24/7:</strong> Asistență tehnică promptă pentru rezolvarea oricăror probleme.
                  </li>
                  <li>
                    <strong>Actualizări de Securitate:</strong> Menținerea platformei la zi cu cele mai recente patch-uri de securitate.
                  </li>
                  <li>
                    <strong>Optimizări Continue:</strong> Monitorizare și îmbunătățire constantă a performanței și ratelor de conversie.
                  </li>
                  <li>
                    <strong>Consultanță E-commerce:</strong> Sfaturi și strategii pentru creșterea vânzărilor online.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Moved to end before contact */}
        <section className="py-20 bg-white">
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

        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default Ecommerce;