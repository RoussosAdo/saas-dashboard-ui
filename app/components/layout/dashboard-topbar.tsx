import { Bell, Search, Plus } from "lucide-react";

export default function DashboardTopbar() {
  return (
    <header className="mb-8 flex flex-col gap-6 border-b border-white/10 pb-6 xl:flex-row xl:items-start xl:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-zinc-500">Welcome back</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          SaaS Dashboard UI
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
          Production-ready SaaS dashboard built with reusable components,
          responsive layout, and scalable UI architecture.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto xl:justify-end">
        <div className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400 sm:max-w-xs">
          <Search className="h-4 w-4 shrink-0" />
          <input
            type="text"
            placeholder="Search metrics, users, reports..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <button className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/[0.1]">
          <Bell className="h-4 w-4" />
          Alerts
        </button>

        <button className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-90">
          <Plus className="h-4 w-4" />
          New Report
        </button>
      </div>
    </header>
  );
}