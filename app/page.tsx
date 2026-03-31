import type { Metadata } from "next";

import DashboardShell from "app/components/layout/dashboard-shell";
import StatCard from "app/components/dashboard/stat-card";
import DashboardSection from "app/components/dashboard/dashboard-section";
import SectionHeader from "app/components/dashboard/section-header";
import PageHeader from "app/components/dashboard/page-header";
import UsersTable from "app/components/dashboard/users-table";
import RevenueChart from "app/components/dashboard/revenue-chart";
import { activityItems, stats } from "app/data/dashboard";

export const metadata: Metadata = {
  title: "Overview | SaaS Dashboard UI",
};

export default function Home() {
  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Overview"
        title="SaaS Dashboard UI"
        description="Production-ready SaaS dashboard built with reusable components, responsive layout, and scalable UI architecture."
        action={
          <button className="rounded-xl bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(99,102,241,0.35)]">
            Generate report
          </button>
        }
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_0.85fr]">
        <DashboardSection>
          <SectionHeader
            eyebrow="Performance"
            title="Revenue overview"
            action={
              <div className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400">
                Last 30 days
              </div>
            }
          />

          <RevenueChart />
        </DashboardSection>

        <DashboardSection>
          <SectionHeader eyebrow="Recent activity" title="Team updates" />

          <div className="mt-6 space-y-4">
            {activityItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/20 hover:bg-indigo-500/[0.04]"
              >
                <p className="text-sm leading-6 text-zinc-300">{item.text}</p>
              </div>
            ))}
          </div>
        </DashboardSection>
      </section>

      <UsersTable />
    </DashboardShell>
  );
}