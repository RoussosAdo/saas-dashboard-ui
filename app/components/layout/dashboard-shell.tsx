"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DashboardSidebar from "app/components/layout/dashboard-sidebar";
import DashboardTopbar from "app/components/layout/dashboard-topbar";

type DashboardShellProps = {
  children: React.ReactNode;
};

export default function DashboardShell({ children }: DashboardShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  function handleOpenMenu() {
    setMobileMenuOpen(true);
  }

  function handleCloseMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-black text-white">
      <div className="mx-auto flex max-w-7xl gap-5 px-4 py-5 sm:px-6 lg:px-8">
        <DashboardSidebar />

        <main className="min-w-0 flex-1 overflow-x-clip rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(10,10,10,0.92))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.45)] sm:p-6 lg:p-7">
          <DashboardTopbar onOpenMobileMenu={handleOpenMenu} />
          {children}
        </main>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 block h-full w-full bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={handleCloseMenu}
            />

            <motion.div
              className="absolute inset-y-0 left-0 pointer-events-auto max-w-full"
              initial={{ x: "-100%", opacity: 0.6 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0.6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <DashboardSidebar
                mobile
                onClose={handleCloseMenu}
                onNavigate={handleCloseMenu}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}