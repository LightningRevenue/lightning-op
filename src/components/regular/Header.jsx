import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaBars, FaTimes, FaChevronDown, FaSearch,
  FaGoogle, FaMicrosoft, FaAmazon, FaCloud, FaBook, FaRocket, FaDatabase, FaHubspot, FaStripe, FaComments,
  FaShoppingCart, FaHistory 
} from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(-1);

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

  // Function to remove diacritics and normalize string
  const normalizeString = (str) => {
    return str.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  };

  // Calculate search score for relevancy ranking
  const getSearchScore = (haystack, needle) => {
    haystack = normalizeString(haystack);
    needle = normalizeString(needle);

    // Exact match gets highest score
    if (haystack === needle) return 100;
    // Title starts with search term gets high score
    if (haystack.startsWith(needle)) return 80;
    // Contains full word match gets medium score
    if (haystack.includes(` ${needle} `) || haystack.includes(`${needle} `)) return 60;
    // Partial match gets low score
    if (haystack.includes(needle)) return 40;
    // Word similarity mapping
    const similarWords = {
      'aws': ['amazon', 'amazon web services'],
      'amazon': ['aws', 'amazon web services'],
      'azure': ['microsoft'],
      'microsoft': ['azure'],
      'google': ['gcp', 'cloud platform'],
      'cloud': ['aws', 'azure', 'google cloud', 'gcp']
    };
    // Check similar words
    if (similarWords[needle]?.some(word => haystack.includes(word))) return 30;
    return 0;
  };

  // Suggested searches
  const suggestedSearches = [
    {
      title: "Google for Startups",
      path: "/google-startups",
      description: "Pana la $100,000 credite cloud",
      icon: <FaGoogle className="text-blue-500" />
    },
    {
      title: "Microsoft for Startups",
      path: "/microsoft-startups",
      description: "Pana la $150,000 credite Azure",
      icon: <FaMicrosoft className="text-blue-500" />
    },
    {
      title: "AWS for Startups",
      path: "/amazon-startups",
      description: "Pana la $120,000 credite AWS",
      icon: <FaAmazon className="text-orange-500" />
    }
  ];

  // Define all searchable pages
  const pages = [
    { title: "Acasă", path: "/" },
    { title: "Despre Noi", path: "/despre-noi" },
    { title: "Dezvoltare Web", path: "/dezvoltare-web" },
    { title: "E-commerce", path: "/ecommerce" },
    { title: "Optimizare SEO", path: "/optimizare-seo" },
    { title: "Marketing Digital", path: "/marketing-digital" },
    { title: "Social Media", path: "/social-media" },
    { title: "Branding", path: "/branding" },
    { title: "Hosting & Security", path: "/hosting-security" },
    { title: "Portofoliu", path: "/portofoliu" },
    { title: "Blog", path: "/blog" },
    ...services.flatMap(section => section.items.map(item => ({
      title: item.name,
      path: item.path,
      description: item.description,
      icon: item.icon
    })))
  ];

  // Handle search with improved relevancy
  useEffect(() => {
    if (searchTerm) {
      // Get all matches with scores
      const scoredResults = pages.map(page => {
        const titleScore = getSearchScore(page.title, searchTerm);
        const descScore = page.description ? getSearchScore(page.description, searchTerm) : 0;
        return {
          ...page,
          score: Math.max(titleScore, descScore)
        };
      });

      // Filter out non-matches, sort by score, and remove duplicates by path
      const uniqueResults = [...new Map(
        scoredResults
          .filter(result => result.score > 0)
          .sort((a, b) => b.score - a.score)
          .map(item => [item.path, item])
      ).values()];

      setSearchResults(uniqueResults);
      setShowResults(uniqueResults.length > 0);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchTerm]);

  // Handle click outside search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      const selected = searchResults[selectedIndex];
      if (selected) {
        navigate(selected.path);
        setSearchTerm('');
        setShowResults(false);
        setSelectedIndex(-1);
      }
    } else if (e.key === 'Escape') {
      setShowResults(false);
      setSelectedIndex(-1);
    }
  };

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

              {/* Search Bar */}
              <li className="relative" ref={searchRef}>
                <div className="relative w-64">
                  <input
                    type="text"
                    placeholder="Caută în site..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocused(true)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Suggested Searches or Search Results */}
                {(showResults || (isFocused && !searchTerm)) && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 max-h-96 overflow-y-auto">
                    {!searchTerm && (
                      <>
                        <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100 flex items-center gap-2">
                          <FaHistory className="text-gray-400" />
                          <span>Cautari populare</span>
                        </div>
                        {suggestedSearches.map((suggestion) => (
                          <Link
                            key={suggestion.path}
                            to={suggestion.path}
                            className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50"
                            onClick={() => {
                              setSearchTerm('');
                              setShowResults(false);
                              setIsFocused(false);
                            }}
                          >
                            <div className="flex-shrink-0 mt-1">
                              {suggestion.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{suggestion.title}</div>
                              <div className="text-sm text-gray-500">{suggestion.description}</div>
                            </div>
                          </Link>
                        ))}
                      </>
                    )}
                    
                    {searchTerm && searchResults.map((result, index) => (
                      <Link
                        key={result.path}
                        to={result.path}
                        className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 ${
                          index === selectedIndex ? 'bg-gray-50' : ''
                        }`}
                        onClick={() => {
                          setSearchTerm('');
                          setShowResults(false);
                          setSelectedIndex(-1);
                          setIsFocused(false);
                        }}
                      >
                        {result.icon && (
                          <div className="flex-shrink-0 mt-1">
                            {result.icon}
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-gray-900">{result.title}</div>
                          {result.description && (
                            <div className="text-sm text-gray-500">{result.description}</div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
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