/**
 * Delivery carrier icons for Hi-Fi mode.
 * RoyalMail, Evri, InPost.
 * All icons use h-8 (32px) height with auto width to match original inline styling.
 */

export function RoyalMailIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/haahgbEPjBaURVpA.svg"
      alt="Royal Mail"
      className="object-contain"
      style={{ height: size, width: "auto" }}
    />
  );
}

export function EvriIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/UqAMbxAOtsdZaHXd.png"
      alt="Evri"
      className="object-contain"
      style={{ height: size, width: "auto" }}
    />
  );
}

export function InPostIcon({ size = 32 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/anGQAwrCKEQvWdYH.svg"
      alt="InPost"
      className="object-contain"
      style={{ height: size, width: "auto" }}
    />
  );
}
