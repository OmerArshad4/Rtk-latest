import React from "react";

const recentItems = [
  {
    date: "12 Apr, 2025",
    topic: "Topic Name",
    status: "Live",
    description:
      "Nunc ornare, massa vitae venenatis feugiat, dolor orci sodales leo.",
  },
  {
    date: "12 Apr, 2025",
    topic: "Topic Name",
    status: "Live",
    description:
      "Nunc ornare, massa vitae venenatis feugiat, dolor orci sodales leo.",
  },
  {
    date: "12 Apr, 2025",
    topic: "Topic Name",
    status: "Live",
    description:
      "Nunc ornare, massa vitae venenatis feugiat, dolor orci sodales leo.",
  },
];

const RecentInteractionsCard = () => {
  return (
    <div className="bg-white border border-[#D5DAE1] rounded-xl p-4 shadow-sm">
      <h3 className="text-base font-semibold text-[#1A2232] mb-4">
        Recent Interactions
      </h3>

      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
        {recentItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#F9FAFB] hover:bg-gray-50 cursor-pointer p-3 rounded-lg transition"
          >
            <p className="text-xs text-gray-500 mb-1">{item.date}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-[#1A2232]">
                {item.topic}
              </p>
              <span className="text-[10px] font-semibold text-green-700 bg-green-100 px-2 py-[2px] rounded-full">
                {item.status}
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1 leading-snug line-clamp-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInteractionsCard;
