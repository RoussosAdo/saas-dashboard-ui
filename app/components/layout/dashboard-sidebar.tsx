import NavItem from "app/components/layout/nav-item";
import {
  LayoutGrid,
  BarChart3,
  Users,
  Settings,
  CreditCard,
  LifeBuoy,
} from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 rounded-3xl border border-white/10 bg-[#0a0a0a] p-5 lg:block">
      <div className="flex h-full flex-col">
        <div>
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
            />
            <NavItem
              label="Analytics"
              href="/analytics"
              icon={<BarChart3 className="h-4 w-4" />}
            />
            <NavItem
              label="Users"
              href="/users"
              icon={<Users className="h-4 w-4" />}
            />
            <NavItem
              label="Billing"
              href="/billing"
              icon={<CreditCard className="h-4 w-4" />}
            />
            <NavItem
              label="Settings"
              href="/settings"
              icon={<Settings className="h-4 w-4" />}
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