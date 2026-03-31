import DashboardShell from "app/components/layout/dashboard-shell";
import DashboardSection from "app/components/dashboard/dashboard-section";
import PageHeader from "app/components/dashboard/page-header";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Settings"
        title="Workspace settings"
        description="Update preferences, notifications, security options, and workspace controls."
      />

      <DashboardSection>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white">Profile</p>
            <p className="mt-2 text-sm text-zinc-500">
              Manage your account details, email, and workspace identity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white">Notifications</p>
            <p className="mt-2 text-sm text-zinc-500">
              Control alerts, updates, and team activity notifications.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white">Security</p>
            <p className="mt-2 text-sm text-zinc-500">
              Review password settings, sessions, and access controls.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-medium text-white">Billing preferences</p>
            <p className="mt-2 text-sm text-zinc-500">
              Update payment preferences and subscription settings.
            </p>
          </div>
        </div>
      </DashboardSection>
    </DashboardShell>
  );
}