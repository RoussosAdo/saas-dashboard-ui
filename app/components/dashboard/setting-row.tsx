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
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-indigo-400/20 hover:bg-indigo-500/[0.04]">
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="mt-1 text-sm text-zinc-500">{description}</p>
      </div>

      {action}
    </div>
  );
}