import axios from "axios";
import React, { useEffect, useState } from "react";
import UsersLoader from "../Lodder/UsersLoader";

const Users = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
        setLoading(true)
        try{
            const res = await axios.get(
        "https://task-api-eight-flax.vercel.app/api/users"
      );
      setUsers(res.data);
    } catch(error){
        console.log(error)
    }
    finally{
        setLoading(false)
    };
        }
      

    fetchUsers();
  }, []);

  if(loading)
  {
    return <UsersLoader></UsersLoader>
  }
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      {/* Title */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Users List
      </h2>

      {/* Users */}
      <div className="space-y-4">
        {users?.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border rounded-xl hover:shadow-md transition"
          >

            {/* Name */}
            <div>
            <div>
              <h3 className="font-medium text-gray-800">{user.name}</h3>
            </div>

            {/* Status */}
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                user.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {user.status}
            </span>
            </div>

            {/* Button */}
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800 transition">
              View Details
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;