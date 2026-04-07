import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion } from "@/components/Accordion";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { SelectInputField } from "@/components/SelectInputField";
import { TextInputFieldMultiLine } from "@/components/TextInputFieldMultiLine";
import { SearchBar } from "@/components/SearchBar";
import { AttachmentsInputField } from "@/components/AttachmentsInputField";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function HelpCentre() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-10 bg-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-2xl font-bold text-black mb-3">
              How can we help?
            </h1>
            <div className="max-w-lg mx-auto">
              <SearchBar placeholder="Search for help articles..." />
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>Browse by Topic</SectionHeader>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                "Buying",
                "Selling",
                "Shipping",
                "Account",
                "Payments",
                "Safety",
              ].map(cat => (
                <div
                  key={cat}
                  className="border border-black p-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white border border-black relative overflow-hidden">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 40 40"
                        preserveAspectRatio="none"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="40"
                          y2="40"
                          stroke="black"
                          strokeWidth="1"
                        />
                        <line
                          x1="40"
                          y1="0"
                          x2="0"
                          y2="40"
                          stroke="black"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-black">{cat}</h3>
                  </div>
                  <TextPlaceholder width="80%" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>Frequently Asked Questions</SectionHeader>
            <Accordion
              className="mt-4 max-w-2xl"
              items={[
                { placeholderWidth: "50%" },
                { placeholderWidth: "54%" },
                { placeholderWidth: "58%" },
                { placeholderWidth: "62%" },
                { placeholderWidth: "66%" },
                { placeholderWidth: "70%" },
                { placeholderWidth: "74%" },
                { placeholderWidth: "78%" },
              ]}
            />
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>Contact Us</SectionHeader>
            <TextPlaceholder width="55%" className="mt-1 mb-6" />
            <div className="grid grid-cols-3 gap-6">
              {/* Live Chat — 1/3 width */}
              <div className="border-2 border-black p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-black"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">
                      Live Chat
                    </h3>
                    <TextPlaceholder width="180px" />
                  </div>
                </div>
                <div className="bg-white p-4 border border-black">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
                    <span className="text-xs font-medium text-black">
                      Currently online
                    </span>
                  </div>
                  <TextPlaceholder width="75%" className="mb-1" />
                  <TextPlaceholder width="75%" className="mb-1" />
                  <TextPlaceholder width="75%" />
                </div>
                <div className="flex-1 flex items-center justify-center my-4 overflow-hidden min-h-0">
                  <ImagePlaceholder className="w-full h-full" />
                </div>
                <ActionButton variant="primary" full>
                  Start Live Chat
                </ActionButton>
              </div>
              {/* Send Us an Email — 2/3 width */}
              <div className="col-span-2 border-2 border-black p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-black"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">
                      Send Us an Email
                    </h3>
                    <TextPlaceholder width="200px" />
                  </div>
                </div>
                <div className="bg-white p-4 mb-4 border border-black flex items-center">
                  <TextPlaceholder width="70%" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                  <TextInputField label="Your Email" />
                  <SelectInputField label="Topic" />
                  <TextInputField label="Order Number" />
                  <AttachmentsInputField />
                </div>
                <TextInputFieldMultiLine label="Your Message" rows={4} />
                <div className="mt-4">
                  <ActionButton variant="primary" full>
                    Send Email
                  </ActionButton>
                </div>
                <div className="mt-3 text-center">
                  <TextPlaceholder width="60%" className="mx-auto" />
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white border border-black p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold text-black flex-shrink-0">
                  i
                </span>
                <TextPlaceholder width="150px" />
              </div>
              <TextPlaceholder lines={1} />
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
      <div className="px-6 py-10 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            How can we help?
          </h1>
          <div className="max-w-lg mx-auto">
            <SearchBar placeholder="Search for help articles..." />
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>Browse by Topic</SectionHeader>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              {
                title: "Buying",
                desc: "How to buy, payments, Buyer Protection",
                icon: "🛒",
              },
              {
                title: "Selling",
                desc: "Listing items, pricing, shipping labels",
                icon: "🏷️",
              },
              {
                title: "Shipping",
                desc: "Delivery options, tracking, returns",
                icon: "📦",
              },
              {
                title: "Account",
                desc: "Profile, settings, notifications",
                icon: "👤",
              },
              {
                title: "Payments",
                desc: "Payment methods, refunds, payouts",
                icon: "💳",
              },
              {
                title: "Safety",
                desc: "Reporting, blocked users, scam prevention",
                icon: "🛡️",
              },
            ].map(cat => (
              <div
                key={cat.title}
                className={`border border-gray-200 rounded-lg p-4 ${isHifi ? "shadow-sm hover:shadow-md" : ""} cursor-pointer transition-shadow`}
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {isHifi ? (
                    <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-lg">
                      {cat.icon}
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <div className="w-5 h-5 bg-gray-300 rounded" />
                    </div>
                  )}
                  <h3 className="text-sm font-semibold text-gray-700">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>Frequently Asked Questions</SectionHeader>
          <Accordion
            className="mt-4 max-w-2xl"
            items={[
              { label: "How does Buyer Protection work?" },
              { label: "How do I ship an item I've sold?" },
              { label: "What happens if my item doesn't arrive?" },
              { label: "How do I get a refund?" },
              { label: "Can I cancel an order?" },
              { label: "How do I report a listing?" },
              { label: "What are the fees for selling?" },
              { label: "How do bundle discounts work?" },
            ]}
          />
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>Contact Us</SectionHeader>
          <p className="text-sm text-gray-500 mt-1 mb-6">
            Can't find what you're looking for? Get in touch with our support
            team.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {/* Live Chat — 1/3 width */}
            <div
              className="border border-gray-200 rounded-lg p-6 flex flex-col h-full relative"
              style={{
                background: isHifi ? DS.surfaceContainerLowest : undefined,
                borderColor: isHifi ? DS.outlineVariant : undefined,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-500"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    Live Chat
                  </h3>
                  <p className="text-xs text-gray-400">
                    Chat with a support agent in real time.
                  </p>
                </div>
              </div>
              <div
                className="bg-gray-50 rounded p-4 border"
                style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: isHifi ? DS.success : "#000000" }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: isHifi ? DS.onSurface : "#4b5563" }}
                  >
                    Currently online
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  Average response time:{" "}
                  <span className="font-medium text-gray-600">
                    under 5 minutes
                  </span>
                </p>
                <div className="flex flex-col gap-1.5 text-xs text-gray-500 border-t border-gray-200 pt-3">
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-400 flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Monday – Friday, 9:00 AM – 6:00 PM GMT</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-400 flex-shrink-0"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Saturday, 10:00 AM – 2:00 PM GMT</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative" style={{ minHeight: "48px" }}>
                {isHifi ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/iGboKeGCQyDUgbtX.png"
                      alt="Q&A chat bubbles"
                      className="rounded"
                      style={{
                        maxHeight: "100%",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden py-4">
                    <ImagePlaceholder className="w-full h-full rounded" />
                  </div>
                )}
              </div>
              <ActionButton variant="primary" full>
                Start Live Chat
              </ActionButton>
            </div>
            {/* Send Us an Email — 2/3 width */}
            <div
              className="col-span-2 border border-gray-200 rounded-lg p-6 flex flex-col"
              style={{
                background: isHifi ? DS.surfaceContainerLowest : undefined,
                borderColor: isHifi ? DS.outlineVariant : undefined,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gray-500"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    Send Us an Email
                  </h3>
                  <p className="text-xs text-gray-400">
                    We'll reply to your inbox within 24 hours.
                  </p>
                </div>
              </div>
              <div
                className="bg-gray-50 rounded p-4 mb-4 border"
                style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
              >
                <p className="text-xs text-gray-400">
                  Typical response time:{" "}
                  <span className="font-medium text-gray-600">
                    within 24 hours
                  </span>
                  . Best for non-urgent issues or detailed enquiries.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                <TextInputField
                  label="Your Email"
                  placeholder="jane@example.com"
                />
                <SelectInputField
                  label="Topic"
                  placeholder="Select a topic..."
                />
                <TextInputField
                  label="Order Number (if applicable)"
                  placeholder="TT-XXXXXXXX-XXXX"
                />
                <AttachmentsInputField />
              </div>
              <TextInputFieldMultiLine
                label="Your Message"
                placeholder="Describe your issue in detail..."
                rows={4}
              />
              <div className="mt-4">
                <ActionButton variant="primary" full>
                  Send Email
                </ActionButton>
              </div>
              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">
                  Or email us directly at{" "}
                  <a
                    href="mailto:support@kiddiwear.com"
                    className="font-semibold underline"
                    style={{ color: isHifi ? DS.primary : "#4b5563" }}
                  >
                    support@kiddiwear.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col gap-2"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-400 flex-shrink-0">
                i
              </span>
              <p
                className="text-xs font-medium"
                style={{ color: isHifi ? DS.onSurface : "#4b5563" }}
              >
                Outside of live chat hours?
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Send us an email and we'll get back to you on the next working
              day. You can also check our FAQ section above — most common
              questions are answered there.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
