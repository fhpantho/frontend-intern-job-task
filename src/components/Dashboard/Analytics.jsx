import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

import AnalyticsLoader from "../Lodder/AnalyticsLoader";

const Analytics = () => {
    const [data , setData] = useState(null);
    const [loading, setLoading] = useState(false);

      useEffect(() => {
    const dashboardOverview = async () => {
        setLoading(true);
      try {
        
        const res = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/analytics"
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

  if(loading)
  {return <AnalyticsLoader></AnalyticsLoader>}
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Website Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
          />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="views"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="conversions"
            stroke="#f59e0b"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Analytics;