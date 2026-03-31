type InvoiceBadgeProps = {
  status: "Paid" | "Pending" | "Failed";
};

export default function InvoiceBadge({ status }: InvoiceBadgeProps) {
  const styles =
    status === "Paid"
      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.14)]"
      : status === "Pending"
      ? "border-amber-500/20 bg-amber-500/10 text-amber-300 shadow-[0_0_18px_rgba(245,158,11,0.12)]"
      : "border-rose-500/20 bg-rose-500/10 text-rose-300 shadow-[0_0_18px_rgba(244,63,94,0.12)]";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${styles}`}
    >
      {status}
    </span>
  );
}