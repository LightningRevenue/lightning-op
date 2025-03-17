import React from 'react';
import { FaEnvelope, FaEye, FaMousePointer, FaExclamationTriangle } from 'react-icons/fa';

const EmailMetrics = ({ metrics, className = '' }) => {
  const MetricCard = ({ icon: Icon, label, value, color, percentage }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            {percentage && (
              <p className="ml-2 text-sm text-gray-500">{percentage}%</p>
            )}
          </div>
        </div>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
    </div>
  );

  return (
    <div className={`space-y-6 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-900">Email Campaign Metrics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          icon={FaEnvelope}
          label="Total Emails Sent"
          value={metrics?.totalEmailsSent || 0}
          color="text-blue-500"
        />
        <MetricCard
          icon={FaEye}
          label="Open Rate"
          value={metrics?.totalOpens || 0}
          percentage={metrics?.openRate?.toFixed(1) || 0}
          color="text-green-500"
        />
        <MetricCard
          icon={FaMousePointer}
          label="Click Rate"
          value={metrics?.totalClicks || 0}
          percentage={metrics?.clickRate?.toFixed(1) || 0}
          color="text-purple-500"
        />
        <MetricCard
          icon={FaExclamationTriangle}
          label="Bounce Rate"
          value={metrics?.totalBounces || 0}
          percentage={metrics?.bounceRate?.toFixed(1) || 0}
          color="text-red-500"
        />
      </div>

      {/* Detailed Metrics Table */}
      <div className="bg-white rounded-lg shadow mt-6">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Detailed Metrics</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Count
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Opens</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {metrics?.totalOpens || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {(metrics?.openRate || 0).toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Clicks</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {metrics?.totalClicks || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {(metrics?.clickRate || 0).toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Bounces</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {metrics?.totalBounces || 0}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                    {(metrics?.bounceRate || 0).toFixed(1)}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMetrics;