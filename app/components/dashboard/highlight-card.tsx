type HighlightCardProps = {
  label: string;
  value: string;
  note: string;
};

export default function HighlightCard({
  label,
  value,
  note,
}: HighlightCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.58),rgba(0,0,0,0.88))] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-[0_12px_30px_rgba(99,102,241,0.12)]">
      <p className="text-sm text-zinc-400">{label}</p>
      <p className="mt-3 text-2xl font-bold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-zinc-500">{note}</p>
    </article>
  );
}