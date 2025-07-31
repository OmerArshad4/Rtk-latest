import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";

const EnterpriseCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border border-[#D5DAE1] rounded-xl p-4 bg-white hover:shadow-sm transition">
      <div className="flex justify-between items-start cursor-pointer" onClick={toggleAccordion}>
     
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 min-w-[2rem] rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center text-sm">
            SJ
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-medium text-[#1A2232]">
              Enterprise SaaS Integration
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800 font-semibold">
                In Progress
              </span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">FinTech Corp • Last activity 4 days ago</p>
          </div>
        </div>

        {/* Toggle Icon */}
        <IoChevronForwardSharp
          className={`h-5 w-5 mt-1 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
        />
      </div>

      {isOpen && (
        <div className="mt-4">
          {/* Call + Follow-up */}
          <div className="flex items-center gap-2">
            <BsTelephoneFill className="text-xs text-gray-600" />
            <span className="text-sm text-red-500 font-medium">• Follow-up overdue</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 bg-[#F7F8F9] px-3 py-2 rounded mt-3">
            Spoke to Sarah (CTO at FinTech Corp) about integration. She requested a sandbox trial. No follow-up in 4 days.
          </p>
        </div>
      )}
    </div>
  );
};

export default EnterpriseCard;
