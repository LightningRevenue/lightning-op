import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaGoogle, FaMicrosoft, FaDocker, FaCloud, FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const Portfolio = () => {
  const caseStudies = [
    {
      title: 'OpenShift',
      description: 'Orchestrare container-e și automatizare DevOps pentru scalabilitate enterprise',
      features: [
        'Implementare CI/CD pentru aplicații cloud-native',
        'Automatizare deployment și scalare',
        'Management centralizat al containerelor',
        'Securitate și conformitate în cloud'
      ],
      icon: <FaDocker className="text-5xl text-red-600" />
    },
    {
      title: 'Ansible',
      description: 'Automatizare infrastructure și configurare la scară mare',
      features: [
        'Automatizare multi-cloud',
        'Management configurații',
        'Deployment aplicații',
        'Orchestrare servicii'
      ],
      icon: <FaCloud className="text-5xl text-[#1A1A1A]" />
    },
    {
      title: 'Cycloid',
      description: 'DevOps și Cloud Management Platform pentru eficiență maximă',
      features: [
        'Automatizare infrastructură',
        'Management costuri cloud',
        'Integrare multi-cloud',
        'Template-uri și stack-uri predefinite'
      ],
      icon: <FaCloud className="text-5xl text-blue-600" />
    }
  ];

  const partners = [
    {
      name: 'Google Cloud',
      description: 'Partner oficial în programul Google for Startups, oferind acces la tehnologii cloud și expertiză valorificată prin $100,000 credite cloud',
      icon: <FaGoogle className="text-4xl text-[#4285F4]" />,
      benefits: ['Acces la Google Cloud Platform', 'Mentorat tehnic', 'Suport premium 24/7']
    },
    {
      name: 'Microsoft Azure',
      description: 'Microsoft for Startups Founder Hub partner, facilitând acces la resurse Azure și suport enterprise în valoare de $150,000',
      icon: <FaMicrosoft className="text-4xl text-[#00A4EF]" />,
      benefits: ['Credite Azure', 'Licențe software enterprise', 'Suport tehnic dedicat']
    },
    {
      name: 'Amazon AWS',
      description: 'Membru AWS Partner Network, oferind soluții cloud scalabile și securizate cu beneficii de până la $100,000',
      icon: <FaAws className="text-4xl text-[#FF9900]" />,
      benefits: ['Infrastructură cloud scalabilă', 'Servicii managed', 'Consultanță tehnică']
    }
  ];

  const infrastructureFeatures = [
    {
      title: 'Investiție în Infrastructură',
      description: 'Am securizat o finanțare de 50.000€ pentru dezvoltarea infrastructurii cloud dedicate clienților noștri',
      icon: <FaRocket className="text-4xl text-purple-600" />,
      details: ['Servere de înaltă performanță', 'Securitate avansată', 'Backup automatizat']
    },
    {
      title: 'Lightning-Revenue CRM',
      description: 'În dezvoltare: sistem CRM personalizat pentru optimizarea relației cu clienții',
      icon: <FaUsers className="text-4xl text-green-600" />,
      details: ['Automatizare procese', 'Integrare multi-canal', 'Analiză date în timp real']
    },
    {
      title: 'Rezultate Măsurabile',
      description: 'Monitorizare și raportare avansată a performanței',
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      details: ['Dashboard-uri personalizate', 'KPI tracking', 'Rapoarte automate']
    }
  ];

  return (
    <>
      <SEO 
        title="Portofoliu & Studii de Caz | Partener Cloud Enterprise | Lightning-Revenue"
        description="Descoperă cum ajutăm startup-urile să crească prin parteneriate strategice cu Google, Microsoft și Amazon. Beneficiază de infrastructură cloud enterprise și expertiză tehnică."
        keywords="OpenShift, Ansible, Cloud Computing, DevOps, Google Cloud, Microsoft Azure, AWS, automatizare, startup, cloud infrastructure, CRM, digital transformation"
        canonical="https://www.lightning-revenue.com/portofoliu"
      />
      <SchemaOrg 
        type="Organization"
        name="Lightning-Revenue"
        description="Partener strategic pentru transformare digitală și cloud computing"
        sameAs={[
          "https://www.facebook.com/lightning-revenue",
          "https://www.linkedin.com/company/lightning-revenue",
          "https://twitter.com/lightning-revenue"
        ]}
      />
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Tehnologii de Ultimă Generație pentru
                <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                  Creșterea Afacerii Tale
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Explorează cum ajutăm companiile să își atingă potențialul maxim prin tehnologii cloud și automatizare
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">{study.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <ul className="space-y-3">
                    {study.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section with Enhanced Details */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-6">Program de Startup Accelerator</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Prin parteneriatele noastre strategice, oferim acces la resurse în valoare de peste 350.000€ 
                  pentru a accelera creșterea startup-urilor
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="mb-6 flex justify-center">{partner.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-center">{partner.name}</h3>
                    <p className="text-gray-600 mb-6">{partner.description}</p>
                    <ul className="space-y-3">
                      {partner.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure and CRM Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-6">Infrastructură și Inovație</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Am investit peste 50.000€ în infrastructură cloud dedicată și dezvoltăm soluții inovatoare 
                  pentru a maximiza succesul clienților noștri
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {infrastructureFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8"
                  >
                    <div className="mb-6 flex justify-center">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Începe Transformarea Digitală</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Programul nostru de startup accelerator îți oferă toate resursele necesare pentru a-ți scala afacerea.
                  Beneficiază de infrastructură enterprise, mentorat tehnic și credite cloud.
                </p>
                <a
                  href="/programari"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary to-blue-600 rounded-xl hover:opacity-90 transition-all duration-300"
                >
                  Programează o Consultație
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;