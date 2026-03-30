import DashboardShell from "@/app/components/layout/dashboard-shell";
import StatCard from "@/app/components/dashboard/stat-card";
import SectionHeader from "@/app/components/dashboard/section-header";
import DashboardSection from "@/app/components/dashboard/dashboard-section";
import UsersTable from "@/app/components/dashboard/users-table";
import { activityItems, stats } from "@/app/data/dashboard";

export default function Home() {
  return (
    <DashboardShell>
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

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
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

          <div className="mt-8 flex h-72 items-end gap-3">
            {[48, 62, 55, 80, 74, 90, 68, 84, 72, 96, 88, 100].map(
              (height, i) => (
                <div key={i} className="flex flex-1 flex-col justify-end">
                  <div
                    className="rounded-t-xl bg-white/90"
                    style={{ height: `${height * 2}px` }}
                  />
                </div>
              )
            )}
          </div>
        </DashboardSection>

        <DashboardSection>
          <SectionHeader eyebrow="Recent activity" title="Team updates" />

          <div className="mt-6 space-y-4">
            {activityItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
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