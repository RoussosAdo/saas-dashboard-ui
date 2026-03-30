import type { ActivityItem, DashboardUser, Stat } from "@/app/types/dashboard";

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

export const dashboardUsers: DashboardUser[] = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia@saasco.com",
    plan: "Pro",
    status: "Active",
    joinedAt: "2026-01-12",
  },
  {
    id: 2,
    name: "Liam Carter",
    email: "liam@saasco.com",
    plan: "Starter",
    status: "Pending",
    joinedAt: "2026-01-18",
  },
  {
    id: 3,
    name: "Sophia Lee",
    email: "sophia@saasco.com",
    plan: "Enterprise",
    status: "Active",
    joinedAt: "2026-01-20",
  },
  {
    id: 4,
    name: "Noah Smith",
    email: "noah@saasco.com",
    plan: "Pro",
    status: "Inactive",
    joinedAt: "2026-01-25",
  },
  {
    id: 5,
    name: "Emma Brown",
    email: "emma@saasco.com",
    plan: "Starter",
    status: "Active",
    joinedAt: "2026-02-01",
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james@saasco.com",
    plan: "Enterprise",
    status: "Pending",
    joinedAt: "2026-02-03",
  },
];