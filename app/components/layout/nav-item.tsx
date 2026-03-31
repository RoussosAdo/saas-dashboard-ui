"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "app/lib/utils";

type NavItemProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function NavItem({
  label,
  href,
  icon,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
  "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-all duration-300 ease-out",
  isActive
    ? "bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] text-white shadow-[0_10px_30px_rgba(99,102,241,0.28)]"
    : "text-zinc-400 hover:bg-white/5 hover:text-white hover:translate-x-1"
)}
    >
      <span className="shrink-0">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}