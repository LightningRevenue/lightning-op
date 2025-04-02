import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCloud, FaCode, FaBriefcase, FaChartLine, FaShoppingCart, FaDatabase, 
  FaRobot, FaTrello, FaGithub, FaDocker, FaAws, FaGoogle, FaMicrosoft,
  FaRedhat, FaStripe, FaShopify, FaHubspot, FaSalesforce
} from 'react-icons/fa';
import { 
  SiClickup, SiAsana, SiConfluence, SiOpenai, SiZoho, SiSap, SiNetlify, 
  SiAdobecreativecloud, SiAtlassian, SiApollographql, SiShopify, SiGooglemaps 
} from 'react-icons/si';
import { 
  BiStore, BiEnvelope, BiNetworkChart, BiData, BiCodeBlock 
} from 'react-icons/bi';
import SEO from '../components/seo/SEO';
import SchemaOrg from '../components/seo/SchemaOrg';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';

const Partners = () => {
  const categories = [
    {
      title: "Project Management & Collaboration",
      icon: FaBriefcase,
      description: "Integrări cu cele mai populare platforme de management de proiecte și colaborare pentru eficiență maximă",
      tools: [
        { 
          name: "ClickUp", 
          icon: SiClickup,
          description: "Management de proiecte avansat și colaborare în timp real",
          link: "https://clickup.com",
          features: ["Task Management", "Time Tracking", "Docs", "Goals", "Forms"],
          benefits: "Aumentează productivitatea echipei cu 20%."
        },
        { 
          name: "Asana", 
          icon: SiAsana,
          description: "Organizare și urmărire task-uri pentru echipe",
          link: "https://asana.com",
          features: ["Project Templates", "Timeline", "Workflows", "Forms"],
          benefits: "Reduce timpul de management cu 30%."
        },
        { name: "Trello", icon: FaTrello, description: "Management vizual al proiectelor cu boards și cards", link: "https://trello.com", features: ["Kanban", "Collaboration", "Integrations"], benefits: "Vizualizează sarcinile într-un mod clar." },
        { name: "Atlassian", icon: SiAtlassian, description: "Suite completă de tools pentru dezvoltare software", link: "https://www.atlassian.com", features: ["Collaboration", "Tracking", "Reporting"], benefits: "Îmbunătățește fluxul de lucru." },
        { name: "Confluence", icon: SiConfluence, description: "Documentație și knowledge sharing pentru echipe", link: "https://www.atlassian.com/software/confluence", features: ["Documentation", "Collaboration", "Templates"], benefits: "Creează documentație ușor." }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      description: "Platforme cloud și soluții de dezvoltare software de ultimă generație",
      tools: [
        { 
          name: "GitHub", 
          icon: FaGithub,
          description: "Control versiune și CI/CD pentru cod",
          link: "https://github.com",
          features: ["Version Control", "Actions", "Packages", "Security"],
          benefits: "Dezvoltare colaborativă și deployment automatizat."
        },
        { name: "Google Cloud", icon: FaGoogle, description: "Infrastructură cloud și servicii managed", link: "https://cloud.google.com", features: ["Cloud Storage", "Compute Engine"], benefits: "Global reach and machine learning." },
        { name: "Microsoft Azure", icon: FaMicrosoft, description: "Cloud computing și servicii enterprise", link: "https://azure.microsoft.com", features: ["Compute", "Storage"], benefits: "Soluții scalabile de cloud." },
        { name: "RedHat", icon: FaRedhat, description: "Soluții open-source și container orchestration", link: "https://www.redhat.com", features: ["Kubernetes", "OpenShift"], benefits: "Containerize your applications." },
        { name: "Docker", icon: FaDocker, description: "Containerizare și deployment automatizat", link: "https://www.docker.com", features: ["Containerization", "Swarm Mode"], benefits: "Simplify your application deployment." },
        { name: "AWS", icon: FaAws, description: "Amazon Web Services pentru cloud computing", link: "https://aws.amazon.com", features: ["Cloud Computing", "Storage"], benefits: "Powerful cloud infrastructure." }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: FaRobot,
      description: "Integrări cu platforme de inteligență artificială",
      tools: [
        { name: "Claude", description: "AI conversațional și procesare text avansată", link: "https://claude.ai", icon: FaRobot },
        { name: "OpenAI", description: "Modele GPT și soluții AI personalizate", link: "https://openai.com", icon: SiOpenai }
      ]
    },
    {
      title: "Marketing & Advertising",
      icon: FaChartLine,
      description: "Platforme de marketing și advertising digital",
      tools: [
        { name: "Google Ads", description: "Advertising în rețeaua Google", link: "https://ads.google.com", icon: FaGoogle },
        { name: "META Ads", description: "Advertising pe Facebook, Instagram și WhatsApp", link: "https://ads.meta.com", icon: SiGooglemaps },
        { name: "Hubspot", description: "Marketing automation și CRM", link: "https://hubspot.com", icon: FaHubspot },
        { name: "Zoho", description: "Suite completă de business apps", link: "https://zoho.com", icon: SiZoho },
        { name: "SalesForce", description: "CRM și cloud computing enterprise", link: "https://salesforce.com", icon: FaSalesforce }
      ]
    },
    {
      title: "ERP & Business Management",
      icon: FaDatabase,
      description: "Sisteme de management al afacerii",
      tools: [
        { name: "Dynamics 365", description: "Soluții Microsoft pentru business", link: "https://dynamics.microsoft.com", icon: FaMicrosoft },
        { name: "NetSuite", description: "Cloud ERP și management financiar", link: "https://www.netsuite.com", icon: SiNetlify },
        { name: "SAP", description: "Enterprise resource planning și analytics", link: "https://sap.com", icon: SiSap }
      ]
    },
    {
      title: "Payment & E-commerce",
      icon: FaShopify,
      description: "Soluții de plată și comerț electronic",
      tools: [
        { name: "Stripe", description: "Procesare plăți online și subscriptions", link: "https://stripe.com", icon: FaStripe },
        { name: "Netopia", description: "Gateway de plată pentru România", link: "https://netopia.ro", icon: BiStore },
        { name: "E-Factura", description: "Sistem de facturare electronică", link: "https://e-factura.ro", icon: BiEnvelope },
        { name: "Shopify", description: "Platformă e-commerce completă", link: "https://shopify.com", icon: SiShopify }
      ]
    },
    {
      title: "Data & Integration",
      icon: FaGithub,
      description: "Platforme de date și integrare",
      tools: [
        { name: "Apollo", description: "B2B data și sales intelligence", link: "https://apollo.io", icon: SiApollographql },
        { name: "ZoomInfo", description: "Platform de business intelligence", link: "https://zoominfo.com", icon: BiData },
        { name: "Webhooks", description: "Integrări real-time și automatizări", link: "https://webhooks.com", icon: BiNetworkChart },
        { name: "API's", description: "Integrări personalizate via REST și GraphQL", link: "https://api.com", icon: BiCodeBlock }
      ]
    },
    {
      title: "Design & Creative",
      icon: SiAdobecreativecloud,
      description: "Soluții creative și design",
      tools: [
        { name: "Adobe", icon: SiAdobecreativecloud, description: "Suite completă de tools creative", link: "https://www.adobe.com" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: FaDatabase,
      description: "Soluții pentru securitate și conformitate",
      tools: [
        { name: "Auth0", icon: FaCode, description: "Autentificare și autorizare enterprise", link: "https://auth0.com", features: ["SSO", "MFA", "Identity Management"], benefits: "Securitate de nivel enterprise." },
        { name: "Cloudflare", icon: FaCloud, description: "CDN și securitate web", link: "https://cloudflare.com", features: ["DDoS Protection", "WAF", "CDN"], benefits: "Protecție și performanță îmbunătățită." }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Parteneri și Integrări Enterprise | LightningRevenue - Soluții Complete de Transformare Digitală"
        description="Explorează ecosistemul nostru complet de parteneri și integrări tehnologice enterprise. Oferim soluții validate pentru cloud computing, marketing automation, securitate și transformare digitală."
        keywords="integrări software, parteneri tehnologici, cloud computing, marketing automation, CRM, ERP, API integration, business solutions, transformare digitală, soluții enterprise"
        canonical="https://www.lightning-revenue.com/partners"
      />
      <SchemaOrg 
        type="Organization"
        name="LightningRevenue Partners & Integrations"
        description="Ecosystem de parteneri și integrări tehnologice pentru transformare digitală completă"
        image="https://www.lightningoperational.ro/logo.png"
        url="https://www.lightningoperational.ro/partners"
      />
      <Header />
      
      <main className="min-h-screen">
        <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                Ecosistem de 
                <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                  Integrări Enterprise
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Conectăm businessul tău cu cele mai puternice platforme și tehnologii pentru o transformare digitală completă și scalabilă.
              </p>
            </motion.div>

            <div className="max-w-7xl mx-auto">
              {categories.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-16"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      {React.createElement(category.icon, { className: "text-4xl text-primary" })}
                      <div>
                        <h2 className="text-2xl font-bold">{category.title}</h2>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.tools.map((tool, idx) => (
                        <motion.a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            {React.createElement(tool.icon, { className: "text-2xl text-primary" })}
                            <h3 className="font-bold text-lg">{tool.name}</h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                          {tool.features && (
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                {tool.features.map((feature, fidx) => (
                                  <span key={fidx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          {tool.benefits && (
                            <p className="text-xs text-gray-500 italic">{tool.benefits}</p>
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Partners;