import React from 'react';
import { 
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, 
  FaGoogle, FaMicrosoft, FaAmazon, FaDatabase, 
  FaHubspot, FaStripe, FaComments, FaRocket,
  FaSign
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
            {/* Column 1 - About */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-xl font-bold mb-6 text-gray-900">LightningRevenue</h3>
              <p className="text-gray-600 mb-6">
                Transformăm viziunea ta digitală în rezultate reale prin servicii complete de marketing, 
                web development, SEO și social media.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Column 2 - Digital Services */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-xl font-bold mb-6 text-gray-900">Servicii Digitale</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/dezvoltare-web" className="text-gray-500 hover:text-primary transition-colors">
                    Dezvoltare Web
                  </Link>
                </li>
                <li>
                  <Link to="/optimizare-seo" className="text-gray-500 hover:text-primary transition-colors">
                    Optimizare SEO
                  </Link>
                </li>
                <li>
                  <Link to="/marketing-digital" className="text-gray-500 hover:text-primary transition-colors">
                    Marketing Digital
                  </Link>
                </li>
                <li>
                  <Link to="/social-media" className="text-gray-500 hover:text-primary transition-colors">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link to="/branding" className="text-gray-500 hover:text-primary transition-colors">
                    Branding Digital
                  </Link>
                </li>
                <li>
                  <Link to="/hosting-security" className="text-gray-500 hover:text-primary transition-colors">
                    Hosting & Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Startup Financing */}
            <div className="lg:col-span-3">
              <h3 className="font-heading text-xl font-bold mb-6 text-gray-900">Finanțare Startup</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/finantare-startup" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors font-medium">
                    <FaRocket className="text-sm text-primary" />
                    <span>Toate Programele de Finanțare</span>
                  </Link>
                </li>
                <li>
                  <Link to="/inscriere-startup-finantare" className="text-gray-500 hover:text-primary transition-colors font-medium flex items-center gap-2"> 
                    <FaSign className="text-sm text-primary" />
                    <span>Înscrie-ți Startup-ul</span>
                  </Link>
                </li>
                <li>
                  <Link to="/google-startups" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <FaGoogle className="text-sm text-blue-500" />
                    <span>Google for Startups</span>
                  </Link>
                </li>
                <li>
                  <Link to="/microsoft-startups" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <FaMicrosoft className="text-sm text-blue-500" />
                    <span>Microsoft for Startups</span>
                  </Link>
                </li>
                <li>
                  <Link to="/amazon-startups" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <FaAmazon className="text-sm text-orange-500" />
                    <span>AWS for Startups</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Business Tools */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-xl font-bold mb-6 text-gray-900">Tool-uri Business</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/mongodb-startups" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <FaDatabase className="text-sm text-green-500" />
                    <span>MongoDB Atlas</span>
                  </Link>
                </li>
                <li>
                  <Link to="/hubspot-startups" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <FaHubspot className="text-sm text-orange-500" />
                    <span>HubSpot Enterprise</span>
                  </Link>
                </li>
                <li>
                  <Link to="/stripe-startups" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <FaStripe className="text-sm text-blue-500" />
                    <span>Stripe Payments</span>
                  </Link>
                </li>
                <li>
                  <Link to="/intercom-startups" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                    <FaComments className="text-sm text-blue-500" />
                    <span>Intercom Support</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5 - Company */}
            <div className="lg:col-span-2">
              <h3 className="font-heading text-xl font-bold mb-6 text-gray-900">Despre Companie</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/despre-noi" className="text-gray-500 hover:text-primary transition-colors">
                    Despre Noi
                  </Link>
                </li>
                <li>
                  <Link to="/portofoliu" className="text-gray-500 hover:text-primary transition-colors">
                    Portofoliu
                  </Link>
                </li>
                <li>
                  <Link to="/parteneri" className="text-gray-500 hover:text-primary transition-colors">
                    Parteneri
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-500 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/cariere" className="text-gray-500 hover:text-primary transition-colors">
                    Cariere
                  </Link>
                </li>
                <li>
                  <Link to="/programari" className="text-gray-500 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-12 md:col-span-2 mt-8">
              <div className="bg-gray-50 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h3 className="font-heading text-lg font-bold mb-2 text-gray-900">Hai să discutăm despre proiectul tău!</h3>
                  <p className="text-gray-600">Programează o consultație gratuită cu echipa noastră</p>
                </div>
                <Link
                  to="/programari"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Contactează-ne
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom footer section */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <p className="text-gray-500">
                  © 2025 LightningRevenue. Toate drepturile rezervate.
                </p>
                <span className="hidden md:inline text-gray-300">|</span>
                <div className="flex items-center gap-4">
                  <a href="mailto:contact@lightning-revenue.com" className="text-gray-500 hover:text-primary transition-colors text-sm">
                    contact@lightning-revenue.com
                  </a>
                  <a href="tel:+40743959914" className="text-gray-500 hover:text-primary transition-colors text-sm">
                    +40 743 959 914
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/termeni-conditii" className="text-gray-500 hover:text-primary transition-colors text-sm">
                  Termeni și Condiții
                </Link>
                <Link to="/politica-confidentialitate" className="text-gray-500 hover:text-primary transition-colors text-sm">
                  Politica de Confidențialitate
                </Link>
                <Link to="/politica-cookie" className="text-gray-500 hover:text-primary transition-colors text-sm">
                  Politica Cookie
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;