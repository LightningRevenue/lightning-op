import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FaGoogle, FaFacebook, FaHubspot, FaShopify, 
  FaWordpress, FaAws, FaReact, FaMicrosoft 
} from 'react-icons/fa';

const Expertiza = () => {
  const expertize = [
    {
      id: 1,
      icon: <FaGoogle />,
      titlu: "Google Certified Partner",
      descriere: "Certificări avansate în Google Ads, Analytics 4, Search Console și Tag Manager",
      certificari: [
        "Google Ads Search",
        "Google Analytics Advanced",
        "Google Cloud Platform",
        "Google Workspace Admin"
      ]
    },
    {
      id: 2,
      icon: <FaFacebook />,
      titlu: "Meta Business Partner",
      descriere: "Expertiză completă în ecosistemul Meta pentru advertising și business management",
      certificari: [
        "Meta Blueprint Certification",
        "Facebook Ads Expert",
        "Instagram Marketing Expert",
        "WhatsApp Business Expert"
      ]
    },
    {
      id: 3,
      icon: <FaHubspot />,
      titlu: "HubSpot Partner",
      descriere: "Implementare și optimizare soluții complete de marketing automation și CRM",
      certificari: [
        "HubSpot Marketing Software",
        "HubSpot Sales Software",
        "HubSpot CMS Implementation",
        "Inbound Marketing Strategy"
      ]
    },
    {
      id: 4,
      icon: <FaShopify />,
      titlu: "Shopify Partner",
      descriere: "Dezvoltare și optimizare magazine online performante cu focus pe conversii",
      certificari: [
        "Shopify App Development",
        "Shopify Theme Development",
        "Shopify Plus Expert",
        "E-commerce Optimization"
      ]
    },
    {
      id: 5,
      icon: <FaWordpress />,
      titlu: "WordPress Expert",
      descriere: "Dezvoltare avansată de teme și plugin-uri custom pentru WordPress",
      certificari: [
        "WordPress Core Development",
        "WooCommerce Expert",
        "Advanced Custom Fields Pro",
        "Performance Optimization"
      ]
    },
    {
      id: 6,
      icon: <FaAws />,
      titlu: "AWS Certified",
      descriere: "Arhitectură și implementare soluții cloud scalabile și securizate",
      certificari: [
        "AWS Solutions Architect",
        "AWS DevOps Engineer",
        "AWS Security Specialist",
        "CloudFront & CDN Expert"
      ]
    },
    {
      id: 7,
      icon: <FaReact />,
      titlu: "React Development",
      descriere: "Dezvoltare aplicații web moderne folosind cele mai noi tehnologii React",
      certificari: [
        "React Advanced Patterns",
        "Next.js Expert",
        "Redux State Management",
        "React Native Mobile"
      ]
    },
    {
      id: 8,
      icon: <FaMicrosoft />,
      titlu: "Microsoft Partner",
      descriere: "Implementare și integrare soluții Microsoft pentru business",
      certificari: [
        "Microsoft Azure Expert",
        "Microsoft 365 Admin",
        "Power Platform Developer",
        "Dynamics 365 Consultant"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Expertiza Noastră în Marketing Digital și Dezvoltare | Lightning</title>
        <meta 
          name="description" 
          content="Echipa noastră deține certificări de la liderii industriei precum Google, Meta, HubSpot și AWS. Expertiză dovedită în implementarea soluțiilor digitale complexe." 
        />
        <meta 
          name="keywords" 
          content="google certified partner, meta business partner, hubspot partner, shopify expert, wordpress development, aws certified, react development" 
        />
      </Helmet>

      <section className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
              Expertiză Certificată
              <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                în Tehnologii de Top
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Investim constant în dezvoltarea echipei și certificări pentru a oferi 
              cele mai inovatoare soluții adaptate nevoilor tale specifice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {expertize.map((expertiza, index) => (
              <motion.div
                key={expertiza.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl text-primary mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {expertiza.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4">{expertiza.titlu}</h3>
                <p className="text-gray-600 mb-6">{expertiza.descriere}</p>
                <ul className="space-y-2">
                  {expertiza.certificari.map((certificare, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      {certificare}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600">
              Descoperiți cum expertiza noastră poate accelera creșterea afacerii dumneavoastră
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Expertiza;