import DashboardShell from "@/app/components/layout/dashboard-shell";

export default function Home() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">SaaS Dashboard UI</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-400">
          Production-ready SaaS dashboard built with reusable components,
          responsive layout, and scalable UI architecture.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-black p-5">
            <p className="text-sm text-zinc-400">Revenue</p>
            <p className="mt-2 text-2xl font-semibold">$24,500</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black p-5">
            <p className="text-sm text-zinc-400">Users</p>
            <p className="mt-2 text-2xl font-semibold">1,284</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black p-5">
            <p className="text-sm text-zinc-400">Conversion</p>
            <p className="mt-2 text-2xl font-semibold">4.8%</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black p-5">
            <p className="text-sm text-zinc-400">MRR</p>
            <p className="mt-2 text-2xl font-semibold">$8,920</p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}