import { cn } from "@/app/lib/utils";

type NavItemProps = {
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
};

export default function NavItem({
  label,
  active = false,
  icon,
}: NavItemProps) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-all duration-200",
        active
          ? "bg-white text-black"
          : "text-zinc-400 hover:bg-white/5 hover:text-white"
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span>{label}</span>
    </button>
  );
}