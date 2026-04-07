import React from "react";
import { Link } from "wouter";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { ROUTES } from "@/routes";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/icons/SocialIcons";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ActionButton } from "./ActionButton";
import { SearchBar } from "./SearchBar";
import { ProfileDropdownMenu } from "@/dialogs/ProfileDropdownMenu";

export function NavigationBar({
  hideAccountLinks = false,
}: { hideAccountLinks?: boolean } = {}) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  if (isLofi) {
    return (
      <div className="border-b border-black">
        <div className="flex items-center justify-between px-6 py-3">
          <Link to={ROUTES.HOME} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white border border-black flex items-center justify-center">
              <span className="text-black text-xs font-bold">KW</span>
            </div>
            <span className="text-base font-semibold text-black">
              Kiddiwear
            </span>
          </Link>
          <div className="flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>
          <div className="flex items-center gap-6">
            {!hideAccountLinks && (
              <>
                <Link to={ROUTES.NOTIFICATIONS} className="text-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </Link>
                <Link to={ROUTES.MESSAGES} className="text-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </Link>
                <Link to={ROUTES.SAVED_ITEMS} className="text-black">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </Link>
                <ProfileDropdownMenu />
              </>
            )}
            {hideAccountLinks && (
              <ActionButton to={ROUTES.LOGIN} variant="outlined">
                Log In
              </ActionButton>
            )}
            <ActionButton to={ROUTES.SELL_ITEM} variant="primary">
              Sell Now
            </ActionButton>
          </div>
        </div>
        <div className="flex items-center gap-6 px-6 py-2 border-t border-black">
          <Link to={ROUTES.PRODUCTS} className="text-sm text-black font-medium">
            Boys
          </Link>
          <Link to={ROUTES.PRODUCTS} className="text-sm text-black font-medium">
            Girls
          </Link>
          <Link to={ROUTES.PRODUCTS} className="text-sm text-black font-medium">
            Unisex
          </Link>
          <Link to={ROUTES.PRODUCTS} className="text-sm text-black font-medium">
            Shoes
          </Link>
          <Link to={ROUTES.PRODUCTS} className="text-sm text-black font-medium">
            Accessories
          </Link>
        </div>
      </div>
    );
  }

  if (isHifi) {
    return (
      <div
        style={{
          borderBottom: `1px solid ${DS.outlineVariant}`,
          background: DS.surface,
        }}
      >
        <div className="flex items-center justify-between px-6 py-3">
          <Link to={ROUTES.HOME} className="flex items-center gap-2">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/zeAnyiNIJppqyNeF.png"
              alt="Kiddiwear"
              className="w-8 h-8 object-contain"
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/ebPqvJTHoZreTCxY.png"
              alt="Kiddiwear"
              className="h-6 object-contain"
            />
          </Link>
          <div className="flex-1 max-w-xl mx-8">
            <SearchBar />
          </div>
          <div className="flex items-center gap-6">
            {!hideAccountLinks && (
              <>
                <Link
                  to={ROUTES.NOTIFICATIONS}
                  className="relative"
                  style={{ color: DS.onSurfaceVariant }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <span
                    className="absolute -top-1.5 -right-1.5 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                    style={{ background: DS.error, color: DS.onError }}
                  >
                    3
                  </span>
                </Link>
                <Link
                  to={ROUTES.MESSAGES}
                  className="relative"
                  style={{ color: DS.onSurfaceVariant }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span
                    className="absolute -top-1.5 -right-1.5 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                    style={{ background: DS.error, color: DS.onError }}
                  >
                    2
                  </span>
                </Link>
                <Link
                  to={ROUTES.SAVED_ITEMS}
                  style={{ color: DS.onSurfaceVariant }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </Link>
                <ProfileDropdownMenu />
              </>
            )}
            {hideAccountLinks && (
              <ActionButton to={ROUTES.LOGIN} variant="outlined">
                Log In
              </ActionButton>
            )}
            <ActionButton to={ROUTES.SELL_ITEM} variant="primary">
              Sell Now
            </ActionButton>
          </div>
        </div>
        <div
          className="flex items-center gap-6 px-6 py-2"
          style={{ borderTop: `1px solid ${DS.outlineVariant}` }}
        >
          <Link
            to={ROUTES.PRODUCTS}
            className="text-sm font-medium"
            style={{ color: DS.onSurface }}
          >
            Boys
          </Link>
          <Link
            to={ROUTES.PRODUCTS}
            className="text-sm font-medium"
            style={{ color: DS.onSurface }}
          >
            Girls
          </Link>
          <Link
            to={ROUTES.PRODUCTS}
            className="text-sm font-medium"
            style={{ color: DS.onSurface }}
          >
            Unisex
          </Link>
          <Link
            to={ROUTES.PRODUCTS}
            className="text-sm font-medium"
            style={{ color: DS.onSurface }}
          >
            Shoes
          </Link>
          <Link
            to={ROUTES.PRODUCTS}
            className="text-sm font-medium"
            style={{ color: DS.onSurface }}
          >
            Accessories
          </Link>
        </div>
      </div>
    );
  }

  // Mid-Fi nav
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <Link to={ROUTES.HOME} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-800 flex items-center justify-center">
            <span className="text-white text-xs font-bold">KW</span>
          </div>
          <span className="text-base font-semibold text-gray-800">
            Kiddiwear
          </span>
        </Link>
        <div className="flex-1 max-w-xl mx-8">
          <SearchBar />
        </div>
        <div className="flex items-center gap-6">
          {!hideAccountLinks && (
            <>
              <Link
                to={ROUTES.NOTIFICATIONS}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </Link>
              <Link
                to={ROUTES.MESSAGES}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </Link>
              <Link
                to={ROUTES.SAVED_ITEMS}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </Link>
              <ProfileDropdownMenu />
            </>
          )}
          {hideAccountLinks && (
            <ActionButton to={ROUTES.LOGIN} variant="outlined">
              Log In
            </ActionButton>
          )}
          <ActionButton to={ROUTES.SELL_ITEM} variant="primary">
            Sell Now
          </ActionButton>
        </div>
      </div>
      <div className="flex items-center gap-6 px-6 py-2 border-t border-gray-200">
        <Link
          to={ROUTES.PRODUCTS}
          className="text-sm text-gray-700 font-medium"
        >
          Boys
        </Link>
        <Link
          to={ROUTES.PRODUCTS}
          className="text-sm text-gray-700 font-medium"
        >
          Girls
        </Link>
        <Link
          to={ROUTES.PRODUCTS}
          className="text-sm text-gray-700 font-medium"
        >
          Unisex
        </Link>
        <Link
          to={ROUTES.PRODUCTS}
          className="text-sm text-gray-700 font-medium"
        >
          Shoes
        </Link>
        <Link
          to={ROUTES.PRODUCTS}
          className="text-sm text-gray-700 font-medium"
        >
          Accessories
        </Link>
      </div>
    </div>
  );
}
