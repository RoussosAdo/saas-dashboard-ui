"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "app/lib/utils";

type NavItemProps = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export default function NavItem({
  label,
  href,
  icon,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-white text-black"
          : "text-zinc-400 hover:bg-white/5 hover:text-white"
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}