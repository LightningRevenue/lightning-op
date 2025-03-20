import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCreditCard, FaRocket, FaShieldAlt, FaGlobe,
  FaUsers, FaCheckCircle, FaLock, FaChartLine,
  FaMobileAlt, FaCode, FaWallet, FaClock,
  FaUserShield, FaFileInvoiceDollar, FaExchangeAlt, FaHandshake,
  FaStore, FaBriefcase, FaRegCreditCard, FaUniversalAccess
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const StripeStartups = () => {
  const benefits = [
    {
      icon: <FaCreditCard />,
      title: 'Procesare Gratuită',
      value: '$50,000',
      description: 'Volum de tranzacții fără comision'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Securitate',
      value: 'Enterprise',
      description: 'Protecție fraud și conformitate'
    },
    {
      icon: <FaRocket />,
      title: 'Integrare',
      value: 'Premium',
      description: 'Suport tehnic prioritar'
    },
    {
      icon: <FaUsers />,
      title: 'Consultanță',
      value: 'Dedicată',
      description: 'Experți în implementare'
    }
  ];

  const stripeProducts = [
    {
      icon: <FaRegCreditCard />,
      title: 'Payments',
      description: 'Procesare plăți globală',
      features: [
        'Suport pentru 135+ monede',
        'Optimizare rate de autorizare',
        'Smart routing',
        'Plăți recurente'
      ]
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Billing & Invoicing',
      description: 'Facturare și abonamente',
      features: [
        'Facturare automată',
        'Gestionare abonamente',
        'Recuperare plăți',
        'Raportare fiscală'
      ]
    },
    {
      icon: <FaWallet />,
      title: 'Connect',
      description: 'Plăți pentru marketplace',
      features: [
        'Split payments',
        'KYC automatizat',
        'Express onboarding',
        'Raportare fiscală automată'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Radar',
      description: 'Prevenire fraudă cu ML',
      features: [
        'Detectare fraudă în timp real',
        'Reguli personalizabile',
        'Dispute automation',
        'Risk scoring'
      ]
    }
  ];

  const eligibilityCriteria = [
    'Startup în fază early-stage (pre-Series A)',
    'Mai puțin de $1M în finanțare primită',
    'Produs live sau aproape de lansare',
    'Înregistrare legală ca entitate',
    'Fără procesare anterioară peste $100k'
  ];

  const features = [
    {
      title: 'Plăți Globale',
      description: 'Acceptă plăți din peste 195+ țări'
    },
    {
      title: 'Optimizare Conversie',
      description: 'Smart routing și machine learning'
    },
    {
      title: 'Securitate Avansată',
      description: 'PCI Level 1 și criptare end-to-end'
    },
    {
      title: 'Analytics Real-time',
      description: 'Dashboard și rapoarte detaliate'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Verifică Eligibilitatea',
      description: 'Asigură-te că îndeplinești criteriile'
    },
    {
      number: '02',
      title: 'Aplică prin Lightning',
      description: 'Depune aplicația prin partenerul oficial'
    },
    {
      number: '03',
      title: 'KYB & Verificare',
      description: 'Verificarea business-ului și documentelor'
    },
    {
      number: '04',
      title: 'Integrare & Setup',
      description: 'Implementare asistată și configurare'
    }
  ];

  const advancedFeatures = [
    {
      icon: <FaUserShield />,
      title: 'Strong Authentication',
      description: 'Securitate și conformitate',
      capabilities: [
        '3D Secure 2',
        'Autentificare biometrică',
        'Risk-based authentication',
        'PSD2 compliant'
      ]
    },
    {
      icon: <FaExchangeAlt />,
      title: 'Smart Routing',
      description: 'Optimizare tranzacții',
      capabilities: [
        'Dynamic routing',
        'Failover automat',
        'Cost optimization',
        'Route splitting'
      ]
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <FaStore />,
      industry: 'eCommerce',
      title: 'Retail Online',
      description: 'Soluții complete pentru magazine online',
      benefits: [
        'Checkout optimizat',
        'Recuperare coș abandonat',
        'Plăți one-click',
        'Integrare platforme eCommerce'
      ]
    },
    {
      icon: <FaCode />,
      industry: 'SaaS',
      title: 'Software as a Service',
      description: 'Billing pentru subscriptions',
      benefits: [
        'Billing recurent',
        'Prorate și metered billing',
        'Dunning management',
        'Analytics subscriptions'
      ]
    },
    {
      icon: <FaHandshake />,
      industry: 'Marketplace',
      title: 'Platforme Marketplace',
      description: 'Soluții pentru economie colaborativă',
      benefits: [
        'Split payments',
        'Multi-party payments',
        'Express onboarding',
        'Automated payouts'
      ]
    },
    {
      icon: <FaBriefcase />,
      industry: 'B2B SaaS',
      title: 'Enterprise Software',
      description: 'Soluții pentru billing B2B',
      benefits: [
        'Facturare automată',
        'Payment terms',
        'Integrare ERP',
        'Reporting avansat'
      ]
    }
  ];

  const implementationSupport = [
    {
      icon: <FaCode />,
      title: 'Suport Tehnic',
      description: 'Asistență în implementare',
      features: [
        'Code review',
        'Best practices',
        'Optimizare integrare',
        'Debugging asistat'
      ]
    },
    {
      icon: <FaUniversalAccess />,
      title: 'Consultanță',
      description: 'Expertiză în payments',
      features: [
        'Strategii de routing',
        'Optimizare costuri',
        'Reduce fraudă',
        'Conformitate'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Stripe for Startups România | Procesare Plăți și Billing pentru Startup-uri"
        description="Accelerează-ți startup-ul cu $50,000 volum de procesare gratuit, acces la toate produsele Stripe, și suport dedicat pentru implementare. Program oficial Stripe for Startups în România."
        keywords="Stripe for Startups România, payment processing, billing software, startup program, online payments"
        canonical="https://www.lightning-revenue.com/stripe-startups"
      />
      <SchemaOrg 
        type="Service"
        name="Stripe for Startups Program România"
        description="Program complet de suport pentru startup-uri tech din România, oferit de Stripe, incluzând procesare plăți gratuită, acces la produse premium și consultanță"
        provider={{
          "@type": "Organization",
          "name": "Stripe",
          "sameAs": "https://www.stripe.com"
        }}
        areaServed={{
          "@type": "Country",
          "name": "Romania"
        }}
        offers={{
          "@type": "Offer",
          "description": "$50,000 procesare gratuită și beneficii adiționale",
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
                  Procesează Plăți Global cu
                  <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Stripe for Startups
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Acceptă plăți de oriunde în lume și scalează-ți startup-ul cu cea mai avansată 
                  infrastructură de payments, acum cu $50,000 procesare gratuită
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
                    <div className="text-4xl text-purple-600 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-2">
                      {benefit.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Stripe Products */}
              <motion.div 
                className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Produse Stripe Premium</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {stripeProducts.map((product, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl text-purple-600 mr-4">{product.icon}</div>
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
                      <li>• Volumul gratuit expiră după 12 luni</li>
                      <li>• KYB (Know Your Business) necesar</li>
                      <li>• Disponibil pentru toate produsele Stripe</li>
                      <li>• Se aplică termenii standard Stripe</li>
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
                className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white mb-20"
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
                      <p className="text-purple-100">{step.description}</p>
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
                    Securitate și optimizare de nivel enterprise pentru procesarea plăților
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {advancedFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-purple-600 mr-4">{feature.icon}</div>
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
                className="py-20 bg-gradient-to-r from-white to-purple-50 rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Soluții pentru Industrii Specifice
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Stripe oferă soluții optimizate pentru nevoile specifice ale 
                    fiecărei industrii, maximizând rata de conversie
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
                          <div className="text-3xl text-purple-600 mr-4">{solution.icon}</div>
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

              {/* Implementation Support */}
              <motion.section 
                className="py-20 bg-white rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-12 text-center">
                    Suport în Implementare
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {implementationSupport.map((support, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-purple-600 mr-4">{support.icon}</div>
                          <h3 className="text-xl font-bold">{support.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{support.description}</p>
                        <ul className="space-y-2">
                          {support.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 mr-2" />
                              {feature}
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
                  Pregătit să-ți optimizezi procesarea plăților?
                </h2>
                <p className="text-gray-600 mb-8">
                  Echipa noastră te poate ghida în procesul de aplicare și implementare
                </p>
                <a 
                  href="mailto:contact@lightning-revenue.com"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors duration-300"
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
                    programul Stripe for Startups, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Consultanță pentru optimizarea procesării</li>
                    <li>Implementare și integrare tehnică</li>
                    <li>Setup security și anti-fraudă</li>
                    <li>Optimizare rate de conversie</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicației în programul Stripe for Startups, se va aplica 
                    un comision de succes de 10% din valoarea procesărilor gratuite obținute. 
                    Acest comision poate fi achitat treptat, pe măsura utilizării creditelor.
                  </p>
                  <p>
                    Volumul de procesare gratuit este valabil pentru 12 luni de la activare. 
                    După epuizarea volumului gratuit sau expirarea perioadei, se aplică tarifele 
                    standard Stripe. Stripe își rezervă dreptul de a modifica sau întrerupe 
                    programul în orice moment.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu Stripe și nu garantează aprobarea în program. 
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

export default StripeStartups;