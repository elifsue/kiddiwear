import { Link } from "wouter";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { TextPlaceholder } from "./TextPlaceholder";

export function ProductCard({
  showFavorite = true,
  filled = false,
  to,
}: {
  showFavorite?: boolean;
  filled?: boolean;
  to?: string;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    const card = (
      <div className="border border-black bg-white group">
        <div className="relative">
          <ImagePlaceholder label="Product Photo" aspectRatio="4/5" />
        </div>
        <div className="p-3 flex flex-col gap-1.5 border-t border-black">
          <TextPlaceholder width="45%" />
          <TextPlaceholder width="75%" />
          <TextPlaceholder width="55%" />
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm font-semibold text-black">
              &pound;8.00
            </span>
            <TextPlaceholder width="50px" />
          </div>
        </div>
      </div>
    );

    const favButton = showFavorite ? (
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
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          className="text-black"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
    ) : null;

    if (to) {
      return (
        <div className="relative">
          <Link to={to} className="block">
            {card}
          </Link>
          {favButton}
        </div>
      );
    }
    return (
      <div className="relative">
        {card}
        {favButton}
      </div>
    );
  }

  /* ── Hi-Fi ── */
  if (isHifi) {
    const card = (
      <div
        className="group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        style={{
          border: `1px solid ${DS.outlineVariant}`,
          borderRadius: DS.radius,
          background: DS.surfaceContainerLowest,
        }}
      >
        <div className="relative overflow-hidden">
          <ImagePlaceholder
            label="Product Photo"
            aspectRatio="4/5"
            className="rounded-none"
          />
        </div>
        <div
          className="p-3 flex flex-col gap-1"
          style={{ borderTop: `1px solid ${DS.outlineVariant}` }}
        >
          <span className="text-xs" style={{ color: DS.onSurfaceVariant }}>
            Next Kids
          </span>
          <span className="text-sm font-medium" style={{ color: DS.onSurface }}>
            Striped Cotton T-Shirt
          </span>
          <span className="text-xs" style={{ color: DS.onSurfaceVariant }}>
            4 years / 104 cm
          </span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-sm font-bold" style={{ color: DS.onSurface }}>
              &pound;8.00
            </span>
            <span
              className="text-xs px-2 py-0.5"
              style={{
                background: DS.secondaryContainer,
                color: DS.onSecondaryContainer,
                borderRadius: "4px",
              }}
            >
              Like new
            </span>
          </div>
        </div>
      </div>
    );

    const favButton = showFavorite ? (
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
          fill={filled ? DS.tertiary : "none"}
          stroke={DS.tertiary}
          strokeWidth="2"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
    ) : null;

    if (to) {
      return (
        <div className="relative">
          <Link to={to} className="block">
            {card}
          </Link>
          {favButton}
        </div>
      );
    }
    return (
      <div className="relative">
        {card}
        {favButton}
      </div>
    );
  }

  /* ── Mid-Fi ── */
  const card = (
    <div className="border border-gray-200 bg-white group transition-shadow">
      <div className="relative">
        <ImagePlaceholder label="Product Photo" aspectRatio="4/5" />
      </div>
      <div className="p-3 flex flex-col gap-1 border-t border-gray-100">
        <span className="text-xs text-gray-400">Brand Name</span>
        <span className="text-sm text-gray-700">Product Title</span>
        <span className="text-xs text-gray-400">4 years / 104 cm</span>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-semibold text-gray-800">
            &pound;8.00
          </span>
          <span className="text-xs text-gray-400">Like new</span>
        </div>
      </div>
    </div>
  );

  const favButton = showFavorite ? (
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
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-400"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  ) : null;

  if (to) {
    return (
      <div className="relative">
        <Link to={to} className="block">
          {card}
        </Link>
        {favButton}
      </div>
    );
  }
  return (
    <div className="relative">
      {card}
      {favButton}
    </div>
  );
}
