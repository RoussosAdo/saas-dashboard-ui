type StatCardProps = {
  label: string;
  value: string;
  change: string;
};

export default function StatCard({
  label,
  value,
  change,
}: StatCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-black p-5 transition hover:border-white/20">
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-3 text-sm font-medium text-zinc-400">
        {change} this month
      </p>
    </article>
  );
}