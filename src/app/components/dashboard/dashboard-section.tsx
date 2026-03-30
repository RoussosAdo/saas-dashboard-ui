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
      className={`rounded-3xl border border-white/10 bg-black p-6 ${className}`}
    >
      {children}
    </section>
  );
}