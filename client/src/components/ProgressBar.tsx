import React from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

interface ProgressBarProps {
  /** Percentage filled (0-100) */
  value: number;
  /** Additional className for the container */
  className?: string;
}

export function ProgressBar({ value, className = "" }: ProgressBarProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  if (isLofi) {
    return (
      <div
        className={`flex-1 h-2 bg-white border border-black overflow-hidden ${className}`}
      >
        <div className="h-full bg-black" style={{ width: `${value}%` }} />
      </div>
    );
  }

  return (
    <div
      className={`flex-1 h-2 bg-gray-100 rounded-full overflow-hidden ${className}`}
      style={isHifi ? { background: DS.surfaceContainerHighest } : undefined}
    >
      <div
        className="h-full bg-gray-400 rounded-full"
        style={{
          width: `${value}%`,
          background: isHifi ? DS.primary : undefined,
        }}
      />
    </div>
  );
}
