import React, { useState } from 'react';
import { FaRegStar, FaStar, FaEllipsisH } from 'react-icons/fa';
import StatusBadge from '../common/StatusBadge';

const LeadList = ({ 
  leads, 
  selectedLeads = [], 
  onSelectLead, 
  onViewDetails,
  onToggleFavorite,
  quickActions = []
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const allSelected = leads.length > 0 && selectedLeads.length === leads.length;

  const handleSelectAll = () => {
    if (allSelected) {
      onSelectLead([]);
    } else {
      onSelectLead(leads.map(lead => lead._id));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-primary focus:ring-primary"
                />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Contact
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr 
                key={lead._id}
                className="hover:bg-gray-50 transition-colors duration-200"
                onClick={() => onViewDetails(lead)}
                style={{ cursor: 'pointer' }}
              >
                <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(lead._id)}
                    onChange={() => onSelectLead(lead._id)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
                      {lead.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {lead.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {lead.email}
                      </div>
                      {lead.company && (
                        <div className="text-xs text-gray-400">
                          {lead.company}
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={lead.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lead.lastContacted ? (
                    <time dateTime={lead.lastContacted}>
                      {new Date(lead.lastContacted).toLocaleString('ro-RO')}
                    </time>
                  ) : (
                    <span className="text-gray-400">Never</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lead.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-center justify-end space-x-3">
                    {onToggleFavorite && (
                      <button
                        onClick={() => onToggleFavorite(lead._id)}
                        className="text-gray-400 hover:text-yellow-400"
                      >
                        {lead.favorite ? (
                          <FaStar className="h-5 w-5" />
                        ) : (
                          <FaRegStar className="h-5 w-5" />
                        )}
                      </button>
                    )}
                    <div className="relative">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === lead._id ? null : lead._id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FaEllipsisH className="h-5 w-5" />
                      </button>
                      {activeDropdown === lead._id && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1" role="menu">
                            {quickActions.map((action, index) => {
                              const Icon = action.icon;
                              return (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    action.action(lead);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                  role="menuitem"
                                >
                                  <Icon className="mr-3 h-4 w-4" />
                                  {action.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadList;