/**
 * Delivery carrier icons for Hi-Fi mode.
 * RoyalMail, Evri, InPost.
 * All icons use h-8 (32px) height with auto width to match original inline styling.
 */

import royalMailIcon from "@/assets/delivery/royal-mail.png";
import evriIcon from "@/assets/delivery/evri.png";
import inpostIcon from "@/assets/delivery/inpost.png";

export function RoyalMailIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src={royalMailIcon}
      alt="Royal Mail"
      className="object-contain"
      style={{ height: size, width: "auto" }}
    />
  );
}

export function EvriIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src={evriIcon}
      alt="Evri"
      className="object-contain"
      style={{ height: size, width: "auto" }}
    />
  );
}

export function InPostIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src={inpostIcon}
      alt="InPost"
      className="object-contain"
      style={{ height: size, width: "auto" }}
    />
  );
}
