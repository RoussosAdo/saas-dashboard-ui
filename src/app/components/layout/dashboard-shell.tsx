type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-8">
        <aside className="hidden w-64 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-4 lg:block">
          <div className="text-lg font-semibold">Dashboard</div>
          <nav className="mt-6 space-y-2 text-sm text-zinc-400">
            <div className="rounded-lg bg-white/10 px-3 py-2 text-white">Overview</div>
            <div className="px-3 py-2">Analytics</div>
            <div className="px-3 py-2">Users</div>
            <div className="px-3 py-2">Settings</div>
          </nav>
        </aside>

        <section className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6">
          {children}
        </section>
      </div>
    </div>
  );
}