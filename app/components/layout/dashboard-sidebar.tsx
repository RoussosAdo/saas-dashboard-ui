"use client";

import NavItem from "app/components/layout/nav-item";
import {
  LayoutGrid,
  BarChart3,
  Users,
  Settings,
  CreditCard,
  LifeBuoy,
  X,
} from "lucide-react";

type DashboardSidebarProps = {
  mobile?: boolean;
  onNavigate?: () => void;
  onClose?: () => void;
};

export default function DashboardSidebar({
  mobile = false,
  onNavigate,
  onClose,
}: DashboardSidebarProps) {
  return (
    <aside
      className={
        mobile
          ? "flex h-full w-[280px] flex-col border-r border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(10,10,10,0.98))] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          : "hidden w-72 shrink-0 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(10,10,10,0.96))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.35)] lg:block"
      }
    >
      <div className="flex h-full flex-col">
        <div>
          {mobile ? (
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">Menu</p>
              <button
                onClick={onClose}
                className="rounded-xl border border-white/10 p-2 text-zinc-400 transition hover:bg-white/[0.06] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : null}

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Workspace
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">Dashboard</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Manage analytics, users, billing, and settings.
            </p>
          </div>

          <div className="space-y-2">
            <NavItem
              label="Overview"
              href="/"
              icon={<LayoutGrid className="h-4 w-4" />}
              onClick={onNavigate}
            />
            <NavItem
              label="Analytics"
              href="/analytics"
              icon={<BarChart3 className="h-4 w-4" />}
              onClick={onNavigate}
            />
            <NavItem
              label="Users"
              href="/users"
              icon={<Users className="h-4 w-4" />}
              onClick={onNavigate}
            />
            <NavItem
              label="Billing"
              href="/billing"
              icon={<CreditCard className="h-4 w-4" />}
              onClick={onNavigate}
            />
            <NavItem
              label="Settings"
              href="/settings"
              icon={<Settings className="h-4 w-4" />}
              onClick={onNavigate}
            />
          </div>
        </div>

        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-white/10 p-2 text-white">
              <LifeBuoy className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Need help?</p>
              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Review docs, manage support, and keep your workspace organized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}