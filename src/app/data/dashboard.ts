import type { ActivityItem, Stat } from "@/app/types/dashboard";

export const stats: Stat[] = [
  { label: "Revenue", value: "$24,500", change: "+12.4%" },
  { label: "Users", value: "1,284", change: "+8.1%" },
  { label: "Conversion", value: "4.8%", change: "+1.2%" },
  { label: "MRR", value: "$8,920", change: "+6.7%" },
];

export const activityItems: ActivityItem[] = [
  { id: 1, text: "New user registrations increased by 14%." },
  { id: 2, text: "Monthly recurring revenue exceeded target." },
  { id: 3, text: "Dashboard engagement remained stable this week." },
  { id: 4, text: "Three new reports were created by the analytics team." },
];