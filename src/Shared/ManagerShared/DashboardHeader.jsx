import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-3">
        <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
          <span>Filter</span>
        </button>
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
        />
        <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600">
          Export CSV
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
