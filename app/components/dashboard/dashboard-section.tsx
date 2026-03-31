type DashboardSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function DashboardSection({
  children,
  className = "",
}: DashboardSectionProps) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.56),rgba(0,0,0,0.92))] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 sm:p-6 ${className}`}
    >
      {children}
    </section>
  );
}