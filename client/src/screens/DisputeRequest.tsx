import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { RadioButton } from "@/components/RadioButton";
import { PageHeader } from "@/components/PageHeader";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PhotoInputField } from "@/components/PhotoInputField";
import { Link } from "wouter";

export default function DisputeRequest() {
  const { isLofi, isHifi } = useFidelityMode();

  const reasons = [
    "Item not received",
    "Item not as described",
    "Item damaged in transit",
    "Wrong item sent",
    "Item is counterfeit",
    "Other",
  ];

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <PageHeader title="Submit a Dispute" backTo={ROUTES.MY_PURCHASES} />
            <TextPlaceholder width="260px" className="mb-6" />

            {/* Order Summary */}
            <div className="border border-black p-5 mb-5">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-sm font-semibold text-black">
                  Order #TT-20260405-7823
                </h2>
                <TextPlaceholder width="70px" />
              </div>
              <TextPlaceholder width="100px" className="mb-4" />
              <div className="flex items-center gap-3">
                <ImagePlaceholder className="w-20 h-20 flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-1">
                  <TextPlaceholder width="85%" />
                  <TextPlaceholder width="60%" />
                  <span className="text-sm font-semibold text-black mt-1">
                    &pound;8.00
                  </span>
                </div>
              </div>
            </div>

            {/* Reason Selection */}
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">
                Reason for Dispute
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { width: "140px", selected: false },
                  { width: "160px", selected: true },
                  { width: "170px", selected: false },
                  { width: "130px", selected: false },
                  { width: "145px", selected: false },
                  { width: "60px", selected: false },
                ].map((opt, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <RadioButton selected={opt.selected} />
                    <TextPlaceholder width={opt.width} />
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-3">
                Describe the Issue
              </h2>
              <div className="border border-black h-28" />
            </div>

            {/* Photo Evidence */}
            <div className="border border-black p-5 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-sm font-semibold text-black">
                  Upload Evidence
                </h2>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5">
                  Recommended
                </span>
              </div>
              <TextPlaceholder width="220px" className="mb-3" />
              <div className="flex gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <PhotoInputField
                    key={i}
                    variant="slot"
                    iconSize="small"
                    className="!aspect-auto w-20 h-20"
                  />
                ))}
              </div>
            </div>

            {/* Desired Resolution */}
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">
                Desired Resolution
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Full refund", selected: true },
                  { label: "Partial refund", selected: false },
                  { label: "Return & refund", selected: false },
                ].map(opt => (
                  <div
                    key={opt.label}
                    className={`flex items-center gap-3 p-3 border ${opt.selected ? "border-2 border-black" : "border-black"}`}
                  >
                    <RadioButton selected={opt.selected} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-black">
                        {opt.label}
                      </p>
                      <div className="mt-0.5">
                        <TextPlaceholder width="60%" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buyer Protection Info */}
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
                    Covered by Buyer Protection
                  </p>
                  <TextPlaceholder lines={2} />
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-3">
                What Happens Next?
              </h2>
              <div className="flex flex-col gap-3">
                {[1, 2, 3, 4].map(step => (
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

            {/* Actions */}
            <div className="flex gap-3">
              <ActionButton
                to={ROUTES.MY_PURCHASES}
                variant="outlined"
                className="flex-1"
              >
                Cancel
              </ActionButton>
              <ActionButton
                to={ROUTES.DISPUTE_STATUS}
                variant="primary"
                className="flex-1"
              >
                Submit Dispute
              </ActionButton>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Mid-Fi ── */
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
          <PageHeader title="Submit a Dispute" backTo={ROUTES.MY_PURCHASES} />
          <p className="text-sm text-gray-400 mb-6">
            Tell us what went wrong and we'll help resolve it.
          </p>

          {/* Order Summary */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-gray-700">
                Order #TT-20260405-7823
              </span>
              <span className="text-xs text-gray-400">5 Apr 2026</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Seller:{" "}
              <Link
                to={ROUTES.SELLER_PROFILE}
                className="underline hover:text-gray-500"
              >
                sarah_mum_of_3
              </Link>
            </p>
            <div className="flex items-center gap-3">
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
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  &pound;8.00
                </p>
              </div>
            </div>
          </div>

          {/* Reason Selection */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Reason for Dispute
            </h2>
            <div className="flex flex-col gap-3">
              {reasons.map((reason, i) => (
                <label
                  key={reason}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <RadioButton selected={i === 1} />
                  <span className="text-sm font-normal text-gray-700">
                    {reason}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-3">
              Describe the Issue
            </h2>
            <textarea
              className="w-full px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 resize-none outline-none border border-gray-300 rounded"
              placeholder="Please describe the issue in detail — what did you expect vs. what you received? Include any relevant information that will help us investigate."
              rows={5}
              readOnly
            />
            <p className="text-xs text-gray-400 mt-2">
              Minimum 20 characters. Be as specific as possible.
            </p>
          </div>

          {/* Photo Evidence */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-sm font-semibold text-gray-700">
                Upload Evidence
              </h2>
              <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">
                Recommended
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              Photos help us resolve disputes faster. Show the issue clearly.
            </p>
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <PhotoInputField
                  key={i}
                  variant="slot"
                  iconSize="small"
                  className="!aspect-auto w-20 h-20"
                />
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Up to 4 photos. JPG, PNG, or HEIC. Max 10MB each.
            </p>
          </div>

          {/* Desired Resolution */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Desired Resolution
            </h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Full refund",
                  desc: "Get a complete refund to your original payment method.",
                  selected: true,
                },
                {
                  label: "Partial refund",
                  desc: "Negotiate a partial refund while keeping the item.",
                  selected: false,
                },
                {
                  label: "Return & refund",
                  desc: "Return the item to the seller and receive a full refund.",
                  selected: false,
                },
              ].map(opt => (
                <div
                  key={opt.label}
                  className={`flex items-center gap-3 p-3 rounded ${opt.selected ? "border-2 border-gray-800 bg-gray-50" : "border border-gray-200"}`}
                >
                  <RadioButton selected={opt.selected} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">
                      {opt.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Buyer Protection Info */}
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Covered by Buyer Protection
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Your purchase is protected. We'll review your dispute within
                  48 hours and work with both parties to reach a fair
                  resolution. If the seller doesn't respond within 3 days, we'll
                  automatically rule in your favour.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Info */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              What Happens Next?
            </h2>
            <div className="flex flex-col gap-3">
              {[
                {
                  step: "1",
                  text: "We'll review your dispute and notify the seller within 24 hours.",
                },
                {
                  step: "2",
                  text: "The seller has 3 days to respond with their side of the story.",
                },
                {
                  step: "3",
                  text: "Our team will review all evidence and make a decision.",
                },
                {
                  step: "4",
                  text: "If resolved in your favour, your refund will be processed within 5 working days.",
                },
              ].map(s => (
                <div key={s.step} className="flex items-start gap-3">
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

          {/* Actions */}
          <div className="flex gap-3">
            <ActionButton
              to={ROUTES.MY_PURCHASES}
              variant="secondary"
              className="flex-1"
            >
              Cancel
            </ActionButton>
            <ActionButton
              to={ROUTES.DISPUTE_STATUS}
              variant="primary"
              className="flex-1"
            >
              Submit Dispute
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
