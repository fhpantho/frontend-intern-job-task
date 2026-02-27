import React, { useState } from "react";
import { Outlet, NavLink } from "react-router";
import { FaTachometerAlt, FaChartBar, FaUsers, FaBox } from "react-icons/fa";

const DashboardLayout = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

//   the side bar navigation item
  const menuItems = [
    { to: "/dashboard", label: "Dashboard", icon: FaTachometerAlt },
    { to: "/dashboard/analytics", label: "Analytics", icon: FaChartBar },
    { to: "/dashboard/users", label: "Users", icon: FaUsers },
    { to: "/dashboard/products", label: "Products", icon: FaBox },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col">

      {/* Navbar */}
      <div className="bg-white flex items-center justify-between px-6 h-[60px] border-b">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <h2 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h2>

      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <div
          className={`bg-white w-[250px] border-r p-5 flex flex-col transition-transform duration-300 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 fixed md:relative h-full z-20`}
        >

          <h1 className="text-gray-400 text-sm font-semibold mb-6">
            MENU
          </h1>

          <ul className="space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/dashboard"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                        isActive
                          ? "bg-green-700 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}

          </ul>
        </div>

        {/* Overlay for Mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">

          {/* Outlet */}
          <div className="flex-1 p-6 overflow-auto bg-gray-50">
            <Outlet />
          </div>

          {/* Footer */}
          <div className="bg-gray-200 h-[50px] flex items-center justify-center border-t">
            © 2026 Dashboard
          </div>

        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;