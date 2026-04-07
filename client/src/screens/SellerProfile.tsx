import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ProductCard } from "@/components/ProductCard";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { SelectInputField } from "@/components/SelectInputField";
import { PaginationBar } from "@/components/PaginationBar";
import { RatingBar } from "@/components/RatingBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";
import { ChipItem } from "@/components/ChipItem";
import { TabItem } from "@/components/TabItem";

export default function SellerProfile() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 border-b border-black bg-white">
          <div className="flex items-start gap-5">
            <Avatar size="xl" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-xl font-bold text-black">
                  <TextPlaceholder width="160px" />
                </h1>
                <ActionButton variant="outlined">Follow</ActionButton>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <RatingBar rating={4} />
                <TextPlaceholder width="100px" />
              </div>
              <div className="mb-3 max-w-xl flex flex-col gap-1.5">
                <TextPlaceholder width="95%" />
                <TextPlaceholder width="75%" />
              </div>
              <div className="flex items-center gap-4">
                <TextPlaceholder width="90px" />
                <TextPlaceholder width="75px" />
                <TextPlaceholder width="85px" />
                <TextPlaceholder width="90px" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <TabItem active>Listings (82)</TabItem>
            <TabItem to={ROUTES.SELLER_REVIEWS}>Reviews (47)</TabItem>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {["All items", "Boys", "Shoes", "Accessories"].map((f, i) => (
                <ChipItem key={f} active={i === 0}>
                  {f}
                </ChipItem>
              ))}
            </div>
            <SelectInputField placeholder="Sort: Newest first" />
          </div>
          <div className="border border-black p-5 bg-white flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-black">
                Bundle &amp; Save
              </p>
              <TextPlaceholder width="250px" />
            </div>
            <ActionButton to={ROUTES.CREATE_BUNDLE} variant="outlined">
              Create Bundle
            </ActionButton>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
            ))}
          </div>
          <PaginationBar pages={[1, 2, 3, 4, 5]} />
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
      <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-start gap-5">
          {isHifi ? (
            <Avatar size="xl" src={PROFILE_PHOTOS.p3} alt="Seller" />
          ) : (
            <Avatar size="xl" />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold text-gray-800">
                sarah_mum_of_3
              </h1>
              <ActionButton variant="outlined">Follow</ActionButton>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <RatingBar rating={4} />
              <span className="text-sm text-gray-500">4.2 (47 reviews)</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xl">
              Mum of three boys (ages 2, 5, and 8). Regularly clearing out
              clothes they've outgrown. Everything is washed, ironed, and from a
              smoke-free home. Happy to bundle!
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Manchester, UK
              </span>
              <span>94 items sold</span>
              <span>Joined Jan 2024</span>
              <span>Last active 2h ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <TabItem active>Listings (82)</TabItem>
          <TabItem to={ROUTES.SELLER_REVIEWS}>Reviews (47)</TabItem>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {["All items", "Boys", "Shoes", "Accessories"].map((f, i) => (
              <ChipItem key={f} active={i === 0}>
                {f}
              </ChipItem>
            ))}
          </div>
          <SelectInputField placeholder="Sort: Newest first" />
        </div>
        <div
          className="border border-gray-200 rounded-lg p-5 bg-gray-50 flex items-center justify-between mb-4"
          style={{
            background: isHifi ? DS.surfaceContainerLowest : undefined,
            borderColor: isHifi ? DS.outlineVariant : undefined,
          }}
        >
          <div>
            <p className="text-sm font-semibold text-gray-700">
              Bundle &amp; Save
            </p>
            <p className="text-xs text-gray-400">
              Buy 3+ items from this seller and get 15% off.
            </p>
          </div>
          <ActionButton to={ROUTES.CREATE_BUNDLE} variant="outlined">
            Create Bundle
          </ActionButton>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
          ))}
        </div>
        <PaginationBar pages={[1, 2, 3, 4, 5]} />
      </div>
      <Footer />
    </div>
  );
}
