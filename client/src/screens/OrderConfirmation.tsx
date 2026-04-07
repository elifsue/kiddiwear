import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";

export default function OrderConfirmation() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-black flex items-center justify-center mx-auto mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">
              Order Confirmed!
            </h1>
            <div className="flex justify-center mb-8">
              <TextPlaceholder width="180px" />
            </div>
            <div className="border border-black p-5 text-left mb-5">
              <h2 className="text-sm font-semibold text-black mb-1">
                Order #TT-20260405-7823
              </h2>
              <TextPlaceholder width="100px" className="mb-4" />
              <div className="flex items-center gap-3 pb-4 border-b border-black">
                <ImagePlaceholder className="w-20 h-20 flex-shrink-0" />
                <div className="flex-1">
                  <TextPlaceholder width="85%" className="mb-1" />
                  <TextPlaceholder width="60%" />
                </div>
                <span className="text-sm font-semibold text-black">
                  &pound;8.00
                </span>
              </div>
              <div className="py-3 flex flex-col gap-2 border-b border-black text-sm">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex justify-between">
                    <TextPlaceholder width="100px" />
                    <TextPlaceholder width="40px" />
                  </div>
                ))}
              </div>
              <div className="pt-3 flex justify-between">
                <span className="text-sm font-semibold text-black">
                  Total Paid
                </span>
                <span className="text-lg font-bold text-black">
                  &pound;11.49
                </span>
              </div>
            </div>
            <div className="border border-black p-5 text-left mb-5">
              <h2 className="text-sm font-semibold text-black mb-3">
                Shipping To
              </h2>
              <TextPlaceholder width="120px" className="mb-1" />
              <TextPlaceholder width="180px" className="mb-1" />
              <TextPlaceholder width="150px" className="mb-1" />
              <TextPlaceholder width="200px" className="mt-2" />
            </div>
            <div className="border border-black p-5 text-left mb-5">
              <h2 className="text-sm font-semibold text-black mb-3">
                What Happens Next?
              </h2>
              <div className="flex flex-col gap-3">
                {[1, 2, 3].map(step => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-black">
                        {step}
                      </span>
                    </div>
                    <TextPlaceholder width={`${70 + step * 5}%`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <ActionButton
                to={ROUTES.PRODUCTS}
                variant="secondary"
                className="flex-1"
              >
                Continue Shopping
              </ActionButton>
              <ActionButton
                to={ROUTES.MY_PURCHASES}
                variant="primary"
                className="flex-1"
              >
                View My Orders
              </ActionButton>
            </div>
          </div>
        </div>
        <Footer />
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
        <div className="max-w-xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{
              background: isHifi ? DS.primary : "#e5e7eb",
              border: isHifi ? "none" : "2px solid #d1d5db",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{ color: isHifi ? DS.onPrimary : "#6b7280" }}
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Thank you for your purchase.
          </p>
          <div
            className="border border-gray-200 rounded-lg p-5 text-left mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-1">
              Order #TT-20260405-7823
            </h2>
            <p className="text-xs text-gray-400 mb-4">
              Seller:{" "}
              <Link
                to={ROUTES.SELLER_PROFILE}
                className="underline hover:text-gray-500"
              >
                sarah_mum_of_3
              </Link>
            </p>
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
                  Next Kids &middot; 4 years / 104 cm &middot; Very good
                </p>
              </div>
              <span className="text-sm font-semibold text-gray-800">
                &pound;8.00
              </span>
            </div>
            <div className="py-3 flex flex-col gap-2 border-b border-gray-100 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Item price</span>
                <span className="text-gray-700">&pound;8.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Buyer Protection</span>
                <span className="text-gray-700">&pound;0.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Shipping (Royal Mail 2nd Class)
                </span>
                <span className="text-gray-700">&pound;2.99</span>
              </div>
            </div>
            <div className="pt-3 flex justify-between">
              <span className="text-sm font-semibold text-gray-800">
                Total Paid
              </span>
              <span className="text-lg font-bold text-gray-800">
                &pound;11.49
              </span>
            </div>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 text-left mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              Shipping To
            </h2>
            <p className="text-sm text-gray-600">Jane Smith</p>
            <p className="text-sm text-gray-500">42 Primrose Lane</p>
            <p className="text-sm text-gray-500">London, SW1A 1AA</p>
            <p className="text-xs text-gray-400 mt-2">
              Estimated delivery: 3-5 working days.
            </p>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 text-left mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              What Happens Next?
            </h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  step: "1",
                  text: "The seller has been notified and will ship your item within 5 working days.",
                },
                {
                  step: "2",
                  text: "You'll receive a tracking number once the item has been shipped.",
                },
                {
                  step: "3",
                  text: "When you receive the item, leave a review to help other buyers!",
                },
              ].map(s => (
                <div key={s.step} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isHifi ? DS.secondaryContainer : "#f3f4f6",
                      border: isHifi ? "none" : "1px solid #d1d5db",
                    }}
                  >
                    <span
                      className="text-xs font-medium"
                      style={{
                        color: isHifi ? DS.onSecondaryContainer : "#6b7280",
                      }}
                    >
                      {s.step}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <ActionButton
              to={ROUTES.PRODUCTS}
              variant="secondary"
              className="flex-1"
            >
              Continue Shopping
            </ActionButton>
            <ActionButton
              to={ROUTES.MY_PURCHASES}
              variant="primary"
              className="flex-1"
            >
              View My Orders
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
