// import React, { useState } from 'react';

// const TabbedLayout = ({ tabs, defaultTab }) => {
//   const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].label);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
//       {/* Sidebar Tabs */}
//       <div className="space-y-2">
//         {tabs.map((tab) => (
//           <button
//             key={tab.label}
//             className={`w-full px-4 py-2 rounded-md text-left font-medium border ${
//               activeTab === tab.label
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-white text-gray-800 border-gray-200'
//             }`}
//             onClick={() => setActiveTab(tab.label)}
//           >
//             {tab.label}
//             {tab.badge && (
//               <span className="ml-2 inline-flex items-center justify-center text-xs font-bold bg-white text-blue-600 w-5 h-5 rounded-full">
//                 {tab.badge}
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Active Tab Content */}
//       <div className="space-y-4">
//         {tabs.find((t) => t.label === activeTab)?.content}
//       </div>
//     </div>
//   );
// };

// export default TabbedLayout;

import React, { useState } from "react";

export default function TabbedLayout({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Tabs Sidebar */}
      <div className="w-full md:w-64 bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col space-y-1">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-4 py-2 rounded-lg transition-colors ${
                activeIndex === index
                  ? "bg-blue-500 text-white font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
