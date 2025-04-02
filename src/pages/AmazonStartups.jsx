import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  FaAmazon, FaCloud, FaServer, FaDatabase,
  FaUsers, FaCheckCircle, FaCode, FaLock,
  FaBrain, FaRocket, FaChartLine, FaShieldAlt,
  FaEnvelope, FaCogs, FaNetworkWired, FaDesktop,
  FaRobot, FaMicrochip, FaUsersCog, FaGlobe
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const AmazonStartups = () => {
  const [dynamicTitle, setDynamicTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q')?.toLowerCase() || '';
    
    if (searchTerm.includes('aws') || searchTerm.includes('amazon cloud')) {
      setDynamicTitle('AWS Activate pentru Startup-uri | $120,000 Credite Cloud');
    } else if (searchTerm.includes('aws lambda') || searchTerm.includes('serverless')) {
      setDynamicTitle('AWS Serverless pentru Startup-uri | Lambda și API Gateway');
    } else if (searchTerm.includes('s3') || searchTerm.includes('storage')) {
      setDynamicTitle('Amazon S3 și Storage pentru Startup-uri | AWS Activate');
    } else if (searchTerm.includes('ec2') || searchTerm.includes('compute')) {
      setDynamicTitle('Amazon EC2 pentru Startup-uri | Compute Resources');
    } else {
      setDynamicTitle('AWS Activate România | Program Oficial de Finanțare');
    }
  }, [location.search]);

  const benefits = [
    {
      icon: <FaCloud />,
      title: 'AWS Credits',
      value: '$120,000',
      description: 'Credite AWS pentru infrastructură și servicii cloud'
    },
    {
      icon: <FaUsersCog />,
      title: 'AWS Support',
      value: 'Business',
      description: 'Plan AWS Business Support pentru suport tehnic 24/7'
    },
    {
      icon: <FaUsers />,
      title: 'Mentorat',
      value: 'Experți AWS',
      description: 'Acces la arhitecți și experți tehnici AWS'
    },
    {
      icon: <FaDatabase />,
      title: 'Resurse',
      value: 'Premium',
      description: 'Training-uri AWS și resurse pentru startup-uri'
    }
  ];

  const awsMainServices = [
    {
      icon: <FaServer />,
      title: 'Amazon EC2',
      description: 'Servere virtuale în cloud',
      features: [
        'Instance optimizate pentru AI/ML',
        'Auto Scaling Groups',
        'Spot Instances pentru economii',
        'Load Balancing integrat'
      ]
    },
    {
      icon: <FaNetworkWired />,
      title: 'AWS Lambda',
      description: 'Funcții serverless și microservicii',
      features: [
        'Zero administrare infrastructură',
        'Scalare automată',
        'Pay-per-use exact',
        'Suport pentru multe limbaje'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Amazon RDS',
      description: 'Baze de date gestionate',
      features: [
        'MySQL, PostgreSQL, SQL Server',
        'Backup și recovery automat',
        'Multi-AZ deployment',
        'Scalare simplă'
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: 'AWS Security',
      description: 'Securitate completă în cloud',
      features: [
        'AWS IAM pentru access control',
        'Guard​Duty pentru amenințări',
        'Shield pentru DDoS protection',
        'WAF pentru aplicații web'
      ]
    }
  ];

  const aiServices = [
    {
      icon: <FaBrain />,
      title: 'Amazon Bedrock',
      description: 'Platformă generativă AI pentru business',
      capabilities: [
        'Acces la modele AI de top',
        'APIs unificate pentru AI',
        'Customizare modele',
        'Integrare simplă'
      ]
    },
    {
      icon: <FaMicrochip />,
      title: 'SageMaker',
      description: 'Platformă completă pentru ML',
      capabilities: [
        'Dezvoltare modele ML',
        'Training distribuit',
        'Deployment automatizat',
        'Monitorizare modele'
      ]
    }
  ];

  const eligibilityCriteria = [
    'Startup-ul să fie în stadiu early-stage (până în Series A)',
    'Mai puțin de 10 ani de la înființare',
    'Să nu fi primit anterior credite AWS Activate',
    'Să aibă un produs viabil sau prototip',
    'Sub $100,000 cheltuieli lunare AWS existente'
  ];

  const useCases = [
    {
      title: 'DevOps & Containerizare',
      description: 'Infrastructure as Code și container orchestration cu ECS și EKS'
    },
    {
      title: 'Machine Learning',
      description: 'Dezvoltare și deployment modele ML cu SageMaker și servicii AI'
    },
    {
      title: 'Serverless Apps',
      description: 'Arhitecturi moderne cu Lambda, API Gateway și DynamoDB'
    },
    {
      title: 'Analytics la Scară',
      description: 'Big Data processing cu EMR, Redshift și Kinesis'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Verifică Eligibilitatea',
      description: 'Verifică dacă startup-ul îndeplinește criteriile AWS'
    },
    {
      number: '02',
      title: 'Pregătește Aplicația',
      description: 'Documentează planul de utilizare AWS și nevoi tehnice'
    },
    {
      number: '03',
      title: 'Aplică prin Lightning',
      description: 'Depune aplicația prin parteneriatul nostru'
    },
    {
      number: '04',
      title: 'Activare & Setup',
      description: 'Primește creditele și începe implementarea'
    }
  ];

  const industrySpecificSolutions = [
    {
      icon: <FaChartLine />,
      industry: 'FinTech',
      title: 'Servicii Financiare',
      description: 'Infrastructură pentru aplicații financiare scalabile',
      benefits: [
        'Procesare tranzacții high-frequency',
        'Compliance și securitate avansată',
        'Analytics în timp real',
        'Blockchain cu Amazon Managed Blockchain'
      ]
    },
    {
      icon: <FaGlobe />,
      industry: 'eCommerce',
      title: 'Comerț Electronic',
      description: 'Platformă completă pentru retail online',
      benefits: [
        'Catalog management cu DocumentDB',
        'Recomandări cu Personalize',
        'CDN cu CloudFront',
        'Search cu OpenSearch'
      ]
    },
    {
      icon: <FaRocket />,
      industry: 'Gaming',
      title: 'Game Tech',
      description: 'Infrastructură pentru jocuri online',
      benefits: [
        'GameLift pentru servere de joc',
        'Latență redusă cu Global Accelerator',
        'Analitică în timp real',
        'Scalare automată pentru evenimente'
      ]
    },
    {
      icon: <FaDesktop />,
      industry: 'Media & Streaming',
      title: 'Streaming & Content',
      description: 'Soluții pentru streaming și procesare media',
      benefits: [
        'Transcoding cu MediaConvert',
        'Streaming cu Elemental',
        'CDN pentru distribuție globală',
        'AI pentru content moderation'
      ]
    }
  ];

  const seoData = {
    title: "AWS for Startups | Program de finanțare pentru startup-uri",
    description: "Dezvoltă-ți startup-ul cu AWS. Obține credite cloud, suport tehnic și acces la servicii premium pentru scalarea afacerii tale.",
    canonical: "https://www.lightning-revenue.com/amazon-startups",
    ogType: "website",
  };

  const schemaData = {
    "@type": "Service",
    name: "AWS Startups Program",
    description: "Program de finanțare și suport pentru startup-uri prin Amazon Web Services",
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
        description="Accelerează-ți startup-ul cu infrastructură AWS în valoare de până la $120,000. Acces la EC2, S3, Lambda și suport tehnic business. Program oficial AWS Activate în România."
        keywords="AWS Activate România, AWS credits, startup program, cloud computing, Amazon Web Services, finanțare startup tech, credite cloud AWS, program startup România, $120000 credite cloud, AWS pentru antreprenori, tech startup, fonduri startup, accelerator AWS, Amazon SageMaker, Lambda serverless, EC2 compute, S3 storage, DynamoDB, startup finanțare, AWS Bedrock, AWS pentru firme noi, incubator startup tech"
        canonical="https://www.lightning-revenue.com/amazon-startups"
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
                  Construiește-ți Startup-ul cu
                  <span className="block bg-gradient-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text">
                    AWS Activate
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Obține acces la infrastructură cloud enterprise, expertiză tehnică și resurse 
                  în valoare de până la $120,000 pentru a-ți scala startup-ul
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

              {/* AWS Main Services */}
              <motion.div 
                className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Servicii AWS Esențiale</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {awsMainServices.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl text-orange-500 mr-4">{service.icon}</div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
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
                      <li>• Creditele sunt valabile 24 de luni de la activare</li>
                      <li>• Se pot folosi pentru orice serviciu AWS eligibil</li>
                      <li>• Necesită card bancar valid pentru verificare</li>
                      <li>• Se aplică termenii și condițiile AWS Activate</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* AI & ML Services */}
              <motion.section 
                className="py-20 bg-white rounded-3xl shadow-lg mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-4 text-center">
                    AI și Machine Learning pe AWS
                  </h2>
                  <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Dezvoltă și deployează modele AI/ML la scară folosind serviciile 
                    AWS pentru machine learning și inteligență artificială
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {aiServices.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 shadow-lg"
                      >
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-orange-500 mr-4">{service.icon}</div>
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
                    AWS oferă soluții specializate pentru fiecare industrie, 
                    cu focus pe scalabilitate, performanță și securitate
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
                  Pregătit să construiești pe AWS?
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
                    programul AWS Activate, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Configurare și optimizare infrastructură AWS</li>
                    <li>Arhitectură cloud și best practices</li>
                    <li>Pregătirea documentației pentru aplicare</li>
                    <li>Asistență în procesul de migrare</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicației și primirii creditelor AWS și beneficiilor asociate, 
                    se va aplica un comision de succes de 12% din valoarea totală a creditelor acordate. 
                    Acest comision poate fi achitat în rate pe parcursul primelor 4 luni de la primirea 
                    creditelor.
                  </p>
                  <p>
                    Creditele AWS sunt valabile 24 de luni de la activare și pot fi folosite pentru 
                    majoritatea serviciilor AWS eligibile. Creditele și beneficiile nu sunt transferabile 
                    și nu pot fi convertite în numerar. Amazon Web Services își rezervă dreptul de a 
                    modifica sau întrerupe programul în orice moment.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu Amazon Web Services și nu garantează aprobarea 
                    în program. Toate mărcile comerciale aparțin deținătorilor respectivi.
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

export default AmazonStartups;