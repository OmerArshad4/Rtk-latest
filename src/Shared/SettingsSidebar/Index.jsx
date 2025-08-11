 
export default function SettingsSidebar({ profile, menuItems, active, setActive }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    
      {profile}

 
      <nav className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className={`flex-1 lg:flex-none px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              active === item.label
                ? "bg-blue-500 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
