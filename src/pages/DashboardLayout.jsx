import React from 'react';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="h-screen grid grid-cols-[250px_1fr] grid-rows-[60px_1fr_50px]">

      {/* Sidebar */}
      <div className="bg-gray-800 text-white p-4 col-start-1 row-start-1 row-end-4">
        sidebar
      </div>

      {/* Navbar */}
      <div className="bg-gray-200 flex items-center px-4 border-b col-start-2 row-start-1">
        navbar
      </div>

      {/* Outlet */}
      <div className="bg-gray-50 p-4 overflow-auto col-start-2 row-start-2">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="bg-gray-200 flex items-center justify-center border-t col-start-2 row-start-3">
        footer
      </div>

    </div>
  );
};

export default DashboardLayout;