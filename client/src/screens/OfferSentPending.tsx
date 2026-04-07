import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { SearchBar } from "@/components/SearchBar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { NavigationBar } from "@/components/NavigationBar";
import { productImages } from "@/photos/productPhotos";
import { BadgeLabel } from "@/components/BadgeLabel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";
import { useState } from "react";
import { MakeOfferDialog } from "@/dialogs/MakeOfferDialog";

const chatListPhotosOS = [
  PROFILE_PHOTOS.p10,
  PROFILE_PHOTOS.p7,
  PROFILE_PHOTOS.p12,
];

/* Stable product images for each conversation thread */
const THREAD_ITEMS = {
  sarah: {
    img: productImages[0],
    itemName: "Boys Striped Cotton T-Shirt",
    meta: "Next · 4 years / 104 cm · Very good",
    price: "£8.00",
  },
  emma: {
    img: productImages[2],
    itemName: "Boys Denim Jacket",
    meta: "Next · 5 years / 110 cm · Very good",
    price: "£12.00",
  },
  chloe: {
    img: productImages[11],
    itemName: "Girls Pink Skirt",
    meta: "M&S · 3 years / 98 cm · Good",
    price: "£10.00",
  },
  rainy: {
    img: productImages[1],
    itemName: "Girls Floral Dress",
    meta: "H&M · 3 years / 98 cm · £6.00",
    price: "£6.00",
  },
  kidsstyle: {
    img: productImages[18],
    itemName: "Boys Winter Coat",
    meta: "Zara · 6 years / 116 cm · £18.00",
    price: "£18.00",
  },
  mum: {
    img: productImages[15],
    itemName: "Girls Party Dress",
    meta: "Next · 4 years / 104 cm · £10.00",
    price: "£10.00",
  },
};

