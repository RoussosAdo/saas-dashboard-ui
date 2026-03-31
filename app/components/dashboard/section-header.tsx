type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  action,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            {eyebrow}
          </p>
        ) : null}

        <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
      </div>

      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}