import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCheck, FaTimes, FaRocket, FaGoogle, FaMicrosoft, 
  FaAmazon, FaDatabase, FaHubspot, FaStripe, FaComments,
  FaSpinner 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const EligibilityCheck = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    stage: '',
    age: '',
    funding: '',
    product: '',
    industry: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [eligiblePrograms, setEligiblePrograms] = useState([]);

  const questions = [
    {
      id: 'stage',
      question: 'În ce stadiu este startup-ul tău?',
      type: 'select',
      options: [
        { value: 'idea', label: 'Idee/Concept' },
        { value: 'early', label: 'Early Stage/MVP' },
        { value: 'seed', label: 'Seed/Pre-Series A' },
        { value: 'series-a', label: 'Series A sau mai mult' }
      ]
    },
    {
      id: 'age',
      question: 'Care este vechimea companiei?',
      type: 'select',
      options: [
        { value: '0', label: 'Mai puțin de 1 an' },
        { value: '1-2', label: '1-2 ani' },
        { value: '2-5', label: '2-5 ani' },
        { value: '5+', label: 'Peste 5 ani' }
      ]
    },
    {
      id: 'funding',
      question: 'Ce finanțare totală ați primit până acum?',
      type: 'select',
      options: [
        { value: '0', label: 'Nu am primit finanțare' },
        { value: '1-100k', label: '$1 - $100,000' },
        { value: '100k-1m', label: '$100,000 - $1M' },
        { value: '1m-5m', label: '$1M - $5M' },
        { value: '5m+', label: 'Peste $5M' }
      ]
    },
    {
      id: 'product',
      question: 'Ai un produs funcțional?',
      type: 'select',
      options: [
        { value: 'mvp', label: 'Da, avem un MVP' },
        { value: 'live', label: 'Da, produsul este live' },
        { value: 'development', label: 'În dezvoltare' },
        { value: 'none', label: 'Nu încă' }
      ]
    },
    {
      id: 'industry',
      question: 'În ce industrie activezi?',
      type: 'select',
      options: [
        { value: 'saas', label: 'SaaS/Software' },
        { value: 'ecommerce', label: 'eCommerce' },
        { value: 'fintech', label: 'FinTech' },
        { value: 'healthtech', label: 'HealthTech' },
        { value: 'marketplace', label: 'Marketplace' },
        { value: 'ai', label: 'AI/ML' },
        { value: 'other', label: 'Altele' }
      ]
    }
  ];

  const programs = [
    {
      id: 'google',
      name: 'Google for Startups',
      icon: <FaGoogle className="text-blue-500" />,
      value: '$100,000',
      description: 'Credite Google Cloud, acces Gemini AI și Google Workspace',
      path: '/google-startups'
    },
    {
      id: 'microsoft',
      name: 'Microsoft for Startups',
      icon: <FaMicrosoft className="text-blue-500" />,
      value: '$150,000',
      description: 'Credite Azure, GitHub Enterprise și Microsoft 365',
      path: '/microsoft-startups'
    },
    {
      id: 'aws',
      name: 'AWS Activate',
      icon: <FaAmazon className="text-orange-500" />,
      value: '$120,000',
      description: 'Credite AWS și suport business pentru startup-uri',
      path: '/amazon-startups'
    },
    {
      id: 'mongodb',
      name: 'MongoDB for Startups',
      icon: <FaDatabase className="text-green-500" />,
      value: '$5,000',
      description: 'Credite MongoDB Atlas și funcționalități Enterprise',
      path: '/mongodb-startups'
    },
    {
      id: 'hubspot',
      name: 'HubSpot for Startups',
      icon: <FaHubspot className="text-orange-500" />,
      value: '90% OFF',
      description: 'Suite complete de marketing, sales și service',
      path: '/hubspot-startups'
    },
    {
      id: 'stripe',
      name: 'Stripe for Startups',
      icon: <FaStripe className="text-blue-500" />,
      value: '$50,000',
      description: 'Procesare plăți și billing pentru startup-uri',
      path: '/stripe-startups'
    },
    {
      id: 'intercom',
      name: 'Intercom for Startups',
      icon: <FaComments className="text-blue-500" />,
      value: '95% OFF',
      description: 'Platformă de engagement și suport clienți',
      path: '/intercom-startups'
    }
  ];

  const handleAnswer = (value) => {
    const newFormData = {
      ...formData,
      [questions[currentStep].id]: value
    };
    setFormData(newFormData);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      checkEligibility(newFormData);
    }
  };

  const checkEligibility = async (data) => {
    setIsLoading(true);

    // Simulate API call with setTimeout
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Determine eligible programs based on answers
    const eligible = programs.filter(() => {
      // Basic eligibility criteria
      const isEarlyStage = data.stage === 'early' || data.stage === 'seed';
      const hasValidAge = data.age !== '5+';
      const hasValidFunding = data.funding !== '5m+';
      const hasProduct = data.product === 'mvp' || data.product === 'live' || data.product === 'development';

      return isEarlyStage && hasValidAge && hasValidFunding && hasProduct;
    });

    setEligiblePrograms(eligible);
    setIsLoading(false);
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({
      stage: '',
      age: '',
      funding: '',
      product: '',
      industry: ''
    });
    setCurrentStep(0);
    setShowResults(false);
    setEligiblePrograms([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            {!isLoading && (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Verifică Eligibilitatea</h3>
                    <span className="text-sm text-gray-500">
                      Pasul {currentStep + 1} din {questions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-medium mb-4">
                    {questions[currentStep].question}
                  </h4>
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {isLoading && (
              <div className="flex flex-col items-center justify-center py-12">
                <FaSpinner className="text-4xl text-primary animate-spin mb-4" />
                <p className="text-gray-600">Verificăm eligibilitatea...</p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <FaCheck className="text-3xl text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Felicitări! Ești eligibil pentru {eligiblePrograms.length} programe
              </h3>
              <p className="text-gray-600">
                Iată programele pentru care startup-ul tău se califică:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {eligiblePrograms.map((program) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="text-2xl mt-1">{program.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="text-lg font-bold">{program.name}</h4>
                      <span className="text-primary font-bold">{program.value}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{program.description}</p>
                    <Link
                      to={program.path}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      Vezi Detalii
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FaRocket className="mr-2" />
                Programează Consultație
              </Link>
              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Verifică din nou
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EligibilityCheck;