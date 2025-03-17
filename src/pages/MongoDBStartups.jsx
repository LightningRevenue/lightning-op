import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDatabase, FaCloud, FaServer, FaAtlas,
  FaUsers, FaCheckCircle, FaCode, FaLock,
  FaBrain, FaRocket, FaChartLine, FaShieldAlt,
  FaNetworkWired, FaSearch, FaLayerGroup, FaGlobe,
  FaUsersCog, FaCogs, FaLeaf, FaChartBar
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const MongoDBStartups = () => {
  const seoData = {
    title: "MongoDB Atlas for Startups | Program pentru startup-uri",
    description: "Accesează MongoDB Atlas pentru Startups și primește credite pentru baze de date, suport tehnic și acces la funcționalități enterprise pentru startup-ul tău.",
    canonical: "https://lightning-revenue.com/mongodb-startups",
    ogType: "website",
  };

  const schemaData = {
    "@type": "Service",
    name: "MongoDB Atlas for Startups Program",
    description: "Program de suport pentru startup-uri prin MongoDB Atlas cu acces la funcționalități enterprise",
    provider: {
      "@type": "Organization",
      name: "LightningRevenue",
    },
    areaServed: "Romania",
    serviceType: "Startup Support"
  };

  const benefits = [
    {
      icon: <FaDatabase />,
      title: 'Atlas Credits',
      value: '$5,000',
      description: 'Credite MongoDB Atlas pentru infrastructură și servicii'
    },
    {
      icon: <FaLayerGroup />,
      title: 'Atlas Features',
      value: 'Enterprise',
      description: 'Acces la funcționalități Atlas Enterprise'
    },
    {
      icon: <FaUsers />,
      title: 'Technical Support',
      value: 'Premium',
      description: 'Suport tehnic prioritar și consultanță'
    },
    {
      icon: <FaRocket />,
      title: 'Startup Success',
      value: 'Accelerator',
      description: 'Program de mentorat și resurse pentru creștere'
    }
  ];

  const atlasFeatures = [
    {
      icon: <FaDatabase />,
      title: 'Atlas Database',
      description: 'Baze de date MongoDB gestionate în cloud',
      features: [
        'Scalare automată și performanță',
        'Multi-region clusters',
        'Backup automat și point-in-time recovery',
        'Monitoring și alerting avansat'
      ]
    },
    {
      icon: <FaSearch />,
      title: 'Atlas Search',
      description: 'Motor de căutare integrat pentru date',
      features: [
        'Căutare full-text și faceting',
        'Analiză semantică și relevanță',
        'Vector search pentru AI',
        'Indexare automată'
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: 'Atlas Data API',
      description: 'API-uri RESTful pentru acces la date',
      features: [
        'Endpoints HTTPS securizate',
        'GraphQL support nativ',
        'Rate limiting și caching',
        'Integrare cu serverless'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Atlas Security',
      description: 'Securitate enterprise-grade',
      features: [
        'Encryption at rest & in transit',
        'Network isolation și VPC',
        'RBAC și autentificare avansată',
        'Audit logging și compliance'
      ]
    }
  ];

  const aiFeatures = [
    {
      icon: <FaBrain />,
      title: 'Atlas Vector Search',
      description: 'Căutare și procesare AI pentru date',
      capabilities: [
        'Embeddings și similarity search',
        'Integrare cu modele LLM',
        'Procesare paralelă',
        'Optimizare pentru ML'
      ]
    },
    {
      icon: <FaCogs />,
      title: 'MongoDB AI',
      description: 'Instrumente AI pentru date',
      capabilities: [
        'Generare date sintetice',
        'Analiza pattern-uri',
        'Predicții și anomalii',
        'Feature engineering'
      ]
    }
  ];

  const eligibilityCriteria = [
    'Startup-ul să fie în fază early-stage (pre-Series A)',
    'Să aibă mai puțin de 5 ani de la înființare',
    'Să nu fi primit anterior credite MongoDB Atlas',
    'Să aibă un produs sau prototip funcțional',
    'Sub $5M în finanțare totală primită'
  ];

  const useCases = [
    {
      title: 'SaaS Applications',
      description: 'Dezvoltare aplicații multi-tenant cu izolare și scalare automată'
    },
    {
      title: 'Real-time Analytics',
      description: 'Procesare și analiză date în timp real cu Atlas și Charts'
    },
    {
      title: 'AI/ML Applications',
      description: 'Aplicații AI cu Vector Search și integrare cu modele ML'
    },
    {
      title: 'Mobile & IoT',
      description: 'Backend pentru aplicații mobile și IoT cu Realm și Edge Computing'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Verifică Eligibilitatea',
      description: 'Asigură-te că startup-ul îndeplinește criteriile MongoDB'
    },
    {
      number: '02',
      title: 'Pregătește Aplicația',
      description: 'Documentează planul de utilizare și arhitectura'
    },
    {
      number: '03',
      title: 'Aplică prin Lightning',
      description: 'Depune aplicația prin parteneriatul nostru'
    },
    {
      number: '04',
      title: 'Setup & Onboarding',
      description: 'Configurare infrastructură și training'
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <FaChartLine />,
      industry: 'FinTech',
      title: 'Servicii Financiare',
      description: 'Infrastructură pentru aplicații financiare moderne',
      benefits: [
        'Tranzacții ACID distribuite',
        'Sharding pentru high-performance',
        'Compliance și audit logging',
        'Time-series pentru analytics'
      ]
    },
    {
      icon: <FaGlobe />,
      industry: 'eCommerce',
      title: 'Comerț Electronic',
      description: 'Platformă pentru magazine online scalabile',
      benefits: [
        'Catalog și inventory flexibil',
        'Search cu relevanță ridicată',
        'Sesiuni și coșuri în timp real',
        'Analytics pentru vânzări'
      ]
    },
    {
      icon: <FaLeaf />,
      industry: 'GreenTech',
      title: 'Tehnologii Verzi',
      description: 'Soluții pentru sustenabilitate și energie',
      benefits: [
        'IoT data collection și analiză',
        'Time-series pentru senzori',
        'Machine learning pentru predicții',
        'Raportare și compliance'
      ]
    },
    {
      icon: <FaChartBar />,
      industry: 'Analytics',
      title: 'Data Analytics',
      description: 'Platforme pentru analiza datelor',
      benefits: [
        'Aggregation pipeline puternic',
        'Charts și vizualizări',
        'Data Lake integration',
        'BI Connector pentru tools'
      ]
    }
  ];

  return (
    <>
      <SEO {...seoData} />
      <SchemaOrg {...schemaData} />
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
                  Construiește cu
                  <span className="block bg-gradient-to-r from-green-600 to-green-400 text-transparent bg-clip-text">
                    MongoDB for Startups
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Obține acces la infrastructură database enterprise, expertiză tehnică 
                  și resurse pentru a-ți scala aplicațiile moderne
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
                    <div className="text-4xl text-green-500 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {benefit.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Atlas Features */}
              <motion.div 
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">MongoDB Atlas Enterprise</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {atlasFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl text-green-500 mr-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AI Features */}
              <motion.section 
                className="py-20 bg-white rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    MongoDB pentru AI și Machine Learning
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Construiește aplicații AI moderne folosind capabilitățile avansate 
                    de vector search și procesare date ale MongoDB
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {aiFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-green-500 mr-4">{feature.icon}</div>
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

              {/* Use Cases */}
              <motion.div 
                className="mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Cazuri de Utilizare</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                      <p className="text-gray-600">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div 
                className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-12 text-white mb-20"
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
                      <p className="text-green-100">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Industry Solutions */}
              <motion.section 
                className="py-20 bg-gradient-to-r from-white to-green-50 rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Soluții pentru Industrii Specifice
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    MongoDB oferă soluții specializate pentru fiecare industrie, 
                    optimizate pentru performanță și scalabilitate
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
                          <div className="text-3xl text-green-500 mr-4">{solution.icon}</div>
                          <div>
                            <span className="text-sm font-medium text-green-600 uppercase tracking-wider">
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
                  Pregătit să construiești cu MongoDB?
                </h2>
                <p className="text-gray-600 mb-8">
                  Echipa noastră te poate ghida în procesul de aplicare și implementare
                </p>
                <a 
                  href="mailto:contact@lightning-revenue.com"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors duration-300"
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
                    programul MongoDB for Startups, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Configurare și optimizare infrastructură Atlas</li>
                    <li>Arhitectură și best practices pentru date</li>
                    <li>Pregătirea documentației pentru aplicare</li>
                    <li>Training și asistență tehnică</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicației și primirii creditelor MongoDB Atlas și beneficiilor asociate, 
                    se va aplica un comision de succes de 15% din valoarea totală a creditelor acordate. 
                    Acest comision poate fi achitat în rate pe parcursul primelor 3 luni de la primirea 
                    creditelor.
                  </p>
                  <p>
                    Creditele Atlas sunt valabile 12 luni de la activare. Creditele și beneficiile nu sunt 
                    transferabile și nu pot fi convertite în numerar. MongoDB își rezervă dreptul de a 
                    modifica sau întrerupe programul în orice moment.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu MongoDB și nu garantează aprobarea în program. 
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

export default MongoDBStartups;