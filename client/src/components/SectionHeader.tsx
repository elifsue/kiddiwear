import React from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

export function SectionHeader({
  children,
  noLine,
  noMargin,
}: {
  children: React.ReactNode;
  noLine?: boolean;
  noMargin?: boolean;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  const margin = noMargin ? "" : "mb-4";
  if (isLofi) {
    return (
      <div className={`flex items-center gap-3 ${margin}`}>
        <h2 className="text-lg font-semibold text-black whitespace-nowrap">
          {children}
        </h2>
        {!noLine && <div className="flex-1 h-px bg-black" />}
      </div>
    );
  }
  if (isHifi) {
    return (
      <div className={`flex items-center gap-3 ${margin}`}>
        <h2
          className="text-lg font-semibold whitespace-nowrap"
          style={{ color: DS.onSurface }}
        >
          {children}
        </h2>
        {!noLine && (
          <div
            className="flex-1 h-px"
            style={{ background: DS.outlineVariant }}
          />
        )}
      </div>
    );
  }
  return (
    <div className={`flex items-center gap-3 ${margin}`}>
      <h2 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
        {children}
      </h2>
      {!noLine && <div className="flex-1 h-px bg-gray-200" />}
    </div>
  );
}
