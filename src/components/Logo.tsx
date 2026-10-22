// Logo provisional de MPG Insolvencias. Reemplazar por los archivos oficiales cuando estén disponibles.
type Variant = "color" | "negative";

export function Isotipo({
  variant = "color",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const base = variant === "color" ? "#5C1A2B" : "#F6F1EA";
  const top = variant === "color" ? "#B08D57" : "#C9A36A";
  return (
    <svg viewBox="0 0 30 32" className={className} aria-hidden="true" focusable="false">
      <rect x="0" y="16" width="7" height="16" fill={base} />
      <rect x="11.5" y="8" width="7" height="24" fill={base} />
      <rect x="23" y="0" width="7" height="32" fill={top} />
    </svg>
  );
}

export function Logo({ variant = "color" }: { variant?: Variant }) {
  const text = variant === "color" ? "text-primary" : "text-bg";
  return (
    <span className="inline-flex items-center gap-3" aria-label="MPG Insolvencias">
      <Isotipo variant={variant} className="h-9 w-auto" />
      <span className={`flex flex-col leading-none ${text}`} aria-hidden="true">
        <span className="text-[24px] font-extrabold tracking-[-0.02em]">MPG</span>
        <span className="mt-1 text-[10px] font-medium tracking-[0.28em]">INSOLVENCIAS</span>
      </span>
    </span>
  );
}
