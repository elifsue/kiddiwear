import { DS } from "@/contexts/DesignSystem";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

type BadgeVariant = "neutral" | "alert" | "positive" | "negative";
type BadgeSize = "default" | "large";

interface BadgeLabelProps {
  variant: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}

export function BadgeLabel({
  variant,
  size = "default",
  children,
  className = "",
  shadow = false,
}: BadgeLabelProps) {
  const { isLofi, isHifi } = useFidelityMode();

  /* ── Lo-fi ── */
  if (isLofi) {
    const sizeClasses =
      size === "large" ? "text-xs px-2 py-1" : "text-[10px] px-2 py-0.5";

    return (
      <span
        className={`${sizeClasses} bg-white border border-black text-black font-medium ${className}`}
      >
        {children}
      </span>
    );
  }

  /* ── Mid-fi / Hi-fi ── */
  const sizeClasses =
    size === "large"
      ? "text-xs px-2 py-1 rounded-full"
      : "text-[10px] px-2 py-0.5 rounded-full";

  const getStyle = (): React.CSSProperties => {
    if (isHifi) {
      const shadowStyle = shadow ? DS.shadowMd : undefined;
      switch (variant) {
        case "neutral":
          return {
            background: DS.surfaceContainerHigh,
            color: DS.onSurfaceVariant,
            boxShadow: shadowStyle,
          };
        case "alert":
          return {
            background: DS.tertiaryContainer,
            color: DS.onTertiaryContainer,
            boxShadow: shadowStyle,
          };
        case "positive":
          return {
            background: DS.successContainer,
            color: DS.onSuccessContainer,
            boxShadow: shadowStyle,
          };
        case "negative":
          return {
            background: DS.errorContainer,
            color: DS.onErrorContainer,
            boxShadow: shadowStyle,
          };
      }
    }
    // Mid-fi (no shadow in mid-fi)
    return { background: "#e5e7eb", color: "#4b5563" };
  };

  return (
    <span
      className={`${sizeClasses} font-medium ${className}`}
      style={getStyle()}
    >
      {children}
    </span>
  );
}
