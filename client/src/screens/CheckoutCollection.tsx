import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { useState } from "react";
import { RadioButton } from "@/components/RadioButton";
import { Checkbox } from "@/components/Checkbox";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import {
  BankCardIcon,
  PayPalIcon,
  ApplePayIcon,
  GooglePayIcon,
  VisaIcon,
  MastercardIcon,
} from "@/icons/PaymentIcons";
import { InPostIcon } from "@/icons/DeliveryIcons";
import { Link, useLocation } from "wouter";
import { Avatar } from "@/components/Avatar";
import { RatingBar } from "@/components/RatingBar";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import PickupPointDialog from "@/dialogs/PickupPointDialog";

export default function CheckoutCollection() {
  const { isLofi, isHifi } = useFidelityMode();
  const [showPickupDialog, setShowPickupDialog] = useState(false);
  const [, navigate] = useLocation();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl font-bold text-black mb-6">Checkout</h1>
            <div className="flex gap-8">
              <div className="flex-1">
                <div className="border border-black p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Shipping Address
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      <TextInputField label="First Name" />
                      <TextInputField label="Last Name" />
                    </div>
                    <TextInputField label="Address Line 1" />
                    <TextInputField label="Address Line 2" optionalLabel />
                    <div className="grid grid-cols-3 gap-3">
                      <TextInputField label="City" />
                      <TextInputField label="County" />
                      <TextInputField label="Postcode" />
                    </div>
                    <TextInputField label="Phone Number" />
                  </div>
                </div>
                <div className="border border-black p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Shipping Method
                  </h2>
                  <div className="flex gap-3 mb-4">
                    <div
                      className="flex-1 border border-black p-3 text-center cursor-pointer"
                      onClick={() => navigate("/checkout-delivery")}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mx-auto mb-2 text-black"
                      >
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                      <p className="text-xs font-semibold text-black">
                        Delivery to Home
                      </p>
                    </div>
                    <div
                      className="flex-1 border-2 border-black p-3 text-center cursor-pointer"
                      onClick={() => setShowPickupDialog(true)}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mx-auto mb-2 text-black"
                      >
                        <path d="M3 3h18v4H3z" />
                        <path d="M3 7v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7" />
                        <path d="M9 21V12h6v9" />
                      </svg>
                      <p className="text-xs font-semibold text-black">
                        Collection from a Pick-up Point
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 relative">
                    <div
                      className="absolute top-2 right-0 h-8 w-16 border border-black bg-white"
                      style={{
                        background:
                          "linear-gradient(to top right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px)), linear-gradient(to bottom right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px))",
                      }}
                    />
                    <div className="mb-1">
                      <TextPlaceholder width="70%" />
                    </div>
                    <div className="mb-2">
                      <TextPlaceholder width="20%" />
                    </div>
                    <div className="mb-1">
                      <TextPlaceholder width="65%" />
                    </div>
                    <div className="mb-1">
                      <TextPlaceholder width="55%" />
                    </div>
                    <div>
                      <TextPlaceholder width="60%" />
                    </div>
                  </div>
                </div>
                <div className="border border-black p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Payment Method
                  </h2>
                  {/* Saved Cards */}
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        card: "Visa ••••1234",
                        isDefault: true,
                        selected: true,
                      },
                      {
                        card: "Mastercard ••••5678",
                        isDefault: false,
                        selected: false,
                      },
                    ].map(item => (
                      <div
                        key={item.card}
                        className={`border p-4 flex items-center justify-between ${item.selected ? "border-2 border-black" : "border-black"}`}
                      >
                        <div className="flex items-center gap-3">
                          <RadioButton selected={item.selected} />
                          <div className="w-8 h-8 border border-black bg-white relative flex-shrink-0">
                            <svg
                              viewBox="0 0 40 40"
                              className="absolute inset-0 w-full h-full"
                            >
                              <line
                                x1="0"
                                y1="0"
                                x2="40"
                                y2="40"
                                stroke="black"
                                strokeWidth="0.75"
                              />
                              <line
                                x1="40"
                                y1="0"
                                x2="0"
                                y2="40"
                                stroke="black"
                                strokeWidth="0.75"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-black">
                              {item.card}
                            </p>
                            <div className="mt-0.5">
                              <TextPlaceholder width="100px" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.isDefault && (
                            <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5">
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Payment Type Tabs */}
                  <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-black" />
                    <span className="text-xs text-black uppercase">
                      or pay with
                    </span>
                    <div className="flex-1 h-px bg-black" />
                  </div>
                  <div className="flex gap-3 mb-4">
                    {["Card", "PayPal", "Apple Pay", "Google Pay"].map(
                      (m, i) => (
                        <div
                          key={m}
                          className={`flex-1 border p-3 text-center text-xs font-medium cursor-pointer ${i === 0 ? "border-2 border-black text-black" : "border-black text-black"}`}
                        >
                          {m}
                        </div>
                      )
                    )}
                  </div>
                  {/* Card Form */}
                  <div className="flex flex-col gap-4">
                    <TextInputField label="Card Number" />
                    <div className="grid grid-cols-2 gap-3">
                      <TextInputField label="Expiry Date" />
                      <TextInputField label="CVC" />
                    </div>
                    <TextInputField label="Name on Card" />
                  </div>
                  {/* Save Card Checkbox */}
                  <div className="flex items-center gap-2 mt-4">
                    <Checkbox checked={true} />
                    <TextPlaceholder width="60%" />
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-shrink-0">
                {/* Seller Info */}
                <div className="border border-black p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar size="sm" />
                    <div className="flex-1">
                      <Link
                        to={ROUTES.SELLER_PROFILE}
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        <TextPlaceholder width="120px" />
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <RatingBar rating={4} />
                        <TextPlaceholder width="70px" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TextPlaceholder width="80px" />
                    <span className="text-xs text-black">&middot;</span>
                    <TextPlaceholder width="70px" />
                  </div>
                </div>
                {/* Order Summary */}
                <div className="border border-black p-5 sticky top-6">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Order Summary
                  </h2>
                  <div className="flex items-center gap-3 pb-4 border-b border-black">
                    <ImagePlaceholder className="w-20 h-20 flex-shrink-0" />
                    <div className="flex-1 flex flex-col gap-1">
                      <TextPlaceholder width="85%" />
                      <TextPlaceholder width="60%" />
                      <span className="text-sm font-semibold text-black mt-1">
                        &pound;8.00
                      </span>
                    </div>
                  </div>
                  <div className="py-4 flex flex-col gap-2 border-b border-black">
                    {["£8.00", "£0.50", "£2.26"].map((v, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <TextPlaceholder width="80px" />
                        <TextPlaceholder width="40px" />
                      </div>
                    ))}
                  </div>
                  <div className="py-4 flex justify-between">
                    <span className="text-sm font-semibold text-black">
                      Total
                    </span>
                    <span className="text-lg font-bold text-black">
                      &pound;10.76
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-xs text-black">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <TextPlaceholder width="160px" />
                  </div>
                  <ActionButton
                    to={ROUTES.ORDER_CONFIRMATION}
                    variant="primary"
                    full
                  >
                    Pay &pound;10.76
                  </ActionButton>
                  <div className="flex justify-center mt-3">
                    <TextPlaceholder width="200px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <PickupPointDialog
          open={showPickupDialog}
          onClose={() => setShowPickupDialog(false)}
        />
      </div>
    );
  }

  /* ── Detailed (exact original) ── */
  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />
      <div className="px-6 py-6 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-800 mb-6">Checkout</h1>
          <div className="flex gap-8">
            <div className="flex-1">
              <div
                className="border border-gray-200 rounded-lg p-5 mb-5"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-4">
                  Shipping Address
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <TextInputField label="First Name" placeholder="Jane" />
                    <TextInputField label="Last Name" placeholder="Smith" />
                  </div>
                  <TextInputField
                    label="Address Line 1"
                    placeholder="42 Primrose Lane"
                  />
                  <TextInputField label="Address Line 2" optionalLabel />
                  <div className="grid grid-cols-3 gap-3">
                    <TextInputField label="City" placeholder="London" />
                    <TextInputField
                      label="County"
                      placeholder="Greater London"
                    />
                    <TextInputField label="Postcode" placeholder="SW1A 1AA" />
                  </div>
                  <TextInputField
                    label="Phone Number"
                    placeholder="+44 7700 900000"
                  />
                </div>
              </div>
              <div
                className="border border-gray-200 rounded-lg p-5 mb-5"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-4">
                  Shipping Method
                </h2>
                <div className="flex gap-3 mb-4">
                  <div
                    className="flex-1 border border-gray-200 rounded p-3 text-center cursor-pointer"
                    onClick={() => navigate("/checkout-delivery")}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mx-auto mb-2 text-gray-400"
                    >
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    <p className="text-xs font-medium text-gray-400">
                      Delivery to Home
                    </p>
                  </div>
                  <div
                    className="flex-1 border-2 border-gray-800 bg-gray-50 rounded p-3 text-center cursor-pointer"
                    onClick={() => setShowPickupDialog(true)}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mx-auto mb-2 text-gray-700"
                    >
                      <path d="M3 3h18v4H3z" />
                      <path d="M3 7v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7" />
                      <path d="M9 21V12h6v9" />
                    </svg>
                    <p className="text-xs font-medium text-gray-700">
                      Collection from a Pick-up Point
                    </p>
                  </div>
                </div>
                <div className="pt-2 relative">
                  {isHifi ? (
                    <div className="absolute top-2 right-0">
                      <InPostIcon />
                    </div>
                  ) : (
                    <div className="absolute top-2 right-0 h-8 w-16 border border-gray-300 bg-gray-100 flex items-center justify-center text-gray-400 text-[9px]">
                      InPost
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-sm font-medium"
                      style={{ color: isHifi ? DS.onSurface : "#374151" }}
                    >
                      24/7 InPost Locker | Shop Pick-up
                    </span>
                  </div>
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
                  >
                    £2.26
                  </p>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                      className="flex-shrink-0"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                    </svg>
                    <span
                      className="text-xs"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#6b7280",
                      }}
                    >
                      24/7 InPost Locker - Pimlico Sainsbury's
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                      className="flex-shrink-0"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span
                      className="text-xs"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#6b7280",
                      }}
                    >
                      35 Warwick Way, SW1V 1QS, London
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                      className="flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span
                      className="text-xs"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#6b7280",
                      }}
                    >
                      At pick-up point in 7-9 business days
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="border border-gray-200 rounded-lg p-5 mb-5"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-4">
                  Payment Method
                </h2>
                {/* Saved Cards */}
                <div className="flex flex-col gap-3">
                  {[
                    {
                      card: "Visa \u2022\u2022\u2022\u20221234",
                      expiry: "Expires 08/27",
                      isDefault: true,
                      selected: true,
                      type: "visa",
                    },
                    {
                      card: "Mastercard \u2022\u2022\u2022\u20225678",
                      expiry: "Expires 11/26",
                      isDefault: false,
                      selected: false,
                      type: "mastercard",
                    },
                  ].map(item => (
                    <div
                      key={item.card}
                      className={`rounded p-4 flex items-center justify-between transition-colors ${item.selected ? "border-2 border-gray-800 bg-gray-50" : "border border-gray-200 hover:border-gray-300"}`}
                    >
                      <div className="flex items-center gap-3">
                        <RadioButton selected={item.selected} />
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                          {isHifi ? (
                            item.type === "visa" ? (
                              <VisaIcon size={28} />
                            ) : (
                              <MastercardIcon size={28} />
                            )
                          ) : (
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">
                            {item.card}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {item.expiry}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.isDefault && (
                          <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">
                            Default
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Payment Type Tabs */}
                <div className="flex items-center gap-3 my-5">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400 uppercase">
                    or pay with
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="flex gap-3 mb-4">
                  {isHifi ? (
                    <>
                      <div className="flex-1 border-2 border-gray-800 bg-gray-50 rounded p-3 flex items-center justify-center cursor-pointer">
                        <BankCardIcon size={20} />
                      </div>
                      <div className="flex-1 border border-gray-200 rounded p-3 flex items-center justify-center cursor-pointer">
                        <PayPalIcon size={20} />
                      </div>
                      <div className="flex-1 border border-gray-200 rounded p-3 flex items-center justify-center cursor-pointer">
                        <ApplePayIcon size={20} />
                      </div>
                      <div className="flex-1 border border-gray-200 rounded p-3 flex items-center justify-center cursor-pointer">
                        <GooglePayIcon size={20} />
                      </div>
                    </>
                  ) : (
                    ["Card", "PayPal", "Apple Pay", "Google Pay"].map(
                      (m, i) => (
                        <div
                          key={m}
                          className={`flex-1 border rounded p-3 text-center text-xs font-medium cursor-pointer ${i === 0 ? "border-2 border-gray-800 bg-gray-50 text-gray-800" : "border-gray-200 text-gray-400"}`}
                        >
                          {m}
                        </div>
                      )
                    )
                  )}
                </div>
                {/* Card Form */}
                <div className="flex flex-col gap-4">
                  <TextInputField
                    label="Card Number"
                    placeholder="1234 5678 9012 3456"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <TextInputField label="Expiry Date" placeholder="MM / YY" />
                    <TextInputField label="CVC" placeholder="123" />
                  </div>
                  <TextInputField
                    label="Name on Card"
                    placeholder="Jane Smith"
                  />
                </div>
                {/* Save Card Checkbox */}
                <div className="flex items-center gap-2 mt-4">
                  <Checkbox checked={true} />
                  <span className="text-xs text-gray-600">
                    Save this card for future purchases
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[320px] flex-shrink-0">
              {/* Seller Info */}
              <div
                className="border border-gray-200 rounded-lg p-4 mb-4"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {isHifi ? (
                    <Avatar size="sm" src={PROFILE_PHOTOS.p3} alt="Seller" />
                  ) : (
                    <Avatar size="sm" />
                  )}
                  <div className="flex-1">
                    <Link
                      to={ROUTES.SELLER_PROFILE}
                      className="text-sm font-semibold text-gray-700 hover:underline"
                    >
                      sarah_mum_of_3
                    </Link>
                    <div className="flex items-center gap-2">
                      <RatingBar rating={4} />
                      <span className="text-sm text-gray-400">
                        4.2 (47 reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>82 items listed</span>
                  <span>&middot;</span>
                  <span>Joined Jan 2024</span>
                </div>
              </div>
              {/* Order Summary */}
              <div
                className="border border-gray-200 rounded-lg p-5 sticky top-6"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-4">
                  Order Summary
                </h2>
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <ImagePlaceholder
                    label="Item"
                    className="w-20 h-20 rounded flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Boys Striped Cotton T-Shirt
                    </p>
                    <p className="text-xs text-gray-400">
                      Next Kids &middot; 4 years / 104 cm
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      &pound;8.00
                    </p>
                  </div>
                </div>
                <div className="py-4 flex flex-col gap-2 border-b border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Item price</span>
                    <span className="text-gray-700">&pound;8.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Buyer Protection</span>
                    <span className="text-gray-700">&pound;0.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      InPost Locker (Collection)
                    </span>
                    <span className="text-gray-700">&pound;2.26</span>
                  </div>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-sm font-semibold text-gray-800">
                    Total
                  </span>
                  <span className="text-lg font-bold text-gray-800">
                    &pound;10.76
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Covered by Buyer Protection.</span>
                </div>
                <ActionButton
                  to={ROUTES.ORDER_CONFIRMATION}
                  variant="primary"
                  full
                >
                  Pay &pound;10.76
                </ActionButton>
                <p className="text-[10px] text-gray-400 text-center mt-3 leading-relaxed">
                  By completing this purchase you agree to our{" "}
                  <Link
                    to={ROUTES.TERMS}
                    className="underline font-medium"
                    style={{ color: isHifi ? DS.primary : "#4b5563" }}
                  >
                    Terms &amp; Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <PickupPointDialog
        open={showPickupDialog}
        onClose={() => setShowPickupDialog(false)}
      />
    </div>
  );
}
