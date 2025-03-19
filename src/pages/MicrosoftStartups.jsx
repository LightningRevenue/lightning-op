import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  FaMicrosoft, FaCloud, FaServer, FaDatabase,
  FaUsers, FaCheckCircle, FaCode, FaLock,
  FaBrain, FaRocket, FaChartLine, FaShieldAlt,
  FaEnvelope, FaCogs, FaNetworkWired, FaWindows,
  FaGithub, FaPuzzlePiece, FaUsersCog
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const MicrosoftStartups = () => {
  const [dynamicTitle, setDynamicTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q')?.toLowerCase() || '';
    
    if (searchTerm.includes('azure') || searchTerm.includes('cloud')) {
      setDynamicTitle('Credite Azure pentru Startup-uri | Până la $150,000 Gratuiți');
    } else if (searchTerm.includes('github') || searchTerm.includes('devops')) {
      setDynamicTitle('GitHub Enterprise pentru Startup-uri | Microsoft Startup Program');
    } else if (searchTerm.includes('m365') || searchTerm.includes('office')) {
      setDynamicTitle('Microsoft 365 Business pentru Startup-uri | Microsoft for Startups');
    } else if (searchTerm.includes('ai') || searchTerm.includes('machine learning')) {
      setDynamicTitle('Azure AI și ML pentru Startup-uri | Microsoft for Startups');
    } else {
      setDynamicTitle('Microsoft for Startups România | Program Oficial de Finanțare');
    }
  }, [location.search]);

  const benefits = [
    {
      icon: <FaCloud />,
      title: 'Azure Credits',
      value: '$150,000',
      description: 'Credite Azure pentru infrastructură și servicii cloud'
    },
    {
      icon: <FaWindows />,
      title: 'Microsoft 365',
      value: '25 Licențe',
      description: 'Licențe Microsoft 365 Business Premium pentru echipă'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub Enterprise',
      value: '10 Licențe',
      description: 'Acces la GitHub Enterprise și GitHub Copilot'
    },
    {
      icon: <FaUsers />,
      title: 'Mentorat',
      value: 'Experți Microsoft',
      description: 'Suport tehnic și consultanță de business'
    }
  ];

  const azureFeatures = [
    {
      icon: <FaServer />,
      title: 'Azure Virtual Machines',
      description: 'Infrastructură scalabilă pentru orice workload',
      features: [
        'Instance optimizate pentru AI/ML',
        'Auto-scaling și load balancing',
        'SSD Premium și Ultra Disk',
        'Rețea globală Azure'
      ]
    },
    {
      icon: <FaCode />,
      title: 'Azure App Service',
      description: 'Platformă completă pentru aplicații web și API',
      features: [
        'Deployment automat din GitHub',
        'SSL și domenii personalizate',
        'Scaling automat și monitoring',
        'Suport pentru multiple limbaje'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Azure Data Services',
      description: 'Suite completă de servicii pentru date',
      features: [
        'SQL Database și Cosmos DB',
        'Data Factory și Synapse',
        'Machine Learning Studio',
        'Power BI Integration'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Azure Security',
      description: 'Securitate enterprise-grade',
      features: [
        'Azure Active Directory',
        'Key Vault și criptare',
        'DDoS Protection',
        'Security Center'
      ]
    }
  ];

  const m365Features = [
    {
      icon: <FaEnvelope />,
      title: 'Microsoft Teams',
      description: 'Colaborare și comunicare integrată'
    },
    {
      icon: <FaWindows />,
      title: 'Office Apps',
      description: 'Suite completă de aplicații Office'
    },
    {
      icon: <FaLock />,
      title: 'Security',
      description: 'Protecție avansată de securitate'
    },
    {
      icon: <FaCogs />,
      title: 'Admin Center',
      description: 'Management centralizat al organizației'
    }
  ];

  const aiServices = [
    {
      icon: <FaBrain />,
      title: 'Azure OpenAI',
      description: 'Modele AI avansate în Azure',
      capabilities: [
        'GPT-4 și DALL-E',
        'Fine-tuning și deployment',
        'Integrare cu aplicații',
        'Rate limiting și monitoring'
      ]
    },
    {
      icon: <FaPuzzlePiece />,
      title: 'Cognitive Services',
      description: 'API-uri pre-antrenate pentru AI',
      capabilities: [
        'Computer Vision',
        'Speech Services',
        'Language Understanding',
        'Custom AI Models'
      ]
    }
  ];

  const eligibilityCriteria = [
    'Startup-ul să fie în fază de dezvoltare timpurie (early-stage)',
    'Mai puțin de 5 ani de la înființare',
    'Să nu fi primit anterior credite Microsoft pentru Startups',
    'Să aibă un produs sau serviciu inovator',
    'Venituri anuale sub $10 milioane'
  ];

  const useCases = [
    {
      title: 'Dezvoltare Cloud-Native',
      description: 'Aplicații moderne folosind microservicii și containere pe Azure Kubernetes Service'
    },
    {
      title: 'Analytics și AI',
      description: 'Soluții de analiză date și inteligență artificială cu Azure Synapse și OpenAI'
    },
    {
      title: 'SaaS pe Azure',
      description: 'Construiește și scalează aplicații SaaS folosind serviciile Azure PaaS'
    },
    {
      title: 'DevOps & GitHub',
      description: 'Pipeline-uri CI/CD automate cu GitHub Actions și Azure DevOps'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Verifică Eligibilitatea',
      description: 'Verifică dacă startup-ul tău îndeplinește criteriile Microsoft'
    },
    {
      number: '02',
      title: 'Pregătește Aplicația',
      description: 'Pregătește pitch-ul și documentele necesare'
    },
    {
      number: '03',
      title: 'Aplică prin Lightning',
      description: 'Depune aplicația prin parteneriatul nostru'
    },
    {
      number: '04',
      title: 'Activare & Onboarding',
      description: 'Setup inițial și configurare cu experții noștri'
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <FaChartLine />,
      industry: 'FinTech',
      title: 'Servicii Financiare',
      description: 'Soluții cloud conforme pentru industria financiară',
      benefits: [
        'Servicii blockchain cu Azure',
        'Detecție fraude cu AI',
        'Conformitate PCI DSS și GDPR',
        'Analiză predictivă'
      ]
    },
    {
      icon: <FaRocket />,
      industry: 'B2B SaaS',
      title: 'Software Enterprise',
      description: 'Platformă pentru aplicații business',
      benefits: [
        'Single Sign-On cu Azure AD',
        'Marketplace Azure integration',
        'API Management și Gateway',
        'Business Intelligence cu Power BI'
      ]
    },
    {
      icon: <FaBrain />,
      industry: 'AI/ML',
      title: 'Inteligență Artificială',
      description: 'Infrastructure pentru AI și Machine Learning',
      benefits: [
        'GPU clusters pentru training',
        'MLOps cu Azure ML',
        'Deployment modele cu ONNX',
        'Cognitive Services API-uri'
      ]
    },
    {
      icon: <FaUsersCog />,
      industry: 'Enterprise Tech',
      title: 'Tehnologie Enterprise',
      description: 'Soluții pentru digitalizare corporativă',
      benefits: [
        'Integrare Active Directory',
        'Hybrid Cloud Setup',
        'Enterprise Scale Landing Zone',
        'Guvernanță și Compliance'
      ]
    }
  ];

  const seoData = {
    title: "Microsoft for Startups | Program de finanțare pentru startup-uri",
    description: "Accelerează-ți startup-ul cu Microsoft for Startups. Primește credite Azure, licențe enterprise și suport tehnic pentru dezvoltarea afacerii tale.",
    canonical: "https://lightning-revenue.com/microsoft-startups",
    ogType: "website",
  };

  const schemaData = {
    "@type": "Service",
    name: "Microsoft for Startups Program",
    description: "Program de finanțare și suport pentru startup-uri prin Microsoft Azure și platforma Microsoft",
    provider: {
      "@type": "Organization",
      name: "LightningRevenue",
    },
    areaServed: "Romania",
    serviceType: "Startup Support"
  };

  return (
    <>
      <SEO 
        title={dynamicTitle}
        description="Accelerează-ți startup-ul cu resurse Microsoft în valoare de până la $150,000. Acces la Azure, GitHub Enterprise, Microsoft 365 și suport tehnic dedicat. Program oficial Microsoft for Startups în România."
        keywords="Microsoft for Startups România, Azure credits, GitHub Enterprise, startup program, cloud computing"
        canonical="https://www.lightning-revenue.ro/microsoft-startups"
      />
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
                  Scalează-ți Startup-ul cu
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                    Microsoft for Startups
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Obține acces la tehnologii enterprise, expertiză tehnică și resurse 
                  în valoare de până la $150,000 pentru a-ți scala startup-ul
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
                    <div className="text-4xl text-blue-500 mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {benefit.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Azure Features */}
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Azure Cloud pentru Startup-uri</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {azureFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl text-blue-500 mr-4">{feature.icon}</div>
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

              {/* AI Services */}
              <motion.section 
                className="py-20 bg-white rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    Azure AI și Cognitive Services
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Accelerează dezvoltarea cu servicii AI pre-antrenate și modele personalizabile
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {aiServices.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-blue-500 mr-4">{service.icon}</div>
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <ul className="space-y-2">
                          {service.capabilities.map((capability, i) => (
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
                    Azure oferă soluții optimizate pentru nevoile specifice ale 
                    fiecărei industrii, cu focus pe securitate și conformitate
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
                          <div className="text-3xl text-blue-500 mr-4">{solution.icon}</div>
                          <div>
                            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
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

              {/* Process Steps */}
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-white mb-20"
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

              {/* CTA Section */}
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">
                  Pregătit să scalezi la nivel enterprise?
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
                    programul Microsoft for Startups, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Configurare și optimizare infrastructură Azure</li>
                    <li>Setup Microsoft 365 și GitHub Enterprise</li>
                    <li>Pregătirea documentației pentru aplicare</li>
                    <li>Consultanță tehnică pentru migrare</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicației și primirii creditelor Azure și beneficiilor asociate, 
                    se va aplica un comision de succes de 15% din valoarea totală a creditelor acordate. 
                    Acest comision poate fi achitat în rate pe parcursul primelor 3 luni de la primirea 
                    creditelor.
                  </p>
                  <p>
                    Perioada de valabilitate a creditelor este de 12 luni de la activare. Creditele și 
                    beneficiile nu sunt transferabile și nu pot fi convertite în numerar. Microsoft își 
                    rezervă dreptul de a modifica sau întrerupe programul în orice moment.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu Microsoft și nu garantează aprobarea în program. 
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

export default MicrosoftStartups;