import { useState, useRef, useEffect } from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";

/* ─── Category Data ─── */
const CATEGORIES: { name: string; subcategories: string[] }[] = [
  {
    name: "Tops",
    subcategories: [
      "T-Shirts",
      "Shirts",
      "Blouses",
      "Hoodies",
      "Sweatshirts",
      "Vests",
    ],
  },
  {
    name: "Bottoms",
    subcategories: ["Trousers", "Jeans", "Shorts", "Skirts", "Leggings"],
  },
  {
    name: "Dresses",
    subcategories: [
      "Casual Dresses",
      "Party Dresses",
      "Pinafores",
      "Playsuits",
    ],
  },
  {
    name: "Outerwear",
    subcategories: ["Coats", "Jackets", "Raincoats", "Gilets", "Snowsuits"],
  },
  {
    name: "Shoes",
    subcategories: ["Trainers", "Boots", "Sandals", "School Shoes", "Wellies"],
  },
  {
    name: "Accessories",
    subcategories: [
      "Hats",
      "Scarves",
      "Gloves",
      "Bags",
      "Belts",
      "Hair Accessories",
    ],
  },
  {
    name: "Sleepwear",
    subcategories: ["Pyjamas", "Onesies", "Dressing Gowns", "Sleep Bags"],
  },
  {
    name: "Sportswear",
    subcategories: ["Tracksuits", "Swim", "Dance", "Football Kits"],
  },
];

