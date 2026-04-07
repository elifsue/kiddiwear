import { DS } from "@/contexts/DesignSystem";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import React from "react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function Carousel({ children, className = "" }: CarouselProps) {
  const { isLofi, isHifi } = useFidelityMode();

  if (isLofi) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <button className="w-10 h-10 flex-shrink-0 border border-black bg-white rounded-full flex items-center justify-center hover:bg-gray-50">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div className="flex-1">{children}</div>
        <button className="w-10 h-10 flex-shrink-0 border border-black bg-white rounded-full flex items-center justify-center hover:bg-gray-50">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <button
        className="w-10 h-10 flex-shrink-0 border border-gray-200 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
        style={{
          background: isHifi ? DS.surfaceContainerLowest : undefined,
          borderColor: isHifi ? DS.outlineVariant : undefined,
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isHifi ? DS.onSurfaceVariant : "#6b7280"}
          strokeWidth="2"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <div className="flex-1">{children}</div>
      <button
        className="w-10 h-10 flex-shrink-0 border border-gray-200 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
        style={{
          background: isHifi ? DS.surfaceContainerLowest : undefined,
          borderColor: isHifi ? DS.outlineVariant : undefined,
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isHifi ? DS.onSurfaceVariant : "#6b7280"}
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}
