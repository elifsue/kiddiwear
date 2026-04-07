import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { RatingBar } from "@/components/RatingBar";
import { productImages } from "@/photos/productPhotos";
import { Carousel } from "@/components/Carousel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";
import { useMemo } from "react";

export default function ProductDetailSell() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* Pick a stable main product image for the carousel (hi-fi) — offset by 10 so it differs from page 8 */
  const mainProductImg = useMemo(() => productImages[10], []);
  const carouselImgs = useMemo(
    () => [
      mainProductImg,
      ...productImages.filter((_, idx) => idx !== 10).slice(0, 7),
    ],
    [mainProductImg]
  );

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-3 border-b border-black">
          <div className="flex items-center gap-2 text-xs text-black">
            <span>Home</span>
            <span>/</span>
            <span>Boys</span>
            <span>/</span>
            <TextPlaceholder width="80px" />
            <span>/</span>
            <TextPlaceholder width="90px" />
          </div>
        </div>
        <div className="flex gap-6 px-6 py-6 items-start">
          <div
            className="flex gap-2"
            style={{ width: "50%", maxWidth: "calc(560px + 56px + 8px)" }}
          >
            <div className="flex flex-col gap-2 flex-shrink-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-[56px] h-[56px] cursor-pointer ${i === 0 ? "ring-2 ring-black" : ""}`}
                >
                  <ImagePlaceholder
                    className="w-full h-full"
                    aspectRatio="1/1"
                  />
                </div>
              ))}
            </div>
            <div
              className="flex-1"
              style={{ maxWidth: "560px", maxHeight: "700px" }}
            >
              <ImagePlaceholder className="w-full" aspectRatio="4/5" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <h1 className="text-xl font-bold text-black mb-2">
                <TextPlaceholder width="70%" />
              </h1>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl font-bold text-black">
                  &pound;8.00
                </span>
                <TextPlaceholder width="120px" />
              </div>
            </div>
            <div className="border border-black p-4 mb-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Condition",
                  "Category",
                  "Age / Size",
                  "Brand",
                  "Colour",
                  "Uploaded",
                ].map(label => (
                  <div key={label}>
                    <p className="text-xs text-black">{label}</p>
                    <TextPlaceholder width="70%" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-black uppercase tracking-wider mb-2">
                Description
              </p>
              <TextPlaceholder lines={3} />
            </div>
            {/* Seller action buttons */}
            <div className="mb-4">
              <ActionButton to={ROUTES.EDIT_ITEM} variant="primary" full>
                Edit Listing
              </ActionButton>
            </div>
            <div className="flex gap-3 mb-5">
              <ActionButton variant="outlined" className="flex-1">
                Mark as Sold
              </ActionButton>
              <ActionButton variant="destructive" className="flex-1">
                Delete Listing
              </ActionButton>
            </div>
            {/* Seller section - no Follow button */}
            <div className="border border-black p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar size="sm" />
                <div className="flex-1">
                  <Link
                    to={ROUTES.PROFILE}
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
                <span className="text-xs text-black">&middot;</span>
                <TextPlaceholder width="90px" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-black">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <TextPlaceholder width="200px" />
            </div>
          </div>
        </div>
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <SectionHeader noLine noMargin>
              Seller's Items
            </SectionHeader>
            <Link
              to={ROUTES.PROFILE}
              className="text-sm text-black underline font-medium"
            >
              View all &rarr;
            </Link>
          </div>
          <Carousel>
            <div className="grid grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="relative">
                  <ProductCard
                    showFavorite={false}
                    to={ROUTES.PRODUCT_DETAIL_SELL}
                  />
                  <Link
                    to={ROUTES.EDIT_ITEM}
                    className="absolute top-2 right-2 w-8 h-8 bg-white border border-black flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
                    onClick={e => e.stopPropagation()}
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
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
        <div className="px-6 py-6">
          <SectionHeader>Similar Items</SectionHeader>
          <Carousel>
            <div className="grid grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
              ))}
            </div>
          </Carousel>
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
      <div className="px-6 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Home</span>
          <span>/</span>
          <span>Boys</span>
          <span>/</span>
          <span>Tops &amp; T-shirts</span>
          <span>/</span>
          <span className="text-gray-600">Product Title</span>
        </div>
      </div>
      <div className="flex gap-6 px-6 py-6 items-start">
        <div
          className="flex gap-2"
          style={{ width: "50%", maxWidth: "calc(560px + 56px + 8px)" }}
        >
          <div className="flex flex-col gap-2 flex-shrink-0">
            {carouselImgs.map((img, i) => (
              <div
                key={i}
                className={`w-[56px] h-[56px] rounded cursor-pointer ${i === 0 ? "ring-2" : ""}`}
                style={
                  i === 0
                    ? ({
                        "--tw-ring-color": isHifi ? DS.primary : "#1f2937",
                      } as React.CSSProperties)
                    : undefined
                }
              >
                <ImagePlaceholder
                  key={i}
                  label={`${i + 1}`}
                  className="w-full h-full rounded"
                  aspectRatio="1/1"
                  src={isHifi ? img : undefined}
                />
              </div>
            ))}
          </div>
          <div
            className="flex-1"
            style={{ maxWidth: "560px", maxHeight: "700px" }}
          >
            <ImagePlaceholder
              label="Main Product Photo"
              className="w-full rounded"
              aspectRatio="4/5"
              src={isHifi ? mainProductImg : undefined}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              Boys Striped Cotton T-Shirt
            </h1>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-2xl font-bold text-gray-800">
                &pound;8.00
              </span>
              <span className="text-sm text-gray-400">
                &pound;8.50 incl. Buyer Protection
              </span>
            </div>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-4 mb-4"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Condition", "Very good"],
                ["Category", "Boys \u2014 Tops"],
                ["Age / Size", "4 years / 104 cm"],
                ["Brand", "Next"],
                ["Colour", "Blue / White"],
                ["Uploaded", "2 weeks ago"],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm text-gray-700 font-medium">{val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Description
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lovely striped cotton t-shirt from Next. Worn a handful of times,
              in very good condition. No stains or marks. From a smoke-free,
              pet-free home. Happy to bundle with other items.
            </p>
          </div>
          {/* Seller action buttons */}
          <div className="mb-4">
            <ActionButton to={ROUTES.EDIT_ITEM} variant="primary" full>
              Edit Listing
            </ActionButton>
          </div>
          <div className="flex gap-3 mb-5">
            <ActionButton variant="outlined" className="flex-1">
              Mark as Sold
            </ActionButton>
            <ActionButton variant="destructive" className="flex-1">
              Delete Listing
            </ActionButton>
          </div>
          {/* Seller section - no Follow button */}
          <div
            className="border border-gray-200 rounded-lg p-4"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              {isHifi ? (
                <Avatar size="sm" src={PROFILE_PHOTOS.p1} alt="Seller" />
              ) : (
                <Avatar size="sm" />
              )}
              <div className="flex-1">
                <Link
                  to={ROUTES.PROFILE}
                  className="text-sm font-semibold text-gray-700 hover:underline"
                >
                  jane_smith
                </Link>
                <div className="flex items-center gap-2">
                  <RatingBar rating={4} />
                  <span className="text-sm text-gray-400">
                    4.6 (23 reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>56 items listed</span>
              <span>&middot;</span>
              <span>Joined Mar 2025</span>
              <span>&middot;</span>
              <span>Last active now</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Covered by Kiddiwear Buyer Protection.</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <SectionHeader noLine noMargin>
            Seller's Items
          </SectionHeader>
          <Link
            to={ROUTES.PROFILE}
            className="text-sm underline font-medium"
            style={{ color: isHifi ? DS.primary : "#4b5563" }}
          >
            View all &rarr;
          </Link>
        </div>
        <Carousel>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="relative">
                <ProductCard
                  showFavorite={false}
                  to={ROUTES.PRODUCT_DETAIL_SELL}
                />
                <Link
                  to={ROUTES.EDIT_ITEM}
                  className="absolute top-2 right-2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center z-10 transition-colors hover:bg-gray-50"
                  style={{ boxShadow: isHifi ? DS.shadowMd : undefined }}
                  onClick={e => e.stopPropagation()}
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
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
      <div className="px-6 py-6">
        <SectionHeader>Similar Items</SectionHeader>
        <Carousel>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
            ))}
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
