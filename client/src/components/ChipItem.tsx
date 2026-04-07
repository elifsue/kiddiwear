import React from "react";
import { Link } from "wouter";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

export function ChipItem({
  children,
  active = false,
  to,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  active?: boolean;
  to?: string;
  onClick?: () => void;
  className?: string;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  const base =
    "border rounded-full px-3 py-1.5 text-sm cursor-pointer transition-colors";

  let variantCls: string;
  let inlineStyle: React.CSSProperties = {};

  if (isLofi) {
    variantCls = active
      ? "bg-white text-black border-2 border-black font-semibold"
      : "border-black text-black";
  } else if (isHifi) {
    variantCls = "";
    if (active) {
      inlineStyle = {
        background: DS.secondaryContainer,
        color: DS.onSecondaryContainer,
        border: `1px solid ${DS.secondaryContainer}`,
      };
    } else {
      inlineStyle = {
        color: DS.onSurfaceVariant,
        border: `1px solid ${DS.outlineVariant}`,
      };
      variantCls = "bg-transparent hover:bg-gray-50";
    }
  } else {
    // Mid-fi
    variantCls = active
      ? "bg-gray-800 text-white border-gray-800"
      : "border-gray-300 text-gray-500 hover:bg-gray-50";
  }

  const cls = `${base} ${variantCls} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className="block">
        <div className={cls} style={inlineStyle}>
          {children}
        </div>
      </Link>
    );
  }

  return (
    <div className={cls} style={inlineStyle} onClick={onClick}>
      {children}
    </div>
  );
}
