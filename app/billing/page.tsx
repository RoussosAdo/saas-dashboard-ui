import DashboardShell from "app/components/layout/dashboard-shell";
import DashboardSection from "app/components/dashboard/dashboard-section";
import PageHeader from "app/components/dashboard/page-header";

export default function BillingPage() {
  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Billing"
        title="Subscription overview"
        description="Review your current plan, billing cycle, and workspace subscription details."
      />

      <DashboardSection>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-zinc-500">Current plan</p>
            <p className="mt-2 text-2xl font-semibold text-white">Pro</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-zinc-500">Monthly cost</p>
            <p className="mt-2 text-2xl font-semibold text-white">$49</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-zinc-500">Renewal date</p>
            <p className="mt-2 text-2xl font-semibold text-white">Apr 28</p>
          </div>
        </div>
      </DashboardSection>
    </DashboardShell>
  );
}