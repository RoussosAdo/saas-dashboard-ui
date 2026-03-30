import DashboardSidebar from "app/components/layout/dashboard-sidebar";
import DashboardTopbar from "app/components/layout/dashboard-topbar";

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <DashboardSidebar />

        <main className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-6 lg:p-8">
          <DashboardTopbar />
          {children}
        </main>
      </div>
    </div>
  );
}