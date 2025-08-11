import StatCard from "../../../Shared/StatCard/Index";
import FilterTabs from "../../../Shared/FilterTabs/Index";
import RecentInteractionsCard from "../../../Shared/RecentTabs/Index";
import FollowUpCard from "../../../Shared/FollowUpCard/Index";
import { useState } from "react";
import SectionHeader from "../../../Shared/SectionHeader/imdex";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");

const followUpCards = [
  {
    initials: "SJ",
    title: "Enterprise SaaS Integration",
    company: "FinTech Corp",
    lastActivity: "4 days ago",
    status: "In Progress",
    statusColor: { bg: "bg-yellow-100", text: "text-yellow-800" },
    iconType: "call",
    alertText: "Follow-up overdue",
    description: "...",
  },
  {
    initials: "MW",
    title: "Technical Support Package",
    company: "Acme Industries",
    lastActivity: "3 days ago",
    status: "Open",
    statusColor: { bg: "bg-blue-100", text: "text-blue-700" }, 
    iconType: "email",
    alertText: "Check-in due",
    description: "...",
  },
  {
    initials: "JL",
    title: "Software Expansion Deal",
    company: "Acme Industries",
    lastActivity: "3 days ago",
    status: "Stalled",
    statusColor: { bg: "bg-red-100", text: "text-red-700" },
    iconType: "email",
    alertText: "Follow-up overdue",
    description: "...",
  },
];

  const filteredFollowUps =
    activeTab === "All"
      ? followUpCards
      : followUpCards.filter((item) => item.status === activeTab);

  return (
    <div className="p-6 bg-[#F8FAFB] min-h-screen space-y-6">
      <SectionHeader
        title="Dashboard"
      />
      <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#2563EB] leading-[18px] text-[#F8FAFC] flex items-center justify-center text-sm font-semibold">
            A
          </div>
          <div>
            <p className="text-sm font-semibold">Alex Morgan</p>
            <p className="text-sm text-gray-500">alex@example.com</p>
          </div>
        </div>
        <div className="flex gap-6">
          <StatCard title="Total Leads" value="24" color="text-[#020817]"  />
          <StatCard title="Follow-Ups Today" value="5" color="text-[#D97706]"  />
          <StatCard title="Attention Score" value="7" color="text-[#2563EB]" />
        </div>
      </div>

    
      <div className="bg-white border-l-4 border-[#3B76F6] rounded-md p-3 shadow-sm">
        <p className="text-sm text-[#1A2232] font-medium">
          2 Due for today follow-ups, 1 Overdue follow-ups
        </p>
      </div>

    
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="w-full lg:w-[70%] space-y-3">
            {filteredFollowUps.length > 0 ? (
              filteredFollowUps.map((card, i) => (
                <FollowUpCard key={i} data={card} />
              ))
            ) : (
              <div className="text-sm text-gray-500 italic">
                No follow-ups in this category.
              </div>
            )}
          </div>
        
          <div className="w-full lg:w-[30%] space-y-3">
            <RecentInteractionsCard />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
