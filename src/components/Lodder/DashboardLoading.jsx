import React from "react";

const DashboardLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
      
      {[1,2,3,4].map((item) => (
        <div
          key={item}
          className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between"
        >
          
          <div className="space-y-3 w-full">
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
            <div className="h-6 w-16 bg-gray-300 rounded"></div>
          </div>

          <div className="h-12 w-12 bg-gray-200 rounded-xl"></div>

        </div>
      ))}

    </div>
  );
};

export default DashboardLoading;