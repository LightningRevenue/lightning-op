import React from 'react';

const MetricsCards = ({ metrics, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
              </div>
              <div className={`rounded-full p-3 ${metric.color} bg-opacity-10`}>
                <Icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
            {metric.change && (
              <div className="mt-2">
                <span className={`text-sm ${
                  metric.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change >= 0 ? '+' : ''}{metric.change}%
                </span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MetricsCards;