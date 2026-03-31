"use client";

import { useState } from "react";
import { Bell, Search, Plus, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

type DashboardTopbarProps = {
  onOpenMobileMenu?: () => void;
};

const routeMap = [
  { keywords: ["overview", "dashboard", "home"], href: "/" },
  { keywords: ["analytics", "metrics", "performance"], href: "/analytics" },
  { keywords: ["users", "team", "members"], href: "/users" },
  { keywords: ["billing", "invoice", "payment", "plan"], href: "/billing" },
  { keywords: ["settings", "security", "notifications", "profile"], href: "/settings" },
];

export default function DashboardTopbar({
  onOpenMobileMenu,
}: DashboardTopbarProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();

    const value = search.trim().toLowerCase();
    if (!value) return;

    const match = routeMap.find((item) =>
      item.keywords.some((keyword) => value.includes(keyword))
    );

    if (match && match.href !== pathname) {
      router.push(match.href);
      setSearch("");
    }
  }

  return (
    <header className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="mt-0.5 inline-flex rounded-xl border border-white/10 p-2 text-zinc-300 transition hover:bg-white/[0.06] hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="min-w-0">
          <p className="text-sm font-medium text-zinc-500">Workspace overview</p>
          <p className="mt-1 text-sm leading-6 text-zinc-400">
            Monitor product activity, analytics, billing, and settings.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <form
          onSubmit={handleSearchSubmit}
          className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400 transition-all duration-300 focus-within:border-indigo-400/50 focus-within:bg-white/[0.05] focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] sm:w-[280px]"
        >
          <Search className="h-4 w-4 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Go to analytics, users..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </form>

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