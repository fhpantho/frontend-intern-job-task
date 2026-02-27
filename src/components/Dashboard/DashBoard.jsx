import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUsers, FaUserCheck, FaDollarSign, FaChartLine } from "react-icons/fa";
import DashboardLoading from "../Lodder/DashboardLoading";

const DashBoard = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const dashboardOverview = async () => {
        setLoading(true);
      try {
        
        const res = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/overview"
        );

        setData(res.data);

      } catch (err) {
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    };

    dashboardOverview();
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: data?.totalUsers,
      icon: FaUsers,
    },
    {
      title: "Active Users",
      value: data?.activeUsers,
      icon: FaUserCheck,
    },
    {
      title: "Revenue",
      value: `$${data?.revenue}`,
      icon: FaDollarSign,
    },
    {
      title: "Growth",
      value: `${data?.growth}%`,
      icon: FaChartLine,
    },
  ];

  if(loading){
    return <DashboardLoading></DashboardLoading>
  }

  return (
    <div className="p-6">
        {/* Title */}
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Overview</h2>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-rows-2 sm:grid-cols-2  gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-between hover:shadow-lg transition h-40"
            >
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">
                  {item.value || "Loading..."}
                </h2>
              </div>

              <div className="bg-green-100 p-3 rounded-xl">
                <Icon className="text-green-600 text-xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;