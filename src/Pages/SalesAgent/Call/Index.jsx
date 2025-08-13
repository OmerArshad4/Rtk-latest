import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import CallStatCard from '../../../Shared/CallAnalyticsCard/CallStatsCard';
import Images from '../../../HelperMethods/ImgConstants';

// Mock icons (you'll replace with Lucide icons)
const Icon = ({ label }) => (
  <div className="w-5 h-5 bg-gray-300 rounded" title={label}></div>
);

// // Reusable Stat Card Component
// const StatCard = ({ title, value, subtitle, subtitleColor }) => (
//   <div className="bg-white rounded-lg p-4 shadow-sm w-full">
//     <div className="flex justify-between items-center mb-2">
//       <p className="text-sm font-medium text-gray-500">{title}</p>
//       <Icon label={title} />
//     </div>
//     <h3 className="text-2xl font-semibold">{value}</h3>
//     <div className={`text-xs font-medium mt-1 ${subtitleColor}`}>{subtitle}</div>
//   </div>
// );

const statCardData = [
  {
    title: 'Totalsss Leads Assigned',
    iconKey: Images.call1Logo, 
    value: '261',
    subtitle: 'This Week: 45  ↑ 12%',
    subtitleColor: 'text-[#15803D]',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Total Calls Initiated',
       iconKey: Images.call2Logo, 
    value: '186',
    subtitle: 'This Week: 32  ↑ 8%',
    subtitleColor: 'text-[#1D4ED8]',
    borderColor: 'border-green-500',
  },
  {
    title: 'Follow-up Scheduled',
      iconKey: Images.call3Logo, 
    value: '117',
    subtitle: 'This Week: 18  ↑ 15%',
    subtitleColor: 'text-[#7E22CE]',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Leads Add',
     iconKey: Images.call4Logo, 
    value: '94',
    subtitle: 'This Week: 15  ↓ 3%',
    subtitleColor: 'text-[#C2410C]',
    borderColor: 'border-orange-400',
  },
];

const CallAnalytics = () => {
  const [barData] = useState([
    { day: 'Mon', leads: 45, calls: 30, followUps: 15 },
    { day: 'Tue', leads: 52, calls: 38, followUps: 20 },
    { day: 'Wed', leads: 49, calls: 34, followUps: 28 },
    { day: 'Thu', leads: 61, calls: 42, followUps: 30 },
    { day: 'Fri', leads: 53, calls: 36, followUps: 22 },
  ]);

  const [lineData] = useState([
    { week: 'Week 1', rate: 65 },
    { week: 'Week 2', rate: 68 },
    { week: 'Week 3', rate: 67 },
    { week: 'Week 4', rate: 70 },
  ]);

  return (
      <div className="p-6 bg-[#F8FAFB] min-h-screen space-y-6">
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Call Analytics</h1>
          <div className="flex gap-3">
            <button className="border  px-3 py-1 rounded-md text-sm">Filter</button>
            <button className="border px-3 py-1 rounded-md text-sm">22 Mar - 22 Apr</button>
            <button className="border px-3 py-1 rounded-md text-sm">Export CSV</button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCardData.map((card, idx) => (
            <CallStatCard key={idx} {...card} />
          ))}
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold mb-2">Weekly Activity Overview</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="leads" fill="#3b82f6" />
                <Bar dataKey="calls" fill="#10b981" />
                <Bar dataKey="followUps" fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          </div>

    
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
              <img src={Images.call5Logo}/>Email Engagement Trends
            </h2>
            <p className="text-xs text-gray-500 mb-2">Open and click rates over the past month</p>
            <div className="bg-green-100 text-green-700 text-center py-2 font-bold rounded mb-2">
              69.75% Avg Reply Rate
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAnalytics;
