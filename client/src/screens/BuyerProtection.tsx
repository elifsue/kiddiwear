import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeader } from "@/components/SectionHeader";
import { Accordion } from "@/components/Accordion";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function BuyerProtection() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        {/* Hero */}
        <div className="px-6 py-12 bg-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold text-black mb-3">
              Buyer Protection
            </h1>
            <div className="flex flex-col items-center gap-1">
              <TextPlaceholder width="70%" />
              <TextPlaceholder width="50%" />
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>How Buyer Protection Works</SectionHeader>
            <div className="grid grid-cols-3 gap-6 mt-4">
              {[
                { step: 1, title: "Make a purchase" },
                { step: 2, title: "Inspect your item" },
                { step: 3, title: "Confirm or dispute" },
              ].map(item => (
                <div
                  key={item.step}
                  className="text-center border border-black p-6 bg-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-black">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-black mb-1">
                    {item.title}
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <TextPlaceholder width="90%" />
                    <TextPlaceholder width="70%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Covered */}
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>What's Covered</SectionHeader>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {[
                "Item not received",
                "Item not as described",
                "Damaged in transit",
                "Wrong item sent",
              ].map(item => (
                <div
                  key={item}
                  className="flex gap-4 items-start border border-black p-5 bg-white"
                >
                  <div className="w-8 h-8 bg-white border border-black flex-shrink-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-black">✓</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black mb-2">
                      {item}
                    </p>
                    <TextPlaceholder lines={2} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buyer Protection Fee */}
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>Buyer Protection Fee</SectionHeader>
            <div className="border border-black p-6 bg-white mt-4 max-w-2xl">
              <TextPlaceholder lines={2} className="mb-4" />
              <div className="flex items-center gap-4 mb-4">
                <div className="border border-black px-4 py-3 text-center">
                  <p className="text-xs text-black mb-1">Item Price</p>
                  <TextPlaceholder width="60px" />
                </div>
                <span className="text-lg font-bold text-black">+</span>
                <div className="border border-black px-4 py-3 text-center">
                  <p className="text-xs text-black mb-1">Protection Fee</p>
                  <TextPlaceholder width="50px" />
                </div>
                <span className="text-lg font-bold text-black">=</span>
                <div className="border-2 border-black px-4 py-3 text-center">
                  <p className="text-xs text-black mb-1">Buyer Pays</p>
                  <TextPlaceholder width="60px" />
                </div>
              </div>
              <TextPlaceholder lines={2} />
            </div>
          </div>
        </div>

        {/* Refund Process */}
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <SectionHeader>Refund Process</SectionHeader>
                <TextPlaceholder lines={3} className="mb-3" />
                <TextPlaceholder lines={2} />
              </div>
              <ImagePlaceholder className="w-[360px] h-[240px] flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>Frequently Asked Questions</SectionHeader>
            <Accordion
              className="mt-4 max-w-2xl"
              items={[
                { placeholderWidth: "50%" },
                { placeholderWidth: "62%" },
                { placeholderWidth: "55%" },
                { placeholderWidth: "58%" },
              ]}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 py-10 text-center">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-xl font-bold text-black mb-2">
              Shop with confidence
            </h2>
            <div className="flex justify-center mb-5">
              <TextPlaceholder width="55%" />
            </div>
            <div className="flex gap-3 justify-center">
              <ActionButton to={ROUTES.PRODUCTS} variant="primary">
                Browse Items
              </ActionButton>
              <ActionButton to={ROUTES.HELP_CENTRE} variant="outlined">
                Contact Support
              </ActionButton>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Detailed (Mid-Fi) ── */
  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />
      {/* Hero */}
      <div className="px-6 py-12 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Buyer Protection
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every purchase on Kiddiwear is backed by our comprehensive Buyer
            Protection policy. Shop with confidence knowing you're covered.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>How Buyer Protection Works</SectionHeader>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {[
              {
                step: "1",
                title: "Make a purchase",
                desc: "Buy any item through Kiddiwear' secure checkout. Your payment is held safely until you confirm receipt.",
              },
              {
                step: "2",
                title: "Inspect your item",
                desc: "When your item arrives, check it matches the listing description. You have 48 hours to raise any issues.",
              },
              {
                step: "3",
                title: "Confirm or dispute",
                desc: "Happy with your item? Confirm receipt and the seller gets paid. Not happy? Open a dispute and we'll help.",
              },
            ].map(item => (
              <div
                key={item.step}
                className="text-center border border-gray-200 rounded-lg p-6 bg-white"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: isHifi ? DS.secondaryContainer : "#e5e7eb",
                  }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{
                      color: isHifi ? DS.onSecondaryContainer : "#6b7280",
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Covered */}
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>What's Covered</SectionHeader>
          <div className="grid grid-cols-2 gap-6 mt-4">
            {[
              {
                title: "Item not received",
                desc: "If your item doesn't arrive within the estimated delivery window, you're entitled to a full refund.",
              },
              {
                title: "Item not as described",
                desc: "If the item significantly differs from the listing description, photos, or stated condition, we'll refund you.",
              },
              {
                title: "Damaged in transit",
                desc: "If your item arrives damaged due to shipping, we'll cover the cost of a replacement or full refund.",
              },
              {
                title: "Wrong item sent",
                desc: "Received the wrong item? We'll arrange a return and issue a full refund including any shipping costs.",
              },
            ].map(item => (
              <div
                key={item.title}
                className="flex gap-4 items-start border border-gray-200 rounded-lg p-5 bg-white"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <div className="w-8 h-8 rounded bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">✓</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buyer Protection Fee */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>Buyer Protection Fee</SectionHeader>
          <div
            className="border border-gray-200 rounded-lg p-6 bg-white mt-4 max-w-2xl"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              A small Buyer Protection fee is added to every purchase. This fee
              covers the cost of our secure payment processing, dispute
              resolution, and refund guarantee. The fee is paid by the buyer and
              is included in the total price shown at checkout.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="border border-gray-200 rounded px-4 py-3 text-center bg-gray-50">
                <p className="text-xs text-gray-400 mb-1">Item Price</p>
                <p className="text-sm font-semibold text-gray-700">
                  &pound;10.00
                </p>
              </div>
              <span className="text-lg font-bold text-gray-400">+</span>
              <div className="border border-gray-200 rounded px-4 py-3 text-center bg-gray-50">
                <p className="text-xs text-gray-400 mb-1">Protection Fee</p>
                <p className="text-sm font-semibold text-gray-700">
                  &pound;0.50
                </p>
              </div>
              <span className="text-lg font-bold text-gray-400">=</span>
              <div className="border-2 border-gray-300 rounded px-4 py-3 text-center bg-gray-50">
                <p className="text-xs text-gray-400 mb-1">Buyer Pays</p>
                <p className="text-sm font-semibold text-gray-700">
                  &pound;10.50
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              The fee is typically 5% of the item price (minimum &pound;0.50).
              Sellers receive the full item price &mdash; the protection fee is
              never deducted from the seller's earnings.
            </p>
          </div>
        </div>
      </div>

      {/* Refund Process */}
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 items-center">
            <div className="flex-1">
              <SectionHeader>Refund Process</SectionHeader>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                If something goes wrong with your order, our refund process is
                designed to be quick and fair. Simply open a dispute within 48
                hours of receiving your item, provide photos and a description
                of the issue, and our team will review your case.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Most disputes are resolved within 3-5 business days. Refunds are
                issued to your original payment method and typically appear
                within 5-10 business days depending on your bank.
              </p>
            </div>
            {isHifi ? (
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/buyer-protection-refund-94v2fDWciDYVgFCe6Ydvr2.webp"
                alt="Refund Process"
                className="w-[360px] h-[240px] rounded flex-shrink-0 object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="Refund Process Illustration"
                className="w-[360px] h-[240px] rounded flex-shrink-0"
              />
            )}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>Frequently Asked Questions</SectionHeader>
          <Accordion
            className="mt-4 max-w-2xl"
            items={[
              { label: "How long do I have to raise a dispute?" },
              { label: "What happens if the seller disagrees with my claim?" },
              { label: "Are all items covered by Buyer Protection?" },
              { label: "How long does a refund take to process?" },
            ]}
          />
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-10 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Shop with confidence
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Every purchase is protected. Browse thousands of quality pre-loved
            items for your little ones.
          </p>
          <div className="flex gap-3 justify-center">
            <ActionButton to={ROUTES.PRODUCTS} variant="primary">
              Browse Items
            </ActionButton>
            <ActionButton to={ROUTES.HELP_CENTRE} variant="outlined">
              Contact Support
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
