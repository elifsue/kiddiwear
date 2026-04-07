import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

export function SelectInputField({
  label,
  placeholder = "Select...",
  value,
  className = "",
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  const isFilter = !label;
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-black">{label}</label>
        )}
        <div className="h-10 border border-black px-3 flex items-center justify-between">
          <span className="text-xs text-black">{value || placeholder}</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-black ml-2"
          >
            <path
              d="M3 5L6 8L9 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    );
  }
  const borderColor = isHifi ? DS.outline : "#d1d5db";
  const labelColor = isHifi ? DS.onSurface : "#374151";
  const radius = isHifi ? DS.radiusSm : "0px";
  const textColor = isFilter ? (isHifi ? DS.onSurface : "#6b7280") : "#9ca3af";
  const iconColor = isHifi ? DS.onSurface : "#9ca3af";
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium" style={{ color: labelColor }}>
          {label}
        </label>
      )}
      <div
        className="h-10 border px-3 flex items-center justify-between"
        style={{ borderColor, borderRadius: radius }}
      >
        <span
          className="text-sm"
          style={{
            color: value ? (isHifi ? DS.onSurface : "#374151") : textColor,
          }}
        >
          {value || placeholder}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="ml-2"
          style={{ color: iconColor }}
        >
          <path
            d="M3 5L6 8L9 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
