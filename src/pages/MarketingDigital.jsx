import React from 'react';
import { 
  FaChartLine, FaBullhorn, FaShoppingCart, FaUsers, FaEnvelope, 
  FaGoogle, FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok,
  FaSearchDollar, FaChartPie, FaClock, FaMoneyBillWave, FaStar 
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import Contact from '../components/home/Contact';

const MarketingDigital = () => {
  const features = [
    {
      icon: <FaBullhorn />,
      title: "Strategie Marketing Digital",
      description: "Dezvoltare strategie personalizată bazată pe obiectivele de business și analiza pieței."
    },
    {
      icon: <FaGoogle />,
      title: "Google Ads",
      description: "Campanii PPC optimizate pentru maximizarea ROI și creșterea conversiilor."
    },
    {
      icon: <FaFacebookF />,
      title: "Social Media Ads",
      description: "Campanii targetate pe social media pentru creșterea awareness-ului și a vânzărilor."
    },
    {
      icon: <FaEnvelope />,
      title: "Email Marketing",
      description: "Strategii de email marketing și marketing automation pentru nurturing și conversii."
    },
    {
      icon: <FaChartLine />,
      title: "Marketing Analytics",
      description: "Monitorizare și optimizare continuă bazată pe date și insights."
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Marketing",
      description: "Strategii specializate pentru creșterea vânzărilor online și a ratei de conversie."
    }
  ];

  const platforms = [
    {
      icon: <FaGoogle />,
      name: "Google Ads",
      description: "Search, Display & YouTube Ads"
    },
    {
      icon: <FaFacebookF />,
      name: "Meta Ads",
      description: "Facebook & Instagram Ads"
    },
    {
      icon: <FaLinkedinIn />,
      name: "LinkedIn Ads",
      description: "B2B & Professional Targeting"
    },
    {
      icon: <FaTiktok />,
      name: "TikTok Ads",
      description: "Video & Influencer Marketing"
    }
  ];

  const services = [
    {
      icon: <FaSearchDollar />,
      title: "Performance Marketing",
      description: "Campanii orientate spre rezultate și ROI măsurabil",
      features: [
        "Strategii PPC personalizate",
        "Optimizare continuă campanii",
        "A/B testing și optimizare landing pages",
        "Remarketing și audience targeting"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Social Media Marketing",
      description: "Creșterea prezentei și engagement-ului în social media",
      features: [
        "Content creation & planning",
        "Community management",
        "Paid social campaigns",
        "Influencer partnerships"
      ]
    },
    {
      icon: <FaChartPie />,
      title: "Marketing Analytics",
      description: "Analiză date și optimizare strategie marketing",
      features: [
        "Setup tracking & analytics",
        "Raportare personalizată",
        "Analiza comportament utilizatori",
        "Recomandări optimizare"
      ]
    }
  ];

  const metrics = [
    {
      icon: <FaChartLine />,
      title: "Creștere Trafic",
      value: "+150%",
      description: "În primele 6 luni"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "ROAS",
      value: "3.5x",
      description: "Return on Ad Spend mediu"
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
      question: "Cât este bugetul minim recomandat pentru campanii?",
      answer: "Bugetul minim recomandat depinde de obiective și industrie, dar în general recomandăm un buget de minim 1000€/lună pentru rezultate semnificative în campaniile de marketing digital."
    },
    {
      question: "Cât durează până văd rezultate?",
      answer: "Primele rezultate sunt vizibile în 2-4 săptămâni, dar pentru o strategie solidă și rezultate consistente recomandăm o perioadă de minim 3-6 luni."
    },
    {
      question: "Ce include raportarea lunară?",
      answer: "Raportarea include metrici cheie (conversii, CPA, ROAS), analiza performanței pe canale, insights și recomandări de optimizare pentru perioada următoare."
    }
  ];

  return (
    <>
      <SEO 
        title="Servicii Marketing Digital Professional | PPC & Social Media Marketing"
        description="Servicii complete de marketing digital pentru creșterea afacerii tale online. Expertiză în Google Ads, Meta Ads, și strategii de performance marketing."
        keywords="marketing digital, google ads, facebook ads, social media marketing, ppc marketing, performance marketing, marketing online, publicitate online, strategii marketing, campanii ads"
        canonical="https://www.lightningoperational.ro/marketing-digital"
      />
      <SchemaOrg 
        type="Service"
        name="Servicii Marketing Digital"
        description="Servicii profesionale de marketing digital și campanii PPC pentru creșterea vânzărilor online"
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
                  Marketing Digital
                  <span className="block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                    Orientat spre Rezultate
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creștem afaceri online prin strategii de marketing digital personalizate și campanii optimizate pentru performanță.
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
                Procesul Nostru de Marketing
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Research & Strategie</h3>
                    <p className="text-gray-600">Analizăm piața, competiția și definim strategia optimă pentru obiectivele tale.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Setup & Implementare</h3>
                    <p className="text-gray-600">Configurăm campaniile și implementăm strategia de marketing digital.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Optimizare & Scalare</h3>
                    <p className="text-gray-600">Optimizăm continuu campaniile și scalăm canalele performante.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analiză & Raportare</h3>
                    <p className="text-gray-600">Monitorizăm și raportăm rezultatele, adaptând strategia pentru performanță maximă.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Platforme de Advertising
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {platforms.map((platform, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all">
                    <div className="text-4xl text-primary mb-4">{platform.icon}</div>
                    <h3 className="font-bold mb-2">{platform.name}</h3>
                    <p className="text-gray-600 text-sm">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Servicii Specializate
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
                Rezultate Măsurabile
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

export default MarketingDigital;