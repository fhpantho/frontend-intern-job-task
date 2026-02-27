import React from 'react';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[60px_auto_1fr_50px] md:grid-cols-[250px_1fr] md:grid-rows-[60px_1fr_50px]">

      {/* Sidebar */}
      <div className="
        bg-gray-800 text-white p-4
        row-start-2 md:row-start-1 md:row-end-4
        col-start-1
      ">
        sidebar
      </div>

      {/* Navbar */}
      <div className="
        bg-gray-200 flex items-center px-4 border-b
        col-start-1 md:col-start-2
        row-start-1
      ">
        navbar
      </div>

      {/* Main Content */}
      <div className="
        bg-gray-50 p-4 overflow-auto
        col-start-1 md:col-start-2
        row-start-3 md:row-start-2
      ">
        <Outlet />
      </div>

      {/* Footer */}
      <div className="
        bg-gray-200 flex items-center justify-center border-t
        col-start-1 md:col-start-2
        row-start-4 md:row-start-3
      ">
        footer
      </div>

    </div>
  );
};

export default DashboardLayout;