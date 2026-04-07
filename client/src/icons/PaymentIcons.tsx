/**
 * Payment method icons for Hi-Fi mode.
 * Bank, PayPal, Card, Visa, Mastercard, Google Pay, Apple Pay.
 * All icons are tightly cropped (no whitespace) and displayed at a fixed height
 * with variable width to appear visually equal in size.
 */

export function BankTransferIcon({ size = 20 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/tapOgXRAQOqBrHQt.png"
      alt="Bank Transfer"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export function PayPalIcon({ size = 20 }: { size?: number }) {
  // Original content: 128x128 → aspect ratio 1:1
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/IUlZKzdwGsFYwvwB.png"
      alt="PayPal"
      height={size}
      style={{ height: size, width: size, objectFit: "contain" }}
    />
  );
}

export function BankCardIcon({ size = 20 }: { size?: number }) {
  // Original content: 128x94 → aspect ratio ~1.36:1
  const width = Math.round(size * (128 / 94));
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/pGjTIpWybxdKCbTI.png"
      alt="Bank Card"
      height={size}
      style={{ height: size, width, objectFit: "contain" }}
    />
  );
}

export function VisaIcon({ size = 20 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/tFdqHJLnzQyHzPTK.png"
      alt="Visa"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export function MastercardIcon({ size = 20 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/oVlybsOJOQjOutbl.png"
      alt="Mastercard"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

export function GooglePayIcon({ size = 20 }: { size?: number }) {
  // Original content: 128x56 → aspect ratio ~2.29:1
  const width = Math.round(size * (128 / 56));
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/FEOSzKlzQmcCVqFW.png"
      alt="Google Pay"
      height={size}
      style={{ height: size, width, objectFit: "contain" }}
    />
  );
}

export function ApplePayIcon({ size = 20 }: { size?: number }) {
  // Original content: 128x60 → aspect ratio ~2.13:1
  const width = Math.round(size * (128 / 60));
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/xlMkrRLEJSNlULKk.png"
      alt="Apple Pay"
      height={size}
      style={{ height: size, width, objectFit: "contain" }}
    />
  );
}
