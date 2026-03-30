import { Bell, Search, Plus } from "lucide-react";

export default function DashboardTopbar() {
  return (
    <header className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p className="text-sm font-medium text-zinc-500">Welcome back</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          SaaS Dashboard UI
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
          Production-ready SaaS dashboard built with reusable components,
          responsive layout, and scalable UI architecture.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400">
          <Search className="h-4 w-4" />
          <span className="text-sm">Search metrics, users, reports...</span>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.1]">
          <Bell className="h-4 w-4" />
          Alerts
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-90">
          <Plus className="h-4 w-4" />
          New Report
        </button>
      </div>
    </header>
  );
}