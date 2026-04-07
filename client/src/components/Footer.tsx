import React from "react";
import { Link } from "wouter";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { ROUTES } from "@/routes";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/icons/SocialIcons";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "./TextPlaceholder";

export function Footer() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  if (isLofi) {
    return (
      <div className="border-t border-black bg-white px-6 py-8 mt-auto">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-white border border-black flex items-center justify-center">
                <span className="text-black text-[8px] font-bold">KW</span>
              </div>
              <span className="text-sm font-semibold text-black">
                Kiddiwear
              </span>
            </div>
            <TextPlaceholder lines={2} />
          </div>
          <div>
            <p className="text-xs font-semibold text-black mb-2 uppercase tracking-wider">
              Shop
            </p>
            <div className="flex flex-col gap-2">
              <TextPlaceholder width="50%" />
              <TextPlaceholder width="40%" />
              <TextPlaceholder width="55%" />
              <TextPlaceholder width="45%" />
              <TextPlaceholder width="65%" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-black mb-2 uppercase tracking-wider">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <TextPlaceholder width="55%" />
              <TextPlaceholder width="65%" />
              <TextPlaceholder width="75%" />
              <TextPlaceholder width="60%" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-black mb-2 uppercase tracking-wider">
              Support
            </p>
            <div className="flex flex-col gap-2">
              <TextPlaceholder width="60%" />
              <TextPlaceholder width="75%" />
              <TextPlaceholder width="65%" />
            </div>
          </div>
        </div>
        <div className="border-t border-black mt-6 pt-4 flex items-center justify-between">
          <TextPlaceholder width="180px" />
          <div className="flex items-center gap-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-6 border border-black bg-white">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <line
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                    stroke="black"
                    strokeWidth="1"
                  />
                  <line
                    x1="24"
                    y1="0"
                    x2="0"
                    y2="24"
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isHifi) {
    return (
      <div
        className="px-6 py-8 mt-auto"
        style={{
          borderTop: `1px solid ${DS.outlineVariant}`,
          background: DS.surfaceContainer,
        }}
      >
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/zeAnyiNIJppqyNeF.png"
                alt="Kiddiwear"
                className="w-6 h-6 object-contain"
              />
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/ebPqvJTHoZreTCxY.png"
                alt="Kiddiwear"
                className="h-5 object-contain"
              />
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: DS.onSurfaceVariant }}
            >
              Give kids' clothes a second life. Buy and sell quality second-hand
              children's clothing.
            </p>
          </div>
          <div>
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-wider"
              style={{ color: DS.onSurface }}
            >
              Shop
            </p>
            <div className="flex flex-col gap-1.5">
              {["Boys", "Girls", "Unisex", "Shoes", "Accessories"].map(l => (
                <Link
                  key={l}
                  to={ROUTES.PRODUCTS}
                  className="text-xs w-fit"
                  style={{ color: DS.onSurfaceVariant }}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-wider"
              style={{ color: DS.onSurface }}
            >
              Company
            </p>
            <div className="flex flex-col gap-1.5">
              <Link
                to={ROUTES.ABOUT}
                className="text-xs w-fit"
                style={{ color: DS.onSurfaceVariant }}
              >
                About Us
              </Link>
              <Link
                to={ROUTES.HOW_IT_WORKS}
                className="text-xs w-fit"
                style={{ color: DS.onSurfaceVariant }}
              >
                How It Works
              </Link>
              <Link
                to={ROUTES.BUYER_PROTECTION}
                className="text-xs w-fit"
                style={{ color: DS.onSurfaceVariant }}
              >
                Buyer Protection
              </Link>
              <span
                className="text-xs w-fit"
                style={{ color: DS.onSurfaceVariant }}
              >
                Careers
              </span>
            </div>
          </div>
          <div>
            <p
              className="text-xs font-semibold mb-2 uppercase tracking-wider"
              style={{ color: DS.onSurface }}
            >
              Support
            </p>
            <div className="flex flex-col gap-1.5">
              <Link
                to={ROUTES.HELP_CENTRE}
                className="text-xs w-fit"
                style={{ color: DS.onSurfaceVariant }}
              >
                Help Centre
              </Link>
              <Link
                to={ROUTES.TERMS}
                className="text-xs w-fit"
                style={{ color: DS.onSurfaceVariant }}
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to={ROUTES.PRIVACY}
                className="text-xs w-fit"
                style={{ color: DS.onSurfaceVariant }}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-6 pt-4 flex items-center justify-between"
          style={{ borderTop: `1px solid ${DS.outlineVariant}` }}
        >
          <span className="text-xs" style={{ color: DS.onSurfaceVariant }}>
            &copy; 2026 Kiddiwear. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <FacebookIcon size={22} />
            <InstagramIcon size={22} />
            <LinkedInIcon size={22} />
          </div>
        </div>
      </div>
    );
  }

  // Mid-Fi footer
  return (
    <div className="border-t border-gray-200 bg-gray-50 px-6 py-8 mt-auto">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gray-800 flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">KW</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">
              Kiddiwear
            </span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Give kids' clothes a second life. Buy and sell quality second-hand
            children's clothing.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Shop
          </p>
          <div className="flex flex-col gap-1.5">
            {["Boys", "Girls", "Unisex", "Shoes", "Accessories"].map(l => (
              <Link
                key={l}
                to={ROUTES.PRODUCTS}
                className="text-xs text-gray-500 hover:text-gray-700 w-fit"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Company
          </p>
          <div className="flex flex-col gap-1.5">
            <Link
              to={ROUTES.ABOUT}
              className="text-xs text-gray-500 hover:text-gray-700 w-fit"
            >
              About Us
            </Link>
            <Link
              to={ROUTES.HOW_IT_WORKS}
              className="text-xs text-gray-500 hover:text-gray-700 w-fit"
            >
              How It Works
            </Link>
            <Link
              to={ROUTES.BUYER_PROTECTION}
              className="text-xs text-gray-500 hover:text-gray-700 w-fit"
            >
              Buyer Protection
            </Link>
            <span className="text-xs text-gray-500 cursor-default w-fit">
              Careers
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wider">
            Support
          </p>
          <div className="flex flex-col gap-1.5">
            <Link
              to={ROUTES.HELP_CENTRE}
              className="text-xs text-gray-500 hover:text-gray-700 w-fit"
            >
              Help Centre
            </Link>
            <Link
              to={ROUTES.TERMS}
              className="text-xs text-gray-500 hover:text-gray-700 w-fit"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to={ROUTES.PRIVACY}
              className="text-xs text-gray-500 hover:text-gray-700 w-fit"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 pt-4 flex items-center justify-between">
        <span className="text-xs text-gray-400">
          &copy; 2026 Kiddiwear. All rights reserved.
        </span>
        <div className="flex items-center gap-3">
          {["Facebook", "Instagram", "LinkedIn"].map(s => (
            <div
              key={s}
              className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <span className="text-[8px] text-gray-500">{s[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
