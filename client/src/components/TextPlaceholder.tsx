import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS } from "@/contexts/DesignSystem";

export function TextPlaceholder({
  lines = 1,
  width = "60%",
  className = "",
  detailedText,
}: {
  lines?: number;
  width?: string;
  className?: string;
  detailedText?: string;
}) {
  const { isLofi, isHifi } = useFidelityMode();

  // Single-line mode (inline span)
  if (lines <= 1) {
    if (isLofi) {
      return (
        <span className={`wireframe-text-bar ${className}`} style={{ width }} />
      );
    }
    return (
      <span
        className={`text-sm ${className}`}
        style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
      >
        {detailedText || "Sample text"}
      </span>
    );
  }

  // Multi-line mode (block div)
  if (isLofi) {
    const widths = [
      "full",
      "long",
      "medium",
      "short",
      "long",
      "full",
      "medium",
      "short",
    ];
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`wireframe-text-line ${widths[i % widths.length]}`}
          />
        ))}
      </div>
    );
  }
  return (
    <div className={className}>
      <p
        className="text-sm leading-relaxed"
        style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
      >
        {detailedText ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
    </div>
  );
}
