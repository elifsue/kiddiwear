/**
 * Payment method icons for Hi-Fi mode.
 * Bank, PayPal, Card, Visa, Mastercard, Google Pay, Apple Pay.
 * All icons are tightly cropped (no whitespace) and displayed at a fixed height
 * with variable width to appear visually equal in size.
 */

import bankTransferIcon from "@/assets/payment/bank-transfer.png";
import paypalIcon from "@/assets/payment/paypal.png";
import bankCardIcon from "@/assets/payment/bank-card.png";
import visaIcon from "@/assets/payment/visa.png";
import mastercardIcon from "@/assets/payment/mastercard.png";
import googlePayIcon from "@/assets/payment/google-pay.png";
import applePayIcon from "@/assets/payment/apple-pay.png";

export function BankTransferIcon({ size = 20 }: { size?: number }) {
  return (
    <img
      src={bankTransferIcon}
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
      src={paypalIcon}
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
      src={bankCardIcon}
      alt="Bank Card"
      height={size}
      style={{ height: size, width, objectFit: "contain" }}
    />
  );
}

export function VisaIcon({ size = 20 }: { size?: number }) {
  return (
    <img
      src={visaIcon}
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
      src={mastercardIcon}
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
      src={googlePayIcon}
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
      src={applePayIcon}
      alt="Apple Pay"
      height={size}
      style={{ height: size, width, objectFit: "contain" }}
    />
  );
}
