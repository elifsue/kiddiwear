import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeader } from "@/components/SectionHeader";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function About() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-12 bg-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold text-black mb-3">
              About Kiddiwear
            </h1>
            <div className="flex flex-col items-center gap-1">
              <TextPlaceholder width="70%" />
              <TextPlaceholder width="55%" />
            </div>
          </div>
        </div>
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <SectionHeader>Our Mission</SectionHeader>
                <TextPlaceholder lines={4} className="mb-3" />
                <TextPlaceholder lines={3} />
              </div>
              <ImagePlaceholder className="w-[360px] h-[240px] flex-shrink-0" />
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>Our Impact</SectionHeader>
            <div className="grid grid-cols-4 gap-6 mt-4">
              {[
                "Items listed",
                "Happy families",
                "Clothing saved",
                "Saved by parents",
              ].map(label => (
                <div
                  key={label}
                  className="text-center border border-black p-6 bg-white"
                >
                  <div className="flex flex-col items-center gap-1">
                    <TextPlaceholder width="80px" />
                    <TextPlaceholder width="60px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>How Kiddiwear Works</SectionHeader>
            <div className="grid grid-cols-4 gap-6 mt-4">
              {[
                { step: 1, title: "Snap a photo" },
                { step: 2, title: "Set your price" },
                { step: 3, title: "Sell & ship" },
                { step: 4, title: "Get paid" },
              ].map(item => (
                <div key={item.step} className="text-center">
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
            <div className="mt-5 flex justify-center">
              <ActionButton to={ROUTES.HOW_IT_WORKS} variant="outlined">
                Learn More
              </ActionButton>
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeader>Our Values</SectionHeader>
            <div className="grid grid-cols-3 gap-6 mt-4">
              {["Sustainability", "Affordability", "Community"].map(val => (
                <div key={val} className="border border-black p-5 bg-white">
                  <div className="w-10 h-10 bg-white border border-black mb-3">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
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
                  <p className="text-sm font-semibold text-black mb-2">{val}</p>
                  <TextPlaceholder lines={2} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-8 items-center">
              <ImagePlaceholder className="w-[360px] h-[240px] flex-shrink-0" />
              <div className="flex-1">
                <SectionHeader>Buyer Protection</SectionHeader>
                <TextPlaceholder lines={3} className="mb-4" />
                <div className="flex justify-center mt-4">
                  <ActionButton to={ROUTES.BUYER_PROTECTION} variant="outlined">
                    Learn More About Buyer Protection
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-10 text-center">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-xl font-bold text-black mb-2">
              Ready to get started?
            </h2>
            <div className="flex justify-center mb-5">
              <TextPlaceholder width="55%" />
            </div>
            <div className="flex gap-3 justify-center">
              <ActionButton to={ROUTES.SIGNUP} variant="primary">
                Create an Account
              </ActionButton>
              <ActionButton to={ROUTES.PRODUCTS} variant="outlined">
                Browse Items
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
      <div className="px-6 py-12 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {isHifi ? (
              <span className="inline-flex items-center gap-3">
                About{" "}
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/ebPqvJTHoZreTCxY.png"
                  alt="Kiddiwear"
                  className="h-6 inline-block object-contain"
                />
              </span>
            ) : (
              "About Kiddiwear"
            )}
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            The UK's dedicated marketplace for pre-loved children's clothing,
            shoes, and accessories. Helping families save money while reducing
            fashion waste.
          </p>
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 items-center">
            <div className="flex-1">
              <SectionHeader>Our Mission</SectionHeader>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                Children grow fast — often outgrowing clothes before they've had
                a chance to wear them out. Kiddiwear was founded to give those
                clothes a second life, creating a trusted platform where parents
                can buy and sell quality pre-loved children's clothing with
                ease.
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                We believe every child deserves to look great, and every parent
                deserves a break on the cost of keeping up with growth spurts.
                By buying and selling second-hand, you're also helping reduce
                textile waste and the environmental impact of fast fashion.
              </p>
            </div>
            {isHifi ? (
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/about-mission-KAHsBoxSczWg5iEQRNPbfq.webp"
                alt="Our Mission"
                className="w-[360px] h-[240px] rounded flex-shrink-0 object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="Mission Image"
                className="w-[360px] h-[240px] rounded flex-shrink-0"
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>Our Impact</SectionHeader>
          <div className="grid grid-cols-4 gap-6 mt-4">
            {[
              { value: "50,000+", label: "Items listed" },
              { value: "25,000+", label: "Happy families" },
              { value: "12 tonnes", label: "Clothing saved from landfill" },
              { value: "£1.2M+", label: "Saved by parents" },
            ].map(stat => (
              <div
                key={stat.label}
                className="text-center border border-gray-200 rounded-lg p-6 bg-white"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <p className="text-2xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>How Kiddiwear Works</SectionHeader>
          <div className="grid grid-cols-4 gap-6 mt-4">
            {[
              {
                step: "1",
                title: "Snap a photo",
                desc: "Take a quick photo of the item your child has outgrown.",
              },
              {
                step: "2",
                title: "Set your price",
                desc: "We'll suggest a fair price based on similar items. You decide.",
              },
              {
                step: "3",
                title: "Sell & ship",
                desc: "Buyer pays securely. Use our prepaid label or arrange local pick-up.",
              },
              {
                step: "4",
                title: "Get paid",
                desc: "Funds are released once the buyer confirms receipt.",
              },
            ].map(item => (
              <div key={item.step} className="text-center">
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
          <div className="mt-5 flex justify-center">
            <ActionButton to={ROUTES.HOW_IT_WORKS} variant="outlined">
              Learn More
            </ActionButton>
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader>Our Values</SectionHeader>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {[
              {
                title: "Sustainability",
                desc: "Every item resold is one less in landfill. We're committed to reducing textile waste.",
                icon: "🌱",
              },
              {
                title: "Affordability",
                desc: "Quality children's clothing shouldn't break the bank. We make it easy to find great deals.",
                icon: "💰",
              },
              {
                title: "Community",
                desc: "We're building a community of parents who support each other through buying, selling, and sharing.",
                icon: "🤝",
              },
            ].map(val => (
              <div
                key={val.title}
                className="border border-gray-200 rounded-lg p-5 bg-white"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                {isHifi ? (
                  <div className="w-10 h-10 rounded bg-gray-100 mb-3 flex items-center justify-center text-lg">
                    {val.icon}
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded bg-gray-100 border border-gray-200 mb-3 flex items-center justify-center">
                    <div className="w-5 h-5 bg-gray-300 rounded" />
                  </div>
                )}
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  {val.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 items-center">
            {isHifi ? (
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/buyer-protection-3x2-YcqVFEzH6h3QNshu3KDXma.webp"
                alt="Buyer Protection"
                className="w-[360px] h-[240px] rounded flex-shrink-0 object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="Protection Illustration"
                className="w-[360px] h-[240px] rounded flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <SectionHeader>Buyer Protection</SectionHeader>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Every purchase on Kiddiwear is covered by our Buyer Protection
                policy. If your item doesn't arrive, or doesn't match the
                listing description, we'll refund you in full. It's our way of
                making sure you can shop with confidence.
              </p>
              <div className="flex justify-center mt-4">
                <ActionButton to={ROUTES.BUYER_PROTECTION} variant="outlined">
                  Learn More About Buyer Protection
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-10 text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Ready to get started?
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Join thousands of parents already saving money and reducing waste.
          </p>
          <div className="flex gap-3 justify-center">
            <ActionButton to={ROUTES.SIGNUP} variant="primary">
              Create an Account
            </ActionButton>
            <ActionButton to={ROUTES.PRODUCTS} variant="outlined">
              Browse Items
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
