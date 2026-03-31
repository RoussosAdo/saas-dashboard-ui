export const analyticsData = {
  Revenue: [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 5200 },
    { name: "Mar", value: 4800 },
    { name: "Apr", value: 6100 },
    { name: "May", value: 5800 },
    { name: "Jun", value: 7200 },
    { name: "Jul", value: 6900 },
    { name: "Aug", value: 8100 },
    { name: "Sep", value: 7700 },
    { name: "Oct", value: 8600 },
    { name: "Nov", value: 9100 },
    { name: "Dec", value: 9800 },
  ],
  Users: [
    { name: "Jan", value: 240 },
    { name: "Feb", value: 310 },
    { name: "Mar", value: 290 },
    { name: "Apr", value: 360 },
    { name: "May", value: 410 },
    { name: "Jun", value: 470 },
    { name: "Jul", value: 450 },
    { name: "Aug", value: 520 },
    { name: "Sep", value: 560 },
    { name: "Oct", value: 610 },
    { name: "Nov", value: 670 },
    { name: "Dec", value: 720 },
  ],
  Conversion: [
    { name: "Jan", value: 2.1 },
    { name: "Feb", value: 2.5 },
    { name: "Mar", value: 2.4 },
    { name: "Apr", value: 2.9 },
    { name: "May", value: 3.1 },
    { name: "Jun", value: 3.4 },
    { name: "Jul", value: 3.2 },
    { name: "Aug", value: 3.8 },
    { name: "Sep", value: 4.0 },
    { name: "Oct", value: 4.2 },
    { name: "Nov", value: 4.4 },
    { name: "Dec", value: 4.8 },
  ],
};

export type AnalyticsMetric = keyof typeof analyticsData;

export const analyticsHighlights = [
  {
    label: "Net growth",
    value: "+18.4%",
    note: "Compared to the previous 30 days",
  },
  {
    label: "Avg. session time",
    value: "6m 24s",
    note: "Users are spending longer in core flows",
  },
  {
    label: "Churn rate",
    value: "2.1%",
    note: "Stable compared to last month",
  },
  {
    label: "New signups",
    value: "1,248",
    note: "Strong acquisition momentum this cycle",
  },
];

export const analyticsInsights = [
  {
    title: "Revenue momentum is accelerating",
    description:
      "Revenue has shown steady month-over-month growth, with stronger gains in the second half of the year.",
  },
  {
    title: "User growth remains healthy",
    description:
      "New user acquisition continues to rise, supporting broader product adoption and increased engagement.",
  },
  {
    title: "Conversion is trending upward",
    description:
      "Conversion rate improvements suggest that onboarding and key activation flows are performing better.",
  },
];

export const billingSummary = [
  {
    label: "Current plan",
    value: "Pro",
    note: "Includes analytics, team access, and exports",
  },
  {
    label: "Monthly cost",
    value: "$49",
    note: "Billed monthly on your renewal cycle",
  },
  {
    label: "Renewal date",
    value: "Apr 28",
    note: "Your subscription renews automatically",
  },
];

export const billingInvoices = [
  {
    id: "INV-3021",
    date: "2026-03-28",
    amount: "$49.00",
    status: "Paid",
  },
  {
    id: "INV-2964",
    date: "2026-02-28",
    amount: "$49.00",
    status: "Paid",
  },
  {
    id: "INV-2897",
    date: "2026-01-28",
    amount: "$49.00",
    status: "Paid",
  },
];

export const billingUsage = [
  {
    label: "Team members",
    value: "8 / 10",
  },
  {
    label: "Reports generated",
    value: "124 / 200",
  },
  {
    label: "Storage",
    value: "18 GB / 50 GB",
  },
];