import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { SelectInputField } from "@/components/SelectInputField";
import { RatingBar } from "@/components/RatingBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";
import { TabItem } from "@/components/TabItem";

const followingPhotos = [
  PROFILE_PHOTOS.p15,
  PROFILE_PHOTOS.p3,
  PROFILE_PHOTOS.p16,
  PROFILE_PHOTOS.p4,
  PROFILE_PHOTOS.p5,
  PROFILE_PHOTOS.p6,
  PROFILE_PHOTOS.p14,
  PROFILE_PHOTOS.p13,
  PROFILE_PHOTOS.p2,
  PROFILE_PHOTOS.p9,
  PROFILE_PHOTOS.p12,
  PROFILE_PHOTOS.p7,
];

const followings = [
  { name: "emma_preloved", items: 24, joined: "Feb 2025" },
  { name: "sarah_mum_of_3", items: 82, joined: "Jan 2024" },
  { name: "lisa_vintage", items: 31, joined: "Apr 2025" },
  { name: "claire_mum", items: 8, joined: "Mar 2025" },
  { name: "rachel_tots", items: 36, joined: "Jan 2025" },
  { name: "tom_kidswear", items: 45, joined: "Nov 2024" },
  { name: "mark_reseller", items: 67, joined: "Dec 2024" },
  { name: "anna_bundles", items: 19, joined: "Jan 2025" },
  { name: "david_deals", items: 53, joined: "Oct 2024" },
  { name: "sophie_kids", items: 12, joined: "Feb 2025" },
  { name: "buyer_jane", items: 0, joined: "Mar 2025" },
  { name: "ben_bargains", items: 14, joined: "Apr 2025" },
];

export default function Followings() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        {/* Profile Header — same as My Profile */}
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

        {/* Tabs — Followings active */}
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <TabItem to={ROUTES.PROFILE}>My Listings (56)</TabItem>
            <TabItem>Reviews (23)</TabItem>
            <TabItem to={ROUTES.FOLLOWERS}>Followers (16)</TabItem>
            <TabItem active>Followings (12)</TabItem>
          </div>
        </div>
        {/* Followings List */}
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-end mb-4">
            <SelectInputField placeholder="Sort: Newest first" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {followings.map(f => (
              <Link
                key={f.name}
                to={ROUTES.SELLER_PROFILE}
                className="border border-black p-4 flex flex-col items-center text-center block"
              >
                <Avatar size="lg" className="mb-3" />
                <span className="text-sm font-semibold text-black mb-1">
                  {f.name}
                </span>
                <div className="flex items-center gap-2 mt-2 mb-0.5">
                  <TextPlaceholder width="60px" />
                </div>
                <div className="mb-2">
                  <TextPlaceholder width="70px" />
                </div>
                <div onClick={e => e.preventDefault()}>
                  <ActionButton variant="outlined">Following</ActionButton>
                </div>
              </Link>
            ))}
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
      {/* Profile Header — same as My Profile */}
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

      {/* Tabs — Followings active */}
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <TabItem to={ROUTES.PROFILE}>My Listings (56)</TabItem>
          <TabItem>Reviews (23)</TabItem>
          <TabItem to={ROUTES.FOLLOWERS}>Followers (16)</TabItem>
          <TabItem active>Followings (12)</TabItem>
        </div>
      </div>
      {/* Followings List */}
      <div className="px-6 py-6 flex-1">
        <div className="flex items-center justify-end mb-4">
          <SelectInputField placeholder="Sort: Newest first" />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {followings.map((f, idx) => (
            <div
              key={f.name}
              className={`border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center transition-shadow ${isHifi ? "shadow-sm hover:shadow-md" : ""}`}
              style={{
                background: isHifi ? DS.surfaceContainerLowest : undefined,
                borderColor: isHifi ? DS.outlineVariant : undefined,
              }}
            >
              <Link
                to={ROUTES.SELLER_PROFILE}
                className="flex flex-col items-center text-center w-full"
              >
                <Avatar
                  size="lg"
                  src={followingPhotos[idx % followingPhotos.length]}
                  alt={f.name}
                  className="mb-3"
                />
                <span className="text-sm font-semibold text-gray-700 mb-1">
                  {f.name}
                </span>
                <RatingBar rating={4} className="mb-1" />
                <span className="text-xs text-gray-400 mb-3">
                  {f.items} items &middot; Joined {f.joined}
                </span>
              </Link>
              <ActionButton variant="outlined">Following</ActionButton>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
