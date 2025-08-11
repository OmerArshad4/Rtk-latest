import React from "react";
import { Link } from "react-router-dom";
import notFoundGif from "../../Assests/monkey-laptop.gif";

export default function NotFoundPage() {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* GIF background */}
      <img
        src={notFoundGif}
        alt="Not Found Background"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />

      {/* Card */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="border border-red-700 px-10 py-10 rounded-md bg-white/50 backdrop-blur-sm shadow-2xl min-w-[340px] text-center">
          <p className="text-2xl text-red-700 font-semibold mb-6">Page Not Found</p>
          <p className="text-sm text-gray-600 mb-6">
            Sorry, we couldn't find the page you're looking for.
          </p>

          <Link
            to="/agent/dashboard"
            className="inline-block border border-green-800 text-green-800 px-4 py-3 rounded-sm hover:bg-green-300 font-semibold text-sm"
          >
            Return to HOME page
          </Link>
        </div>
      </div>
    </div>
  );
}
