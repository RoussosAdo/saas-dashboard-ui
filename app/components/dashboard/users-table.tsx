"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import DashboardSection from "app/components/dashboard/dashboard-section";
import SectionHeader from "app/components/dashboard/section-header";
import StatusBadge from "app/components/dashboard/status-badge";
import { dashboardUsers } from "app/data/dashboard";
import { useDebounce } from "app/lib/use-debounce";

type StatusFilter = "All" | "Active" | "Pending" | "Inactive";

type UsersTableProps = {
  showHeader?: boolean;
  className?: string;
};

const filters: StatusFilter[] = ["All", "Active", "Pending", "Inactive"];
const USERS_PER_PAGE = 4;

export default function UsersTable({
  showHeader = true,
  className = "",
}: UsersTableProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<StatusFilter>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(query, 300);

  const filteredUsers = useMemo(() => {
    const value = debouncedQuery.trim().toLowerCase();

    return dashboardUsers.filter((user) => {
      const matchesSearch =
        !value ||
        user.name.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        user.plan.toLowerCase().includes(value) ||
        user.status.toLowerCase().includes(value);

      const matchesFilter =
        activeFilter === "All" || user.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [debouncedQuery, activeFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredUsers.length / USERS_PER_PAGE)
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedQuery, activeFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * USERS_PER_PAGE;
    const end = start + USERS_PER_PAGE;
    return filteredUsers.slice(start, end);
  }, [filteredUsers, currentPage]);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <DashboardSection className={showHeader ? `mt-6 ${className}` : className}>
      {showHeader ? (
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

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400 transition-all duration-300 focus-within:border-indigo-400/50 focus-within:bg-white/[0.05] focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] lg:w-[320px]">
            <Search className="h-4 w-4 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users, plan, or status..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>
      ) : (
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-zinc-400 transition-all duration-300 focus-within:border-indigo-400/50 focus-within:bg-white/[0.05] focus-within:shadow-[0_0_0_4px_rgba(99,102,241,0.12)] lg:w-[320px]">
            <Search className="h-4 w-4 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users, plan, or status..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>

          <button className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.06]">
            Export
          </button>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === filter
                ? "bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] text-white shadow-[0_8px_20px_rgba(99,102,241,0.2)]"
                : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}

        <div className="ml-1 flex items-center gap-2 text-xs text-zinc-500">
  <span>{filteredUsers.length} users</span>
  {query && <span>Searching for “{query}”</span>}
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
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-medium text-white">{user.name}</p>
                      <p className="mt-1 text-sm text-zinc-500">{user.email}</p>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-zinc-300">
                    {user.plan}
                  </td>

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
                    No users found for this search or filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="text-white">
            {filteredUsers.length === 0
              ? 0
              : (currentPage - 1) * USERS_PER_PAGE + 1}
          </span>{" "}
          to{" "}
          <span className="text-white">
            {Math.min(currentPage * USERS_PER_PAGE, filteredUsers.length)}
          </span>{" "}
          of <span className="text-white">{filteredUsers.length}</span> users
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                currentPage === page
                  ? "bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] text-white shadow-[0_8px_20px_rgba(99,102,241,0.22)]"
                  : "border border-white/10 text-zinc-400 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded-xl border border-white/10 px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </DashboardSection>
  );
}