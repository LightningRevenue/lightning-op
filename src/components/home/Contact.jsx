import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    type: 'contact',
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          type: 'contact',
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight text-gray-900">
                Pregătit să 
                <span className="block bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                  Transformi Digital
                </span>
                Afacerea Ta?
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Contactează-ne pentru o consultație gratuită și descoperă cum 
                putem accelera creșterea afacerii tale în mediul online.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center text-primary shadow-lg shrink-0">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
                    <a href="mailto:contact@lightning-revenue.com" className="text-lg text-primary hover:underline">
                      contact@lightning-revenue.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center text-primary shadow-lg shrink-0">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Telefon</h3>
                    <p className="text-gray-600 mb-1">Program: Luni-Vineri, 09:00-18:00</p>
                    <a href="tel:+40722123456" className="text-lg text-primary hover:underline">
                      +40 722 123 456
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="bg-white rounded-2xl w-14 h-14 flex items-center justify-center text-primary shadow-lg shrink-0">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">Adresă</h3>
                    <p className="text-gray-600">Str. Libertății nr. 10,</p>
                    <p className="text-gray-600">București, România</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#F5F5F7] rounded-3xl p-8"
            >
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-5xl text-green-500 mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Mesaj Trimis cu Succes!</h3>
                  <p className="text-gray-600 mb-6">Vom reveni cu un răspuns în cel mai scurt timp posibil.</p>
                  <button
                    onClick={() => setSubmitStatus(null)}
                    className="text-primary hover:underline"
                  >
                    Trimite alt mesaj
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nume complet
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          placeholder="Numele tău"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                          placeholder="email@exemplu.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subiect
                      </label>
                      <input 
                        type="text" 
                        id="subject" 
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="Cum te putem ajuta?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj
                      </label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="Detalii despre proiectul tău..."
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gray-900 text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Se trimite...' : 'Trimite mesajul'}
                    </button>
                    {submitStatus === 'error' && (
                      <p className="mt-4 text-red-500 text-center">
                        A apărut o eroare. Te rugăm să încerci din nou.
                      </p>
                    )}
                  </motion.div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;