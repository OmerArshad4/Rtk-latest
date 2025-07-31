const FilterTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["All", "Due for today", "Overdue"];

  return (
    <div className="flex gap-3">
      {tabs.map((label, idx) => (
        <button
          key={idx}
          onClick={() => setActiveTab(label)}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200
            ${
              activeTab === label
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-[#1A2232] hover:bg-gray-100 border-gray-300"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
