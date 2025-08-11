// src/pages/Manager/Dashboard.jsx
import React from "react";


import { FaPhoneAlt } from "react-icons/fa";
import { MdFollowTheSigns } from "react-icons/md";
import { MdCallMissed } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import DashboardHeader from "../../../Shared/ManagerShared/DashboardHeader";
import StatCard from "../../../Shared/ManagerShared/StatCard";
import GaugeCard from "../../../Shared/ManagerShared/GaugeCard";
import CallsVolumeChart from "../../../Shared/ManagerShared/CallsVolumeChart ";
import LeadOnboardCard from "../../../Shared/ManagerShared/LeadOnboardCard";


const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <DashboardHeader />

      {/* Grid that mimics Figma: 2 rows x 12 cols on large screens */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">

        {/* Row1, Col 1-3 (top-left) */}
        <div className="lg:col-start-1 lg:col-span-3">
          <StatCard
            icon={<MdFollowTheSigns className="text-blue-500 text-lg" />}
            title="Follow ups"
            value="105,400"
            change="+2.4%"
            changeType="up"
            subtitle="From last month"
          />
        </div>

        {/* Row1, Col 4-6 (top middle-left) */}
        <div className="lg:col-start-4 lg:col-span-3">
          <StatCard
            icon={<FaPhoneAlt className="text-blue-500 text-lg" />}
            title="Answered Calls"
            value="150,486"
            change="+1.2%"
            changeType="up"
            subtitle="From last month"
          />
        </div>

        {/* Gauge: occupies cols 7-10 and spans both rows */}
        <div className="lg:col-start-7 lg:col-span-4 lg:row-start-1 lg:row-span-2">
          <GaugeCard value={21.06} target={20} />
        </div>

        {/* LeadOnboard: occupies cols 11-12 and spans both rows */}
        <div className="lg:col-start-11 lg:col-span-2 lg:row-start-1 lg:row-span-2">
          <LeadOnboardCard
            percentage={89}
            change="+1.2%"
            negative={14}
            neutral={25}
            positive={2141}
          />
        </div>

        {/* Row2, Col 1-3 (bottom-left) */}
        <div className="lg:col-start-1 lg:col-span-3 lg:row-start-2">
          <StatCard
            icon={<MdCallMissed className="text-red-500 text-lg" />}
            title="Abandoned Calls"
            value="98,000"
            change="-1.4%"
            changeType="down"
            subtitle="From last month"
          />
        </div>

        {/* Row2, Col 4-6 (bottom middle-left) */}
        <div className="lg:col-start-4 lg:col-span-3 lg:row-start-2">
          <StatCard
            icon={<FaPhoneVolume className="text-blue-500 text-lg" />}
            title="Total Calls"
            value="250,487"
            change="+4.2%"
            changeType="up"
            subtitle="From last month"
          />
        </div>
      </div>

      {/* Calls volume chart full width under the cards */}
      <div className="mt-6">
        <CallsVolumeChart />
      </div>
    </div>
  );
};

export default Dashboard;
