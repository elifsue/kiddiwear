import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { Carousel } from "@/components/Carousel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";
import { ChipItem } from "@/components/ChipItem";
export default function Home() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="relative bg-white px-6 py-16 flex items-center justify-center">
          {/* Left placeholder */}
          <div className="absolute left-6 top-0 bottom-0 w-[280px] flex items-end justify-center overflow-hidden">
            <div className="border border-black h-full w-full relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="100"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
          <div className="max-w-xl text-center z-10">
            <div className="flex justify-center mb-4">
              <ImagePlaceholder label="Logo" className="w-[180px] h-[40px]" />
            </div>
            <h1 className="text-3xl font-bold text-black mb-3">
              Give kids' clothes a second life
            </h1>
            <TextPlaceholder lines={2} className="mb-6 items-center" />
            <div className="flex gap-3 justify-center">
              <ActionButton to={ROUTES.PRODUCTS} variant="primary">
                Shop Now
              </ActionButton>
              <ActionButton to={ROUTES.SELL_ITEM} variant="outlined">
                Start Selling
              </ActionButton>
            </div>
          </div>
          {/* Right placeholder */}
          <div className="absolute right-6 top-0 bottom-0 w-[280px] flex items-end justify-center overflow-hidden">
            <div className="border border-black h-full w-full relative">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="100"
                  stroke="black"
                  strokeWidth="0.5"
                />
                <line
                  x1="100"
                  y1="0"
                  x2="0"
                  y2="100"
                  stroke="black"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
          <SectionHeader>Shop by Category</SectionHeader>
          <div className="grid grid-cols-5 gap-4">
            {["Boys", "Girls", "Unisex", "Shoes", "Accessories"].map(cat => (
              <Link key={cat} to={ROUTES.PRODUCTS} className="block">
                <div className="border border-black aspect-[3/2] relative overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100"
                      y2="100"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="100"
                      y1="0"
                      x2="0"
                      y2="100"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </svg>
                  <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-medium text-black py-1.5">
                    {cat}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6">
          <SectionHeader>Shop by Age / Size</SectionHeader>
          <div className="flex gap-3 flex-wrap">
            {[
              "Newborns / 44 cm",
              "Up to 1 month / 50 cm",
              "1-3 months / 56 cm",
              "3-6 months / 62 cm",
              "6-9 months / 68 cm",
              "9-12 months / 74 cm",
              "12-18 months / 80 cm",
              "18-24 months / 86 cm",
              "2-3 years / 92 cm",
              "3-5 years / 98-110 cm",
              "5-7 years / 110-122 cm",
              "7-10 years / 122-140 cm",
              "10-13 years / 140-158 cm",
              "13-16 years / 158-176 cm",
            ].map(age => (
              <ChipItem key={age} to={ROUTES.PRODUCTS}>
                {age}
              </ChipItem>
            ))}
          </div>
        </div>
        <div className="px-6 py-6">
          <SectionHeader>Sellers You Follow</SectionHeader>
          <Carousel>
            <div className="grid grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
              ))}
            </div>
          </Carousel>
        </div>
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <SectionHeader noLine noMargin>
              Just Listed
            </SectionHeader>
            <Link
              to={ROUTES.PRODUCTS}
              className="text-sm text-black underline font-medium"
            >
              View all &rarr;
            </Link>
          </div>
          <Carousel>
            <div className="grid grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
              ))}
            </div>
          </Carousel>
        </div>
        <div className="px-6 py-8">
          <SectionHeader>Popular Brands</SectionHeader>
          <div className="grid grid-cols-6 gap-4">
            {["Primark", "Next", "Zara", "H&M", "M&S", "John Lewis"].map(
              brand => (
                <Link key={brand} to={ROUTES.PRODUCTS} className="block">
                  <div className="border border-black p-4 text-center h-20 flex items-center justify-center">
                    <span className="text-sm text-black font-medium">
                      {brand}
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="px-6 py-8">
          <SectionHeader>How It Works</SectionHeader>
          <div className="grid grid-cols-4 gap-6 mt-4">
            {[
              { step: "1", title: "Snap a photo" },
              { step: "2", title: "Set your price" },
              { step: "3", title: "Sell & ship" },
              { step: "4", title: "Get paid" },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-black">
                    {item.step}
                  </span>
                </div>
                <p className="text-sm font-semibold text-black mb-2">
                  {item.title}
                </p>
                <div className="flex justify-center">
                  <TextPlaceholder width="80%" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 mb-8">
          <div className="mx-auto border border-black p-6 flex items-center gap-6 bg-white w-fit">
            <div className="w-16 h-16 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="w-[480px]">
              <p className="text-sm font-semibold text-black mb-1">
                Buyer Protection
              </p>
              <TextPlaceholder lines={2} />
            </div>
            <Link to={ROUTES.BUYER_PROTECTION}>
              <ActionButton
                variant="outlined"
                className="ml-auto flex-shrink-0"
              >
                Learn More
              </ActionButton>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Mid-Fi / Hi-Fi ── */
  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />
      <div
        className="relative px-6 py-16 flex items-center justify-center"
        style={{ background: isHifi ? DS.surfaceContainerLow : "#f3f4f6" }}
      >
        {/* Left kid */}
        <div className="absolute left-6 top-0 bottom-0 w-[280px] flex items-end justify-center overflow-hidden">
          {isHifi ? (
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/hero-boy-left-v3-irtGPy28hnooBjS9m2GtVU.png"
              alt="Happy boy in yellow hoodie"
              className="h-[85%] w-auto object-contain object-bottom"
            />
          ) : (
            <ImagePlaceholder
              label="Kid Left"
              className="h-full w-full rounded"
            />
          )}
        </div>
        {/* Center text */}
        <div className="max-w-xl text-center z-10">
          {isHifi ? (
            <div className="flex justify-center mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/ebPqvJTHoZreTCxY.png"
                alt="Kiddiwear"
                className="h-8 object-contain"
              />
            </div>
          ) : (
            <div className="flex justify-center mb-4">
              <ImagePlaceholder label="Logo" className="w-[180px] h-[40px]" />
            </div>
          )}
          <h1
            className="text-3xl font-bold mb-3"
            style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
          >
            Give kids' clothes a second life
          </h1>
          <p
            className="text-sm mb-6 leading-relaxed"
            style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
          >
            Buy and sell quality second-hand children's clothing, shoes, and
            accessories. Save money, reduce waste, and keep little ones looking
            great.
          </p>
          <div className="flex gap-3 justify-center">
            <ActionButton to={ROUTES.PRODUCTS} variant="primary">
              Shop Now
            </ActionButton>
            <ActionButton to={ROUTES.SELL_ITEM} variant="outlined">
              Start Selling
            </ActionButton>
          </div>
        </div>
        {/* Right kid */}
        <div className="absolute right-6 top-0 bottom-0 w-[280px] flex items-end justify-center overflow-hidden">
          {isHifi ? (
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/hero-girl-right-v3-KWZLZUWqU2cMwKkCbdHovP.png"
              alt="Happy girl in coral cardigan waving"
              className="h-[85%] w-auto object-contain object-bottom"
            />
          ) : (
            <ImagePlaceholder
              label="Kid Right"
              className="h-full w-full rounded"
            />
          )}
        </div>
      </div>
      <div className="px-6 py-8">
        <SectionHeader>Shop by Category</SectionHeader>
        <div className="grid grid-cols-5 gap-4">
          {["Boys", "Girls", "Unisex", "Shoes", "Accessories"].map((cat, i) => {
            const catImgs = [
              "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/category-boys-v4-CiTViQhhjj6VvEubdAuyrT.webp",
              "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/category-girls-v4-E2JRkugfCn9VGGRNoZvtoz.webp",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/yaSMtDGTyJwcWfwN.png",
              "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/category-shoes-3x2-ameYjqyiH426N4hxi82DTh.webp",
              "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/category-accessories-landscape-j97FGmJ78W7Nm6qJUjJNVM.webp",
            ];
            return (
              <Link key={cat} to={ROUTES.PRODUCTS} className="block">
                <div
                  className={`rounded aspect-[3/2] relative overflow-hidden transition-shadow ${isHifi ? "shadow-sm hover:shadow-md" : ""}`}
                  style={{
                    border: `1px solid ${isHifi ? DS.outlineVariant : "#e5e7eb"}`,
                  }}
                >
                  {isHifi ? (
                    <img
                      src={catImgs[i]}
                      alt={cat}
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 text-xs">
                      {cat}
                    </div>
                  )}
                  <p
                    className="absolute bottom-0 left-0 right-0 text-center text-sm font-medium py-1.5"
                    style={{
                      color: isHifi ? "#fff" : "#374151",
                      background: isHifi ? "rgba(0,0,0,0.5)" : undefined,
                    }}
                  >
                    {cat}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="px-6 pb-6">
        <SectionHeader>Shop by Age / Size</SectionHeader>
        <div className="flex gap-3 flex-wrap">
          {[
            "Newborns / 44 cm",
            "Up to 1 month / 50 cm",
            "1\u20133 months / 56 cm",
            "3\u20136 months / 62 cm",
            "6\u20139 months / 68 cm",
            "9\u201312 months / 74 cm",
            "12\u201318 months / 80 cm",
            "18\u201324 months / 86 cm",
            "2\u20133 years / 92 cm",
            "3\u20135 years / 98\u2013110 cm",
            "5\u20137 years / 110\u2013122 cm",
            "7\u201310 years / 122\u2013140 cm",
            "10\u201313 years / 140\u2013158 cm",
            "13\u201316 years / 158\u2013176 cm",
          ].map(age => (
            <ChipItem key={age} to={ROUTES.PRODUCTS}>
              {age}
            </ChipItem>
          ))}
        </div>
      </div>
      <div className="px-6 py-6">
        <SectionHeader>Sellers You Follow</SectionHeader>
        <Carousel>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
            ))}
          </div>
        </Carousel>
      </div>
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <SectionHeader noLine noMargin>
            Just Listed
          </SectionHeader>
          <Link
            to={ROUTES.PRODUCTS}
            className="text-sm underline font-medium"
            style={{ color: isHifi ? DS.primary : "#4b5563" }}
          >
            View all &rarr;
          </Link>
        </div>
        <Carousel>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
            ))}
          </div>
        </Carousel>
      </div>
      <div className="px-6 py-8">
        <SectionHeader>Popular Brands</SectionHeader>
        <div className="grid grid-cols-6 gap-4">
          {(isHifi
            ? [
                {
                  name: "Primark",
                  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/aIlswJKgaYXLwTyZ.png",
                },
                {
                  name: "Next",
                  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/HwVqzugtqUOynter.png",
                },
                {
                  name: "Zara",
                  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/riFDoRmexTmtabaA.png",
                },
                {
                  name: "H&M",
                  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/QjiSpCQgNYiFMiPT.png",
                },
                {
                  name: "M&S",
                  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/iHZCpPpJCmfFVlBx.png",
                },
                {
                  name: "John Lewis",
                  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/CUWEoSkGbkOotqij.png",
                },
              ]
            : [
                { name: "Primark", logo: "" },
                { name: "Next", logo: "" },
                { name: "Zara", logo: "" },
                { name: "H&M", logo: "" },
                { name: "M&S", logo: "" },
                { name: "John Lewis", logo: "" },
              ]
          ).map(brand => (
            <Link key={brand.name} to={ROUTES.PRODUCTS} className="block">
              <div
                className={`rounded p-4 text-center transition-shadow ${isHifi ? "shadow-sm hover:shadow-md" : ""} h-20 flex items-center justify-center`}
                style={{
                  border: `1px solid ${isHifi ? DS.outlineVariant : "#e5e7eb"}`,
                  background: isHifi ? DS.surfaceContainerLowest : "#fff",
                }}
              >
                {isHifi && brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-8 object-contain"
                  />
                ) : (
                  <span
                    className="text-sm font-medium"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    {brand.name}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-6 py-8">
        <SectionHeader>How It Works</SectionHeader>
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
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: isHifi ? DS.onSurface : "#374151" }}
              >
                {item.title}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 mb-8">
        <div
          className="mx-auto border border-gray-200 rounded-lg p-6 bg-gray-50 flex items-center gap-6 w-fit"
          style={{
            background: isHifi ? DS.surfaceContainerLowest : undefined,
            borderColor: isHifi ? DS.outlineVariant : undefined,
          }}
        >
          <div className="w-16 h-16 rounded-full border border-gray-200 bg-white flex items-center justify-center flex-shrink-0">
            <svg
              width="24"
              height="24"
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
              Buyer Protection
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every purchase is covered by Kiddiwear Buyer Protection. If your
              item doesn't arrive or doesn't match the description, we've got
              you covered.
            </p>
          </div>
          <Link to={ROUTES.BUYER_PROTECTION}>
            <ActionButton variant="outlined" className="ml-auto flex-shrink-0">
              Learn More
            </ActionButton>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
