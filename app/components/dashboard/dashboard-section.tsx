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
      className={`rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.5),rgba(0,0,0,0.92))] p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </section>
  );
}