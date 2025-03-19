import React from 'react';

const StatusBadge = ({ status = 'new' }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'interested':
        return 'bg-green-100 text-green-800';
      case 'not-interested':
        return 'bg-red-100 text-red-800';
      case 'converted':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formattedStatus = status?.charAt(0).toUpperCase() + status?.slice(1).replace('-', ' ') || 'New';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles()}`}>
      {formattedStatus}
    </span>
  );
};

export default StatusBadge;