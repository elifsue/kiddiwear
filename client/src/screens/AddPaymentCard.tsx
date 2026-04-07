import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { Checkbox } from "@/components/Checkbox";
import { PageHeader } from "@/components/PageHeader";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";

export default function AddPaymentCard() {
  const { isLofi, isHifi } = useFidelityMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />

        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <PageHeader
              title="Add Payment Card"
              backTo={ROUTES.SETTINGS_PROFILE}
            />
            <TextPlaceholder width="300px" className="mb-6" />

            {/* Card Details Form */}
            <div className="border border-black p-5 mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-black">
                    Card Number
                  </label>
                  <div className="h-10 border border-black px-3 flex items-center" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black">
                      Expiry Date
                    </label>
                    <div className="h-10 border border-black px-3 flex items-center" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black">
                      CVC
                    </label>
                    <div className="h-10 border border-black px-3 flex items-center" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-black">
                    Name on Card
                  </label>
                  <div className="h-10 border border-black px-3 flex items-center" />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox checked={true} />
                  <TextPlaceholder width="180px" />
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="border border-black p-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="100%"
                      stroke="black"
                      strokeWidth="1"
                    />
                    <line
                      x1="100%"
                      y1="0"
                      x2="0"
                      y2="100%"
                      stroke="black"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black mb-1">
                    Your payment details are secure
                  </p>
                  <TextPlaceholder lines={2} />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <ActionButton to={ROUTES.SETTINGS_PROFILE} variant="secondary">
                Cancel
              </ActionButton>
              <ActionButton to={ROUTES.SETTINGS_PROFILE} variant="primary">
                Add Payment Card
              </ActionButton>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  /* ── Detailed (Mid-Fi / Hi-Fi) ── */
  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />

      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <PageHeader
            title="Add Payment Card"
            backTo={ROUTES.SETTINGS_PROFILE}
          />
          <p className="text-sm text-gray-400 mb-6">
            Add a new payment card to use for purchases on Kiddiwear.
          </p>

          {/* Card Details Form */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex flex-col gap-4">
              <TextInputField
                label="Card Number"
                placeholder="1234 5678 9012 3456"
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInputField label="Expiry Date" placeholder="MM / YY" />
                <TextInputField label="CVC" placeholder="123" />
              </div>
              <TextInputField label="Name on Card" placeholder="Jane Smith" />
              <div className="flex items-center gap-2">
                <Checkbox checked={true} />
                <span className="text-xs text-gray-600">
                  Set as default payment method
                </span>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div
            className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0 bg-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-500"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Your payment details are secure
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  All card information is encrypted and stored securely using
                  industry-standard PCI DSS compliance. Kiddiwear never stores
                  your full card number or CVC.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <ActionButton to={ROUTES.SETTINGS_PROFILE} variant="secondary">
              Cancel
            </ActionButton>
            <ActionButton to={ROUTES.SETTINGS_PROFILE} variant="primary">
              Add Payment Card
            </ActionButton>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
