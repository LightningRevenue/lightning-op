import React from 'react';
import { FaUsers, FaEnvelope, FaChartLine, FaExclamationTriangle, FaRegClock, FaCheckCircle } from 'react-icons/fa';
import MetricsCards from './MetricsCards';
import Charts from './Charts';

const AnalyticsDashboard = ({ analytics, onViewLead, onViewAllLeads, className = '' }) => {
  const calculateMetrics = () => {
    if (!analytics?.contacts) return {};
    
    const total = analytics.contacts.length;
    const converted = analytics.contacts.filter(c => c.status === 'converted').length;
    const contacted = analytics.contacts.filter(c => c.status === 'contacted').length;
    const newLeads = analytics.contacts.filter(c => c.status === 'new').length;

    return {
      conversionRate: ((converted / total) * 100).toFixed(1),
      contactRate: ((contacted / total) * 100).toFixed(1),
      newLeadsPercent: ((newLeads / total) * 100).toFixed(1)
    };
  };

  const metrics = calculateMetrics();

  const overviewMetrics = [
    {
      label: 'Total Leads',
      value: analytics?.contacts?.length || 0,
      icon: FaUsers,
      color: 'text-blue-500'
    },
    {
      label: 'Emails Sent',
      value: analytics?.totalEmails || 0,
      subtext: `${analytics?.averageOpenRate?.toFixed(1) || 0}% open rate`,
      icon: FaEnvelope,
      color: 'text-green-500'
    },
    {
      label: 'Conversion Rate',
      value: `${metrics.conversionRate}%`,
      trend: '+2.5%',
      icon: FaChartLine,
      color: 'text-purple-500'
    }
  ];

  const engagementMetrics = [
    {
      label: 'Open Rate',
      value: `${analytics?.averageOpenRate?.toFixed(1) || 0}%`,
      icon: FaEnvelope,
      color: 'text-blue-500'
    },
    {
      label: 'Click Rate',
      value: `${analytics?.averageClickRate?.toFixed(1) || 0}%`,
      icon: FaCheckCircle,
      color: 'text-green-500'
    },
    {
      label: 'Response Time',
      value: '2.5h',
      icon: FaRegClock,
      color: 'text-yellow-500'
    },
    {
      label: 'Bounce Rate',
      value: `${analytics?.averageBounceRate?.toFixed(1) || 0}%`,
      icon: FaExclamationTriangle,
      color: 'text-red-500'
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Overview Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-6">Overview</h2>
        <MetricsCards metrics={overviewMetrics} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Lead Status Distribution</h3>
          <Charts.LeadDistribution analytics={analytics} />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Email Performance</h3>
          <Charts.EmailPerformance analytics={analytics} />
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-medium mb-6">Engagement Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <div className={`rounded-full p-3 ${metric.color} bg-opacity-10`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Recent Activity</h2>
          <button 
            onClick={onViewAllLeads}
            className="text-primary hover:text-primary/80 text-sm"
          >
            View All
          </button>
        </div>
        <div className="space-y-4">
          {analytics?.contacts?.slice(0, 5).map((contact, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between py-3 border-b last:border-0 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
              onClick={() => onViewLead(contact)}
            >
              <div>
                <p className="font-medium">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.email}</p>
              </div>
              <div className="text-sm text-gray-500">
                {contact.lastContacted ? (
                  new Date(contact.lastContacted).toLocaleString('ro-RO')
                ) : (
                  'Never contacted'
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;