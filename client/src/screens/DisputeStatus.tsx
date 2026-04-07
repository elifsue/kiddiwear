import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { PageHeader } from "@/components/PageHeader";
import { BadgeLabel } from "@/components/BadgeLabel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PhotoInputField } from "@/components/PhotoInputField";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";

const KIDDIWEAR_LOGO =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/zeAnyiNIJppqyNeF.png";

const timelineSteps = [
  { label: "Dispute Submitted", date: "5 Apr 2026, 14:32", done: true },
  { label: "Under Review", date: "5 Apr 2026, 15:00", done: true },
  { label: "Seller Notified", date: "5 Apr 2026, 15:05", done: true },
  {
    label: "Awaiting Seller Response",
    date: "Due by 8 Apr 2026",
    done: false,
    active: true,
  },
  { label: "Decision", date: "", done: false },
  { label: "Resolution", date: "", done: false },
];

const messages = [
  {
    from: "system",
    time: "5 Apr, 14:32",
    text: "Dispute submitted. Our team will review your case within 24 hours.",
  },
  {
    from: "system",
    time: "5 Apr, 15:00",
    text: "Your dispute is now under review. We've notified the seller and they have 3 days to respond.",
  },
  {
    from: "buyer",
    time: "5 Apr, 15:10",
    text: "I've added additional photos showing the damage to the collar area.",
  },
  {
    from: "seller",
    time: "6 Apr, 09:22",
    text: "I'm sorry about this. The item was in good condition when I shipped it. It may have been damaged in transit.",
  },
  {
    from: "system",
    time: "6 Apr, 09:25",
    text: "Seller has responded. Our team is reviewing all evidence provided by both parties.",
  },
];

