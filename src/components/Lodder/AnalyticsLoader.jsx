import React from "react";

const AnalyticsLoader = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md animate-pulse">

      {/* Title */}
      <div className="h-5 w-40 bg-gray-200 rounded mb-6"></div>

      {/* Chart area */}
      <div className="h-[350px] w-full bg-gray-100 rounded-lg flex items-end gap-2 p-4">

        <div className="w-6 h-24 bg-gray-200 rounded"></div>
        <div className="w-6 h-32 bg-gray-200 rounded"></div>
        <div className="w-6 h-20 bg-gray-200 rounded"></div>
        <div className="w-6 h-40 bg-gray-200 rounded"></div>
        <div className="w-6 h-28 bg-gray-200 rounded"></div>
        <div className="w-6 h-36 bg-gray-200 rounded"></div>

      </div>

    </div>
  );
};

export default AnalyticsLoader;