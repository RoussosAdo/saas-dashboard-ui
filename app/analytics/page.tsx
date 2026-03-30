import DashboardShell from "app/components/layout/dashboard-shell";
import DashboardSection from "app/components/dashboard/dashboard-section";
import SectionHeader from "app/components/dashboard/section-header";
import RevenueChart from "app/components/dashboard/revenue-chart";

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardSection>
        <SectionHeader
          eyebrow="Analytics"
          title="Performance metrics"
          action={
            <div className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400">
              Last 30 days
            </div>
          }
        />

        <RevenueChart />
      </DashboardSection>
    </DashboardShell>
  );
}