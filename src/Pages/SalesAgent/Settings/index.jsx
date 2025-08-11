import React, { useState, useRef } from "react";
import { FiEdit2 } from "react-icons/fi";
import SectionHeader from "../../../Shared/SectionHeader/imdex";
import SettingsSidebar from "../../../Shared/SettingsSidebar/Index";

export default function SettingsPage() {
  const [active, setActive] = useState("Personal Information");
  const [profileImage, setProfileImage] = useState("https://randomuser.me/api/portraits/men/32.jpg");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const menuItems = [
    { label: "Personal Information" },
    { label: "Security" },
    { label: "Notifications" },
  ];

  const [toggles, setToggles] = useState({
    leadAlerts: true,
    profileUpdates: false,
    emailUpdates: true,
    callAlerts: false,
  });

  const toggleSwitch = (key) => {
    setToggles((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const preferences = [
    { key: "leadAlerts", title: "Lead Add Alerts", description: "Nunc ornare, massa vitae venenatis feugiat, dolor orci sodales leo." },
    { key: "profileUpdates", title: "Profile Updates", description: "Nunc ornare, massa vitae venenatis feugiat, dolor orci sodales leo." },
    { key: "emailUpdates", title: "Email Updates", description: "Nunc ornare, massa vitae venenatis feugiat, dolor orci sodales leo." },
    { key: "callAlerts", title: "Call Alerts", description: "Nunc ornare, massa vitae venenatis feugiat, dolor orci sodales leo." },
  ];

  const profile = (
    <div className="flex flex-col items-center p-6">
      <div className="relative">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="absolute bottom-0 right-0 bg-blue-500 p-1.5 rounded-full text-white border-2 border-white"
        >
          <FiEdit2 size={14} />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
      <p className="text-sm text-gray-500">john.doe@email.com</p>
    </div>
  );

  return (
    <div className="p-6 bg-[#F8FAFB] min-h-screen space-y-6">
      <SectionHeader title="Settings" />
      <div className="w-full flex flex-col md:flex-row gap-6">
        
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <SettingsSidebar
            profile={profile}
            menuItems={menuItems}
            active={active}
            setActive={setActive}
          />
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
          {active === "Personal Information" && (
            <>
              <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
               <>
              <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
              <div className="divide-y divide-gray-200">
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-base font-medium">John Doe</p>
                  </div>
                  <FiEdit2 className="text-gray-400" />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-base font-medium">johndoe@gmail.com</p>
                  </div>
                  <FiEdit2 className="text-gray-400" />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="text-base font-medium">(000) 000 0000</p>
                  </div>
                  <FiEdit2 className="text-gray-400" />
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="text-sm text-gray-500">Timezone</p>
                    <p className="text-base font-medium">(EST) UK</p>
                  </div>
                  <FiEdit2 className="text-gray-400" />
                </div>
              </div>
            </>
            </>
          )}

          {active === "Security" && (
            <h2 className="text-lg font-semibold">Security Settings</h2>
          )}

          {active === "Notifications" && (
            <>
              <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
              <div className="divide-y divide-gray-200">
                {preferences.map((pref) => (
                  <div
                    key={pref.key}
                    className="flex justify-between items-center py-3"
                  >
                    <div>
                      <p className="text-sm text-gray-500">{pref.title}</p>
                      <p className="text-base font-medium text-[#838383]">
                        {pref.description}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleSwitch(pref.key)}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                        toggles[pref.key] ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                          toggles[pref.key] ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
