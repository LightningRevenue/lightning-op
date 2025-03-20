import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaComments, FaRocket, FaCogs, FaChartLine,
  FaUsers, FaCheckCircle, FaHeadset, FaStar,
  FaRobot, FaRegComments, FaChartBar, FaCode,
  FaUserFriends, FaTools, FaMobile, FaGlobe,
  FaClipboardList, FaPhoneAlt, FaSalesforce, FaBriefcase
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const IntercomStartups = () => {
  const benefits = [
    {
      icon: <FaComments />,
      title: 'Reducere Plan',
      value: '95% OFF',
      description: 'Reducere pentru toate soluțiile Intercom'
    },
    {
      icon: <FaHeadset />,
      title: 'Onboarding',
      value: 'Premium',
      description: 'Setup personalizat și consultanță'
    },
    {
      icon: <FaUserFriends />,
      title: 'Training',
      value: 'Dedicat',
      description: 'Acces la training-uri și resurse'
    },
    {
      icon: <FaRocket />,
      title: 'Creștere',
      value: 'Accelerare',
      description: 'Strategii de growth și best practices'
    }
  ];

  const intercomProducts = [
    {
      icon: <FaRegComments />,
      title: 'Inbox Unificat',
      description: 'Comunicare centralizată cu clienții',
      features: [
        'Chat live și email în timp real',
        'Colaborare în echipă',
        'Automatizări și reguli',
        'Integrări multiple'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'Chatboți și Automatizări',
      description: 'Suport automatizat 24/7',
      features: [
        'Boți customizabili',
        'Resolution Bot AI',
        'Răspunsuri automate',
        'Machine learning avansat'
      ]
    },
    {
      icon: <FaClipboardList />,
      title: 'Article & Help Center',
      description: 'Bază de cunoștințe self-service',
      features: [
        'Editor intuitiv',
        'Personalizare completă',
        'Analytics integrat',
        'SEO optimizat'
      ]
    },
    {
      icon: <FaChartBar />,
      title: 'Product Tours',
      description: 'Onboarding și activare utilizatori',
      features: [
        'Tours interactive',
        'Segmentare avansată',
        'Măsurare impact',
        'A/B testing'
      ]
    }
  ];

  const eligibilityCriteria = [
    'Startup în fază seed sau pre-Series A',
    'Sub 2 ani de la înființare',
    'Mai puțin de $5M în finanțare',
    'Să nu fi folosit Intercom anterior',
    'Plan de creștere demonstrabil'
  ];

  const features = [
    {
      title: 'Comunicare Omnichannel',
      description: 'Chat, email și messaging într-o singură platformă'
    },
    {
      title: 'Automatizare Inteligentă',
      description: 'Boți și fluxuri de lucru automatizate'
    },
    {
      title: 'Analytics Avansat',
      description: 'Măsurare impact și optimizare conversații'
    },
    {
      title: 'Customer Journey',
      description: 'Optimizare experiență și onboarding'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Verifică Eligibilitatea',
      description: 'Verifică criteriile programului Intercom'
    },
    {
      number: '02',
      title: 'Pregătește Aplicația',
      description: 'Documentează use-case și plan de utilizare'
    },
    {
      number: '03',
      title: 'Aplică prin Lightning',
      description: 'Depune aplicația prin parteneriatul nostru'
    },
    {
      number: '04',
      title: 'Setup & Onboarding',
      description: 'Configurare și implementare asistată'
    }
  ];

  const advancedFeatures = [
    {
      icon: <FaCogs />,
      title: 'Custom Bots & Flows',
      description: 'Automatizări personalizate',
      capabilities: [
        'Logic avansat de rutare',
        'Custom attributes',
        'Conditional flows',
        'Integrări API'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Customer Engagement',
      description: 'Strategii de engagement',
      capabilities: [
        'Segmentare avansată',
        'Campanii personalizate',
        'A/B testing',
        'Analitice în timp real'
      ]
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <FaCode />,
      industry: 'SaaS',
      title: 'Software as a Service',
      description: 'Suport și onboarding pentru produse SaaS',
      benefits: [
        'Product tours automate',
        'Onboarding personalizat',
        'Support automation',
        'Customer success tracking'
      ]
    },
    {
      icon: <FaMobile />,
      industry: 'Mobile Apps',
      title: 'Aplicații Mobile',
      description: 'Suport in-app și engagement',
      benefits: [
        'SDK pentru iOS și Android',
        'Push notifications',
        'In-app messaging',
        'Mobile-first support'
      ]
    },
    {
      icon: <FaGlobe />,
      industry: 'eCommerce',
      title: 'Comerț Electronic',
      description: 'Suport și conversii pentru magazine online',
      benefits: [
        'Cart abandonment flows',
        'Product recommendations',
        'Order status updates',
        'Customer feedback'
      ]
    },
    {
      icon: <FaBriefcase />,
      industry: 'B2B Tech',
      title: 'Enterprise Tech',
      description: 'Suport pentru clienți enterprise',
      benefits: [
        'Account-based support',
        'SLA management',
        'Enterprise security',
        'Custom workflows'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Intercom for Startups România | Suport Clienți și Engagement"
        description="Accelerează-ți startup-ul cu 95% reducere la platforma Intercom, acces la funcționalități premium de suport clienți, chatboți și automatizări. Program oficial Intercom for Startups în România."
        keywords="Intercom for Startups România, customer support, chat automation, startup program, customer engagement, chatbots"
        canonical="https://www.lightning-revenue.com/intercom-startups"
      />
      <SchemaOrg 
        type="Service"
        name="Intercom for Startups Program România"
        description="Program complet de suport pentru startup-uri tech din România, oferit de Intercom, incluzând acces la platformă, training și consultanță"
        provider={{
          "@type": "Organization",
          "name": "Intercom",
          "sameAs": "https://www.intercom.com"
        }}
        areaServed={{
          "@type": "Country",
          "name": "Romania"
        }}
        offers={{
          "@type": "Offer",
          "description": "95% reducere la platforma Intercom și beneficii adiționale",
          "eligibility": "Startup-uri early-stage din România"
        }}
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                  Crește Retenția Clienților cu
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                    Intercom for Startups
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Construiește relații puternice cu clienții tăi folosind cea mai avansată 
                  platformă de customer engagement, acum cu 95% reducere pentru startup-uri
                </p>
              </motion.div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-20">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-4xl text-blue-600 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <div className="text-2xl font-bold text-indigo-600 mb-2">
                      {benefit.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Intercom Products */}
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Soluții Complete Intercom</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {intercomProducts.map((product, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl text-blue-600 mr-4">{product.icon}</div>
                        <h3 className="text-xl font-bold">{product.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Eligibility Section */}
              <motion.div 
                className="bg-white rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">Criterii de Eligibilitate</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-4">
                      {eligibilityCriteria.map((criteria, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{criteria}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Important de știut:</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>• Reducerea de 95% se aplică pentru 12 luni</li>
                      <li>• Necesită card pentru verificare</li>
                      <li>• Disponibil pentru toate produsele Intercom</li>
                      <li>• Se aplică termenii standard Intercom</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div 
                className="mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Funcționalități Cheie</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Procesul de Aplicare</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {steps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="text-5xl font-bold opacity-30 mb-4">{step.number}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-blue-100">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Advanced Features */}
              <motion.section 
                className="py-20 bg-white rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    Funcționalități Avansate
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Automatizează și optimizează comunicarea cu clienții folosind 
                    cele mai avansate funcționalități Intercom
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {advancedFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-blue-600 mr-4">{feature.icon}</div>
                          <h3 className="text-xl font-bold">{feature.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.capabilities.map((capability, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 mr-2" />
                              {capability}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Industry Solutions */}
              <motion.section 
                className="py-20 bg-gradient-to-r from-white to-blue-50 rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Soluții pentru Industrii Specifice
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Intercom oferă soluții optimizate pentru nevoile specifice ale 
                    fiecărei industrii, ajutându-te să oferi suport excepțional
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {industrySpecificSolutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-blue-600 mr-4">{solution.icon}</div>
                          <div>
                            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">
                              {solution.industry}
                            </span>
                            <h3 className="text-xl font-bold">{solution.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{solution.description}</p>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* CTA Section */}
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  Pregătit să-ți optimizezi comunicarea cu clienții?
                </h2>
                <p className="text-gray-600 mb-8">
                  Echipa noastră te poate ghida în procesul de aplicare și implementare
                </p>
                <a 
                  href="mailto:contact@lightning-revenue.com"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300"
                >
                  Contactează-ne pentru Detalii
                </a>
              </motion.div>

              {/* Legal Section */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-4">Termeni și Condiții</h3>
                <div className="text-xs text-gray-600 space-y-2">
                  <p>
                    Lightning Revenue oferă servicii complete de configurare și pregătire pentru 
                    programul Intercom for Startups, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Consultanță pentru alegerea soluției potrivite</li>
                    <li>Configurare și setup inițial</li>
                    <li>Training pentru echipa de suport</li>
                    <li>Implementare chatboți și automatizări</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicației în programul Intercom for Startups, se va aplica 
                    un comision de succes de 15% din valoarea reducerii obținute pentru primul an. 
                    Acest comision poate fi achitat în rate pe parcursul primelor 3 luni de utilizare.
                  </p>
                  <p>
                    Reducerea de 95% se aplică pentru primul an de utilizare. Prețurile se bazează 
                    pe planurile anuale, cu plata lunară disponibilă. Intercom își rezervă dreptul 
                    de a modifica sau întrerupe programul în orice moment.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu Intercom și nu garantează aprobarea în program. 
                    Toate mărcile comerciale aparțin deținătorilor respectivi.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IntercomStartups;