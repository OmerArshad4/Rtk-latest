import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const GaugeCard = ({ value, target }) => {
  const progress = (value / target) * 100;
  const data = [
    { name: "Progress", value: progress },
    { name: "Remaining", value: 100 - progress },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center">
      <h4 className="text-sm font-medium text-gray-500 mb-4">
        Average Handle Time
      </h4>
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={4}
          dataKey="value"
        >
          <Cell key="progress" fill="#2563eb" />
          <Cell key="remaining" fill="#e5e7eb" />
        </Pie>
      </PieChart>
      <p className="text-2xl font-bold">{value}m</p>
      <span className="text-xs text-gray-400">Target &lt;00:20:00</span>
    </div>
  );
};

export default GaugeCard;
