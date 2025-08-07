import React, { useState } from 'react';
 
import { BsPhone , BsMessenger , BsCalculator , BsDownload , BsPlus , BsChevronBarDown } from 'react-icons/bs';
// Mock components based on your structure
const SectionHeader = ({ title }) => (
  <div className="mb-6">
    <h1 className="text-2xl font-semibold text-[#1E293B]">{title}</h1>
  </div>
);

const LeadsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const leads = [
    {
      id: 1,
      name: "Olivia Rhye",
      email: "name@email.com",
      phone: "+17 345 085 230",
      followUps: 2,
      status: "In progress",
      statusColor: "bg-blue-50 text-blue-700",
      statusDot: "bg-blue-500",
      assignedDate: "Jan 6, 2025",
      avatar: null
    },
    {
      id: 2,
      name: "Phillip Gouse",
      email: "name@email.com", 
      phone: "+17 345 085 230",
      followUps: 2,
      status: "Overdue",
      statusColor: "bg-orange-50 text-orange-700",
      statusDot: "bg-orange-500",
      assignedDate: "Jan 6, 2025",
      avatar: "P",
      avatarBg: "bg-indigo-500"
    },
    {
      id: 3,
      name: "Zain Workman",
      email: "name@email.com",
      phone: "+17 345 085 230", 
      followUps: 2,
      status: "Not initiated",
      statusColor: "bg-red-50 text-red-700",
      statusDot: "bg-red-500",
      assignedDate: "Jan 6, 2025",
      avatar: "Z",
      avatarBg: "bg-purple-600"
    },
    {
      id: 4,
      name: "Lindsey Bergson",
      email: "name@email.com",
      phone: "+17 345 085 230",
      followUps: 2,
      status: "In progress", 
      statusColor: "bg-blue-50 text-blue-700",
      statusDot: "bg-blue-500",
      assignedDate: "Jan 6, 2025",
      avatar: "L",
      avatarBg: "bg-amber-600"
    },
    {
      id: 5,
      name: "Skylar Lipshutz",
      email: "name@email.com",
      phone: "+17 345 085 230",
      followUps: 2,
      status: "Converted",
      statusColor: "bg-green-50 text-green-700", 
      statusDot: "bg-green-500",
      assignedDate: "Jan 6, 2025",
      avatar: "S",
      avatarBg: "bg-red-500"
    },
    {
      id: 6,
      name: "Lindsey Gouse",
      email: "name@email.com",
      phone: "+17 345 085 230",
      followUps: 2,
      status: "Converted",
      statusColor: "bg-green-50 text-green-700",
      statusDot: "bg-green-500", 
      assignedDate: "Jan 6, 2025",
      avatar: "L",
      avatarBg: "bg-slate-700"
    },
    {
      id: 7,
      name: "Madelyn Aminoff",
      email: "name@email.com",
      phone: "+17 345 085 230",
      followUps: 2,
      status: "Converted",
      statusColor: "bg-green-50 text-green-700",
      statusDot: "bg-green-500",
      assignedDate: "Jan 6, 2025", 
      avatar: "M",
      avatarBg: "bg-slate-600"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F8FAFC] border-b border-[#F1F5F9]">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-[#64748B] text-sm">Lead</th>
              <th className="text-left py-3 px-4 font-medium text-[#64748B] text-sm">Email</th>
              <th className="text-left py-3 px-4 font-medium text-[#64748B] text-sm">Phone</th>
              <th className="text-left py-3 px-4 font-medium text-[#64748B] text-sm">Follow ups</th>
              <th className="text-left py-3 px-4 font-medium text-[#64748B] text-sm">Status</th>
              <th className="text-left py-3 px-4 font-medium text-[#64748B] text-sm">Assigned Date</th>
              <th className="text-left py-3 px-4 font-medium text-[#64748B] text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-[#F1F5F9] hover:bg-[#F8FAFC] transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    {lead.avatar ? (
                      <div className={`w-8 h-8 rounded-full ${lead.avatarBg} flex items-center justify-center text-white text-sm font-medium`}>
                        {lead.avatar}
                      </div>
                    ) : (
                      <div className="w-8 h-8"></div>
                    )}
                    <span className="font-medium text-[#1E293B]">{lead.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-[#64748B] text-sm">{lead.email}</td>
                <td className="py-4 px-4 text-[#64748B] text-sm">{lead.phone}</td>
                <td className="py-4 px-4 font-medium text-[#1E293B]">{lead.followUps}</td>
                <td className="py-4 px-4">
                  <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${lead.statusColor}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${lead.statusDot}`}></div>
                    {lead.status}
                  </div>
                </td>
                <td className="py-4 px-4 text-[#64748B] text-sm">{lead.assignedDate}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B] transition-colors">
                      <BsPhone size={16} />
                    </button>
                    <button className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B] transition-colors">
                      <BsMessenger size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-6 border-t border-[#F1F5F9]">
        <div className="text-sm text-[#64748B]">
          Page 1 of 10
        </div>
        <div className="flex items-center gap-2">
          <button 
            className="px-3 py-2 border border-[#E2E8F0] rounded-md text-sm text-[#64748B] hover:bg-[#F8FAFC] transition-colors"
            disabled
          >
            Previous
          </button>
          <button 
            className="px-3 py-2 border border-[#E2E8F0] rounded-md text-sm text-[#64748B] hover:bg-[#F8FAFC] transition-colors"
            onClick={() => setCurrentPage(2)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default LeadsTable