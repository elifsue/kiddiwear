import React from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  /** Size variant: xs=32px, sm=44px, md=56px, lg=68px, xl=80px */
  size?: AvatarSize;
  /** Image source URL (used in hi-fi mode) */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Additional className */
  className?: string;
}

const sizeMap: Record<AvatarSize, number> = {
  xs: 32,
  sm: 44,
  md: 56,
  lg: 68,
  xl: 80,
};

export function Avatar({
  size = "sm",
  src,
  alt = "Avatar",
  className = "",
}: AvatarProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  const px = sizeMap[size];

  if (isLofi) {
    return (
      <div
        className={`rounded-full border border-black flex-shrink-0 relative overflow-hidden ${className}`}
        style={{ width: px, height: px }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="black"
            strokeWidth="1"
          />
          <line
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  }

  if (isHifi && src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover flex-shrink-0 ${className}`}
        style={{ width: px, height: px }}
      />
    );
  }

  // Mid-fi placeholder
  return (
    <div
      className={`rounded-full bg-gray-200 border border-gray-300 flex-shrink-0 ${className}`}
      style={{ width: px, height: px }}
    />
  );
}
