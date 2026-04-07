import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { Avatar } from "@/components/Avatar";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { ROUTES } from "@/routes";

/**
 * ProfileDropdownMenu — User profile dropdown triggered from the navigation bar.
 *
 * Renders a trigger button (avatar + chevron) and an anchored dropdown menu
 * with links to Profile, My Orders, Wallet, Settings, and Log Out.
 *
 * Respects Figma Capture Mode: when enabled, the dropdown does NOT auto-dismiss
 * on outside click, allowing clean screenshots.
 */
export function ProfileDropdownMenu() {
  const { isLofi, isHifi, figmaCaptureMode } = useFidelityMode();
  useDSSync();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click (disabled in Figma Capture mode)
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (figmaCaptureMode) return;
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, figmaCaptureMode]);

  const menuItems = [
    { label: "Profile", to: ROUTES.PROFILE },
    { label: "My orders", to: ROUTES.MY_PURCHASES },
    { label: "Wallet", to: ROUTES.WALLET },
    { label: "Settings", to: ROUTES.SETTINGS_PROFILE },
  ];

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="relative" ref={containerRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1"
        >
          <div className="w-8 h-8 bg-white border border-black flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {open && (
          <div className="absolute right-0 top-full mt-1 w-40 border border-black bg-white z-50">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block px-4 py-2 text-sm text-black"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-black"></div>
            <span
              className="block px-4 py-2 text-sm text-black cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Log out
            </span>
          </div>
        )}
      </div>
    );
  }

  /* ── Hi-Fi ── */
  if (isHifi) {
    return (
      <div className="relative" ref={containerRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1"
        >
          <Avatar size="xs" src={PROFILE_PHOTOS.p1} alt="Profile" />
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={DS.onSurfaceVariant}
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {open && (
          <div
            className="absolute right-0 top-full mt-1 w-44 z-50 py-1"
            style={{
              background: DS.surface,
              border: `1px solid ${DS.outlineVariant}`,
              borderRadius: DS.radiusSm,
              boxShadow: DS.shadowMd,
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block px-4 py-2 text-sm transition-colors"
                style={{ color: DS.onSurface }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = DS.surfaceContainerLow)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "")
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div
              style={{
                borderTop: `1px solid ${DS.outlineVariant}`,
                margin: "4px 0",
              }}
            ></div>
            <span
              className="block px-4 py-2 text-sm cursor-pointer transition-colors"
              style={{ color: DS.onSurface }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = DS.surfaceContainerLow)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "")
              }
              onClick={() => setOpen(false)}
            >
              Log out
            </span>
          </div>
        )}
      </div>
    );
  }

  /* ── Mid-Fi ── */
  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
      >
        <Avatar size="xs" />
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-500"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-44 border border-gray-200 bg-white rounded-lg shadow-md z-50 py-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-4 py-2 text-sm text-gray-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-gray-200 my-1"></div>
          <span
            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Log out
          </span>
        </div>
      )}
    </div>
  );
}
