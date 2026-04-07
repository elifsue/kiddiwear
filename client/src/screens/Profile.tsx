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
import { BadgeLabel } from "@/components/BadgeLabel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";
import { ChipItem } from "@/components/ChipItem";
import { TabItem } from "@/components/TabItem";

export default function Profile() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 border-b border-black bg-white">
          <div className="flex items-start gap-5">
            <div className="relative">
              <Avatar size="xl" />
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-black mb-1">
                <TextPlaceholder width="150px" />
              </h1>
              <TextPlaceholder width="130px" className="mb-2" />
              <div className="flex items-center gap-2 mb-2">
                <RatingBar rating={4} />
                <TextPlaceholder width="100px" />
              </div>
              <div className="mb-3 max-w-xl flex flex-col gap-1.5">
                <TextPlaceholder width="95%" />
                <TextPlaceholder width="75%" />
              </div>
              <div className="flex items-center gap-4">
                <TextPlaceholder width="80px" />
                <TextPlaceholder width="80px" />
                <TextPlaceholder width="80px" />
              </div>
            </div>
            <div className="flex gap-2">
              <ActionButton to={ROUTES.SELL_ITEM} variant="primary">
                Sell an Item
              </ActionButton>
              <ActionButton to={ROUTES.SETTINGS_PROFILE} variant="outlined">
                Edit Profile
              </ActionButton>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <TabItem active>My Listings (56)</TabItem>
            <TabItem>Reviews (23)</TabItem>
            <TabItem to={ROUTES.FOLLOWERS}>Followers (16)</TabItem>
            <TabItem to={ROUTES.FOLLOWINGS}>Followings (12)</TabItem>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {["All items", "Boys", "Girls", "Shoes", "Accessories"].map(
                (f, i) => (
                  <ChipItem key={f} active={i === 0}>
                    {f}
                  </ChipItem>
                )
              )}
            </div>
            <div className="flex items-center gap-3">
              {["Active", "Sold"].map(f => (
                <ChipItem key={f}>{f}</ChipItem>
              ))}
              <SelectInputField placeholder="Sort: Newest first" />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="relative">
                <ProductCard
                  showFavorite={false}
                  to={ROUTES.PRODUCT_DETAIL_SELL}
                />
                {i >= 15 && (
                  <div className="absolute top-2 left-2">
                    <BadgeLabel variant="positive" size="large">
                      Sold
                    </BadgeLabel>
                  </div>
                )}
                {i < 15 && (
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
                )}
              </div>
            ))}
          </div>
          <PaginationBar pages={[1, 2, 3, 4]} />
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
      <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-start gap-5">
          <div className="relative">
            {isHifi ? (
              <Avatar size="xl" src={PROFILE_PHOTOS.p1} alt="My Profile" />
            ) : (
              <Avatar size="xl" />
            )}
            <button className="absolute bottom-0 right-0 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-500"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800 mb-1">jane_smith</h1>
            <p className="text-sm text-gray-500 mb-2">jane@example.com</p>
            <div className="flex items-center gap-2 mb-2">
              <RatingBar rating={4} />
              <span className="text-sm text-gray-500">4.6 (23 reviews)</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xl">
              Selling quality pre-loved kids' clothes from our London home. Love
              bundling — just ask!
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
                London, UK
              </span>
              <span>41 items sold</span>
              <span>Joined Mar 2025</span>
            </div>
          </div>
          <div className="flex gap-2">
            <ActionButton to={ROUTES.SELL_ITEM} variant="primary">
              Sell an Item
            </ActionButton>
            <ActionButton to={ROUTES.SETTINGS_PROFILE} variant="outlined">
              Edit Profile
            </ActionButton>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <TabItem active>My Listings (56)</TabItem>
          <TabItem>Reviews (23)</TabItem>
          <TabItem to={ROUTES.FOLLOWERS}>Followers (16)</TabItem>
          <TabItem to={ROUTES.FOLLOWINGS}>Followings (12)</TabItem>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {["All items", "Boys", "Girls", "Shoes", "Accessories"].map(
              (f, i) => (
                <ChipItem key={f} active={i === 0}>
                  {f}
                </ChipItem>
              )
            )}
          </div>
          <div className="flex items-center gap-3">
            {["Active", "Sold"].map(f => (
              <ChipItem key={f}>{f}</ChipItem>
            ))}
            <SelectInputField placeholder="Sort: Newest first" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="relative">
              <ProductCard
                showFavorite={false}
                to={ROUTES.PRODUCT_DETAIL_SELL}
              />
              {i >= 15 && (
                <div className="absolute top-2 left-2">
                  <BadgeLabel variant="positive" size="large" shadow>
                    Sold
                  </BadgeLabel>
                </div>
              )}
              {i < 15 && (
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
              )}
            </div>
          ))}
        </div>
        <PaginationBar pages={[1, 2, 3, 4]} />
      </div>

      <Footer />
    </div>
  );
}