export default function OfferSent() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  const [offerOpen, setOfferOpen] = useState(false);

  const offerModal = (
    <MakeOfferDialog open={offerOpen} onOpenChange={setOfferOpen} />
  );

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        {offerModal}
        <div className="flex flex-1 border-b border-black">
          <aside className="w-[325px] border-r border-black flex flex-col">
            <div className="p-4 border-b border-black">
              <h2 className="text-sm font-semibold text-black mb-3">
                Messages
              </h2>
              <SearchBar size="small" placeholder="Search conversations..." />
            </div>
            <div className="flex-1 overflow-y-auto">
              {/* sarah_mum_of_3 → /messages */}
              <Link
                to={ROUTES.MESSAGES}
                className="block px-4 py-3 border-b border-black cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Avatar size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <TextPlaceholder width="80px" />
                      <TextPlaceholder width="30px" />
                    </div>
                    <div className="mt-0.5">
                      <TextPlaceholder width="80%" />
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-black" />
                </div>
                <div className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border border-black bg-white overflow-hidden">
                  <ImagePlaceholder
                    className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                    aspectRatio="1/1"
                    src={THREAD_ITEMS.sarah.img}
                  />
                  <div className="flex-1 min-w-0 pl-2 item-card-lines">
                    <TextPlaceholder width="70%" />
                    <TextPlaceholder width="50%" />
                  </div>
                </div>
              </Link>
              {/* emma_preloved — selected (current screen) */}
              <div className="px-4 py-3 bg-gray-50 border-b border-black relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-black" />
                <div className="flex items-center gap-3">
                  <Avatar size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <TextPlaceholder width="80px" />
                      <TextPlaceholder width="30px" />
                    </div>
                    <div className="mt-0.5">
                      <TextPlaceholder width="80%" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border border-black bg-white overflow-hidden">
                  <ImagePlaceholder
                    className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                    aspectRatio="1/1"
                    src={THREAD_ITEMS.emma.img}
                  />
                  <div className="flex-1 min-w-0 pl-2 item-card-lines">
                    <TextPlaceholder width="70%" />
                    <TextPlaceholder width="50%" />
                  </div>
                </div>
              </div>
              {/* chloe_vintage → /offer-received */}
              <Link
                to={ROUTES.OFFER_RECEIVED_PENDING}
                className="block px-4 py-3 border-b border-black cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <Avatar size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <TextPlaceholder width="80px" />
                      <TextPlaceholder width="30px" />
                    </div>
                    <div className="mt-0.5">
                      <TextPlaceholder width="80%" />
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-black" />
                </div>
                <div className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border border-black bg-white overflow-hidden">
                  <ImagePlaceholder
                    className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                    aspectRatio="1/1"
                    src={THREAD_ITEMS.chloe.img}
                  />
                  <div className="flex-1 min-w-0 pl-2 item-card-lines">
                    <TextPlaceholder width="70%" />
                    <TextPlaceholder width="50%" />
                  </div>
                </div>
              </Link>
              {/* remaining conversations */}
              {Array.from({ length: 3 }).map((_, i) => {
                const items = [
                  THREAD_ITEMS.rainy,
                  THREAD_ITEMS.kidsstyle,
                  THREAD_ITEMS.mum,
                ];
                return (
                  <div key={i} className="px-4 py-3 border-b border-black">
                    <div className="flex items-center gap-3">
                      <Avatar size="sm" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <TextPlaceholder width="80px" />
                          <TextPlaceholder width="30px" />
                        </div>
                        <div className="mt-0.5">
                          <TextPlaceholder width="80%" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border border-black bg-white overflow-hidden">
                      <ImagePlaceholder
                        className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                        aspectRatio="1/1"
                        src={items[i].img}
                      />
                      <div className="flex-1 min-w-0 pl-2 item-card-lines">
                        <TextPlaceholder width="70%" />
                        <TextPlaceholder width="50%" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
          <div className="flex-1 flex flex-col">
            <div className="px-4 py-3 border-b border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar size="sm" />
                <div>
                  <TextPlaceholder width="120px" />
                  <div className="mt-0.5">
                    <TextPlaceholder width="60px" />
                  </div>
                </div>
              </div>
              <ActionButton to={ROUTES.SELLER_PROFILE} variant="outlined">
                View Profile
              </ActionButton>
            </div>
            {/* Item banner — stacked text in lo-fi */}
            <div className="flex items-center gap-3 px-4 py-2.5 border-b border-black bg-white hover:bg-gray-50 cursor-pointer">
              <Link
                to={ROUTES.PRODUCT_DETAIL_BUY}
                className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
              >
                <ImagePlaceholder
                  className="w-14 h-14 flex-shrink-0"
                  aspectRatio="1/1"
                  src={THREAD_ITEMS.emma.img}
                />
                <div className="flex-1 min-w-0 flex flex-col">
                  <div>
                    <TextPlaceholder width="60%" />
                  </div>
                  <div className="mt-1">
                    <TextPlaceholder width="40%" />
                  </div>
                </div>
                <TextPlaceholder width="40px" />
              </Link>
              <div className="flex items-center gap-2 flex-shrink-0">
                <ActionButton
                  variant="outlined"
                  onClick={() => setOfferOpen(true)}
                >
                  Make an Offer
                </ActionButton>
                <ActionButton variant="primary" to={ROUTES.CHECKOUT_DELIVERY}>
                  Buy Now
                </ActionButton>
              </div>
            </div>

            {/* Chat messages — only first offer bubble */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {/* OFFER SENT bubble (from user — right side) — PENDING */}
              <div className="flex gap-2 ml-auto flex-row-reverse">
                <Avatar size="xs" className="mt-0.5" />
                <div className="w-[360px]">
                  <div className="border border-black p-4 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-black uppercase tracking-wider">
                        Offer Sent
                      </span>
                      <BadgeLabel variant="neutral" className="ml-auto">
                        Pending
                      </BadgeLabel>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="border border-black p-2 text-center">
                        <p className="text-[10px] text-black mb-0.5">
                          Listed Price
                        </p>
                        <p className="text-sm font-bold text-black">
                          &pound;12.00
                        </p>
                      </div>
                      <div className="border border-black p-2 text-center">
                        <p className="text-[10px] text-black mb-0.5">
                          Your Offer
                        </p>
                        <p className="text-sm font-bold text-black">
                          &pound;8.00
                        </p>
                      </div>
                    </div>
                    <div className="border border-black p-2 mb-3">
                      <TextPlaceholder width="95%" className="mb-1" />
                      <TextPlaceholder width="70%" />
                    </div>
                    <ActionButton
                      variant="outlined"
                      full
                      to={ROUTES.OFFER_SENT_CANCELLED}
                    >
                      Cancel Offer
                    </ActionButton>
                  </div>
                  <div className="text-right">
                    <TextPlaceholder width="40px" className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-black">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 border border-black flex items-center justify-center flex-shrink-0">
                  <span className="text-sm text-black">+</span>
                </button>
                <div className="flex-1 h-10 border border-black px-3 flex items-center" />
                <button className="w-10 h-10 border border-black flex items-center justify-center flex-shrink-0">
                  <span className="text-sm text-black">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
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
      {offerModal}
      <div
        className="flex flex-1 border-b"
        style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
      >
        <aside
          className="w-[325px] border-r flex flex-col"
          style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
        >
          <div
            className="p-4 border-b"
            style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
          >
            <h2
              className="text-sm font-semibold mb-3"
              style={{ color: isHifi ? DS.onSurface : "#374151" }}
            >
              Messages
            </h2>
            <SearchBar size="small" placeholder="Search conversations..." />
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* sarah_mum_of_3 → /messages */}
            <Link
              to={ROUTES.MESSAGES}
              className="block px-4 py-3 cursor-pointer border-b transition-colors"
              style={{ borderColor: isHifi ? DS.outlineVariant : "#f3f4f6" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = isHifi
                  ? DS.surfaceContainerLow
                  : "#f9fafb";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "";
              }}
            >
              <div className="flex items-center gap-3">
                {isHifi ? (
                  <Avatar
                    size="sm"
                    src={PROFILE_PHOTOS.p3}
                    alt="sarah_mum_of_3"
                  />
                ) : (
                  <Avatar size="sm" />
                )}
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
                    >
                      sarah_mum_of_3
                    </p>
                    <span
                      className="text-[10px] flex-shrink-0"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                    >
                      2m ago
                    </span>
                  </div>
                  <p
                    className="text-xs truncate"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    I can do £7 if you bundle both!
                  </p>
                </div>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: isHifi ? DS.error : "#000000" }}
                />
              </div>
              <div
                className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border overflow-hidden"
                style={{
                  borderColor: isHifi ? DS.outlineVariant : "#e5e7eb",
                  background: isHifi ? DS.surfaceContainerLowest : "#fff",
                  borderRadius: isHifi ? DS.radiusSm : "0",
                }}
              >
                <ImagePlaceholder
                  label="Item"
                  className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                  aspectRatio="1/1"
                  src={THREAD_ITEMS.sarah.img}
                />
                <div className="flex-1 min-w-0 pl-2 item-card-lines">
                  <p
                    className="text-[11px] font-medium truncate"
                    style={{ color: isHifi ? DS.onSurface : "#374151" }}
                  >
                    {THREAD_ITEMS.sarah.itemName}
                  </p>
                  <p
                    className="text-[10px] truncate"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                  >
                    Next &middot; 4 years / 104 cm &middot;{" "}
                    {THREAD_ITEMS.sarah.price}
                  </p>
                </div>
              </div>
            </Link>
            {/* emma_preloved — selected (current screen) */}
            <div
              className="px-4 py-3 border-b relative"
              style={{
                background: isHifi ? DS.surfaceContainerLow : "#f9fafb",
                borderColor: isHifi ? DS.outlineVariant : "#f3f4f6",
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ background: isHifi ? DS.primary : "#374151" }}
              />
              <div className="flex items-center gap-3">
                {isHifi ? (
                  <Avatar
                    size="sm"
                    src={PROFILE_PHOTOS.p4}
                    alt="emma_preloved"
                  />
                ) : (
                  <Avatar size="sm" />
                )}
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
                    >
                      emma_preloved
                    </p>
                    <span
                      className="text-[10px] flex-shrink-0"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                    >
                      1d ago
                    </span>
                  </div>
                  <p
                    className="text-xs truncate"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    Offer sent: &pound;8.00
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border overflow-hidden"
                style={{
                  borderColor: isHifi ? DS.outlineVariant : "#e5e7eb",
                  background: isHifi ? DS.surfaceContainerLowest : "#fff",
                  borderRadius: isHifi ? DS.radiusSm : "0",
                }}
              >
                <ImagePlaceholder
                  label="Item"
                  className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                  aspectRatio="1/1"
                  src={THREAD_ITEMS.emma.img}
                />
                <div className="flex-1 min-w-0 pl-2 item-card-lines">
                  <p
                    className="text-[11px] font-medium truncate"
                    style={{ color: isHifi ? DS.onSurface : "#374151" }}
                  >
                    {THREAD_ITEMS.emma.itemName}
                  </p>
                  <p
                    className="text-[10px] truncate"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                  >
                    Next &middot; 5 years / 110 cm &middot;{" "}
                    {THREAD_ITEMS.emma.price}
                  </p>
                </div>
              </div>
            </div>
            {/* chloe_vintage → /offer-received */}
            <Link
              to={ROUTES.OFFER_RECEIVED_PENDING}
              className="block px-4 py-3 cursor-pointer border-b transition-colors"
              style={{ borderColor: isHifi ? DS.outlineVariant : "#f3f4f6" }}
              onMouseEnter={e => {
                e.currentTarget.style.background = isHifi
                  ? DS.surfaceContainerLow
                  : "#f9fafb";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "";
              }}
            >
              <div className="flex items-center gap-3">
                {isHifi ? (
                  <Avatar
                    size="sm"
                    src={PROFILE_PHOTOS.p13}
                    alt="chloe_vintage"
                  />
                ) : (
                  <Avatar size="sm" />
                )}
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
                    >
                      chloe_vintage
                    </p>
                    <span
                      className="text-[10px] flex-shrink-0"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                    >
                      2d ago
                    </span>
                  </div>
                  <p
                    className="text-xs truncate"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    Offer received: &pound;6.00
                  </p>
                </div>
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: isHifi ? DS.error : "#000000" }}
                />
              </div>
              <div
                className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border overflow-hidden"
                style={{
                  borderColor: isHifi ? DS.outlineVariant : "#e5e7eb",
                  background: isHifi ? DS.surfaceContainerLowest : "#fff",
                  borderRadius: isHifi ? DS.radiusSm : "0",
                }}
              >
                <ImagePlaceholder
                  label="Item"
                  className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                  aspectRatio="1/1"
                  src={THREAD_ITEMS.chloe.img}
                />
                <div className="flex-1 min-w-0 pl-2 item-card-lines">
                  <p
                    className="text-[11px] font-medium truncate"
                    style={{ color: isHifi ? DS.onSurface : "#374151" }}
                  >
                    {THREAD_ITEMS.chloe.itemName}
                  </p>
                  <p
                    className="text-[10px] truncate"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                  >
                    M&amp;S &middot; 3 years / 98 cm &middot;{" "}
                    {THREAD_ITEMS.chloe.price}
                  </p>
                </div>
              </div>
            </Link>
            {/* remaining conversations */}
            {[
              {
                name: "rainy_day_kids",
                time: "3d ago",
                msg: "Great, I'll take it. Thanks!",
                ...THREAD_ITEMS.rainy,
              },
              {
                name: "kidsstyle_uk",
                time: "4d ago",
                msg: "Thanks for the quick delivery!",
                ...THREAD_ITEMS.kidsstyle,
              },
              {
                name: "mum_of_twins",
                time: "5d ago",
                msg: "Lovely item, my daughter loves it!",
                ...THREAD_ITEMS.mum,
              },
            ].map((c, i) => (
              <div
                key={i}
                className="px-4 py-3 border-b transition-colors cursor-pointer"
                style={{ borderColor: isHifi ? DS.outlineVariant : "#f3f4f6" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = isHifi
                    ? DS.surfaceContainerLow
                    : "#f9fafb";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "";
                }}
              >
                <div className="flex items-center gap-3">
                  <Avatar
                    size="sm"
                    src={chatListPhotosOS[i % chatListPhotosOS.length]}
                    alt={c.name}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: isHifi ? DS.onSurface : "#374151" }}
                      >
                        {c.name}
                      </p>
                      <span
                        className="text-[10px]"
                        style={{
                          color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                        }}
                      >
                        {c.time}
                      </span>
                    </div>
                    <p
                      className="text-xs truncate"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                    >
                      {c.msg}
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center gap-2 mt-2 ml-[52px] pr-2 border overflow-hidden"
                  style={{
                    borderColor: isHifi ? DS.outlineVariant : "#e5e7eb",
                    background: isHifi ? DS.surfaceContainerLowest : "#fff",
                    borderRadius: isHifi ? DS.radiusSm : "0",
                  }}
                >
                  <ImagePlaceholder
                    label="Item"
                    className="w-10 self-stretch flex-shrink-0 rounded-r-none"
                    aspectRatio="1/1"
                    src={c.img}
                  />
                  <div className="flex-1 min-w-0 pl-2 item-card-lines">
                    <p
                      className="text-[11px] font-medium truncate"
                      style={{ color: isHifi ? DS.onSurface : "#374151" }}
                    >
                      {c.itemName}
                    </p>
                    <p
                      className="text-[10px] truncate"
                      style={{
                        color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                      }}
                    >
                      {c.meta}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div
            className="px-4 py-3 border-b flex items-center justify-between"
            style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
          >
            <div className="flex items-center gap-3">
              {isHifi ? (
                <Avatar size="sm" src={PROFILE_PHOTOS.p4} alt="emma_preloved" />
              ) : (
                <Avatar size="sm" />
              )}
              <div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: isHifi ? DS.onSurface : "#374151" }}
                >
                  emma_preloved
                </p>
                <p
                  className="text-[10px]"
                  style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                >
                  Last active 1 day ago
                </p>
              </div>
            </div>
            <ActionButton to={ROUTES.SELLER_PROFILE} variant="outlined">
              View Profile
            </ActionButton>
          </div>
          {/* Item banner */}
          <div
            className="flex items-center gap-3 px-4 py-2.5 border-b cursor-pointer transition-colors"
            style={{
              borderColor: isHifi ? DS.outlineVariant : "#e5e7eb",
              background: isHifi ? DS.surfaceContainerLowest : "#fafafa",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = isHifi
                ? DS.surfaceContainerLow
                : "#f3f4f6";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = isHifi
                ? DS.surfaceContainerLowest
                : "#fafafa";
            }}
          >
            <Link
              to={ROUTES.PRODUCT_DETAIL_BUY}
              className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer"
            >
              <ImagePlaceholder
                label="Item"
                className="w-14 h-14 rounded flex-shrink-0"
                aspectRatio="1/1"
                src={THREAD_ITEMS.emma.img}
              />
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: isHifi ? DS.onSurface : "#374151" }}
                >
                  {THREAD_ITEMS.emma.itemName}
                </p>
                <p
                  className="text-xs truncate"
                  style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                >
                  {THREAD_ITEMS.emma.meta}
                </p>
              </div>
              <p
                className="text-sm font-semibold flex-shrink-0"
                style={{ color: isHifi ? DS.onSurface : "#374151" }}
              >
                {THREAD_ITEMS.emma.price}
              </p>
            </Link>
            <div className="flex items-center gap-2 flex-shrink-0">
              <ActionButton
                variant="outlined"
                onClick={() => setOfferOpen(true)}
              >
                Make an Offer
              </ActionButton>
              <ActionButton variant="primary" to={ROUTES.CHECKOUT_DELIVERY}>
                Buy Now
              </ActionButton>
            </div>
          </div>

          {/* Chat messages — only first offer bubble (Pending) */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            {/* OFFER SENT bubble (from user — right side) — PENDING */}
            <div className="flex gap-2 ml-auto flex-row-reverse">
              {isHifi ? (
                <Avatar
                  size="xs"
                  src={PROFILE_PHOTOS.p1}
                  alt="Me"
                  className="mt-0.5"
                />
              ) : (
                <Avatar size="xs" className="mt-0.5" />
              )}
              <div className="w-[360px]">
                <div
                  className="border rounded-lg rounded-tr-none p-4 bg-white"
                  style={{
                    borderColor: isHifi ? DS.outlineVariant : "#d1d5db",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Offer Sent
                    </span>
                    <BadgeLabel variant="neutral" className="ml-auto">
                      Pending
                    </BadgeLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="border border-gray-200 rounded p-2.5 text-center bg-white">
                      <p className="text-[10px] text-gray-400 mb-0.5">
                        Listed Price
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        &pound;12.00
                      </p>
                    </div>
                    <div className="border border-gray-300 rounded p-2.5 text-center bg-gray-50">
                      <p className="text-[10px] text-gray-500 mb-0.5">
                        Your Offer
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        &pound;8.00
                      </p>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded bg-gray-50 px-3 py-2 mb-3">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Hi! Would you consider &pound;8.00 for the denim jacket?
                      Happy to buy right away.
                    </p>
                  </div>
                  <ActionButton
                    variant="outlined"
                    full
                    to={ROUTES.OFFER_SENT_CANCELLED}
                  >
                    Cancel Offer
                  </ActionButton>
                </div>
                <p
                  className="text-[10px] mt-1 text-right"
                  style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                >
                  Yesterday, 10:23 AM
                </p>
              </div>
            </div>
          </div>
          {/* Message input */}
          <div
            className="px-4 py-3 border-t"
            style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
          >
            <div className="flex items-center gap-3">
              <button
                className="w-10 h-10 border rounded flex items-center justify-center flex-shrink-0"
                style={{ borderColor: isHifi ? DS.outline : "#d1d5db" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = isHifi
                    ? DS.surfaceContainerLow
                    : "#f9fafb";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "";
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </button>
              <div
                className="flex-1 h-10 border rounded px-3 flex items-center"
                style={{ borderColor: isHifi ? DS.outline : "#d1d5db" }}
              >
                <span
                  className="text-sm"
                  style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                >
                  Type a message...
                </span>
              </div>
              <button
                className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: isHifi ? DS.primary : "#1f2937" }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
