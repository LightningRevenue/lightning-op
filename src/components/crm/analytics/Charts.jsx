import React from 'react';
import {
  BarChart, Bar,
  PieChart, Pie,
  Cell,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const COLORS = {
  new: '#3B82F6', // blue
  contacted: '#F59E0B', // yellow
  interested: '#10B981', // green
  'not-interested': '#EF4444', // red
  converted: '#8B5CF6' // purple
};

const Charts = {
  LeadDistribution: ({ analytics }) => {
    const getStatusCounts = () => {
      if (!analytics?.contacts) return [];

      const counts = {
        new: 0,
        contacted: 0,
        interested: 0,
        'not-interested': 0,
        converted: 0
      };

      analytics.contacts.forEach(contact => {
        if (counts.hasOwnProperty(contact.status)) {
          counts[contact.status]++;
        }
      });

      return Object.entries(counts).map(([status, value]) => ({
        name: status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' '),
        value,
        color: COLORS[status]
      }));
    };

    const data = getStatusCounts();

    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  },

  EmailPerformance: ({ analytics }) => {
    const data = [
      {
        name: 'Sent',
        value: analytics?.totalEmails || 0,
        color: '#3B82F6'
      },
      {
        name: 'Opened',
        value: analytics?.totalOpens || 0,
        color: '#10B981'
      },
      {
        name: 'Clicked',
        value: analytics?.totalClicks || 0,
        color: '#8B5CF6'
      },
      {
        name: 'Bounced',
        value: analytics?.totalBounces || 0,
        color: '#EF4444'
      }
    ];

    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {data.map((entry, index) => (
            <Bar
              key={entry.name}
              dataKey="value"
              fill={entry.color}
              name={entry.name}
              stackId={index}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
};

export default Charts;