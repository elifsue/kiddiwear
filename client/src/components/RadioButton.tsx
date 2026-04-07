import React from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

interface RadioButtonProps {
  /** Whether this radio button is selected */
  selected?: boolean;
  /** Additional className for the outer circle */
  className?: string;
}

export function RadioButton({
  selected = false,
  className = "",
}: RadioButtonProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  if (isLofi) {
    return (
      <div
        className={`w-4 h-4 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 ${className}`}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-black" />}
      </div>
    );
  }

  // Mid-fi & Hi-fi
  return (
    <div
      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selected ? "border-gray-800" : "border-gray-300"} ${className}`}
    >
      {selected && <div className="w-2 h-2 rounded-full bg-gray-800" />}
    </div>
  );
}
