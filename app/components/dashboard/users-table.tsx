"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import DashboardSection from "app/components/dashboard/dashboard-section";
import SectionHeader from "app/components/dashboard/section-header";
import StatusBadge from "app/components/dashboard/status-badge";
import { dashboardUsers } from "app/data/dashboard";

export default function UsersTable() {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) return dashboardUsers;

    return dashboardUsers.filter((user) => {
      return (
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        user.plan.toLowerCase().includes(value) ||
        user.status.toLowerCase().includes(value)
      );
    });
  }, [query]);

  return (
    <DashboardSection className="mt-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SectionHeader
          eyebrow="Users"
          title="Team members"
          action={
            <button className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.06]">
              Export
            </button>
          }
        />

        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400 lg:w-[320px]">
          <Search className="h-4 w-4 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search users, plan, or status..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10 text-left">
            <thead className="bg-white/[0.03]">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Name
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Plan
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Status
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Joined
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10 bg-black">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-medium text-white">{user.name}</p>
                      <p className="mt-1 text-sm text-zinc-500">{user.email}</p>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-zinc-300">{user.plan}</td>

                  <td className="px-5 py-4">
                    <StatusBadge status={user.status} />
                  </td>

                  <td className="px-5 py-4 text-sm text-zinc-300">
                    {user.joinedAt}
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-5 py-10 text-center text-sm text-zinc-500"
                  >
                    No users found for this search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          Showing <span className="text-white">{filteredUsers.length}</span> of{" "}
          <span className="text-white">{dashboardUsers.length}</span> users
        </p>

        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white">
            Previous
          </button>
          <button className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black">
            1
          </button>
          <button className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white">
            2
          </button>
          <button className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white">
            Next
          </button>
        </div>
      </div>
    </DashboardSection>
  );
}