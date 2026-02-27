import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Big 404 */}
      <h1 className="text-9xl font-extrabold text-gray-300 mb-4">404</h1>

      {/* Message */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back Home Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition"
      >
        Back to Home
      </button>

      {/* Optional Illustration */}
      <div className="mt-10">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 illustration"
          className="max-w-sm mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;