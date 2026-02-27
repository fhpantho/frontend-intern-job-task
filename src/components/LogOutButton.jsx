import React from "react";
import { useNavigate } from "react-router";
import { FiLogOut } from "react-icons/fi"; 

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear the user
    localStorage.removeItem("user"); // example
    // Redirect to login page
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition duration-200"
    >
      <FiLogOut className="w-5 h-5" />
      Logout
    </button>
  );
};

export default LogoutButton;