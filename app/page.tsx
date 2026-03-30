import DashboardShell from "@/app/components/layout/dashboard-shell";

const stats = [
  { label: "Revenue", value: "$24,500", change: "+12.4%" },
  { label: "Users", value: "1,284", change: "+8.1%" },
  { label: "Conversion", value: "4.8%", change: "+1.2%" },
  { label: "MRR", value: "$8,920", change: "+6.7%" },
];

export default function Home() {
  return (
    <DashboardShell>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-black p-5 transition hover:border-white/20"
          >
            <p className="text-sm text-zinc-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white">
              {stat.value}
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-400">
              {stat.change} this month
            </p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-black p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-500">Performance</p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Revenue overview
              </h2>
            </div>

            <div className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400">
              Last 30 days
            </div>
          </div>

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
        </div>

        <div className="rounded-3xl border border-white/10 bg-black p-6">
          <p className="text-sm font-medium text-zinc-500">Recent activity</p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Team updates
          </h2>

          <div className="mt-6 space-y-4">
            {[
              "New user registrations increased by 14%.",
              "Monthly recurring revenue exceeded target.",
              "Dashboard engagement remained stable this week.",
              "Three new reports were created by the analytics team.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="text-sm leading-6 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardShell>
  );
}