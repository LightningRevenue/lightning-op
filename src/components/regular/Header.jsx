import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBars, FaTimes, FaChevronDown, 
  FaGoogle, FaMicrosoft, FaAmazon, FaCloud, FaBook, FaRocket, FaDatabase, FaHubspot, FaStripe, FaComments,
  FaShoppingCart 
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      title: "Servicii Digitale",
      items: [
        { name: "Dezvoltare Web", path: "/dezvoltare-web" },
        { name: "E-commerce", path: "/ecommerce" },
        { name: "Optimizare SEO", path: "/optimizare-seo" },
        { name: "Marketing Digital", path: "/marketing-digital" },
        { name: "Social Media", path: "/social-media" },
        { name: "Branding", path: "/branding" },
        { name: "Hosting & Security", path: "/hosting-security" }
      ]
    },
    {
      title: "Finanțare Cloud",
      items: [
        { 
          name: "Google for Startups", 
          path: "/google-startups",
          icon: <FaGoogle className="text-blue-500" />,
          description: "Până la $100,000 credite cloud"
        },
        { 
          name: "Microsoft for Startups", 
          path: "/microsoft-startups",
          icon: <FaMicrosoft className="text-blue-500" />,
          description: "Până la $150,000 credite Azure"
        },
        { 
          name: "AWS for Startups", 
          path: "/amazon-startups",
          icon: <FaAmazon className="text-orange-500" />,
          description: "Până la $120,000 credite AWS"
        }
      ]
    },
    {
      title: "Servicii Database",
      items: [
        { 
          name: "MongoDB for Startups", 
          path: "/mongodb-startups",
          icon: <FaDatabase className="text-green-500" />,
          description: "$5,000 credite Atlas și Enterprise"
        },
        { 
          name: "HubSpot for Startups", 
          path: "/hubspot-startups",
          icon: <FaHubspot className="text-orange-500" />,
          description: "90% reducere HubSpot Enterprise"
        }
      ]
    },
    {
      title: "Servicii Startup",
      items: [
        { 
          name: "Stripe for Startups", 
          path: "/stripe-startups",
          icon: <FaStripe className="text-blue-500" />,
          description: "Procesare gratuită până la $50,000"
        },
        {
          name: "Intercom for Startups",
          path: "/intercom-startups",
          icon: <FaComments className="text-blue-500" />,
          description: "75% reducere primul an Intercom"
        }
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          LightningRevenue
        </Link>

        <button 
          className="md:hidden text-dark text-2xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`fixed md:relative top-0 right-0 h-screen md:h-auto w-[70%] md:w-auto bg-white md:bg-transparent transform ${menuOpen ? 'translate-x-0 shadow-xl' : 'translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:flex items-start md:items-center z-40 overflow-y-auto md:overflow-visible`}>
          {/* Add mobile close button */}
          <div className="min-h-screen md:min-h-0 p-8 md:p-0">
            <button 
              className="md:hidden absolute top-4 right-4 text-dark text-2xl focus:outline-none" 
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <li>
                <Link to="/" className="text-dark hover:text-primary font-medium transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/despre-noi" className="text-dark hover:text-primary font-medium transition-colors">
                  Despre Noi
                </Link>
              </li>
              
              {/* Services Dropdown */}
              <li className="relative group">
                <div 
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  <Link 
                    to="/servicii" 
                    className="text-dark hover:text-primary font-medium transition-colors"
                  >
                    Servicii
                  </Link>
                  <FaChevronDown className={`transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Desktop Dropdown */}
                <div className="hidden md:flex absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white rounded-xl shadow-lg py-4 mt-2 transition-all duration-200">
                  {services.map((section, index) => (
                    <div key={section.title} className={`min-w-[220px] ${index > 0 ? 'border-l border-gray-100' : ''}`}>
                      <h3 className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {section.title}
                      </h3>
                      <div className="py-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-start gap-3 px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors group"
                          >
                            <div className="flex-shrink-0 mt-1">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Dropdown */}
                <div className={`md:hidden ${servicesOpen ? 'block' : 'hidden'} pl-4 mt-2 space-y-4`}>
                  {services.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        {section.title}
                      </h3>
                      <div className="space-y-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-start gap-2 text-gray-800 hover:text-primary transition-colors py-1"
                            onClick={() => {
                              setServicesOpen(false);
                              setMenuOpen(false);
                            }}
                          >
                            {item.icon && <span className="mt-1">{item.icon}</span>}
                            <div>
                              <div>{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500">{item.description}</div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </li>

              <li>
                <Link to="/portofoliu" className="text-dark hover:text-primary font-medium transition-colors">
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-dark hover:text-primary font-medium transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/crm-waitlist"
                  className="inline-flex items-center gap-1.5 text-sm px-4 py-1.5 bg-gradient-to-r from-primary to-blue-600 text-white rounded-full hover:opacity-90 transition-colors"
                >
                  <FaRocket className="text-xs" />
                  CRM Waitlist
                </Link>
              </li>
              <li>
                <Link
                  to="/ebook-digitalizare"
                  className="inline-flex items-center gap-1.5 text-sm px-4 py-1.5 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <FaBook className="text-xs" />
                  Ghid Gratuit
                </Link>
              </li>
              
              <li>
                <a 
                  href="/programari" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                >
                  Contactează-ne
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;