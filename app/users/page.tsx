import DashboardShell from "app/components/layout/dashboard-shell";
import UsersTable from "app/components/dashboard/users-table";

export default function UsersPage() {
  return (
    <DashboardShell>
      <UsersTable />
    </DashboardShell>
  );
}