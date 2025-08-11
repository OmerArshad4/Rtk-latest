import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "22 Mar - 28 Mar", incoming: 80000, answered: 60000 },
  { name: "29 Mar - 4 Apr", incoming: 65000, answered: 50000 },
  { name: "5 Apr - 11 Apr", incoming: 85000, answered: 55000 },
  { name: "12 Apr - 18 Apr", incoming: 70000, answered: 65000 },
  { name: "19 Apr - 25 Apr", incoming: 90000, answered: 40000 },
];

const CallsVolumeChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h2 className="text-sm font-medium text-gray-500 mb-4">Calls Volume</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="incoming"
            stroke="#2563eb" // blue
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="answered"
            stroke="#60a5fa" // light blue
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CallsVolumeChart;
