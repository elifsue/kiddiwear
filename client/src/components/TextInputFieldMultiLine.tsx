import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

export function TextInputFieldMultiLine({
  label,
  placeholder = "",
  value,
  rows = 4,
  className = "",
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  className?: string;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-black">{label}</label>
        )}
        <div
          className="border border-black px-3 py-3"
          style={{ minHeight: `${rows * 24}px` }}
        />
      </div>
    );
  }
  const borderColor = isHifi ? DS.outline : "#d1d5db";
  const labelColor = isHifi ? DS.onSurface : "#374151";
  const radius = isHifi ? DS.radiusSm : "0px";
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium" style={{ color: labelColor }}>
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder || label || ""}
        defaultValue={value}
        rows={rows}
        className="border px-3 py-2 text-sm placeholder-gray-400 resize-none"
        style={{
          borderColor,
          borderRadius: radius,
          color: isHifi ? DS.onSurface : "#374151",
        }}
        readOnly
      />
    </div>
  );
}
