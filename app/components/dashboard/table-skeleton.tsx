type TableSkeletonProps = {
  rows?: number;
};

export default function TableSkeleton({
  rows = 4,
}: TableSkeletonProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
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
            {Array.from({ length: rows }).map((_, index) => (
              <tr key={index}>
                <td className="px-5 py-4">
                  <div className="animate-pulse">
                    <div className="h-4 w-32 rounded bg-white/10" />
                    <div className="mt-2 h-3 w-40 rounded bg-white/5" />
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div className="h-4 w-16 animate-pulse rounded bg-white/10" />
                </td>

                <td className="px-5 py-4">
                  <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
                </td>

                <td className="px-5 py-4">
                  <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}