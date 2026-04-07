import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS } from "@/contexts/DesignSystem";

interface PaginationBarProps {
  /** Array of page numbers to display */
  pages: number[];
  /** Currently active page number (defaults to 1) */
  activePage?: number;
  /** Total page count shown after "..." (e.g. 163). If omitted, no ellipsis/total is shown */
  totalPages?: number;
  /** Additional className for the container */
  className?: string;
}

export function PaginationBar({
  pages,
  activePage = 1,
  totalPages,
  className = "",
}: PaginationBarProps) {
  const { isLofi, isHifi } = useFidelityMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div
        className={`flex items-center justify-center gap-2 mt-8 ${className}`}
      >
        <div className="w-8 h-8 border border-black flex items-center justify-center text-xs text-black">
          &larr;
        </div>
        {pages.map(p => (
          <div
            key={p}
            className={`w-8 h-8 border flex items-center justify-center text-xs ${
              p === activePage
                ? "border-2 border-black bg-white text-black font-semibold"
                : "border-black text-black"
            }`}
          >
            {p}
          </div>
        ))}
        {totalPages && (
          <>
            <span className="text-xs text-black w-4 text-center">...</span>
            <div className="w-8 h-8 border border-black flex items-center justify-center text-xs text-black">
              {totalPages}
            </div>
          </>
        )}
        <div className="w-8 h-8 border border-black flex items-center justify-center text-xs text-black">
          &rarr;
        </div>
      </div>
    );
  }

  /* ── Mid-Fi / Hi-Fi ── */
  return (
    <div className={`flex items-center justify-center gap-1 mt-8 ${className}`}>
      <button
        className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50"
        style={{
          background: isHifi ? DS.surfaceContainerLowest : undefined,
          borderColor: isHifi ? DS.outlineVariant : undefined,
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      {pages.map(p => (
        <button
          key={p}
          className={`w-8 h-8 border rounded flex items-center justify-center text-xs cursor-pointer ${
            p === activePage
              ? "border-gray-800 bg-gray-800 text-white font-medium"
              : "border-gray-200 text-gray-500 hover:bg-gray-50"
          }`}
          style={
            isHifi
              ? p === activePage
                ? {
                    background: DS.primary,
                    color: DS.onPrimary,
                    border: `1px solid ${DS.primary}`,
                    borderRadius: DS.radiusSm,
                  }
                : {
                    background: DS.surfaceContainerLowest,
                    border: `1px solid ${DS.outlineVariant}`,
                    color: DS.onSurfaceVariant,
                    borderRadius: DS.radiusSm,
                  }
              : undefined
          }
        >
          {p}
        </button>
      ))}
      {totalPages && (
        <>
          <span
            className="text-xs w-4 text-center"
            style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
          >
            ...
          </span>
          <button
            className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-50"
            style={
              isHifi
                ? {
                    background: DS.surfaceContainerLowest,
                    border: `1px solid ${DS.outlineVariant}`,
                    color: DS.onSurfaceVariant,
                    borderRadius: DS.radiusSm,
                  }
                : undefined
            }
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50"
        style={{
          background: isHifi ? DS.surfaceContainerLowest : undefined,
          borderColor: isHifi ? DS.outlineVariant : undefined,
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
