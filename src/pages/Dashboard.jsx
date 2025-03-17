import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/regular/Header';
import Footer from '../components/regular/Footer';
import { FaFilter, FaAngleLeft, FaAngleRight, FaBook, FaClock, FaChartLine, FaEnvelope, FaInfoCircle, FaUserCheck, FaBullseye, FaUsers, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Dashboard = () => {
  const [activeView, setActiveView] = useState('contact');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState('');
  const [showLeadsGuide, setShowLeadsGuide] = useState(false);
  const [analytics, setAnalytics] = useState({
    total: 0,
    contacted: 0,
    qualified: 0,
    conversionRate: 0,
    recentActivity: []
  });
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showRecentActivity, setShowRecentActivity] = useState(false);
  const [showForms, setShowForms] = useState(false);

  const views = [
    { id: 'contact', label: 'Contact Forms', icon: <FaEnvelope /> },
    { id: 'ebook', label: 'E-book Downloads', icon: <FaBook /> },
    { id: 'crm', label: 'CRM Waitlist', icon: <FaClock /> },
    { id: 'sales', label: 'Sales Intelligence', icon: <FaChartLine /> }
  ];

  const fetchAnalytics = async () => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      const response = await fetch('http://localhost:5000/api/analytics', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setAnalytics(data);
      }
    } catch (err) {
      console.error('Error fetching analytics:', err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics();
    }
  }, [isAuthenticated, activeView]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const auth = localStorage.getItem('dashboardAuth');
      let endpoint;
      
      switch (activeView) {
        case 'contact':
          endpoint = `http://localhost:5000/api/contact/submissions?page=${page}&type=${filter}`;
          break;
        case 'ebook':
          endpoint = `http://localhost:5000/api/waitlist/ebook?page=${page}`;
          break;
        case 'crm':
          endpoint = `http://localhost:5000/api/waitlist/crm?page=${page}&status=${filter}`;
          break;
        case 'sales':
          endpoint = `http://localhost:5000/api/waitlist/sales-intelligence?page=${page}&status=${filter}`;
          break;
      }

      const response = await fetch(endpoint, {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const result = await response.json();
      setData(result.submissions || result.downloads || result.registrations || []);
      setTotalPages(result.totalPages);
    } catch (err) {
      setError('Eroare la încărcarea datelor');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem('dashboardAuth');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    setPage(1);
    setFilter('');
    if (isAuthenticated) {
      fetchData();
    }
  }, [activeView, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [page, filter]);

  const renderAnalytics = () => {
    return (
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl text-primary">
                <FaUsers />
              </div>
              <span className="text-sm text-gray-500">Total Leads</span>
            </div>
            <div className="text-3xl font-bold">{analytics.total}</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl text-blue-500">
                <FaUserCheck />
              </div>
              <span className="text-sm text-gray-500">Contactați</span>
            </div>
            <div className="text-3xl font-bold">{analytics.contacted}</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl text-green-500">
                <FaBullseye />
              </div>
              <span className="text-sm text-gray-500">Calificați</span>
            </div>
            <div className="text-3xl font-bold">{analytics.qualified}</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl text-purple-500">
                <FaChartLine />
              </div>
              <span className="text-sm text-gray-500">Rată Conversie</span>
            </div>
            <div className="text-3xl font-bold">{analytics.conversionRate}%</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div 
            className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50"
            onClick={() => setShowRecentActivity(!showRecentActivity)}
          >
            <h3 className="text-lg font-bold">Activitate Recentă</h3>
            <button className="text-gray-400 hover:text-gray-600">
              {showRecentActivity ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
          
          {showRecentActivity && (
            <div className="p-6 pt-0 border-t border-gray-100">
              <div className="space-y-4">
                {analytics.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                    <div className="text-primary shrink-0">
                      <FaInfoCircle />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-600 break-words">{activity.description}</p>
                      <span className="text-xs text-gray-400">{new Date(activity.date).toLocaleString('ro-RO')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const leadsGuide = {
    stages: [
      {
        status: 'pending',
        title: 'Lead Nou',
        description: 'Un potențial client care și-a arătat interesul prin completarea formularului.',
        actions: [
          'Verifică completitudinea datelor',
          'Evaluează potrivirea cu serviciile noastre',
          'Programează primul contact în maxim 24h'
        ]
      },
      {
        status: 'contacted',
        title: 'Contact Inițial',
        description: 'Lead-ul a fost contactat și s-a stabilit un prim dialog.',
        actions: [
          'Confirmă detaliile din formular',
          'Identifică nevoile specifice',
          'Prezintă soluțiile relevante',
          'Stabilește următorul pas'
        ]
      },
      {
        status: 'qualified',
        title: 'Lead Calificat',
        description: 'Potential client cu nevoi clare și interes confirmat.',
        actions: [
          'Pregătește o propunere personalizată',
          'Programează o demonstrație',
          'Discută detaliile colaborării'
        ]
      }
    ],
    priorities: {
      high: ['Buget confirmat', 'Nevoi urgente', 'Decizie rapidă'],
      medium: ['Interes real', 'Buget în analiză', 'Timeline mediu'],
      low: ['Doar informare', 'Buget nespecificat', 'Fără timeline']
    }
  };

  const renderLeadsGuide = () => {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold">Ghid de Management Lead-uri</h2>
            <button
              onClick={() => setShowLeadsGuide(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold mb-4">Etape de Procesare</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {leadsGuide.stages.map((stage) => (
                  <div
                    key={stage.status}
                    className="border border-gray-200 rounded-xl p-6"
                  >
                    <div className="font-bold text-lg mb-2">{stage.title}</div>
                    <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                    <ul className="space-y-2">
                      {stage.actions.map((action, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Prioritizare Lead-uri</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="font-bold text-lg mb-2 text-green-600">Prioritate Înaltă</div>
                  <ul className="space-y-2">
                    {leadsGuide.priorities.high.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="font-bold text-lg mb-2 text-yellow-600">Prioritate Medie</div>
                  <ul className="space-y-2">
                    {leadsGuide.priorities.medium.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-yellow-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="font-bold text-lg mb-2 text-gray-600">Prioritate Scăzută</div>
                  <ul className="space-y-2">
                    {leadsGuide.priorities.low.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-gray-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const base64Credentials = btoa(`${credentials.username}:${credentials.password}`);
      const response = await fetch('http://localhost:5000/api/contact/submissions', {
        headers: {
          'Authorization': `Basic ${base64Credentials}`
        }
      });

      if (response.ok) {
        setIsAuthenticated(true);
        localStorage.setItem('dashboardAuth', base64Credentials);
      } else {
        setError('Credențiale invalide');
      }
    } catch (err) {
      setError('Eroare de autentificare');
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const auth = localStorage.getItem('dashboardAuth');
      let endpoint;
      
      switch (activeView) {
        case 'crm':
          endpoint = `http://localhost:5000/api/waitlist/crm/${id}/status`;
          break;
        case 'sales':
          endpoint = `http://localhost:5000/api/waitlist/sales-intelligence/${id}/status`;
          break;
        default:
          return;
      }

      const response = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        fetchData();
      }
    } catch (err) {
      setError('Error updating status');
    }
  };

  const renderDataTable = () => {
    if (!data.length) {
      return (
        <div className="text-center py-8 text-gray-500">
          Nu există date disponibile
        </div>
      );
    }

    switch (activeView) {
      case 'contact':
        return (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Data</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Tip</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Nume</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Telefon</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Subiect</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Mesaj</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">
                    {new Date(item.createdAt).toLocaleString('ro-RO')}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.type === 'contact' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">{item.name}</td>
                  <td className="px-6 py-4 text-sm">{item.email}</td>
                  <td className="px-6 py-4 text-sm">{item.phone}</td>
                  <td className="px-6 py-4 text-sm">{item.subject}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="max-w-xs truncate">{item.message}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'ebook':
        return (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Data</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Nume</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Companie</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Funcție</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Industrie</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Marketing Consent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">
                    {new Date(item.downloadDate).toLocaleString('ro-RO')}
                  </td>
                  <td className="px-6 py-4 text-sm">{item.name}</td>
                  <td className="px-6 py-4 text-sm">{item.email}</td>
                  <td className="px-6 py-4 text-sm">{item.company}</td>
                  <td className="px-6 py-4 text-sm">{item.jobTitle}</td>
                  <td className="px-6 py-4 text-sm">{item.industry}</td>
                  <td className="px-6 py-4 text-sm">
                    {item.marketingConsent ? 'Da' : 'Nu'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );

      case 'crm':
      case 'sales':
        return (
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Data</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Nume</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Companie</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Telefon</th>
                {activeView === 'sales' && (
                  <>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Industrie</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Mărime Echipă</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Volum Apeluri</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">CRM Actual</th>
                  </>
                )}
                {activeView === 'crm' && (
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Nr. Angajați</th>
                )}
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Acțiuni</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">
                    {new Date(item.registrationDate).toLocaleString('ro-RO')}
                  </td>
                  <td className="px-6 py-4 text-sm">{item.name}</td>
                  <td className="px-6 py-4 text-sm">{item.email}</td>
                  <td className="px-6 py-4 text-sm">{item.company}</td>
                  <td className="px-6 py-4 text-sm">{item.phone}</td>
                  {activeView === 'sales' && (
                    <>
                      <td className="px-6 py-4 text-sm">{item.industry}</td>
                      <td className="px-6 py-4 text-sm">{item.teamSize}</td>
                      <td className="px-6 py-4 text-sm">{item.callVolume}</td>
                      <td className="px-6 py-4 text-sm">{item.currentCRM}</td>
                    </>
                  )}
                  {activeView === 'crm' && (
                    <td className="px-6 py-4 text-sm">{item.employees}</td>
                  )}
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status === 'qualified' 
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'contacted'
                        ? 'bg-blue-100 text-blue-800'
                        : item.status === 'rejected'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={item.status}
                      onChange={(e) => updateStatus(item._id, e.target.value)}
                      className="text-sm border rounded px-2 py-1"
                    >
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-2xl font-bold mb-6 text-center">Autentificare Dashboard</h1>
              {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                  {error}
                </div>
              )}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Autentificare
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <div className="flex items-center gap-4">
                  <a
                    href="/crm"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <FaEnvelope className="inline mr-2" />
                    Email Leads
                  </a>
                  <button
                    onClick={() => setShowLeadsGuide(true)}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                  >
                    Ghid Lead-uri
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem('dashboardAuth');
                      setIsAuthenticated(false);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {renderAnalytics()}

            <div className="bg-white rounded-xl shadow-sm">
              <div 
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => setShowForms(!showForms)}
              >
                <h2 className="text-xl font-bold">Formulare și Liste de Așteptare</h2>
                <button className="text-gray-400 hover:text-gray-600">
                  {showForms ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {showForms && (
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {views.map((view) => (
                      <button
                        key={view.id}
                        onClick={() => setActiveView(view.id)}
                        className={`flex items-center justify-center gap-2 p-4 rounded-xl transition-all ${
                          activeView === view.id
                            ? 'bg-primary text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <span className="text-xl">{view.icon}</span>
                        <span className="font-medium">{view.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end mb-4">
                    {(activeView === 'crm' || activeView === 'sales') && (
                      <select
                        value={filter}
                        onChange={(e) => {
                          setFilter(e.target.value);
                          setPage(1);
                        }}
                        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Toate</option>
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    )}
                    {activeView === 'contact' && (
                      <select
                        value={filter}
                        onChange={(e) => {
                          setFilter(e.target.value);
                          setPage(1);
                        }}
                        className="px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Toate</option>
                        <option value="contact">Contact</option>
                        <option value="programare">Programări</option>
                      </select>
                    )}
                  </div>

                  {loading ? (
                    <div className="text-center py-12">Se încarcă...</div>
                  ) : error ? (
                    <div className="text-center py-12 text-red-600">{error}</div>
                  ) : (
                    <>
                      <div className="overflow-x-auto">
                        {renderDataTable()}
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          Pagina {page} din {totalPages}
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                          >
                            <FaAngleLeft />
                          </button>
                          <button
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                          >
                            <FaAngleRight />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {showLeadsGuide && renderLeadsGuide()}
      <Footer />
    </>
  );
};

export default Dashboard;