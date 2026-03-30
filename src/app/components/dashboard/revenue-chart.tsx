"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { revenueData } from "@/app/data/analytics";

export default function RevenueChart() {
  return (
    <div className="mt-8 h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

          <XAxis
            dataKey="name"
            stroke="#71717a"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            stroke="#71717a"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
            }}
            labelStyle={{ color: "#fff" }}
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#ffffff"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}