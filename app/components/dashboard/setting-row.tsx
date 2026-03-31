import { ReactNode } from "react";

type SettingRowProps = {
  title: string;
  description: string;
  action: ReactNode;
};

export default function SettingRow({
  title,
  description,
  action,
}: SettingRowProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-indigo-400/20 hover:bg-indigo-500/[0.04] sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
      </div>

      <div className="self-start sm:self-center">{action}</div>
    </div>
  );
}