import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronRight, FaChevronUp, FaGoogle, FaMicrosoft, FaAmazon, 
  FaDatabase, FaHubspot, FaStripe, FaComments, FaTimes
} from 'react-icons/fa';

const StartupPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle touch gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;

    const swipeDistance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && !isOpen) {
        setIsOpen(true);
      } else if (swipeDistance < 0 && isOpen) {
        setIsOpen(false);
      }
    }
  };

  const programs = [
    {
      icon: <FaGoogle className="text-blue-500 text-3xl" />,
      title: "Google for Startups",
      path: "/google-startups",
      value: "$100,000 credite cloud"
    },
    {
      icon: <FaMicrosoft className="text-blue-500 text-3xl" />,
      title: "Microsoft for Startups",
      path: "/microsoft-startups",
      value: "$150,000 credite Azure"
    },
    {
      icon: <FaAmazon className="text-orange-500 text-3xl" />,
      title: "AWS for Startups",
      path: "/amazon-startups",
      value: "$120,000 credite AWS"
    },
    {
      icon: <FaDatabase className="text-green-500 text-3xl" />,
      title: "MongoDB for Startups",
      path: "/mongodb-startups",
      value: "$5,000 credite Atlas"
    },
    {
      icon: <FaHubspot className="text-orange-500 text-3xl" />,
      title: "HubSpot for Startups",
      path: "/hubspot-startups",
      value: "90% reducere Enterprise"
    },
    {
      icon: <FaStripe className="text-blue-500 text-3xl" />,
      title: "Stripe for Startups",
      path: "/stripe-startups",
      value: "$50,000 procesare gratuita"
    },
    {
      icon: <FaComments className="text-blue-500 text-3xl" />,
      title: "Intercom for Startups",
      path: "/intercom-startups",
      value: "75% reducere primul an"
    }
  ];

  const variants = {
    desktop: {
      closed: { x: -340, opacity: 0 },
      open: { x: 0, opacity: 1 }
    },
    mobile: {
      closed: { y: '100%', opacity: 0 },
      open: { y: 0, opacity: 1 }
    }
  };

  return (
    <>
      {/* Desktop Version */}
      {!isMobile && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white px-4 py-3 rounded-r-xl shadow-lg border border-l-0 border-gray-200 transition-transform ${
                isOpen ? 'translate-x-[340px]' : ''
              }`}
            >
              <span className="text-sm font-medium whitespace-nowrap">Programe Startup</span>
              <FaChevronRight className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={variants.desktop}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-[340px] bg-white shadow-xl rounded-r-2xl"
                >
                  <div className="max-h-[calc(100vh-6rem)] overflow-y-auto p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {programs.map((program) => (
                        <Link
                          key={program.path}
                          to={program.path}
                          className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-center group"
                        >
                          <div className="mb-3 transform transition-transform group-hover:scale-110">
                            {program.icon}
                          </div>
                          <h3 className="font-medium text-sm mb-1">{program.title}</h3>
                          <p className="text-xs text-gray-500">{program.value}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Mobile Version */}
      {isMobile && (
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200"
          >
            <span className="text-sm font-medium">Programe Startup</span>
            <FaChevronUp className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/50 z-40"
                />

                {/* Mobile Panel */}
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={variants.mobile}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-xl"
                >
                  <div className="relative p-6 max-h-[80vh] overflow-y-auto">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full" />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
                    >
                      <FaTimes />
                    </button>
                    <div className="mt-6">
                      <div className="grid grid-cols-2 gap-3">
                        {programs.map((program) => (
                          <Link
                            key={program.path}
                            to={program.path}
                            className="flex flex-col items-center p-3 bg-gray-50 rounded-xl active:bg-gray-100 transition-colors text-center"
                          >
                            <div className="mb-2">
                              {program.icon}
                            </div>
                            <h3 className="font-medium text-sm mb-1 line-clamp-1">{program.title}</h3>
                            <p className="text-xs text-gray-500 line-clamp-1">{program.value}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default StartupPanel;