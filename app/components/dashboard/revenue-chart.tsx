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
              "rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-300",
              activeMetric === metric
                ? "border-indigo-400/40 bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] text-white shadow-[0_10px_20px_rgba(99,102,241,0.22)]"
                : "border-white/10 bg-white/[0.03] text-zinc-400 hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
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
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.45} />
                <stop offset="45%" stopColor="#8B5CF6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.02} />
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
                backgroundColor: "#0f172a",
                  border: "1px solid rgba(99,102,241,0.25)",
                  borderRadius: "12px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                }}
              labelStyle={{ color: "#fff" }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#818CF8"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorMetric)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}