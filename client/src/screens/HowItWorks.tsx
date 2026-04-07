import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

const steps = [
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
];

export default function HowItWorks() {
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
              How Kiddiwear Works
            </h1>
            <div className="flex flex-col items-center gap-1">
              <TextPlaceholder width="65%" />
              <TextPlaceholder width="50%" />
            </div>
          </div>
        </div>

        {/* Steps overview */}
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-4 gap-6">
              {steps.map(s => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-black">
                      {s.step}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-black mb-1">
                    {s.title}
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

        {/* Step 1 detail */}
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-black">1</span>
                  </div>
                  <h2 className="text-lg font-bold text-black">Snap a photo</h2>
                </div>
                <TextPlaceholder lines={2} className="mb-3" />
                <div className="flex flex-col gap-2 ml-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      <TextPlaceholder width={`${50 + i * 10}%`} />
                    </div>
                  ))}
                </div>
              </div>
              <ImagePlaceholder className="w-[360px] h-[240px] flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Step 2 detail */}
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-8 items-center">
              <ImagePlaceholder className="w-[360px] h-[240px] flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-black">2</span>
                  </div>
                  <h2 className="text-lg font-bold text-black">
                    Set your price
                  </h2>
                </div>
                <TextPlaceholder lines={2} className="mb-3" />
                <div className="flex flex-col gap-2 ml-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      <TextPlaceholder width={`${45 + i * 12}%`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 detail */}
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-black">3</span>
                  </div>
                  <h2 className="text-lg font-bold text-black">Sell & ship</h2>
                </div>
                <TextPlaceholder lines={2} className="mb-3" />
                <div className="flex flex-col gap-2 ml-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      <TextPlaceholder width={`${55 + i * 8}%`} />
                    </div>
                  ))}
                </div>
              </div>
              <ImagePlaceholder className="w-[360px] h-[240px] flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Step 4 detail */}
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex gap-8 items-center">
              <ImagePlaceholder className="w-[360px] h-[240px] flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-black">4</span>
                  </div>
                  <h2 className="text-lg font-bold text-black">Get paid</h2>
                </div>
                <TextPlaceholder lines={2} className="mb-3" />
                <div className="flex flex-col gap-2 ml-2">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0" />
                      <TextPlaceholder width={`${50 + i * 15}%`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 py-10 bg-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-xl font-bold text-black mb-2">
              Ready to get started?
            </h2>
            <div className="flex justify-center mb-5">
              <TextPlaceholder width="55%" />
            </div>
            <div className="flex gap-3 justify-center">
              <ActionButton to={ROUTES.SELL_ITEM} variant="primary">
                Start Selling
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

  /* ── Mid-Fi ── */
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
                How{" "}
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/ebPqvJTHoZreTCxY.png"
                  alt="Kiddiwear"
                  className="h-6 inline-block object-contain"
                />{" "}
                Works
              </span>
            ) : (
              "How Kiddiwear Works"
            )}
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Selling and buying pre-loved children's clothing has never been
            easier. Here's how it works in four simple steps.
          </p>
        </div>
      </div>

      {/* Steps overview */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-6">
            {steps.map(s => (
              <div key={s.step} className="text-center">
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
                    {s.step}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  {s.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step 1 detail */}
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isHifi ? DS.secondaryContainer : "#e5e7eb",
                  }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: isHifi ? DS.onSecondaryContainer : "#6b7280",
                    }}
                  >
                    1
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">
                  Snap a photo
                </h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                Take a quick photo of the item your child has outgrown. Good
                lighting and a clean background help your item sell faster.
              </p>
              <ul className="text-sm text-gray-500 leading-relaxed ml-2 flex flex-col gap-1.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Use natural lighting for best results.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Show front, back, and any details or flaws.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Upload up to 8 photos per listing.
                </li>
              </ul>
            </div>
            {isHifi ? (
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/AKbXpntsZTfqUVKe.jpg"
                alt="Step 1 - Snap a photo"
                className="w-[360px] h-[240px] rounded flex-shrink-0 object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="Step 1 Illustration"
                className="w-[360px] h-[240px] rounded flex-shrink-0"
              />
            )}
          </div>
        </div>
      </div>

      {/* Step 2 detail */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 items-center">
            {isHifi ? (
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/wAeDMOjOBUNJVvnU.png"
                alt="Step 2 - Set your price"
                className="w-[360px] h-[240px] rounded flex-shrink-0 object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="Step 2 Illustration"
                className="w-[360px] h-[240px] rounded flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isHifi ? DS.secondaryContainer : "#e5e7eb",
                  }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: isHifi ? DS.onSecondaryContainer : "#6b7280",
                    }}
                  >
                    2
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">
                  Set your price
                </h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                We'll suggest a fair price based on similar items. You decide
                what works for you — set your own price or accept our
                recommendation.
              </p>
              <ul className="text-sm text-gray-500 leading-relaxed ml-2 flex flex-col gap-1.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Smart price suggestions based on market data.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Offer bundle discounts to sell more.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Accept offers from interested buyers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 detail */}
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isHifi ? DS.secondaryContainer : "#e5e7eb",
                  }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: isHifi ? DS.onSecondaryContainer : "#6b7280",
                    }}
                  >
                    3
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">Sell & ship</h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                Buyer pays securely. Use our prepaid label or arrange local
                pick-up. We handle the payment so you don't have to worry.
              </p>
              <ul className="text-sm text-gray-500 leading-relaxed ml-2 flex flex-col gap-1.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Prepaid Royal Mail shipping labels.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Local collection option available.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Tracking included on all shipments.
                </li>
              </ul>
            </div>
            {isHifi ? (
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/oNEQvnwGCoIWrASx.jpg"
                alt="Step 3 - Sell & ship"
                className="w-[360px] h-[240px] rounded flex-shrink-0 object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="Step 3 Illustration"
                className="w-[360px] h-[240px] rounded flex-shrink-0"
              />
            )}
          </div>
        </div>
      </div>

      {/* Step 4 detail */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-8 items-center">
            {isHifi ? (
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/howitworks-step4-MAsYJECEKekPfaDBFk5XEL.webp"
                alt="Step 4 - Get paid"
                className="w-[360px] h-[240px] rounded flex-shrink-0 object-cover"
              />
            ) : (
              <ImagePlaceholder
                label="Step 4 Illustration"
                className="w-[360px] h-[240px] rounded flex-shrink-0"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isHifi ? DS.secondaryContainer : "#e5e7eb",
                  }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{
                      color: isHifi ? DS.onSecondaryContainer : "#6b7280",
                    }}
                  >
                    4
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-800">Get paid</h2>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                Funds are released once the buyer confirms receipt. Money goes
                straight to your Kiddiwear wallet — withdraw anytime.
              </p>
              <ul className="text-sm text-gray-500 leading-relaxed ml-2 flex flex-col gap-1.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Secure payment held until delivery confirmed.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  Withdraw to your bank account anytime.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-10 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Ready to get started?
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            Join thousands of parents already saving money and reducing waste.
          </p>
          <div className="flex gap-3 justify-center">
            <ActionButton to={ROUTES.SELL_ITEM} variant="primary">
              Start Selling
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
