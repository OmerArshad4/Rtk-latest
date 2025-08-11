import React, { useState } from "react";
import { BsPhone, BsMessenger } from "react-icons/bs";
import PartsListing from "../../PartsListing";
import { FiEye, FiEdit, FiSearch } from "react-icons/fi";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import { useNavigate } from "react-router-dom";
const LeadsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
  const handleCustomerDetail = () => {
    navigate("/agent/viewLeads");
  };

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
      avatar: null,
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
      avatarBg: "bg-indigo-500",
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
      avatarBg: "bg-purple-600",
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
      avatarBg: "bg-amber-600",
    },
  ];

  // Table column definitions for PartsListing
  const tableHeadings = [
    {
      name: "Lead",
      selector: (row) => (
        <div className="flex items-center gap-3">
          {row.avatar ? (
            <div
              className={`w-8 h-8 rounded-full ${row.avatarBg} flex items-center justify-center text-white text-sm font-medium`}
            >
              {row.avatar}
            </div>
          ) : (
            <div className="w-8 h-8"></div>
          )}
          <span className="font-medium text-[#1E293B]">{row.name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => (
        <span className="text-[#64748B] text-sm">{row.email}</span>
      ),
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => (
        <span className="text-[#64748B] text-sm">{row.phone}</span>
      ),
      sortable: true,
    },
    {
      name: "Follow ups",
      selector: (row) => (
        <span className="font-medium text-[#1E293B]">{row.followUps}</span>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <div
          className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${row.statusColor}`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${row.statusDot}`}
          ></div>
          {row.status}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Assigned Date",
      selector: (row) => (
        <span className="text-[#64748B] text-sm">{row.assignedDate}</span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex items-center gap-2">
          <button    onClick={handleCustomerDetail} className="p-1.5 rounded hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B] transition-colors">
            <FiEye size={16} />
          </button>
        
        </div>
      ),
    },
  ];

  return (
        <div className="p-6 bg-[#FAFAFA] min-h-screen">
       <div className="flex justify-between items-center my-3">
          <h1 className="text-xl font-semibold">Leads</h1>
          <div className="flex gap-3">
            <button className="border px-3 py-1 rounded-md text-sm">Filter</button>
            <button className="border px-3 py-1 rounded-md text-sm">22 Mar - 22 Apr</button>
            <button className="border px-3 py-1 rounded-md text-sm">Export CSV</button>
          </div>
        </div>

     <div className="overflow-x-auto">
        <div className="w-full">
     <PartsListing
        TableHeadingsList={tableHeadings}
        tableDataList={leads}
      />
        </div>
 
    </div>
    </div>
  );
};

export default LeadsTable;
