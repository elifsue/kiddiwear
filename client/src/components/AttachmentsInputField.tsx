import React, { useState, useRef, useEffect } from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";

interface AttachmentsInputFieldProps {
  label?: string;
  hint?: string;
  className?: string;
}

/** SVG-based dashed border that uses ResizeObserver to track container size */
function DashedBorder({
  color,
  radius = 0,
  strokeWidth = 1,
}: {
  color: string;
  radius?: number;
  strokeWidth?: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const parent = svg.parentElement;
    if (!parent) return;

    const update = () => {
      const { width, height } = parent.getBoundingClientRect();
      setSize({ w: width, h: height });
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  if (size.w === 0 || size.h === 0) {
    return (
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    );
  }

  const inset = strokeWidth / 2;
  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${size.w} ${size.h}`}
      preserveAspectRatio="none"
    >
      <rect
        x={inset}
        y={inset}
        width={size.w - strokeWidth}
        height={size.h - strokeWidth}
        rx={radius}
        ry={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray="8 4"
      />
    </svg>
  );
}

export function AttachmentsInputField({
  label = "Attachments",
  hint = "Drag & drop or click to attach files (PNG, JPG, PDF · max 5MB)",
  className = "",
}: AttachmentsInputFieldProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  const [hovered, setHovered] = useState(false);

  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        <div className="flex items-center gap-2 h-5">
          <label className="text-sm font-medium text-black">{label}</label>
          <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5">
            Optional
          </span>
        </div>
        <div className="relative h-10 flex items-center justify-center cursor-pointer">
          <DashedBorder color="black" strokeWidth={1} />
          <TextPlaceholder width="70%" className="mx-auto" />
        </div>
      </div>
    );
  }

  const borderColor = isHifi
    ? hovered
      ? DS.onSurfaceVariant
      : DS.outline
    : hovered
      ? "#6b7280"
      : "#d1d5db";
  const labelColor = isHifi ? DS.onSurface : "#374151";
  const radius = isHifi ? 8 : 0;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <div className="flex items-center gap-2 h-5">
        <label className="text-sm font-medium" style={{ color: labelColor }}>
          {label}
        </label>
        <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">
          Optional
        </span>
      </div>
      <div
        className="relative h-10 flex items-center justify-center cursor-pointer transition-colors"
        style={{ borderRadius: radius }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <DashedBorder color={borderColor} radius={radius} strokeWidth={1} />
        <p className="text-[10px]" style={{ color: "#9ca3af" }}>
          {hint}
        </p>
      </div>
    </div>
  );
}
