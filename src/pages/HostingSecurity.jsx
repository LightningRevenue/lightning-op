import React from 'react';
import { 
  FaServer, FaShieldAlt, FaLock, FaCloud, FaCloudDownloadAlt, FaTachometerAlt,
  FaUserShield, FaFileContract, FaCheckCircle, FaCog, FaDatabase, FaChartLine
} from 'react-icons/fa';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import Contact from '../components/home/Contact';

const HostingSecurity = () => {
  const features = [
    {
      icon: <FaServer />,
      title: "Managed Hosting",
      description: "Soluții de hosting administrat cu performanță și uptime garantat de 99.9%."
    },
    {
      icon: <FaShieldAlt />,
      title: "Securitate Avansată",
      description: "Protecție completă împotriva amenințărilor cibernetice și atacurilor DDoS."
    },
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure",
      description: "Infrastructură cloud scalabilă și redundantă pentru aplicații business-critical."
    },
    {
      icon: <FaLock />,
      title: "Conformitate & Certificări",
      description: "Conformitate cu standardele ISO 27001, GDPR și alte reglementări specifice industriei."
    },
    {
      icon: <FaCloudDownloadAlt />,
      title: "Backup & Recovery",
      description: "Soluții automate de backup și disaster recovery pentru continuitate operațională."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Monitorizare 24/7",
      description: "Monitorizare proactivă și suport tehnic disponibil non-stop."
    }
  ];

  const solutions = [
    {
      icon: <FaServer />,
      name: "Enterprise Hosting",
      description: "Infrastructură dedicată"
    },
    {
      icon: <FaCloud />,
      name: "Cloud Services",
      description: "Soluții cloud scalabile"
    },
    {
      icon: <FaDatabase />,
      name: "Database Hosting",
      description: "Management baze de date"
    },
    {
      icon: <FaShieldAlt />,
      name: "Security Suite",
      description: "Protecție completă"
    }
  ];

  const services = [
    {
      icon: <FaUserShield />,
      title: "Managed Security",
      description: "Servicii complete de securitate administrată",
      features: [
        "Firewall & IDS/IPS",
        "Antivirus & Malware Protection",
        "Security Auditing",
        "Incident Response"
      ]
    },
    {
      icon: <FaFileContract />,
      title: "Compliance & Governance",
      description: "Conformitate și guvernanță IT",
      features: [
        "ISO 27001 Compliance",
        "GDPR Implementation",
        "Risk Assessment",
        "Policy Management"
      ]
    },
    {
      icon: <FaCog />,
      title: "Infrastructure Management",
      description: "Administrare completă infrastructură",
      features: [
        "Server Management",
        "Performance Optimization",
        "Scalability Planning",
        "24/7 Monitoring"
      ]
    }
  ];

  const metrics = [
    {
      icon: <FaTachometerAlt />,
      title: "Uptime Garantat",
      value: "99.9%",
      description: "Disponibilitate anuală"
    },
    {
      icon: <FaChartLine />,
      title: "Timp Răspuns",
      value: "<15min",
      description: "La incidente critice"
    },
    {
      icon: <FaCheckCircle />,
      title: "Satisfacție Clienți",
      value: "98%",
      description: "Nivel satisfacție suport"
    }
  ];

  const faq = [
    {
      question: "Ce măsuri de securitate sunt incluse?",
      answer: "Pachetul nostru de securitate include firewall enterprise, protecție DDoS, IDS/IPS, scanare malware, monitorizare 24/7, patches de securitate automate și backup-uri regulate."
    },
    {
      question: "Cum asigurați conformitatea cu reglementările?",
      answer: "Implementăm și menținem controale conform ISO 27001, GDPR și alte standarde specifice industriei. Oferim documentație completă și asistență pentru audituri."
    },
    {
      question: "Ce include serviciul de suport tehnic?",
      answer: "Oferim suport tehnic 24/7 prin telefon, email și ticket system, cu timp de răspuns garantat sub 15 minute pentru probleme critice și asistență proactivă pentru optimizare."
    }
  ];

  return (
    <>
      <SEO 
        title="Servicii Hosting & Security pentru Business | Soluții Enterprise"
        description="Soluții complete de hosting administrat și securitate pentru mediul B2B. Infrastructură cloud, conformitate ISO 27001 și suport 24/7."
        keywords="hosting business, cloud hosting, managed security, ISO 27001, GDPR compliance, enterprise hosting, cloud infrastructure, managed services, backup solutions, cybersecurity"
        canonical="https://www.lightningoperational.ro/hosting-security"
      />
      <SchemaOrg 
        type="Service"
        name="Servicii Hosting & Security"
        description="Soluții profesionale de hosting administrat și securitate pentru mediul enterprise"
        provider="Lightning Operational"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h1 className="font-heading text-5xl font-bold mb-8 leading-tight text-gray-900">
                  Hosting & Security
                  <span className="block bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
                    Enterprise Solutions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Infrastructură cloud securizată și conformă cu standardele internaționale pentru aplicațiile tale business-critical.
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

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Soluții Enterprise
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl hover:shadow-md transition-all">
                    <div className="text-4xl text-primary mb-4">{solution.icon}</div>
                    <h3 className="font-bold mb-2">{solution.name}</h3>
                    <p className="text-gray-600 text-sm">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
                Procesul Nostru
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Evaluare & Planning</h3>
                    <p className="text-gray-600">Analiză necesități și definire arhitectură optimă pentru business-ul tău.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Implementare & Migrare</h3>
                    <p className="text-gray-600">Setup infrastructură și migrare date cu zero downtime.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Securizare & Conformitate</h3>
                    <p className="text-gray-600">Implementare măsuri de securitate și aliniere la standarde.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Monitorizare & Optimizare</h3>
                    <p className="text-gray-600">Supraveghere continuă și îmbunătățire performanță.</p>
                  </div>
                </div>
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
                Performanță Garantată
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

export default HostingSecurity;