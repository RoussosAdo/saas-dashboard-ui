import type { Metadata } from "next";

import DashboardShell from "app/components/layout/dashboard-shell";
import DashboardSection from "app/components/dashboard/dashboard-section";
import PageHeader from "app/components/dashboard/page-header";
import RevenueChart from "app/components/dashboard/revenue-chart";
import HighlightCard from "app/components/dashboard/highlight-card";
import {
  analyticsHighlights,
  analyticsInsights,
} from "app/data/analytics";

export const metadata: Metadata = {
  title: "Analytics | SaaS Dashboard UI",
};

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Analytics"
        title="Performance metrics"
        description="Track revenue, users, and conversion trends across your product dashboard."
        action={
          <div className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400">
            Last 30 days
          </div>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {analyticsHighlights.map((item) => (
          <HighlightCard
            key={item.label}
            label={item.label}
            value={item.value}
            note={item.note}
          />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
        <DashboardSection>
          <RevenueChart />
        </DashboardSection>

        <DashboardSection>
          <div>
            <p className="text-sm font-medium text-zinc-500">Insights</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Key observations
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {analyticsInsights.map((insight) => (
              <div
                key={insight.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-indigo-400/20 hover:bg-indigo-500/[0.04]"
              >
                <p className="text-sm font-medium text-white">
                  {insight.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </DashboardSection>
      </section>
    </DashboardShell>
  );
}