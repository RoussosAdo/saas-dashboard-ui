"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { analyticsData, type AnalyticsMetric } from "app/data/analytics";
import { cn } from "app/lib/utils";

const metrics: AnalyticsMetric[] = ["Revenue", "Users", "Conversion"];

export default function RevenueChart() {
  const [activeMetric, setActiveMetric] = useState<AnalyticsMetric>("Revenue");

  const chartData = useMemo(() => {
    return analyticsData[activeMetric];
  }, [activeMetric]);

  return (
    <div className="mt-8">
      <div className="mb-6 flex flex-wrap gap-2">
        {metrics.map((metric) => (
          <button
            key={metric}
            onClick={() => setActiveMetric(metric)}
            className={cn(
              "rounded-xl border px-3 py-2 text-sm font-medium transition",
              activeMetric === metric
                ? "border-white bg-white text-black"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:bg-white/[0.06] hover:text-white"
            )}
          >
            {metric}
          </button>
        ))}
      </div>

      <div className="h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorMetric" x1="0" y1="0" x2="0" y2="1">
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
              dataKey="value"
              stroke="#ffffff"
              fillOpacity={1}
              fill="url(#colorMetric)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}