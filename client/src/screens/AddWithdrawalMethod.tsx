import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { SectionHeader } from "@/components/SectionHeader";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { RadioButton } from "@/components/RadioButton";
import { Checkbox } from "@/components/Checkbox";
import { PageHeader } from "@/components/PageHeader";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";
import { BankTransferIcon, PayPalIcon } from "@/icons/PaymentIcons";

export default function AddWithdrawalMethod() {
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
              title="Add Withdrawal Method"
              backTo={ROUTES.SETTINGS_PROFILE}
            />
            <TextPlaceholder width="300px" className="mb-6" />

            {/* Method Selection */}
            <SectionHeader>Choose Method</SectionHeader>
            <div className="flex flex-col gap-3 mt-3 mb-5">
              {[
                { method: "Bank Transfer", selected: true },
                { method: "PayPal", selected: false },
              ].map(item => (
                <div
                  key={item.method}
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
                        {item.method}
                      </p>
                      <div className="mt-0.5">
                        <TextPlaceholder width="140px" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bank Transfer Form */}
            <div className="mt-6" />
            <SectionHeader>Bank Account Details</SectionHeader>
            <div className="border border-black p-5 mt-3 mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-black">
                    Account Holder Name
                  </label>
                  <div className="h-10 border border-black px-3 flex items-center" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black">
                      Sort Code
                    </label>
                    <div className="h-10 border border-black px-3 flex items-center"></div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black">
                      Account Number
                    </label>
                    <div className="h-10 border border-black px-3 flex items-center"></div>
                  </div>
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
                    Your details are secure
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
                Add Withdrawal Method
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
            title="Add Withdrawal Method"
            backTo={ROUTES.SETTINGS_PROFILE}
          />
          <p className="text-sm text-gray-400 mb-6">
            Choose how you'd like to receive your earnings from Kiddiwear.
          </p>

          {/* Method Selection */}
          <SectionHeader>Choose Method</SectionHeader>
          <div className="flex flex-col gap-3 mt-3 mb-5">
            {[
              {
                method: "Bank Transfer",
                desc: "Direct transfer to your UK bank account. Takes 1-3 business days.",
                icon: "bank",
                selected: true,
              },
              {
                method: "PayPal",
                desc: "Instant transfer to your PayPal account. Requires a verified PayPal email.",
                icon: "paypal",
                selected: false,
              },
            ].map(item => (
              <div
                key={item.method}
                className={`rounded p-4 flex items-center justify-between transition-colors ${item.selected ? "border-2 border-gray-800 bg-gray-50" : "border border-gray-200 hover:border-gray-300"}`}
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi
                    ? item.selected
                      ? DS.primary
                      : DS.outlineVariant
                    : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  <RadioButton selected={item.selected} />
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {isHifi ? (
                      item.icon === "bank" ? (
                        <BankTransferIcon size={28} />
                      ) : (
                        <PayPalIcon size={28} />
                      )
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {item.method}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bank Transfer Form */}
          <div className="mt-8" />
          <SectionHeader>Bank Account Details</SectionHeader>
          <div
            className="border border-gray-200 rounded-lg p-5 mt-3 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex flex-col gap-4">
              <TextInputField
                label="Account Holder Name"
                placeholder="e.g. Jane Smith"
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInputField label="Sort Code" placeholder="XX-XX-XX" />
                <TextInputField label="Account Number" placeholder="XXXXXXXX" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox checked={true} />
                <span className="text-xs text-gray-600">
                  Set as default withdrawal method
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
                  Your details are secure
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  All banking information is encrypted and stored securely. We
                  use industry-standard security protocols to protect your
                  financial data. Kiddiwear will never share your details with
                  third parties.
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
              Add Withdrawal Method
            </ActionButton>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
