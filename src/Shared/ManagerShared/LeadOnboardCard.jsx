// src/components/Dashboard/LeadOnboardCard.jsx
import React from "react";

const LeadOnboardCard = ({
  title = "Average Lead Onboard",
  percentage = 89,
  change = "+1.2%",
  negative = 14,
  neutral = 25,
  positive = 2141,
  className = "",
}) => {
  const total = negative + neutral + positive || 1;
  const negPct = (negative / total) * 100;
  const neuPct = (neutral / total) * 100;
  const posPct = (positive / total) * 100;

  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-medium text-gray-500">{title}</h4>
            <span className="text-xs text-gray-300" title="info">●</span>
          </div>

          <div className="flex items-end gap-4 mt-3">
            <div className="text-4xl font-bold leading-none">{percentage}%</div>
            <div className="text-xs text-gray-400">From last month</div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
            {change}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="h-6 rounded-full overflow-hidden bg-gray-100 flex">
          {negative > 0 && (
            <div
              style={{ width: `${negPct}%` }}
              className="bg-red-400 h-full"
              title={`Negative: ${negative}`}
            />
          )}
          {neutral > 0 && (
            <div
              style={{ width: `${neuPct}%` }}
              className="bg-yellow-400 h-full"
              title={`Neutral: ${neutral}`}
            />
          )}
          {positive > 0 && (
            <div
              style={{ width: `${posPct}%` }}
              className="bg-green-500 h-full"
              title={`Positive: ${positive}`}
            />
          )}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <div>
              <div className="text-xs text-gray-500">Negative</div>
              <div className="font-semibold">{negative}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <div>
              <div className="text-xs text-gray-500">Neutral</div>
              <div className="font-semibold">{neutral}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <div>
              <div className="text-xs text-gray-500">Positive</div>
              <div className="font-semibold">{positive}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadOnboardCard;
