import type { Metadata } from "next";

import DashboardShell from "app/components/layout/dashboard-shell";
import PageHeader from "app/components/dashboard/page-header";
import UsersTable from "app/components/dashboard/users-table";

export const metadata: Metadata = {
  title: "Users | SaaS Dashboard UI",
};

export default function UsersPage() {
  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Users"
        title="Team members"
        description="Manage workspace members, monitor account status, and review user activity."
      />

      <UsersTable showHeader={false} />
    </DashboardShell>
  );
}