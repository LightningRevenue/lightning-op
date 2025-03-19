import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGoogle, FaMicrosoft, FaAmazon, FaDatabase,
  FaHubspot, FaStripe, FaComments, FaRocket,
  FaCloud, FaUsers, FaCheckCircle, FaChartLine
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import EligibilityCheck from '../components/regular/EligibilityCheck';

const FinantareStartup = () => {
  const cloudPrograms = [
    {
      icon: <FaGoogle />,
      title: 'Google for Startups',
      value: '$100,000',
      description: 'Credite Google Cloud, acces Gemini AI și Google Workspace',
      benefits: [
        'Până la $100,000 credite cloud',
        '50 licențe Google Workspace Business Plus',
        'Acces la Gemini AI și ML Tools',
        'Mentorat și suport tehnic'
      ],
      path: '/google-startups'
    },
    {
      icon: <FaMicrosoft />,
      title: 'Microsoft for Startups',
      value: '$150,000',
      description: 'Credite Azure, GitHub Enterprise și Microsoft 365',
      benefits: [
        'Până la $150,000 credite Azure',
        '25 licențe Microsoft 365 Business',
        '10 licențe GitHub Enterprise',
        'Suport tehnic dedicat'
      ],
      path: '/microsoft-startups'
    },
    {
      icon: <FaAmazon />,
      title: 'AWS Activate',
      value: '$120,000',
      description: 'Credite AWS și suport business pentru startup-uri',
      benefits: [
        'Până la $120,000 credite AWS',
        'Business Support Plan',
        'Training-uri și resurse tehnice',
        'Acces la experți AWS'
      ],
      path: '/amazon-startups'
    }
  ];

  const businessTools = [
    {
      icon: <FaDatabase />,
      title: 'MongoDB for Startups',
      value: '$5,000',
      description: 'Infrastructură database și analytics enterprise',
      benefits: [
        '$5,000 credite MongoDB Atlas',
        'Funcționalități Enterprise',
        'Suport tehnic premium',
        'Program de mentorat'
      ],
      path: '/mongodb-startups'
    },
    {
      icon: <FaHubspot />,
      title: 'HubSpot for Startups',
      value: '90% OFF',
      description: 'Suite complete de marketing, sales și service',
      benefits: [
        '90% reducere primul an',
        'HubSpot Enterprise Suite',
        'Onboarding premium',
        'Training și consultanță'
      ],
      path: '/hubspot-startups'
    },
    {
      icon: <FaStripe />,
      title: 'Stripe for Startups',
      value: '$50,000',
      description: 'Procesare plăți și billing pentru startup-uri',
      benefits: [
        '$50,000 procesare gratuită',
        'Acces la toate produsele Stripe',
        'Implementare asistată',
        'Suport tehnic prioritar'
      ],
      path: '/stripe-startups'
    },
    {
      icon: <FaComments />,
      title: 'Intercom for Startups',
      value: '95% OFF',
      description: 'Platformă de engagement și suport clienți',
      benefits: [
        '95% reducere primul an',
        'Acces la toate funcționalitățile',
        'Setup personalizat',
        'Training dedicat'
      ],
      path: '/intercom-startups'
    }
  ];

  const eligibilityHighlights = [
    'Startup în fază early-stage (pre-Series A)',
    'Mai puțin de 5 ani de la înființare',
    'Sub $5M în finanțare totală primită',
    'Produs viable sau prototip funcțional',
    'Plan de creștere demonstrabil'
  ];

  const applicationSteps = [
    {
      number: '01',
      title: 'Evaluare Inițială',
      description: 'Verificăm eligibilitatea și selectăm programele potrivite'
    },
    {
      number: '02',
      title: 'Pregătire Aplicație',
      description: 'Pregătim documentația și planul de implementare'
    },
    {
      number: '03',
      title: 'Depunere & Aprobare',
      description: 'Aplicăm la programele selectate și urmărim aprobarea'
    },
    {
      number: '04',
      title: 'Implementare',
      description: 'Configurăm și optimizăm serviciile activate'
    }
  ];

  return (
    <>
      <SEO 
        title="Finanțare și Credite pentru Startup-uri Tech | Lightning Revenue"
        description="Accelerează-ți startup-ul cu peste $400,000 în credite cloud și beneficii enterprise. Acces la Google Cloud, Microsoft Azure, AWS și tool-uri esențiale pentru scalare."
        keywords="finantare startup, cloud credits, startup funding, Google Cloud, Microsoft Azure, AWS, MongoDB, HubSpot, Stripe, Intercom"
        canonical="https://www.lightning-revenue.ro/finantare-startup"
      />
      <SchemaOrg 
        type="Service"
        name="Program Finanțare Startup-uri Tech România"
        description="Program complet de suport și finanțare pentru startup-uri tech din România, incluzând credite cloud, tool-uri enterprise și consultanță tehnică"
        provider={{
          "@type": "Organization",
          "name": "Lightning Revenue",
          "sameAs": "https://www.lightning-revenue.ro"
        }}
        areaServed={{
          "@type": "Country",
          "name": "Romania"
        }}
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Hero Section */}
              <motion.div 
                className="text-center max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                  Accelerează-ți Startup-ul cu
                  <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                    Finanțare și Tool-uri Enterprise
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-12">
                  Obține acces la tehnologii de ultimă generație și resurse în valoare de peste 
                  $400,000 pentru a-ți scala startup-ul la următorul nivel
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <FaRocket className="mr-2" />
                    Aplică Acum
                  </Link>
                  <a
                    href="#eligibility"
                    className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary bg-white border-2 border-primary rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <FaCheckCircle className="mr-2" />
                    Vezi Eligibilitatea
                  </a>
                </div>
              </motion.div>

              {/* Stats Section */}
              <motion.div 
                className="grid md:grid-cols-4 gap-6 mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <FaCloud className="text-4xl text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">$370,000+</div>
                  <div className="text-gray-600">Credite Cloud</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <FaUsers className="text-4xl text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">85+</div>
                  <div className="text-gray-600">Licențe Software</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <FaChartLine className="text-4xl text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-gray-600">Parteneri Enterprise</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <FaRocket className="text-4xl text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Suport Tehnic</div>
                </div>
              </motion.div>

              {/* Cloud Programs Section */}
              <motion.div 
                className="mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">
                  Infrastructură Cloud Enterprise
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {cloudPrograms.map((program, index) => (
                    <motion.div
                      key={program.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-4xl text-primary mb-4">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {program.value}
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <ul className="space-y-2 mb-6">
                        {program.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={program.path}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Vezi Detalii
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Business Tools Section */}
              <motion.div 
                className="mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">
                  Tool-uri și Servicii Business
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {businessTools.map((tool, index) => (
                    <motion.div
                      key={tool.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="text-4xl text-primary mb-4">
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {tool.value}
                      </div>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <ul className="space-y-2 mb-6">
                        {tool.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={tool.path}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Vezi Detalii
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Eligibility Section */}
              <motion.div 
                id="eligibility"
                className="bg-white rounded-3xl p-8 shadow-lg mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center">Criterii de Eligibilitate</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <ul className="space-y-4">
                      {eligibilityHighlights.map((criteria, index) => (
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
                      <li>• Criteriile pot varia în funcție de program</li>
                      <li>• Verificăm gratuit eligibilitatea pentru toate programele</li>
                      <li>• Asistență completă în procesul de aplicare</li>
                      <li>• Suport tehnic pe toată durata implementării</li>
                    </ul>
                  </div>
                </div>

                <EligibilityCheck />
              </motion.div>

              {/* Application Steps */}
              <motion.div 
                className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-white mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center">Procesul de Aplicare</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  {applicationSteps.map((step, index) => (
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
                  Pregătit să-ți accelerezi startup-ul?
                </h2>
                <p className="text-gray-600 mb-8">
                  Programează o consultație gratuită și află ce programe ți se potrivesc
                </p>
                <Link 
                  to="/inscriere-startup-finantare"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors duration-300"
                >
                  Contactează-ne pentru Detalii
                </Link>
              </motion.div>

              {/* Terms Section */}
              <motion.div 
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-4">Termeni și Condiții</h3>
                <div className="text-xs text-gray-600 space-y-2">
                  <p>
                    Lightning Revenue oferă servicii complete de consultanță și pregătire pentru 
                    programele de finanțare prezentate, incluzând:
                  </p>
                  <ul className="list-disc pl-4 mb-2">
                    <li>Evaluarea eligibilității și selecția programelor potrivite</li>
                    <li>Pregătirea documentației și a aplicațiilor</li>
                    <li>Asistență în procesul de implementare</li>
                    <li>Suport tehnic și consultanță continuă</li>
                  </ul>
                  <p>
                    În cazul aprobării aplicațiilor, se pot aplica comisioane de succes între 10-15% 
                    din valoarea beneficiilor obținute, în funcție de program. Comisioanele pot fi 
                    achitate în rate pe parcursul primelor 3-6 luni de utilizare.
                  </p>
                  <p>
                    Creditele și beneficiile au perioade de valabilitate și condiții specifice pentru 
                    fiecare program. Detalii complete sunt disponibile în paginile dedicate fiecărui program.
                  </p>
                  <p>
                    Lightning Revenue nu este afiliat cu companiile care oferă programele și nu garantează 
                    aprobarea în programe. Toate mărcile comerciale aparțin deținătorilor respectivi.
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

export default FinantareStartup;