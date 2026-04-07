import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

export function TextInputField({
  label,
  placeholder = "",
  type = "text",
  className = "",
  value,
  optionalLabel = false,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  optionalLabel?: boolean;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <div className="flex items-center gap-2 h-5">
            <label className="text-sm font-medium text-black">{label}</label>
            {optionalLabel && (
              <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5">
                Optional
              </span>
            )}
          </div>
        )}
        <div className="h-10 border border-black px-3 flex items-center" />
      </div>
    );
  }
  const borderColor = isHifi ? DS.outline : "#d1d5db";
  const labelColor = isHifi ? DS.onSurface : "#374151";
  const radius = isHifi ? DS.radiusSm : "0px";
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <div className="flex items-center gap-2 h-5">
          <label className="text-sm font-medium" style={{ color: labelColor }}>
            {label}
          </label>
          {optionalLabel && (
            <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">
              Optional
            </span>
          )}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder || label || ""}
        defaultValue={value}
        className="h-10 border px-3 text-sm placeholder-gray-400"
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
