import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const FollowUpCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  const {
    initials,
    title,
    company,
    lastActivity,
    status,
    iconType,
    alertText,
    description,
    statusColor,
  } = data;

  return (
    <div className="border border-[#D5DAE1] rounded-xl p-4 bg-white shadow-sm hover:shadow transition-all duration-300 max-w-full">
      <div
        className="flex justify-between items-start cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 min-w-[2rem] rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center text-sm">
            {initials}
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#1A2232]">
              {title}
              <span
                className={`ml-2 px-2 py-[2px] text-[10px] leading-4 rounded-full font-semibold ${statusColor.bg} ${statusColor.text}`}
              >
                {status}
              </span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {company} • Last activity {lastActivity}
            </p>
          </div>
        </div>

        <IoChevronForwardSharp
          className={`h-5 w-5 mt-1 text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {isOpen && (
        <div className="mt-4">
          <div className="flex items-center gap-2">
            {iconType === "call" && <BsTelephoneFill className="text-xs text-gray-600" />}
            {iconType === "email" && <MdEmail className="text-base text-gray-600" />}
            <span className="text-sm text-red-500 font-medium">
              • {alertText}
            </span>
          </div>

          <p className="text-sm text-gray-700 bg-[#F7F8F9] px-3 py-2 rounded mt-3">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default FollowUpCard;
