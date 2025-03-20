import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHubspot, FaRocket, FaCogs, FaChartLine,
  FaUsers, FaCheckCircle, FaComments, FaEnvelope,
  FaBullhorn, FaHandshake, FaChartBar, FaLaptopCode,
  FaUserFriends, FaSearchDollar, FaMegaport, FaGlobe,
  FaClipboardList, FaPhoneAlt, FaSalesforce, FaTools
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const HubSpotStartups = () => {
  const benefits = [
    {
      icon: <FaHubspot />,
      title: 'HubSpot CRM Suite',
      value: '90% OFF',
      description: 'Reducere pentru toate produsele HubSpot Enterprise'
    },
    {
      icon: <FaUsers />,
      title: 'Hub Onboarding',
      value: 'Enterprise',
      description: 'Onboarding premium și consultanță tehnică'
    },
    {
      icon: <FaHandshake />,
      title: 'Mentorat',
      value: 'Dedicat',
      description: 'Acces la experți de business și consultanți'
    },
    {
      icon: <FaRocket />,
      title: 'Comunitate',
      value: 'Network',
      description: 'Acces la comunitatea HubSpot for Startups'
    }
  ];

  const hubspotProducts = [
    {
      icon: <FaComments />,
      title: 'Service Hub Enterprise',
      description: 'Platformă completă pentru suport clienți',
      features: [
        'Service desk & ticketing',
        'Knowledge base avansată',
        'Customer feedback și NPS',
        'Automatizări service'
      ]
    },
    {
      icon: <FaBullhorn />,
      title: 'Marketing Hub Enterprise',
      description: 'Suite marketing automation',
      features: [
        'Email marketing avansat',
        'Landing pages & forms',
        'SEO & content strategy',
        'Social media management'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Sales Hub Enterprise',
      description: 'CRM și sales engagement',
      features: [
        'Pipeline management',
        'Sales automation',
        'Predictive lead scoring',
        'Sales analytics'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Operations Hub Enterprise',
      description: 'Operațiuni și integrări business',
      features: [
        'Data sync bi-directional',
        'Workflow automation',
        'Custom coded actions',
        'Data quality automation'
      ]
    }
  ];

  const eligibilityCriteria = [
    'Startup-ul să fie în fază seed sau Series A',
    'Să aibă mai puțin de 2 ani de la înființare',
    'Să fie parte dintr-un accelerator/incubator acreditat',
    'Sub $2M în finanțare primită',
    'Să nu fi folosit anterior HubSpot Enterprise'
  ];

  const featureHighlights = [
    {
      title: 'Marketing Automation',
      description: 'Automatizări complexe pentru campanii multi-canal'
    },
    {
      title: 'Sales Engagement',
      description: 'Tools avansate pentru prospecție și sales outreach'
    },
    {
      title: 'Customer Service',
      description: 'Platformă integrată pentru suport și success'
    },
    {
      title: 'Revenue Operations',
      description: 'Aliniere marketing, sales și service pentru creștere'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Verifică Eligibilitatea',
      description: 'Verifică dacă startup-ul îndeplinește criteriile HubSpot'
    },
    {
      number: '02',
      title: 'Pregătește Aplicația',
      description: 'Documentează planul de utilizare și business case'
    },
    {
      number: '03',
      title: 'Aplică prin Lightning',
      description: 'Depune aplicația prin parteneriatul nostru'
    },
    {
      number: '04',
      title: 'Setup & Onboarding',
      description: 'Implementare și configurare cu experții noștri'
    }
  ];

  const advancedFeatures = [
    {
      icon: <FaChartBar />,
      title: 'Analytics & Reporting',
      description: 'Analize avansate pentru decizii informate',
      capabilities: [
        'Custom reports builder',
        'Revenue attribution',
        'Predictive analytics',
        'Custom dashboards'
      ]
    },
    {
      icon: <FaCogs />,
      title: 'Automation Engine',
      description: 'Automatizări complexe cross-platform',
      capabilities: [
        'Visual workflow builder',
        'Triggered actions',
        'Custom code actions',
        'Branching logic'
      ]
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <FaLaptopCode />,
      industry: 'SaaS',
      title: 'Software as a Service',
      description: 'Soluții pentru scalarea companiilor SaaS',
      benefits: [
        'Product-led growth automation',
        'User onboarding flows',
        'Customer health scoring',
        'Subscription management'
      ]
    },
    {
      icon: <FaUserFriends />,
      industry: 'B2B Tech',
      title: 'Business Technology',
      description: 'Tools pentru vânzări B2B complexe',
      benefits: [
        'Account-based marketing',
        'Complex sales pipelines',
        'Partner management',
        'Enterprise nurturing'
      ]
    },
    {
      icon: <FaSearchDollar />,
      industry: 'eCommerce',
      title: 'Comerț Electronic',
      description: 'Soluții pentru creșterea conversiilor',
      benefits: [
        'Abandoned cart recovery',
        'Customer segmentation',
        'Loyalty programs',
        'Marketplace integration'
      ]
    },
    {
      icon: <FaMegaport />,
      industry: 'Marketplace',
      title: 'Platforme Marketplace',
      description: 'Tools pentru gestionarea marketplace',
      benefits: [
        'Vendor management',
        'Multi-sided platform tools',
        'Listing optimization',
        'Transaction monitoring'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="HubSpot for Startups România | CRM Enterprise și Marketing Automation"
        description="Accelerează-ți startup-ul cu 90% reducere la HubSpot Enterprise Suite, acces la tools avansate de marketing, sales și service, plus mentorat dedicat. Program oficial HubSpot for Startups în România."
        keywords="HubSpot for Startups România, CRM Enterprise, marketing automation, sales tools, startup program, customer service platform"
        canonical="https://www.lightning-revenue.com/hubspot-startups"
      />
      <SchemaOrg 
        type="Service"
        name="HubSpot for Startups Program România"
        description="Program complet de suport pentru startup-uri tech din România, oferit de HubSpot, incluzând acces la suite enterprise, training și mentorat"
        provider={{
          "@type": "Organization",
          "name": "HubSpot",
          "sameAs": "https://www.hubspot.com"
        }}
        areaServed={{
          "@type": "Country",
          "name": "Romania"
        }}
        offers={{
          "@type": "Offer",
          "description": "90% reducere la HubSpot Enterprise Suite și beneficii adiționale",
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
                  Scalează-ți Startup-ul cu
                  <span className="block bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
                    HubSpot for Startups
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Obține acces la suite complete de marketing, sales și service cu 90% reducere, 
                  plus expertiză și mentorat pentru accelerarea creșterii
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
                    <div className="text-4xl text-orange-500 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      {benefit.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* HubSpot Products */}
              <motion.div 
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">HubSpot Enterprise Suite</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {hubspotProducts.map((product, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl text-orange-500 mr-4">{product.icon}</div>
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
                      <li>• Reducerea de 90% se aplică pentru primele 12 luni</li>
                      <li>• Reducere de 50% în al doilea an</li>
                      <li>• Necesită plata anuală în avans</li>
                      <li>• Se aplică termenii și condițiile HubSpot</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Feature Highlights */}
              <motion.div 
                className="mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Funcționalități Cheie</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featureHighlights.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div 
                className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-12 text-white mb-20"
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
                      <p className="text-orange-100">{step.description}</p>
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
                    Funcționalități Enterprise
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Accesează funcționalități avansate pentru automatizare, 
                    analiză și scalarea operațiunilor
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {advancedFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-orange-500 mr-4">{feature.icon}</div>
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
                className="py-20 bg-gradient-to-r from-white to-orange-50 rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Soluții pentru Industrii Specifice
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    HubSpot oferă soluții optimizate pentru nevoile specifice ale 
                    fiecărei industrii, ajutându-te să scalezi eficient
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
                          <div className="text-3xl text-orange-500 mr-4">{solution.icon}</div>
                          <div>
                            <span className="text-sm font-medium text-orange-600 uppercase tracking-wider">
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
                  Pregătit să-ți scalezi operațiunile?
                </h2>
                <p className="text-gray-600 mb-8">
                  Echipa noastră te poate ghida în procesul de aplicare și implementare
                </p>
                <a 
                  href="mailto:contact@lightning-revenue.com"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-colors duration-300"
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
                    programul HubSpot for Startups, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Consultanță pentru alegerea planului potrivit</li>
                    <li>Implementare și configurare HubSpot Enterprise</li>
                    <li>Migrare date și integrări cu alte sisteme</li>
                    <li>Training pentru echipă și best practices</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicației în programul HubSpot for Startups, se va aplica 
                    un comision de succes de 15% din valoarea totală a reducerii obținute pentru primul an. 
                    Acest comision poate fi achitat în 3 rate egale pe parcursul primelor 3 luni de utilizare.
                  </p>
                  <p>
                    Reducerea de 90% se aplică pentru primul an de utilizare, urmată de o reducere de 50% 
                    în al doilea an. Prețurile se bazează pe planurile anuale, cu plata în avans. 
                    HubSpot își rezervă dreptul de a modifica sau întrerupe programul în orice moment.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu HubSpot și nu garantează aprobarea în program. 
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

export default HubSpotStartups;