import React from 'react';
import { 
  FaSearch, FaChartLine, FaCog, FaLink, FaNewspaper, FaMobileAlt,
  FaGoogle, FaBullseye, FaSearchPlus, FaGlobe, FaClipboardList, FaChartBar,
  FaQuestion, FaClock, FaMoneyBillWave, FaStar, FaRocket
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import Contact from '../components/home/Contact';

const OptimizareSEO = () => {
  const features = [
    {
      icon: <FaSearchPlus />,
      title: "Audit SEO Complet",
      description: "Analiză tehnică detaliată, audit de conținut și analiza competiției pentru identificarea oportunităților de optimizare."
    },
    {
      icon: <FaCog />,
      title: "Optimizare Tehnică",
      description: "Implementare best practices SEO, optimizare viteză, structură URL, sitemap, robots.txt și meta tag-uri."
    },
    {
      icon: <FaNewspaper />,
      title: "Optimizare Conținut",
      description: "Strategii de content marketing și optimizare on-page bazate pe intent search și keyword research."
    },
    {
      icon: <FaLink />,
      title: "Link Building",
      description: "Strategii white-hat de construire backlink-uri și creștere autoritate domeniu prin Digital PR."
    },
    {
      icon: <FaChartLine />,
      title: "Monitorizare & Raportare",
      description: "Tracking poziții, trafic organic și KPI-uri relevante cu rapoarte lunare detaliate."
    },
    {
      icon: <FaMobileAlt />,
      title: "Optimizare Mobile",
      description: "Asigurăm experiență optimă pe mobile și implementăm Mobile-First Indexing conform cerințelor Google."
    }
  ];

  const technologies = [
    {
      icon: <FaGoogle />,
      name: "Google Search Console",
      description: "Monitorizare indexare și performanță"
    },
    {
      icon: <FaChartBar />,
      name: "Google Analytics 4",
      description: "Analiză trafic și comportament"
    },
    {
      icon: <FaGlobe />,
      name: "SEMrush & Ahrefs",
      description: "Research și analiză competiție"
    },
    {
      icon: <FaRocket />,
      name: "PageSpeed Insights",
      description: "Optimizare performanță site"
    }
  ];

  const serviceTypes = [
    {
      icon: <FaSearchPlus />,
      title: "SEO Local",
      description: "Optimizare pentru afaceri locale și prezență îmbunătățită în rezultatele Google Maps",
      features: ["Optimizare Google Business Profile", "Citations și directoare locale", "Optimizare conținut local", "Strategii locale targeting"]
    },
    {
      icon: <FaGlobe />,
      title: "SEO Național",
      description: "Strategii complete pentru vizibilitate la nivel național și autoritate în domeniu",
      features: ["Keyword research extins", "Content marketing avansat", "Link building authority", "Brand awareness"]
    },
    {
      icon: <FaBullseye />,
      title: "SEO E-commerce",
      description: "Soluții specializate pentru magazine online și platforme de comerț electronic",
      features: ["Optimizare pagini produs", "Structură categorii", "Rich snippets", "Optimizare conversii"]
    }
  ];

  const benefits = [
    {
      icon: <FaChartLine />,
      title: "Creștere Trafic Organic",
      value: "+150%",
      description: "Creștere medie în 6 luni"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "ROI Măsurabil",
      value: "3.5x",
      description: "Return of Investment mediu"
    },
    {
      icon: <FaStar />,
      title: "Poziții în Top 3",
      value: "80%",
      description: "Din cuvintele cheie țintite"
    }
  ];

  const faq = [
    {
      question: "Cât durează să văd rezultate cu SEO?",
      answer: "Rezultatele SEO încep să fie vizibile în 3-6 luni, cu îmbunătățiri continue. Factori precum competiția, vechimea domeniului și autoritatea site-ului influențează timpul necesar pentru rezultate optime."
    },
    {
      question: "Ce include un audit SEO complet?",
      answer: "Auditul SEO include analiza tehnică (viteză, mobile-friendly, structură), analiza conținutului, audit backlink-uri, research competiție, oportunități de optimizare și plan de acțiune detaliat."
    },
    {
      question: "Cum măsurați succesul strategiilor SEO?",
      answer: "Monitorizăm multiple KPI-uri: poziții în Google, trafic organic, rata de conversie, vizibilitate brand, engagement metrics și ROI. Furnizăm rapoarte lunare detaliate."
    }
  ];

  return (
    <>
      <SEO 
        title="Servicii Optimizare SEO Premium | SEO Expert România"
        description="Servicii profesionale de optimizare SEO pentru creșterea vizibilității online. Strategii personalizate, rezultate măsurabile și expertiză dovedită în poziționare Google."
        keywords="optimizare seo, servicii seo, specialist seo, expert seo, promovare google, audit seo, seo romania, optimizare site, seo profesional, marketing online"
        canonical="https://www.lightningoperational.ro/optimizare-seo"
      />
      <SchemaOrg 
        type="Service"
        name="Servicii Optimizare SEO"
        description="Servicii profesionale de optimizare SEO și strategii de creștere vizibilitate online"
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
                    Optimizare SEO
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creștem vizibilitatea ta online prin strategii SEO avansate și tehnici dovedite de poziționare în Google.
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

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Procesul Nostru de Optimizare
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Audit și Analiză</h3>
                    <p className="text-gray-600">Evaluăm starea actuală SEO, analizam competiția și identificăm oportunitățile de creștere.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategie și Planning</h3>
                    <p className="text-gray-600">Dezvoltăm strategia SEO personalizată și planul de acțiune bazat pe obiectivele tale.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementare și Optimizare</h3>
                    <p className="text-gray-600">Aplicăm optimizările tehnice, dezvoltăm conținut și construim autoritate prin link building.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Monitorizare și Îmbunătățire</h3>
                    <p className="text-gray-600">Urmărim performanța, adaptăm strategia și optimizăm continuu pentru rezultate mai bune.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Instrumente și Tehnologii
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

        {/* Service Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Tipuri de Servicii SEO
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {serviceTypes.map((service, index) => (
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Rezultate Măsurabile
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

        <Contact />
      </main>
      
      <Footer />
    </>
  );
};

export default OptimizareSEO;