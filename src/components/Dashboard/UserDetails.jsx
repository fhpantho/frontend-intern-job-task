import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import UserDetailsLoader from "../Lodder/UserDetailsLoader";

const UserDetails = () => {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://task-api-eight-flax.vercel.app/api/users/${id}`
        );
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <UserDetailsLoader />;
  }

  if (!user) {
    return (
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <p className="text-gray-800">User not found</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Back
      </button>

      {/* User Details */}
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>

      <p className="text-gray-600">
        Email: <span className="text-gray-800">{user.email}</span>
      </p>

      <p className="text-gray-600">
        Status:{" "}
        <span
          className={`px-2 py-1 rounded-full ${
            user.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {user.status}
        </span>
      </p>

      <p className="text-gray-600">
        Joined On:{" "}
        <span className="text-gray-800">
          {new Date(user.joinDate).toLocaleDateString()}
        </span>
      </p>
    </div>
  );
};

export default UserDetails;