import React, { useState, useRef, useEffect } from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

interface PhotoInputFieldProps {
  /** "cover" renders the large cover photo box; "slot" renders a small add-photo tile; "filled" shows a thumbnail with remove overlay */
  variant?: "cover" | "slot" | "filled";
  /** Label shown below the icon for "slot" variant (e.g. "Required") */
  label?: string;
  /** Icon size: "default" (26px for slot, 40px for cover) or "small" (20px for slot) */
  iconSize?: "default" | "small";
  /** Image URL for the "filled" variant (used in hi-fi mode) */
  src?: string;
  /** Custom className for the outer container */
  className?: string;
}

/** SVG-based dashed border that uses ResizeObserver to track container size */
function DashedBorder({
  color,
  radius = 0,
  strokeWidth = 2,
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

export function PhotoInputField({
  variant = "slot",
  label,
  iconSize = "default",
  src,
  className = "",
}: PhotoInputFieldProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  if (variant === "cover") {
    return <CoverBox isLofi={isLofi} isHifi={isHifi} className={className} />;
  }

  if (variant === "filled") {
    return (
      <FilledBox
        isLofi={isLofi}
        isHifi={isHifi}
        src={src}
        className={className}
      />
    );
  }

  return (
    <SlotBox
      isLofi={isLofi}
      isHifi={isHifi}
      label={label}
      iconSize={iconSize}
      className={className}
    />
  );
}

function CoverBox({
  isLofi,
  isHifi,
  className,
}: {
  isLofi: boolean;
  isHifi: boolean;
  className: string;
}) {
  const [hovered, setHovered] = useState(false);

  if (isLofi) {
    return (
      <div
        className={`relative bg-white flex flex-col items-center justify-center h-full min-h-[200px] cursor-pointer ${className}`}
      >
        <DashedBorder color="black" strokeWidth={2} />
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-black mb-2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
        <p className="text-sm text-black font-medium">Add cover photo</p>
      </div>
    );
  }

  const borderColor = isHifi
    ? hovered
      ? DS.onSurface
      : DS.outline
    : hovered
      ? "#6b7280"
      : "#9ca3af";
  const bgColor = isHifi
    ? hovered
      ? DS.surfaceContainer
      : DS.surfaceContainerLow
    : hovered
      ? "#f3f4f6"
      : "#f9fafb";
  const radius = isHifi ? 8 : 4;

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-full min-h-[200px] cursor-pointer transition-colors ${className}`}
      style={{ backgroundColor: bgColor, borderRadius: radius }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <DashedBorder color={borderColor} radius={radius} strokeWidth={2} />
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-gray-400 mb-2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <p className="text-sm text-gray-500 font-medium">Add cover photo</p>
      <p className="text-[11px] text-gray-400">Drag &amp; drop or click</p>
    </div>
  );
}

function SlotBox({
  isLofi,
  isHifi,
  label,
  iconSize,
  className,
}: {
  isLofi: boolean;
  isHifi: boolean;
  label?: string;
  iconSize: "default" | "small";
  className: string;
}) {
  const size = iconSize === "small" ? 20 : 26;
  const [hovered, setHovered] = useState(false);

  if (isLofi) {
    return (
      <div
        className={`relative bg-white flex flex-col items-center justify-center aspect-square cursor-pointer ${className}`}
      >
        <DashedBorder color="black" strokeWidth={2} />
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-black"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        {label && <p className="text-[11px] text-black mt-1">{label}</p>}
      </div>
    );
  }

  const borderColor = isHifi
    ? hovered
      ? DS.onSurface
      : DS.outline
    : hovered
      ? "#6b7280"
      : "#9ca3af";
  const bgColor = isHifi
    ? hovered
      ? DS.surfaceContainer
      : DS.surfaceContainerLow
    : hovered
      ? "#f3f4f6"
      : "#f9fafb";
  const radius = isHifi ? 8 : 4;

  return (
    <div
      className={`relative flex flex-col items-center justify-center aspect-square cursor-pointer transition-colors ${className}`}
      style={{ backgroundColor: bgColor, borderRadius: radius }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <DashedBorder color={borderColor} radius={radius} strokeWidth={2} />
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-gray-400"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
      {label && <p className="text-[11px] text-gray-500 mt-1">{label}</p>}
    </div>
  );
}

function FilledBox({
  isLofi,
  isHifi,
  src,
  className,
}: {
  isLofi: boolean;
  isHifi: boolean;
  src?: string;
  className: string;
}) {
  if (isLofi) {
    return (
      <div
        className={`relative aspect-square cursor-pointer group ${className}`}
      >
        <ImagePlaceholder className="w-full h-full" aspectRatio="1/1" />
        {/* Remove button — matches ProductCard button style */}
        <div
          className="absolute top-2 right-2 w-8 h-8 bg-white border border-black flex items-center justify-center z-10 cursor-pointer"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    );
  }

  if (!isHifi) {
    /* Mid-Fi: image placeholder with remove button */
    return (
      <div
        className={`relative aspect-square cursor-pointer group ${className}`}
      >
        <ImagePlaceholder className="w-full h-full rounded" aspectRatio="1/1" />
        {/* Remove button — matches ProductCard button style */}
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer hover:bg-gray-100 z-10"
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    );
  }

  /* Hi-Fi: actual photo or placeholder icon with remove button */
  const borderColor = DS.outlineVariant;
  const radius = DS.radiusSm;

  return (
    <div
      className={`relative border aspect-square cursor-pointer group overflow-hidden ${className}`}
      style={{ borderColor, borderRadius: radius }}
    >
      {src ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-300"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      )}
      {/* Remove button — matches ProductCard button style */}
      <button
        type="button"
        className="absolute top-2 right-2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-colors cursor-pointer z-10 hover:bg-gray-50"
        style={{ boxShadow: DS.shadowMd }}
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-400"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