export function CategorySelect({
  className = "",
  defaultCategory,
  defaultSubcategory,
}: {
  className?: string;
  defaultCategory?: string;
  defaultSubcategory?: string;
}) {
  const { isLofi, isHifi, figmaCaptureMode } = useFidelityMode();
  useDSSync();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    defaultCategory || null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    defaultSubcategory || null
  );
  const [showSubcategories, setShowSubcategories] = useState<string | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click (disabled in Figma capture mode)
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (figmaCaptureMode) return;
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setShowSubcategories(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, figmaCaptureMode]);

  const displayValue = selectedSubcategory
    ? `${selectedCategory} › ${selectedSubcategory}`
    : selectedCategory || null;

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div
        className={`flex flex-col gap-1.5 relative ${className}`}
        ref={containerRef}
      >
        <label className="text-sm font-medium text-black">Category</label>
        <div
          className="h-10 border border-black px-3 flex items-center justify-between cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowSubcategories(null);
          }}
        >
          <span className="text-xs text-black truncate">
            {displayValue || "Select..."}
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="text-black ml-2 flex-shrink-0"
          >
            <path
              d="M3 5L6 8L9 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="absolute right-0 top-full mt-1 w-full border border-black bg-white z-50">
            {!showSubcategories ? (
              CATEGORIES.map(cat => (
                <div
                  key={cat.name}
                  className="flex items-center justify-between px-4 py-2 cursor-pointer text-sm text-black"
                  onClick={() => setShowSubcategories(cat.name)}
                >
                  <span>{cat.name}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-black flex-shrink-0"
                  >
                    <path
                      d="M4.5 2.5L8 6L4.5 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))
            ) : (
              <>
                <div
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer text-sm text-black"
                  onClick={() => setShowSubcategories(null)}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-black flex-shrink-0"
                  >
                    <path
                      d="M7.5 2.5L4 6L7.5 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-medium">{showSubcategories}</span>
                </div>
                <div className="border-t border-black"></div>
                {CATEGORIES.find(
                  c => c.name === showSubcategories
                )?.subcategories.map(sub => (
                  <div
                    key={sub}
                    className="px-4 py-2 cursor-pointer text-sm text-black"
                    onClick={() => {
                      setSelectedCategory(showSubcategories);
                      setSelectedSubcategory(sub);
                      setIsOpen(false);
                      setShowSubcategories(null);
                    }}
                  >
                    {sub}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  /* ── Hi-Fi ── */
  if (isHifi) {
    return (
      <div
        className={`flex flex-col gap-1.5 relative ${className}`}
        ref={containerRef}
      >
        <label className="text-sm font-medium" style={{ color: DS.onSurface }}>
          Category
        </label>
        <div
          className="h-10 border px-3 flex items-center justify-between cursor-pointer"
          style={{ borderColor: DS.outline, borderRadius: DS.radiusSm }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowSubcategories(null);
          }}
        >
          <span
            className="text-sm truncate"
            style={{ color: displayValue ? DS.onSurface : "#9ca3af" }}
          >
            {displayValue || "Select category..."}
          </span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="ml-2 flex-shrink-0"
            style={{ color: DS.onSurface }}
          >
            <path
              d="M3 5L6 8L9 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 top-full mt-1 w-full z-50 py-1"
            style={{
              background: DS.surface,
              border: `1px solid ${DS.outlineVariant}`,
              borderRadius: DS.radiusSm,
              boxShadow: DS.shadowMd,
            }}
          >
            {!showSubcategories ? (
              CATEGORIES.map(cat => (
                <div
                  key={cat.name}
                  className="flex items-center justify-between px-4 py-2 cursor-pointer text-sm transition-colors"
                  style={{ color: DS.onSurface }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.background = DS.surfaceContainerLow)
                  }
                  onMouseLeave={e => (e.currentTarget.style.background = "")}
                  onClick={() => setShowSubcategories(cat.name)}
                >
                  <span>{cat.name}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="flex-shrink-0"
                    style={{ color: DS.onSurfaceVariant }}
                  >
                    <path
                      d="M4.5 2.5L8 6L4.5 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))
            ) : (
              <>
                <div
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer text-sm font-medium transition-colors"
                  style={{ color: DS.onSurface }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.background = DS.surfaceContainerLow)
                  }
                  onMouseLeave={e => (e.currentTarget.style.background = "")}
                  onClick={() => setShowSubcategories(null)}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="flex-shrink-0"
                    style={{ color: DS.onSurfaceVariant }}
                  >
                    <path
                      d="M7.5 2.5L4 6L7.5 9.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{showSubcategories}</span>
                </div>
                <div
                  style={{
                    borderTop: `1px solid ${DS.outlineVariant}`,
                    margin: "4px 0",
                  }}
                ></div>
                {CATEGORIES.find(
                  c => c.name === showSubcategories
                )?.subcategories.map(sub => (
                  <div
                    key={sub}
                    className="px-4 py-2 cursor-pointer text-sm transition-colors"
                    style={{ color: DS.onSurface }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.background =
                        DS.surfaceContainerLow)
                    }
                    onMouseLeave={e => (e.currentTarget.style.background = "")}
                    onClick={() => {
                      setSelectedCategory(showSubcategories);
                      setSelectedSubcategory(sub);
                      setIsOpen(false);
                      setShowSubcategories(null);
                    }}
                  >
                    {sub}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  /* ── Mid-Fi ── */
  return (
    <div
      className={`flex flex-col gap-1.5 relative ${className}`}
      ref={containerRef}
    >
      <label className="text-sm font-medium text-gray-700">Category</label>
      <div
        className="h-10 border border-gray-300 px-3 flex items-center justify-between cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowSubcategories(null);
        }}
      >
        <span
          className="text-sm truncate"
          style={{ color: displayValue ? "#374151" : "#9ca3af" }}
        >
          {displayValue || "Select category..."}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="ml-2 flex-shrink-0 text-gray-400"
        >
          <path
            d="M3 5L6 8L9 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-full border border-gray-200 bg-white rounded-lg shadow-md z-50 py-1">
          {!showSubcategories ? (
            CATEGORIES.map(cat => (
              <div
                key={cat.name}
                className="flex items-center justify-between px-4 py-2 cursor-pointer text-sm text-gray-700"
                onClick={() => setShowSubcategories(cat.name)}
              >
                <span>{cat.name}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="flex-shrink-0 text-gray-400"
                >
                  <path
                    d="M4.5 2.5L8 6L4.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))
          ) : (
            <>
              <div
                className="flex items-center gap-2 px-4 py-2 cursor-pointer text-sm text-gray-700 font-medium"
                onClick={() => setShowSubcategories(null)}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="flex-shrink-0 text-gray-400"
                >
                  <path
                    d="M7.5 2.5L4 6L7.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{showSubcategories}</span>
              </div>
              <div className="border-t border-gray-200 my-1"></div>
              {CATEGORIES.find(
                c => c.name === showSubcategories
              )?.subcategories.map(sub => (
                <div
                  key={sub}
                  className="px-4 py-2 cursor-pointer text-sm text-gray-700"
                  onClick={() => {
                    setSelectedCategory(showSubcategories);
                    setSelectedSubcategory(sub);
                    setIsOpen(false);
                    setShowSubcategories(null);
                  }}
                >
                  {sub}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
