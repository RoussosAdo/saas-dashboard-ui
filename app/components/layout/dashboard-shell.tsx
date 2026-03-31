"use client";

import { useState } from "react";
import DashboardSidebar from "app/components/layout/dashboard-sidebar";
import DashboardTopbar from "app/components/layout/dashboard-topbar";

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <DashboardSidebar />

        <main className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(10,10,10,0.92))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.45)] sm:p-6 lg:p-8">
          <DashboardTopbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
          {children}
        </main>
      </div>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute inset-y-0 left-0">
            <DashboardSidebar
              mobile
              onClose={() => setMobileMenuOpen(false)}
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}