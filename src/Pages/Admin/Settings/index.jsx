import React from "react";
import { FiEdit2 } from "react-icons/fi";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 p-1.5 rounded-full text-white border-2 border-white">
                <FiEdit2 size={14} />
              </button>
            </div>
            <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">john.doe@email.com</p>
          </div>

          <div className="mt-8 space-y-1">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
              Personal Information
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
              Security
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
              Notifications
            </button>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
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
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
