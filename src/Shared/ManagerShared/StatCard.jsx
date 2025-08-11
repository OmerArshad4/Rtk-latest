import React from "react";

const StatCard = ({ icon, title, value, change, changeType, subtitle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-medium ${
            changeType === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-gray-400">{subtitle}</span>
      </div>
    </div>
  );
};

export default StatCard;
