"use client";

import { Bell, Search, Plus, Menu } from "lucide-react";

type DashboardTopbarProps = {
  onOpenMobileMenu?: () => void;
};

export default function DashboardTopbar({
  onOpenMobileMenu,
}: DashboardTopbarProps) {
  return (
    <header className="mb-8 flex flex-col gap-6 border-b border-white/10 pb-6 xl:flex-row xl:items-start xl:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileMenu}
            className="inline-flex rounded-xl border border-white/10 p-2 text-zinc-300 transition hover:bg-white/[0.06] hover:text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <p className="text-sm font-medium text-zinc-500">Welcome back</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              SaaS Dashboard UI
            </h1>
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
          Production-ready SaaS dashboard built with reusable components,
          responsive layout, and scalable UI architecture.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto xl:justify-end">
        <div className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400 transition-all duration-300 focus-within:border-indigo-400/50 focus-within:bg-white/[0.05] focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] sm:max-w-xs">
          <Search className="h-4 w-4 shrink-0" />
          <input
            type="text"
            placeholder="Search metrics, users, reports..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <button className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-200">
          <Bell className="h-4 w-4" />
          Alerts
        </button>

        <button className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(99,102,241,0.35)]">
          <Plus className="h-4 w-4" />
          New Report
        </button>
      </div>
    </header>
  );
}