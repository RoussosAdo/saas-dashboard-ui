"use client";

type ToggleProps = {
  enabled: boolean;
  onChange: (value: boolean) => void;
};

export default function Toggle({ enabled, onChange }: ToggleProps) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 rounded-full transition ${
        enabled
          ? "bg-[linear-gradient(90deg,#6366F1,#8B5CF6)]"
          : "bg-white/10"
      }`}
    >
      <span
        className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}