export default function DisputeStatus() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <PageHeader title="Dispute Status" backTo={ROUTES.MY_PURCHASES} />
            <TextPlaceholder width="180px" className="mb-6" />

            <div className="grid grid-cols-3 gap-6">
              {/* Left Column: Timeline + Messages */}
              <div className="col-span-2">
                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-5">
                  <BadgeLabel variant="alert" size="large">
                    In Progress
                  </BadgeLabel>
                  <TextPlaceholder width="140px" />
                </div>

                {/* Progress Timeline */}
                <div className="border border-black p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Progress
                  </h2>
                  <div className="flex flex-col gap-0">
                    {timelineSteps.map((step, i) => (
                      <div key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${step.done ? "bg-black border-black" : step.active ? "bg-white border-black" : "bg-white border-black"}`}
                          >
                            {step.done && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            {step.active && (
                              <div className="w-2.5 h-2.5 rounded-full bg-black" />
                            )}
                          </div>
                          {i < timelineSteps.length - 1 && (
                            <div
                              className={`w-px flex-1 ${step.done ? "bg-black" : "bg-black opacity-30"}`}
                            />
                          )}
                        </div>
                        <div
                          className={i < timelineSteps.length - 1 ? "pb-8" : ""}
                        >
                          <p
                            className={`text-sm ${step.done || step.active ? "font-semibold text-black" : "text-black opacity-50"}`}
                          >
                            {step.label}
                          </p>
                          {step.date && <TextPlaceholder width="120px" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Communication Thread */}
                <div className="border border-black p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">
                    Communication
                  </h2>
                  <div className="flex flex-col gap-4">
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex gap-2 max-w-[80%] ${msg.from === "buyer" ? "ml-auto flex-row-reverse" : ""}`}
                      >
                        {/* Avatar */}
                        {msg.from === "system" ? (
                          <div className="w-8 h-8 flex-shrink-0 mt-0.5 border border-black bg-white flex items-center justify-center">
                            <span className="text-[8px] font-bold text-black">
                              KW
                            </span>
                          </div>
                        ) : msg.from === "buyer" ? (
                          <Avatar size="xs" className="mt-0.5" />
                        ) : (
                          <Avatar size="xs" className="mt-0.5" />
                        )}
                        <div>
                          <div
                            className={`border border-black px-3 py-2 bg-white`}
                          >
                            <TextPlaceholder
                              width={
                                msg.from === "buyer"
                                  ? "180px"
                                  : msg.from === "seller"
                                    ? "220px"
                                    : "240px"
                              }
                            />
                          </div>
                          <div
                            className={msg.from === "buyer" ? "text-right" : ""}
                          >
                            <TextPlaceholder width="40px" className="mt-1" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Reply Box */}
                  <div className="mt-4 pt-4 border-t border-black">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-10 border border-black bg-white" />
                      <ActionButton variant="primary">Send</ActionButton>
                    </div>
                  </div>
                </div>

                {/* Buyer Protection */}
                <div className="border border-black p-4">
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
                        Buyer Protection Active
                      </p>
                      <TextPlaceholder lines={2} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Order + Details */}
              <div className="col-span-1">
                {/* Order Summary */}
                <div className="border border-black p-4 mb-4">
                  <h2 className="text-sm font-semibold text-black mb-3">
                    Order #TT-20260330-5210
                  </h2>
                  <ImagePlaceholder className="w-full aspect-square mb-3" />
                  <TextPlaceholder width="85%" className="mb-1" />
                  <TextPlaceholder width="60%" className="mb-2" />
                  <div className="pt-2 border-t border-black">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-black">Total Paid</span>
                      <span className="text-sm font-bold text-black">
                        &pound;12.00
                      </span>
                    </div>
                  </div>
                </div>

                {/* Seller Info */}
                <div className="border border-black p-4 mb-4">
                  <h2 className="text-sm font-semibold text-black mb-3">
                    Seller
                  </h2>
                  <Link
                    to={ROUTES.SELLER_PROFILE}
                    className="flex items-center gap-3"
                  >
                    <Avatar size="sm" />
                    <div className="flex-1">
                      <TextPlaceholder width="80%" className="mb-1" />
                      <TextPlaceholder width="50%" />
                    </div>
                  </Link>
                </div>

                {/* Dispute Details */}
                <div className="border border-black p-4 mb-4">
                  <h2 className="text-sm font-semibold text-black mb-3">
                    Dispute Details
                  </h2>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-black">Dispute ID</span>
                      <TextPlaceholder width="80px" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Reason</span>
                      <TextPlaceholder width="100px" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Resolution</span>
                      <TextPlaceholder width="70px" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Submitted</span>
                      <TextPlaceholder width="80px" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Deadline</span>
                      <TextPlaceholder width="80px" />
                    </div>
                  </div>
                </div>

                {/* Evidence */}
                <div className="border border-black p-4 mb-4">
                  <h2 className="text-sm font-semibold text-black mb-3">
                    Your Evidence
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3].map(i => (
                      <ImagePlaceholder
                        key={i}
                        className="w-full aspect-square"
                      />
                    ))}
                    <PhotoInputField variant="slot" iconSize="small" />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <ActionButton to={ROUTES.MESSAGES} variant="secondary" full>
                    Message Seller Directly
                  </ActionButton>
                  <ActionButton variant="outlined" full>
                    Cancel Dispute
                  </ActionButton>
                </div>
              </div>
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <PageHeader title="Dispute Status" backTo={ROUTES.MY_PURCHASES} />
          <p className="text-sm text-gray-400 mb-6">
            Dispute #DSP-20260330-001
          </p>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column: Timeline + Messages */}
            <div className="col-span-2">
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-5">
                <BadgeLabel variant="alert" size="large">
                  In Progress
                </BadgeLabel>
                <span className="text-xs text-gray-400">
                  Estimated resolution: 8 Apr 2026
                </span>
              </div>

              {/* Progress Timeline */}
              <div
                className="border border-gray-200 rounded-lg p-5 mb-5"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-4">
                  Progress
                </h2>
                <div className="flex flex-col gap-0">
                  {timelineSteps.map((step, i) => (
                    <div key={step.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${step.done ? "bg-gray-700 border-gray-700" : step.active ? "bg-white border-gray-700" : "bg-white border-gray-300"}`}
                          style={
                            step.done || step.active
                              ? {
                                  background: isHifi
                                    ? step.done
                                      ? DS.primary
                                      : undefined
                                    : undefined,
                                  borderColor: isHifi ? DS.primary : undefined,
                                }
                              : undefined
                          }
                        >
                          {step.done && (
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                          {step.active && (
                            <div
                              className="w-2.5 h-2.5 rounded-full bg-gray-700"
                              style={{
                                background: isHifi ? DS.primary : undefined,
                              }}
                            />
                          )}
                        </div>
                        {i < timelineSteps.length - 1 && (
                          <div
                            className={`w-px flex-1 ${step.done ? "bg-gray-700" : "bg-gray-200"}`}
                            style={{
                              background: isHifi
                                ? step.done
                                  ? DS.primary
                                  : undefined
                                : undefined,
                            }}
                          />
                        )}
                      </div>
                      <div
                        className={i < timelineSteps.length - 1 ? "pb-8" : ""}
                      >
                        <p
                          className={`text-sm ${step.done || step.active ? "font-semibold text-gray-800" : "text-gray-400"}`}
                        >
                          {step.label}
                        </p>
                        {step.date && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            {step.date}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Communication Thread */}
              <div
                className="border rounded-lg p-5 mb-5"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : "#e5e7eb",
                }}
              >
                <h2
                  className="text-sm font-semibold mb-4"
                  style={{ color: isHifi ? DS.onSurface : "#374151" }}
                >
                  Communication
                </h2>
                <div className="flex flex-col gap-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 max-w-[80%] ${msg.from === "buyer" ? "ml-auto flex-row-reverse" : ""}`}
                    >
                      {/* Avatar */}
                      {msg.from === "system" ? (
                        isHifi ? (
                          <img
                            src={KIDDIWEAR_LOGO}
                            alt="Kiddiwear"
                            className="w-8 h-8 object-contain flex-shrink-0 mt-0.5"
                          />
                        ) : (
                          <div className="w-8 h-8 flex-shrink-0 mt-0.5 rounded bg-gray-800 flex items-center justify-center">
                            <span className="text-[8px] font-bold text-white">
                              KW
                            </span>
                          </div>
                        )
                      ) : msg.from === "buyer" ? (
                        isHifi ? (
                          <Avatar
                            size="xs"
                            src={PROFILE_PHOTOS.p1}
                            alt="You"
                            className="mt-0.5"
                          />
                        ) : (
                          <Avatar size="xs" className="mt-0.5" />
                        )
                      ) : isHifi ? (
                        <Avatar
                          size="xs"
                          src={PROFILE_PHOTOS.p12}
                          alt="Seller"
                          className="mt-0.5"
                        />
                      ) : (
                        <Avatar size="xs" className="mt-0.5" />
                      )}
                      <div>
                        <div
                          className={`rounded-lg px-3 py-2 ${
                            msg.from === "buyer"
                              ? "rounded-tr-none"
                              : "rounded-tl-none"
                          }`}
                          style={{
                            background:
                              msg.from === "buyer"
                                ? isHifi
                                  ? DS.primary
                                  : "#1f2937"
                                : msg.from === "seller"
                                  ? isHifi
                                    ? DS.surfaceContainerLow
                                    : "#f3f4f6"
                                  : isHifi
                                    ? DS.secondaryContainer
                                    : "#f0f0f0",
                          }}
                        >
                          <p
                            className="text-sm leading-relaxed"
                            style={{
                              color:
                                msg.from === "buyer"
                                  ? isHifi
                                    ? DS.onPrimary
                                    : "#ffffff"
                                  : msg.from === "seller"
                                    ? isHifi
                                      ? DS.onSurface
                                      : "#374151"
                                    : isHifi
                                      ? DS.onSecondaryContainer
                                      : "#374151",
                            }}
                          >
                            {msg.text}
                          </p>
                        </div>
                        <p
                          className={`text-[10px] mt-1 ${msg.from === "buyer" ? "text-right" : ""}`}
                          style={{
                            color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                          }}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Reply Box */}
                <div
                  className="mt-4 pt-4 border-t"
                  style={{
                    borderColor: isHifi ? DS.outlineVariant : "#f3f4f6",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex-1 h-10 border rounded px-3 flex items-center"
                      style={{ borderColor: isHifi ? DS.outline : "#d1d5db" }}
                    >
                      <span
                        className="text-sm"
                        style={{
                          color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                        }}
                      >
                        Add a message or additional information...
                      </span>
                    </div>
                    <button
                      className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: isHifi ? DS.primary : "#1f2937" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </div>
                  <p
                    className="text-[10px] mt-2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                  >
                    Messages are visible to both parties and our support team.
                  </p>
                </div>
              </div>

              {/* Buyer Protection */}
              <div
                className="border border-gray-200 rounded-lg p-4 bg-gray-50"
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
                      Buyer Protection Active
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Your purchase is protected. If the seller doesn't respond
                      by 8 Apr, we'll automatically rule in your favour.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Order + Details */}
            <div className="col-span-1">
              {/* Order Summary */}
              <div
                className="border border-gray-200 rounded-lg p-4 mb-4"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-3">
                  Order #TT-20260330-5210
                </h2>
                <ImagePlaceholder
                  label="Item"
                  className="w-full aspect-square rounded mb-3"
                />
                <p className="text-sm font-medium text-gray-700 mb-0.5">
                  Girls Knitted Cardigan
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  M&amp;S &middot; 24–36 months / 92 cm &middot; Good
                </p>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-gray-500">Total Paid</span>
                    <span className="text-sm font-bold text-gray-800">
                      &pound;12.00
                    </span>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div
                className="border border-gray-200 rounded-lg p-4 mb-4"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-3">
                  Seller
                </h2>
                <div className="flex items-center gap-3">
                  {isHifi ? (
                    <Avatar size="sm" src={PROFILE_PHOTOS.p12} alt="Seller" />
                  ) : (
                    <ImagePlaceholder
                      label=""
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <Link
                      to={ROUTES.SELLER_PROFILE}
                      className="text-sm font-medium text-gray-700 hover:underline"
                    >
                      mum_of_twins
                    </Link>
                    <p className="text-xs text-gray-400">
                      4.4 &#9733; &middot; 32 items sold
                    </p>
                  </div>
                </div>
              </div>

              {/* Dispute Details */}
              <div
                className="border border-gray-200 rounded-lg p-4 mb-4"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-3">
                  Dispute Details
                </h2>
                <div className="flex flex-col gap-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dispute ID</span>
                    <span className="text-gray-700 font-medium">
                      DSP-20260330-001
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Reason</span>
                    <span className="text-gray-700 font-medium">
                      Not as described
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Resolution</span>
                    <span className="text-gray-700 font-medium">
                      Full refund
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Submitted</span>
                    <span className="text-gray-700 font-medium">
                      5 Apr 2026
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deadline</span>
                    <span className="text-gray-700 font-medium">
                      8 Apr 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Evidence */}
              <div
                className="border border-gray-200 rounded-lg p-4 mb-4"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <h2 className="text-sm font-semibold text-gray-700 mb-3">
                  Your Evidence
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {["Photo 1", "Photo 2", "Photo 3"].map(label => (
                    <ImagePlaceholder
                      key={label}
                      label={label}
                      className="w-full aspect-square rounded"
                    />
                  ))}
                  <PhotoInputField variant="slot" iconSize="small" />
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-col gap-2">
                <ActionButton to={ROUTES.MESSAGES} variant="secondary" full>
                  Message Seller Directly
                </ActionButton>
                <ActionButton variant="outlined" full>
                  Cancel Dispute
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
