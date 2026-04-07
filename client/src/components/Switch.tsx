import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

interface SwitchProps {
  enabled: boolean;
  className?: string;
}

/**
 * Material Design 3 Switch component (web-scaled).
 *
 * M3 spec dimensions scaled for web (approx 75%):
 * - Track: 40×24px (M3: 52×32dp), full rounded, 1.5px outline when unselected
 * - Handle (unselected): 12×12px (M3: 16dp)
 * - Handle (selected): 18×18px (M3: 24dp)
 *
 * Color tokens:
 * - Unselected track: surfaceContainerHighest, border: outline
 * - Unselected handle: outline
 * - Selected track: primary (no border)
 * - Selected handle: onPrimary
 */
export function Switch({ enabled, className = "" }: SwitchProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div
        className={`w-10 h-6 rounded-full cursor-pointer border-[1.5px] border-black bg-white flex items-center ${className}`}
        style={{
          justifyContent: enabled ? "flex-end" : "flex-start",
          padding: "3px",
        }}
      >
        <div
          className="rounded-full bg-white border-[1.5px] border-black"
          style={{
            width: enabled ? 18 : 12,
            height: enabled ? 18 : 12,
            transition: "width 0.2s, height 0.2s",
          }}
        />
      </div>
    );
  }

  /* ── Mid-Fi / Hi-Fi ── */
  const trackStyle: React.CSSProperties = isHifi
    ? {
        width: 40,
        height: 24,
        borderRadius: 9999,
        backgroundColor: enabled ? DS.primary : DS.surfaceContainerHighest,
        border: enabled ? "none" : `1.5px solid ${DS.outline}`,
        display: "flex",
        alignItems: "center",
        justifyContent: enabled ? "flex-end" : "flex-start",
        padding: 3,
        cursor: "pointer",
        transition: "background-color 0.2s, border 0.2s",
      }
    : {
        width: 40,
        height: 24,
        borderRadius: 9999,
        backgroundColor: enabled ? "#4a4458" : "#e6e0e9",
        border: enabled ? "none" : "1.5px solid #79747e",
        display: "flex",
        alignItems: "center",
        justifyContent: enabled ? "flex-end" : "flex-start",
        padding: 3,
        cursor: "pointer",
        transition: "background-color 0.2s, border 0.2s",
      };

  const handleStyle: React.CSSProperties = isHifi
    ? {
        width: enabled ? 18 : 12,
        height: enabled ? 18 : 12,
        borderRadius: 9999,
        backgroundColor: enabled ? DS.onPrimary : DS.outline,
        transition: "width 0.2s, height 0.2s, background-color 0.2s",
      }
    : {
        width: enabled ? 18 : 12,
        height: enabled ? 18 : 12,
        borderRadius: 9999,
        backgroundColor: enabled ? "#ffffff" : "#79747e",
        transition: "width 0.2s, height 0.2s, background-color 0.2s",
      };

  return (
    <div className={className} style={trackStyle}>
      <div style={handleStyle} />
    </div>
  );
}
