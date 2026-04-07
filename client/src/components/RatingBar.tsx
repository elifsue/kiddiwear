import React from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

type RatingBarSize = "sm" | "md" | "lg";

interface RatingBarProps {
  /** Number of filled stars (0-5) */
  rating: number;
  /** Size variant: sm=14px, md=18px, lg=32px */
  size?: RatingBarSize;
  /** Whether stars are interactive (shows cursor-pointer) */
  interactive?: boolean;
  /** Additional className for the container */
  className?: string;
}

const sizeConfig = {
  sm: { px: 14, gap: "gap-0.5", strokeWidth: 2 },
  md: { px: 18, gap: "gap-1", strokeWidth: 1.5 },
  lg: { px: 32, gap: "gap-2", strokeWidth: 1.5 },
};

export function RatingBar({
  rating,
  size = "sm",
  interactive = false,
  className = "",
}: RatingBarProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  const { px, gap, strokeWidth } = sizeConfig[size];
  const cursor = interactive ? "cursor-pointer" : "";

  if (isLofi) {
    return (
      <div className={`flex items-center ${gap} ${className}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width={px}
            height={px}
            viewBox="0 0 24 24"
            fill={i < rating ? "#000" : "none"}
            stroke="#000"
            strokeWidth={strokeWidth}
            className={cursor}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
    );
  }

  const fillColor = isHifi ? DS.tertiary : "#9CA3AF";
  const strokeColor = isHifi ? DS.tertiary : "#9CA3AF";

  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={px}
          height={px}
          viewBox="0 0 24 24"
          fill={i < rating ? fillColor : "none"}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          className={cursor}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}
