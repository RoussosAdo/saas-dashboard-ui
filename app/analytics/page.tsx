import DashboardShell from "app/components/layout/dashboard-shell";
import DashboardSection from "app/components/dashboard/dashboard-section";
import PageHeader from "app/components/dashboard/page-header";
import RevenueChart from "app/components/dashboard/revenue-chart";

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

      <DashboardSection>
        <RevenueChart />
      </DashboardSection>
    </DashboardShell>
  );
}