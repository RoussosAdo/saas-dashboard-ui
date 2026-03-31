import type { Metadata } from "next";

import DashboardShell from "app/components/layout/dashboard-shell";
import DashboardSection from "app/components/dashboard/dashboard-section";
import PageHeader from "app/components/dashboard/page-header";
import HighlightCard from "app/components/dashboard/highlight-card";
import InvoiceBadge from "app/components/dashboard/invoice-badge";
import {
  billingInvoices,
  billingSummary,
  billingUsage,
} from "app/data/analytics";

export const metadata: Metadata = {
  title: "Billing | SaaS Dashboard UI",
};

export default function BillingPage() {
  return (
    <DashboardShell>
      <PageHeader
        eyebrow="Billing"
        title="Subscription overview"
        description="Review your plan, payment activity, workspace usage, and subscription details."
        action={
          <button className="w-full rounded-xl bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(99,102,241,0.35)] md:w-auto">
            Upgrade plan
          </button>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {billingSummary.map((item) => (
          <HighlightCard
            key={item.label}
            label={item.label}
            value={item.value}
            note={item.note}
          />
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <DashboardSection>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-500">Payment method</p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                Primary billing details
              </h2>
            </div>

            <button className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.06] sm:w-auto">
              Edit
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-zinc-500">Card on file</p>
            <p className="mt-2 text-lg font-semibold text-white">
              Visa ending in 2048
            </p>
            <p className="mt-2 break-words text-sm leading-6 text-zinc-500">
              Expires 08/2028 · Billing contact: finance@saasco.com
            </p>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-zinc-500">Invoice history</p>

            {/* Mobile cards */}
            <div className="mt-4 space-y-3 md:hidden">
              {billingInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-white">{invoice.id}</p>
                      <p className="mt-1 text-sm text-zinc-500">{invoice.date}</p>
                    </div>
                    <InvoiceBadge status={invoice.status} />
                  </div>

                  <p className="mt-4 text-sm text-zinc-500">Amount</p>
                  <p className="mt-1 text-base font-semibold text-white">
                    {invoice.amount}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <div className="mt-4 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10 text-left">
                  <thead className="bg-white/[0.03]">
                    <tr>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Invoice
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Date
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Amount
                      </th>
                      <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/10 bg-black">
                    {billingInvoices.map((invoice) => (
                      <tr
                        key={invoice.id}
                        className="transition-all duration-200 hover:bg-indigo-500/[0.04]"
                      >
                        <td className="px-5 py-4 text-sm font-medium text-white">
                          {invoice.id}
                        </td>
                        <td className="px-5 py-4 text-sm text-zinc-300">
                          {invoice.date}
                        </td>
                        <td className="px-5 py-4 text-sm text-zinc-300">
                          {invoice.amount}
                        </td>
                        <td className="px-5 py-4">
                          <InvoiceBadge status={invoice.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </DashboardSection>

        <DashboardSection>
          <div>
            <p className="text-sm font-medium text-zinc-500">Usage</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Workspace limits
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            {billingUsage.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-indigo-400/20 hover:bg-indigo-500/[0.04]"
              >
                <p className="text-sm text-zinc-500">{item.label}</p>
                <p className="mt-2 break-words text-lg font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-indigo-400/20 bg-indigo-500/[0.06] p-5">
            <p className="text-sm font-medium text-white">
              Need more capacity?
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Upgrade your workspace to unlock more seats, reports, and storage
              for your team.
            </p>

            <button className="mt-4 w-full rounded-xl border border-indigo-400/30 bg-[linear-gradient(90deg,#6366F1,#8B5CF6)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto">
              Compare plans
            </button>
          </div>
        </DashboardSection>
      </section>
    </DashboardShell>
  );
}