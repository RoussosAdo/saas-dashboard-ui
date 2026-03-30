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
          <p className="text-sm font-medium text-zinc-500">{eyebrow}</p>
        ) : null}

        <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
      </div>

      {action ? <div>{action}</div> : null}
    </div>
  );
}