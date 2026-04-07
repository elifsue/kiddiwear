import React from "react";
import { Link } from "wouter";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

export function ActionButton({
  children,
  variant = "primary",
  className = "",
  to,
  full = false,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outlined" | "destructive";
  className?: string;
  to?: string;
  full?: boolean;
  onClick?: () => void;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  const base = `px-5 py-2.5 text-sm font-medium border text-center transition-colors duration-150 ${full ? "w-full" : ""} ${className}`;

  let variantCls: string;
  let inlineStyle: React.CSSProperties = {};

  if (isLofi) {
    variantCls = "bg-white text-black border-black";
  } else if (isHifi) {
    variantCls = "";
    if (variant === "primary") {
      inlineStyle = {
        background: DS.primary,
        color: DS.onPrimary,
        borderColor: DS.primary,
        borderRadius: DS.radiusSm,
      };
      variantCls = "shadow-sm hover:shadow-md hover:opacity-90";
    } else if (variant === "secondary") {
      inlineStyle = {
        background: DS.secondaryContainer,
        color: DS.onSecondaryContainer,
        borderColor: "transparent",
        borderRadius: DS.radiusSm,
      };
      variantCls = "shadow-sm hover:shadow-md hover:opacity-85";
    } else if (variant === "destructive") {
      inlineStyle = {
        background: DS.errorContainer,
        color: DS.onErrorContainer,
        borderColor: "transparent",
        borderRadius: DS.radiusSm,
      };
      variantCls = "shadow-sm hover:shadow-md hover:opacity-85";
    } else {
      inlineStyle = {
        color: DS.primary,
        borderColor: DS.outline,
        borderRadius: DS.radiusSm,
      };
      variantCls = "bg-transparent hover:bg-gray-50";
    }
  } else {
    const variants = {
      primary: "bg-gray-800 text-white border-gray-800 hover:bg-gray-700",
      secondary: "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200",
      outlined: "bg-white text-gray-800 border-gray-300 hover:bg-gray-50",
      destructive:
        "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200",
    };
    variantCls = variants[variant];
  }
  const cls = `${base} ${variantCls}`;

  if (to) {
    return (
      <Link
        to={to}
        className={`block ${cls}`}
        style={inlineStyle}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} style={inlineStyle} onClick={onClick}>
      {children}
    </button>
  );
}
