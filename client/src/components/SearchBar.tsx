import React from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

interface SearchBarProps {
  /** Placeholder text shown in mid-fi and hi-fi modes */
  placeholder?: string;
  /** Additional className for the outer container */
  className?: string;
  /** Size variant: "default" is the full nav search bar, "small" matches the search conversations style */
  size?: "default" | "small";
  /** Optional value to display instead of placeholder (e.g. a selected address) */
  value?: string;
}

export function SearchBar({
  placeholder = "Search for items, brands, categories...",
  className = "",
  size = "default",
  value,
}: SearchBarProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  const isSmall = size === "small";

  if (isLofi) {
    if (isSmall) {
      return (
        <div
          className={`flex items-center gap-2 border border-black px-3 py-2 ${className}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black flex-shrink-0"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      );
    }
    return (
      <div
        className={`h-10 border border-black bg-white px-4 flex items-center gap-2 rounded-full ${className}`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-black flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
    );
  }

  if (isSmall) {
    const borderColor = isHifi ? DS.outline : "#d1d5db";
    const radius = isHifi ? DS.radiusSm : "8px";
    const hintColor = "#9ca3af";
    const valueColor = isHifi ? DS.onSurface : "#374151";
    const displayText = value || placeholder;
    const textColor = value ? valueColor : hintColor;

    return (
      <div
        className={`flex items-center gap-2 border px-3 py-2 ${className}`}
        style={{ borderColor, borderRadius: radius }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: hintColor }}
          className="flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="text-xs" style={{ color: textColor }}>
          {displayText}
        </span>
      </div>
    );
  }

  if (isHifi) {
    return (
      <div
        className={`h-10 rounded-full px-4 flex items-center gap-2 ${className}`}
        style={{ background: DS.surfaceContainerHigh }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={DS.onSurfaceVariant}
          strokeWidth="2"
          className="flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <span className="text-sm" style={{ color: DS.onSurfaceVariant }}>
          {placeholder}
        </span>
      </div>
    );
  }

  // Mid-fi default
  return (
    <div
      className={`h-10 border border-gray-300 rounded-full bg-gray-50 px-4 flex items-center gap-2 ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-400 flex-shrink-0"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <span className="text-sm text-gray-400">{placeholder}</span>
    </div>
  );
}
