import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { RatingBar } from "@/components/RatingBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";

export default function CreateBundle() {
  const { isLofi, isMidfi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <h1 className="text-xl font-bold text-black mb-2">Create a Bundle</h1>
          <TextPlaceholder width="320px" className="mb-6" />
          <div className="flex gap-8">
            {/* Left: Product grid */}
            <div className="flex-1">
              <div className="grid grid-cols-5 gap-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <Link
                    key={i}
                    to={ROUTES.PRODUCT_DETAIL_BUY}
                    className="relative block"
                  >
                    <ProductCard showFavorite={false} />
                    {i < 3 ? (
                      <button
                        className="absolute top-2 right-2 w-8 h-8 border-2 border-black bg-black rounded-full flex items-center justify-center z-10 cursor-pointer"
                        onClick={e => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        className="absolute top-2 right-2 w-8 h-8 border border-black bg-white rounded-full flex items-center justify-center"
                        onClick={e => e.preventDefault()}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-black"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </button>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            {/* Right: Seller Info + Bundle Summary */}
            <div className="w-[380px] flex-shrink-0">
              {/* Seller Info */}
              <div className="border border-black p-4 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar size="sm" />
                  <div className="flex-1">
                    <Link
                      to={ROUTES.SELLER_PROFILE}
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      <TextPlaceholder width="120px" />
                    </Link>
                    <div className="flex items-center gap-2 mt-1">
                      <RatingBar rating={4} />
                      <TextPlaceholder width="70px" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TextPlaceholder width="80px" />
                  <span className="text-xs text-black">&middot;</span>
                  <TextPlaceholder width="70px" />
                </div>
              </div>
              {/* Bundle Summary */}
              <div className="border border-black p-5 sticky top-6">
                <h2 className="text-sm font-semibold text-black mb-4">
                  Bundle Summary
                </h2>
                {/* 3 bundled items with details */}
                <div className="flex flex-col gap-3 mb-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex items-center">
                        <ImagePlaceholder
                          className="w-12 h-12 flex-shrink-0"
                          aspectRatio="1/1"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <Link
                          to={ROUTES.PRODUCT_DETAIL_BUY}
                          className="hover:underline"
                        >
                          <TextPlaceholder width="80%" className="mb-1" />
                        </Link>
                        <TextPlaceholder width="95%" />
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-sm font-medium text-black">
                          &pound;8.00
                        </span>
                        <button className="w-5 h-5 border border-black flex items-center justify-center">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-black"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pb-4 border-t border-black pt-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <TextPlaceholder width="100px" />
                      <TextPlaceholder width="40px" />
                    </div>
                  ))}
                </div>
                <div className="py-4 flex justify-between border-t border-black">
                  <span className="text-sm font-semibold text-black">
                    Total
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-black">
                      &pound;21.90
                    </span>
                    <div className="mt-0.5">
                      <TextPlaceholder width="40px" />
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-black p-3 mb-4 text-center">
                  <span className="text-xs font-medium text-black">
                    You saved £3.60 with this bundle!
                  </span>
                </div>
                <ActionButton
                  variant="outlined"
                  full
                  className="mb-2"
                  onClick={() => {}}
                >
                  Make an Offer
                </ActionButton>
                <ActionButton
                  to={ROUTES.CHECKOUT_DELIVERY}
                  variant="primary"
                  full
                >
                  Proceed to Checkout
                </ActionButton>
                <ActionButton
                  to={ROUTES.MESSAGES}
                  variant="outlined"
                  full
                  className="mt-2"
                >
                  Message Seller
                </ActionButton>
              </div>
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
      <div className="px-6 py-6 flex-1">
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Create a Bundle
        </h1>
        <p className="text-sm text-gray-400 mb-6">
          Select items from the same seller to get a bundle discount.
        </p>
        <div className="flex gap-8">
          {/* Left: Product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-5 gap-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <Link
                  key={i}
                  to={ROUTES.PRODUCT_DETAIL_BUY}
                  className="relative block"
                >
                  <ProductCard showFavorite={false} />
                  {i < 3 ? (
                    <button
                      className="absolute top-2 right-2 w-8 h-8 bg-gray-800 border-2 border-gray-800 rounded-full flex items-center justify-center z-10 cursor-pointer hover:bg-gray-700 transition-colors"
                      style={{ boxShadow: isHifi ? DS.shadowMd : undefined }}
                      onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="absolute top-2 right-2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50"
                      style={{ boxShadow: isHifi ? DS.shadowMd : undefined }}
                      onClick={e => e.preventDefault()}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-400"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  )}
                </Link>
              ))}
            </div>
          </div>
          {/* Right: Seller Info + Bundle Summary */}
          <div className="w-[380px] flex-shrink-0">
            {/* Seller Info */}
            <div
              className="border border-gray-200 rounded-lg p-4 mb-4"
              style={{
                background: isHifi ? DS.surfaceContainerLowest : undefined,
                borderColor: isHifi ? DS.outlineVariant : undefined,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                {isHifi ? (
                  <Avatar size="sm" src={PROFILE_PHOTOS.p3} alt="Seller" />
                ) : (
                  <Avatar size="sm" />
                )}
                <div className="flex-1">
                  <Link
                    to={ROUTES.SELLER_PROFILE}
                    className="text-sm font-semibold text-gray-700 hover:underline"
                  >
                    sarah_mum_of_3
                  </Link>
                  <div className="flex items-center gap-2">
                    <RatingBar rating={4} />
                    <span className="text-sm text-gray-400">
                      4.2 (47 reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span>82 items listed</span>
                <span>&middot;</span>
                <span>Joined Jan 2024</span>
              </div>
            </div>
            {/* Bundle Summary */}
            <div
              className="border border-gray-200 rounded-lg p-5 sticky top-6"
              style={{
                background: isHifi ? DS.surfaceContainerLowest : undefined,
                borderColor: isHifi ? DS.outlineVariant : undefined,
              }}
            >
              <h2 className="text-sm font-semibold text-gray-700 mb-4">
                Bundle Summary
              </h2>
              {/* 3 bundled items with details */}
              <div className="flex flex-col gap-3 mb-4">
                {[
                  {
                    title: "Product Title",
                    detail: "Brand Name · 4 years / 104 cm",
                    price: "£8.00",
                  },
                  {
                    title: "Product Title",
                    detail: "Brand Name · 4 years / 104 cm",
                    price: "£8.00",
                  },
                  {
                    title: "Product Title",
                    detail: "Brand Name · 4 years / 104 cm",
                    price: "£8.00",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex items-center">
                      <ImagePlaceholder
                        label="Item"
                        className="w-12 h-12 rounded flex-shrink-0"
                        aspectRatio="1/1"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <Link
                        to={ROUTES.PRODUCT_DETAIL_BUY}
                        className="text-sm font-medium text-gray-700 truncate hover:underline"
                      >
                        {item.title}
                      </Link>
                      <p className="text-xs text-gray-400 truncate">
                        {item.detail}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-sm font-medium text-gray-700">
                        {item.price}
                      </span>
                      <button className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-gray-400"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 pb-4 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">3 items</span>
                  <span className="text-gray-700">&pound;24.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Bundle discount (15%)</span>
                  <span className="text-gray-700">-&pound;3.60</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Buyer Protection</span>
                  <span className="text-gray-700">&pound;1.50</span>
                </div>
              </div>
              <div className="py-4 flex justify-between border-t border-gray-100">
                <span className="text-sm font-semibold text-gray-800">
                  Total
                </span>
                <div className="text-right">
                  <span className="text-lg font-bold text-gray-800">
                    &pound;21.90
                  </span>
                  <p className="text-xs text-gray-400 line-through">
                    &pound;25.50
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-4 text-center">
                <p className="text-xs font-medium text-gray-600">
                  You saved £3.60 with this bundle!
                </p>
              </div>
              <ActionButton
                variant="outlined"
                full
                className="mb-2"
                onClick={() => {}}
              >
                Make an Offer
              </ActionButton>
              <ActionButton
                to={ROUTES.CHECKOUT_DELIVERY}
                variant="primary"
                full
              >
                Proceed to Checkout
              </ActionButton>
              <ActionButton
                to={ROUTES.MESSAGES}
                variant="secondary"
                full
                className="mt-2"
              >
                Message Seller
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
