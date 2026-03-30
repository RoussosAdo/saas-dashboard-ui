import { cn } from "app/lib/utils";
import type { UserStatus } from "public/app/types/dashboard";

type StatusBadgeProps = {
  status: UserStatus;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-1 text-xs font-medium",
        status === "Active" &&
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
        status === "Pending" &&
          "border-amber-500/20 bg-amber-500/10 text-amber-400",
        status === "Inactive" &&
          "border-zinc-500/20 bg-zinc-500/10 text-zinc-400"
      )}
    >
      {status}
    </span>
  );
}