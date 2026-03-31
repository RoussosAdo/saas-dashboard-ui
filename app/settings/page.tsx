"use client";

import { useState } from "react";
import DashboardShell from "app/components/layout/dashboard-shell";
import DashboardSection from "app/components/dashboard/dashboard-section";
import PageHeader from "app/components/dashboard/page-header";
import SettingRow from "app/components/dashboard/setting-row";
import Toggle from "app/components/dashboard/toggle";

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [marketingNotif, setMarketingNotif] = useState(false);
  const [twoFA, setTwoFA] = useState(true);

  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Settings"
        title="Workspace settings"
        description="Manage your account preferences, notifications, and security settings."
      />

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        {/* PROFILE */}
        <DashboardSection>
          <div>
            <p className="text-sm font-medium text-zinc-500">Profile</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Personal information
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-zinc-500">Name</p>
              <input
                defaultValue="Antonis Roussos"
                className="mt-2 w-full rounded-xl bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-zinc-500">Email</p>
              <input
                defaultValue="antonis@email.com"
                className="mt-2 w-full rounded-xl bg-black/40 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>

            <button className="rounded-xl bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
              Save changes
            </button>
          </div>
        </DashboardSection>

        {/* NOTIFICATIONS */}
        <DashboardSection>
          <div>
            <p className="text-sm font-medium text-zinc-500">Notifications</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Preferences
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            <SettingRow
              title="Email notifications"
              description="Receive updates about activity and usage"
              action={
                <Toggle enabled={emailNotif} onChange={setEmailNotif} />
              }
            />

            <SettingRow
              title="Marketing emails"
              description="Receive product updates and announcements"
              action={
                <Toggle enabled={marketingNotif} onChange={setMarketingNotif} />
              }
            />
          </div>
        </DashboardSection>

        {/* SECURITY */}
        <DashboardSection>
          <div>
            <p className="text-sm font-medium text-zinc-500">Security</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Account protection
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            <SettingRow
              title="Two-factor authentication"
              description="Add an extra layer of security to your account"
              action={<Toggle enabled={twoFA} onChange={setTwoFA} />}
            />

            <SettingRow
              title="Change password"
              description="Update your password regularly for better security"
              action={
                <button className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400 hover:bg-white/[0.04] hover:text-white">
                  Update
                </button>
              }
            />
          </div>
        </DashboardSection>

        {/* DANGER ZONE */}
        <DashboardSection>
          <div>
            <p className="text-sm font-medium text-red-400">Danger zone</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Delete account
            </h2>
          </div>

          <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-5">
            <p className="text-sm text-zinc-300">
              This action is permanent and cannot be undone. All your data will
              be permanently removed.
            </p>

            <button className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/20">
              Delete account
            </button>
          </div>
        </DashboardSection>
      </section>
    </DashboardShell>
  );
}