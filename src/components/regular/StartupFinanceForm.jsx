import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StartupFinanceForm = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    registrationNumber: '',
    foundingDate: '',
    website: '',
    employeeCount: '',
    
    // Founder Information
    founderName: '',
    founderEmail: '',
    founderPhone: '',
    founderLinkedin: '',
    
    // Business Details
    industry: '',
    businessModel: '',
    stage: 'idea',
    productDescription: '',
    currentRevenue: '',
    monthlyBurn: '',
    
    // Financial Information
    previousFunding: '',
    fundingSource: [],
    seekingAmount: '',
    useOfFunds: '',
    
    // Market & Traction
    targetMarket: '',
    marketSize: '',
    competitors: '',
    currentUsers: '',
    metrics: '',
    
    // Technical Details
    techStack: '',
    cloudProvider: [],
    infrastructureNeeds: '',
    
    // Additional Information
    pitchDeck: null,
    financialProjections: null,
    additionalInfo: ''
  });

  const stages = [
    'idea',
    'prototype',
    'mvp',
    'market-validation',
    'scaling',
    'growth'
  ];

  const fundingSources = [
    'Bootstrap',
    'Friends & Family',
    'Angel Investors',
    'Venture Capital',
    'Accelerator',
    'Bank Loan',
    'Grants'
  ];

  const cloudProviders = [
    'AWS',
    'Google Cloud',
    'Microsoft Azure',
    'None'
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const formSections = [
    { title: "Informații Companie", step: 1 },
    { title: "Informații Fondator", step: 2 },
    { title: "Detalii Business", step: 3 },
    { title: "Informații Financiare", step: 4 },
    { title: "Cloud & Infrastructură", step: 5 },
    { title: "Documente", step: 6 }
  ];

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const array = [...formData[name]];
      if (e.target.checked) {
        array.push(value);
      } else {
        const index = array.indexOf(value);
        if (index > -1) {
          array.splice(index, 1);
        }
      }
      setFormData(prev => ({
        ...prev,
        [name]: array
      }));
    } else if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: e.target.files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {formSections.map(({ title, step }) => (
            <button
              key={step}
              onClick={() => setCurrentStep(step)}
              className={`flex-1 text-center ${
                currentStep === step
                  ? 'text-primary font-semibold'
                  : 'text-gray-400'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  currentStep === step
                    ? 'bg-primary text-white'
                    : currentStep > step
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}>
                  {step}
                </div>
                <span className="text-sm hidden md:block">{title}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full">
          <motion.div
            className="absolute left-0 top-0 h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 1 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Informații Companie
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Information Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Numele Companiei *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      value={formData.companyName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Data Înființării *
                    </label>
                    <input
                      type="date"
                      name="foundingDate"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      value={formData.foundingDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CUI/Nr. Înregistrare *
                    </label>
                    <input
                      type="text"
                      name="registrationNumber"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      value={formData.registrationNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Informații Fondator
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nume Fondator *
                  </label>
                  <input
                    type="text"
                    name="founderName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.founderName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="founderEmail"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.founderEmail}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="founderPhone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.founderPhone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    name="founderLinkedin"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.founderLinkedin}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Detalii Business
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Industrie *
                  </label>
                  <input
                    type="text"
                    name="industry"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.industry}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model de Business *
                  </label>
                  <input
                    type="text"
                    name="businessModel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.businessModel}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stadiul Startup-ului *
                  </label>
                  <select
                    name="stage"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.stage}
                    onChange={handleInputChange}
                  >
                    {stages.map(stage => (
                      <option key={stage} value={stage}>
                        {stage.charAt(0).toUpperCase() + stage.slice(1).replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descriere Produs/Serviciu *
                  </label>
                  <textarea
                    name="productDescription"
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.productDescription}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Informații Financiare
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Finanțare Anterioară
                  </label>
                  <input
                    type="number"
                    name="previousFunding"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.previousFunding}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Surse de Finanțare
                  </label>
                  <div className="space-y-2">
                    {fundingSources.map(source => (
                      <label key={source} className="flex items-center">
                        <input
                          type="checkbox"
                          name="fundingSource"
                          value={source}
                          checked={formData.fundingSource.includes(source)}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        {source}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Suma Căutată *
                  </label>
                  <input
                    type="number"
                    name="seekingAmount"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.seekingAmount}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Utilizarea Fondurilor *
                  </label>
                  <textarea
                    name="useOfFunds"
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.useOfFunds}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Cloud & Infrastructură
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Furnizori Cloud Actuali/Doriți
                  </label>
                  <div className="space-y-2">
                    {cloudProviders.map(provider => (
                      <label key={provider} className="flex items-center">
                        <input
                          type="checkbox"
                          name="cloudProvider"
                          value={provider}
                          checked={formData.cloudProvider.includes(provider)}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        {provider}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nevoi de Infrastructură *
                  </label>
                  <textarea
                    name="infrastructureNeeds"
                    required
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.infrastructureNeeds}
                    onChange={handleInputChange}
                    placeholder="Descrieți nevoile de infrastructură și resursele tehnice necesare"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
                Documente
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pitch Deck
                  </label>
                  <input
                    type="file"
                    name="pitchDeck"
                    accept=".pdf,.ppt,.pptx"
                    onChange={handleInputChange}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Format acceptat: PDF, PPT, PPTX (max 10MB)
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Proiecții Financiare
                  </label>
                  <input
                    type="file"
                    name="financialProjections"
                    accept=".pdf,.xlsx,.xls"
                    onChange={handleInputChange}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Format acceptat: PDF, XLSX, XLS (max 10MB)
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            className={`px-6 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors ${
              currentStep === 1 ? 'invisible' : ''
            }`}
          >
            Înapoi
          </button>
          
          {currentStep === totalSteps ? (
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Trimite Aplicația
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Continuă
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default StartupFinanceForm;