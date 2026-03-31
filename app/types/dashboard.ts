export type Stat = {
  label: string;
  value: string;
  change: string;
};

export type ActivityItem = {
  id: number;
  text: string;
};

export type UserStatus = "Active" | "Pending" | "Inactive";

export type DashboardUser = {
  id: number;
  name: string;
  email: string;
  plan: string;
  status: UserStatus;
  joinedAt: string;
};