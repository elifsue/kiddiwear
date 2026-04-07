import React from "react";
import { Link } from "wouter";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

interface TabItemProps {
  children: React.ReactNode;
  active?: boolean;
  to?: string;
  className?: string;
}

export function TabItem({
  children,
  active = false,
  to,
  className = "",
}: TabItemProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  let cls: string;
  let inlineStyle: React.CSSProperties | undefined;

  if (isLofi) {
    cls = `py-3 text-sm font-medium text-black border-b-2 ${active ? "border-black" : "border-transparent"}`;
  } else {
    // Mid-fi base
    cls = active
      ? "py-3 text-sm font-medium text-gray-800 border-b-2 border-gray-800"
      : "py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors";
    // Hi-fi overrides via inline style
    if (isHifi) {
      inlineStyle = active
        ? { color: DS.primary, borderColor: DS.primary }
        : { color: DS.onSurfaceVariant };
    }
  }

  const finalCls = `${cls} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={finalCls} style={inlineStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalCls} style={inlineStyle}>
      {children}
    </button>
  );
}
