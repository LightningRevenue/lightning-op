import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  FaGoogle, FaRocket, FaLightbulb, FaCloud, 
  FaUsers, FaCheckCircle, FaCode, FaDatabase,
  FaEnvelope, FaCalendar, FaVideo, FaLock,
  FaBrain, FaServer, FaShieldAlt, FaNetworkWired,
  FaRobot, FaChartLine, FaUsersCog, FaCogs
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const GoogleStartups = () => {
  const [dynamicTitle, setDynamicTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q')?.toLowerCase() || '';
    
    if (searchTerm.includes('gemini') || searchTerm.includes('ai')) {
      setDynamicTitle('Google AI și Gemini pentru Startup-uri | Google for Startups');
    } else if (searchTerm.includes('cloud') || searchTerm.includes('gcp')) {
      setDynamicTitle('Google Cloud pentru Startup-uri | $100,000 Credite Gratuite');
    } else if (searchTerm.includes('workspace') || searchTerm.includes('gmail')) {
      setDynamicTitle('Google Workspace Business Plus pentru Startup-uri | 50 Licențe');
    } else if (searchTerm.includes('firebase') || searchTerm.includes('app')) {
      setDynamicTitle('Firebase și App Development | Google for Startups România');
    } else {
      setDynamicTitle('Google for Startups România | Program Oficial de Finanțare');
    }
  }, [location.search]);

  const benefits = [
    {
      icon: <FaCloud />,
      title: 'Cloud Credits',
      value: '$100,000',
      description: 'Credite Google Cloud pentru infrastructură și servicii cloud'
    },
    {
      icon: <FaEnvelope />,
      title: 'Google Workspace',
      value: '50 Licențe',
      description: 'Subscripții Google Workspace Business Plus pentru întreaga echipă'
    },
    {
      icon: <FaUsers />,
      title: 'Mentorat',
      value: 'Experți Google',
      description: 'Acces la experți tehnici și de business din rețeaua Google'
    },
    {
      icon: <FaDatabase />,
      title: 'Resurse',
      value: 'Premium',
      description: 'Training-uri, workshop-uri și resurse educaționale'
    }
  ];

  const workspaceFeatures = [
    {
      icon: <FaEnvelope />,
      title: 'Gmail Business',
      description: 'Email profesional cu domeniul companiei'
    },
    {
      icon: <FaVideo />,
      title: 'Google Meet',
      description: 'Întâlniri video cu până la 500 participanți'
    },
    {
      icon: <FaCalendar />,
      title: 'Calendar',
      description: 'Programare și coordonare echipă'
    },
    {
      icon: <FaLock />,
      title: 'Security',
      description: 'Caracteristici avansate de securitate'
    }
  ];

  const eligibilityCriteria = [
    'Startup-ul trebuie să fie într-o etapă timpurie de dezvoltare (early stage)',
    'Să aibă un produs minim viabil (MVP) sau prototip funcțional',
    'Să nu fi primit anterior credite Google Cloud prin alte programe',
    'Să demonstreze potențial de creștere și scalare',
    'Să nu aibă venituri anuale mai mari de $5 milioane'
  ];

  const useCases = [
    {
      title: 'Machine Learning și AI',
      description: 'Dezvoltare modele ML, procesare imagine și voce, analiza datelor'
    },
    {
      title: 'Aplicații Cloud Native',
      description: 'Dezvoltare și scalare aplicații folosind Kubernetes și Cloud Run'
    },
    {
      title: 'Big Data și Analytics',
      description: 'Procesare și analiză date folosind BigQuery și Dataflow'
    },
    {
      title: 'IoT și Edge Computing',
      description: 'Soluții IoT folosind platformele Google Cloud IoT'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Verifică Eligibilitatea',
      description: 'Asigură-te că startup-ul tău îndeplinește criteriile de bază'
    },
    {
      number: '02',
      title: 'Pregătește Aplicația',
      description: 'Documentează viziunea, MVP-ul și planul de utilizare a resurselor'
    },
    {
      number: '03',
      title: 'Depune Aplicația',
      description: 'Aplică prin intermediul unui partener Google for Startups'
    },
    {
      number: '04',
      title: 'Evaluare și Aprobare',
      description: 'Așteptă evaluarea aplicației și aprobarea pentru program'
    }
  ];

  const cloudFeatures = [
    {
      icon: <FaServer />,
      title: 'Compute Engine',
      description: 'Mașini virtuale scalabile și performante pentru orice workload',
      features: [
        'Instanțe optimizate pentru AI/ML',
        'Auto-scaling și load balancing',
        'Disc persistent și SSD-uri locale',
        'Rețea globală Google'
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: 'Cloud Run',
      description: 'Rulare containere serverless cu scalare automată',
      features: [
        'Deploy rapid și simplu',
        'Plătești doar pentru resursele folosite',
        'Suport pentru orice limbaj',
        'Integrare CI/CD'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Cloud Storage',
      description: 'Stocare obiect scalabilă și durabilă',
      features: [
        'Stocare nelimitată',
        'Clase multiple de stocare',
        'Redundanță globală',
        'Securitate avansată'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cloud Security',
      description: 'Securitate integrată la nivel enterprise',
      features: [
        'Criptare by default',
        'Identity and Access Management',
        'DDoS protection',
        'Security Command Center'
      ]
    }
  ];

  const geminiFeatures = [
    {
      icon: <FaBrain />,
      title: 'Gemini Pro',
      description: 'Model AI avansat pentru aplicații enterprise',
      capabilities: [
        'Procesare text multilingv',
        'Generare și editare cod',
        'Analiză imagini și documente',
        'Integrare API simplă'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'Gemini Ultra',
      description: 'Cel mai avansat model AI de la Google',
      capabilities: [
        'Raționament complex',
        'Înțelegere contextuală avansată',
        'Multimodal understanding',
        'Performanță la nivel uman'
      ]
    }
  ];

  const workspaceAdvancedFeatures = [
    {
      icon: <FaUsersCog />,
      title: 'Admin Console',
      description: 'Control complet asupra organizației',
      features: [
        'Management utilizatori și grupuri',
        'Politici de securitate',
        'Audit logs',
        'Device management'
      ]
    },
    {
      icon: <FaCogs />,
      title: 'Workspace AI',
      description: 'Inteligență artificială în toate aplicațiile',
      features: [
        'Smart compose în Gmail',
        'Auto-generare prezentări',
        'Transcripție automată Meet',
        'Analiza datelor în Sheets'
      ]
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <FaChartLine />,
      industry: 'FinTech',
      title: 'Servicii Financiare',
      description: 'Infrastructură cloud securizată pentru aplicații financiare',
      benefits: [
        'Procesare tranzacții în timp real',
        'Detectare fraude cu AI/ML',
        'Conformitate cu reglementările financiare',
        'Blockchain și servicii criptografice'
      ]
    },
    {
      icon: <FaUsers />,
      industry: 'eCommerce',
      title: 'Comerț Electronic',
      description: 'Soluții scalabile pentru magazine online și marketplaces',
      benefits: [
        'Catalog și inventar cloud-native',
        'Recomandări personalizate cu AI',
        'Procesare comenzi în timp real',
        'Analytics pentru comportament clienți'
      ]
    },
    {
      icon: <FaCode />,
      industry: 'SaaS',
      title: 'Software as a Service',
      description: 'Arhitectură modernă pentru aplicații în cloud',
      benefits: [
        'Microservicii și Kubernetes',
        'CI/CD automatizat',
        'Monitoring și logging avansat',
        'Multi-tenancy și izolare date'
      ]
    },
    {
      icon: <FaDatabase />,
      industry: 'HealthTech',
      title: 'Tehnologie Medicală',
      description: 'Soluții conforme GDPR pentru date medicale',
      benefits: [
        'Stocare securizată date pacienți',
        'Telemedicină și APIs FHIR',
        'Procesare imagini medicale cu AI',
        'Analitice pentru cercetare clinică'
      ]
    }
  ];

  const seoData = {
    title: "Google for Startups | Program de finanțare pentru startup-uri",
    description: "Accesează programul Google for Startups prin LightningRevenue. Obține credite cloud, suport tehnic și mentorat pentru startup-ul tău tech.",
    canonical: "https://lightning-revenue.com/google-startups",
    ogType: "website",
  };

  const schemaData = {
    "@type": "Service",
    name: "Google for Startups Program",
    description: "Program de finanțare și suport pentru startup-uri prin Google Cloud Platform",
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
        description="Accelerează-ți startup-ul cu Google Cloud, Gemini AI și Google Workspace. Primești până la $100,000 în credite cloud și 50 de licențe business. Program oficial Google for Startups în România."
        keywords="Google for Startups România, Google Cloud credits, Gemini AI, startup program, cloud computing"
        canonical="https://www.lightning-revenue.ro/google-startups"
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
                  Accelerează-ți Startup-ul cu
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                    Google for Startups
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Obține acces la tehnologii de ultimă generație, expertiză și resurse 
                  în valoare de până la $100,000 pentru a-ți scala startup-ul
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

              {/* Google Workspace Features */}
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Google Workspace Business Plus</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {workspaceFeatures.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="text-3xl text-blue-500 mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center text-gray-600">
                  50 de licențe Google Workspace Business Plus gratuite pentru echipa ta
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
                      <li>• Creditele sunt valabile între 12-24 luni de la activare</li>
                      <li>• Nu se pot transfera între organizații</li>
                      <li>• Necesită card bancar pentru verificare</li>
                      <li>• Se aplică termenii și condițiile Google Cloud</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

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

              {/* Application Steps */}
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-12 text-white mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Pașii Aplicării</h2>
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

              {/* Google Cloud Features */}
              <motion.section 
                className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-12 text-center">
                    Servicii Google Cloud Esențiale pentru Startup-uri
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {cloudFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-lg"
                      >
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
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Gemini AI Section */}
              <motion.section 
                className="py-20 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    Accelerează Inovația cu Gemini AI
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Acces la cele mai avansate modele AI de la Google, perfecte pentru dezvoltarea 
                    produselor și serviciilor bazate pe inteligență artificială
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {geminiFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-blue-500 mr-4">{feature.icon}</div>
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

              {/* Industry Solutions Section */}
              <motion.section 
                className="py-20 bg-gradient-to-r from-white to-blue-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Soluții Cloud pentru Industrii Specifice
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Google Cloud oferă soluții optimizate pentru nevoile specifice ale 
                    fiecărei industrii, ajutându-te să inovezi mai rapid și să scalezi eficient
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

              {/* Advanced Workspace Features */}
              <motion.section 
                className="py-20 bg-gradient-to-r from-gray-50 to-blue-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-12 text-center">
                    Funcționalități Avansate Google Workspace
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {workspaceAdvancedFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 shadow-lg"
                      >
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
                  Pregătit să-ți accelerezi startup-ul?
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
                    Lightning Revenue oferă gratuit servicii complete de configurare și pregătire pentru 
                    programul Google for Startups, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Configurare și optimizare infrastructură cloud</li>
                    <li>Setare conturi și email-uri Google Workspace</li>
                    <li>Pregătirea documentației necesare</li>
                    <li>Asistență în procesul de aplicare</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicației și primirii creditelor Google Cloud și beneficiilor asociate, 
                    se va aplica un comision de succes de 10% din valoarea totală a creditelor acordate. 
                    Acest comision va fi facturat după confirmarea primirii creditelor și poate fi achitat 
                    în rate pe parcursul primelor 6 luni de utilizare a programului.
                  </p>
                  <p>
                    Perioada de valabilitate a creditelor poate varia între 12 și 24 de luni, în funcție de 
                    programul specific și regiunea geografică. Creditele și beneficiile nu sunt transferabile 
                    și nu pot fi convertite în numerar. Google își rezervă dreptul de a modifica sau întrerupe 
                    programul în orice moment.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu Google și nu garantează aprobarea în program. 
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

export default GoogleStartups;