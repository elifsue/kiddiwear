import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { SelectInputField } from "@/components/SelectInputField";
import { PaginationBar } from "@/components/PaginationBar";
import { RatingBar } from "@/components/RatingBar";
import { ProgressBar } from "@/components/ProgressBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";
import { TabItem } from "@/components/TabItem";
import { ChipItem } from "@/components/ChipItem";

const reviews = [
  {
    user: "emma_preloved",
    stars: 5,
    time: "3 days ago",
    item: "Boys Striped Cotton T-Shirt",
    text: "Absolutely lovely item, exactly as described. Beautifully packaged and arrived within 2 days. My son loves it! Will definitely buy from this seller again.",
    aspects: {
      described: 5,
      communication: 5,
      shipping: 5,
      packaging: 5,
    } as Record<string, number> | null,
  },
  {
    user: "buyer_tom_42",
    stars: 4,
    time: "1 week ago",
    item: "Boys Navy Joggers",
    text: "Good quality joggers, slight pilling not mentioned in listing but overall happy with the purchase. Fast shipping.",
    aspects: {
      described: 3,
      communication: 4,
      shipping: 5,
      packaging: 4,
    } as Record<string, number> | null,
  },
  {
    user: "jane_eco_mum",
    stars: 5,
    time: "2 weeks ago",
    item: "Baby Snowsuit Bundle (3 items)",
    text: "Amazing bundle deal! All three items in great condition. Sarah was really helpful answering my questions about sizes. Highly recommend.",
    aspects: {
      described: 5,
      communication: 5,
      shipping: 4,
      packaging: 5,
    } as Record<string, number> | null,
  },
  {
    user: "lisa_bargains",
    stars: 5,
    time: "3 weeks ago",
    item: "Girls Floral Dress",
    text: "Beautiful dress, looks barely worn. Great communication and quick dispatch.",
    aspects: null,
  },
  {
    user: "mark_dad_of_2",
    stars: 4,
    time: "1 month ago",
    item: "Boys School Shoes",
    text: "Shoes were in good condition as described. Took a couple of extra days to arrive but seller kept me updated.",
    aspects: {
      described: 4,
      communication: 5,
      shipping: 3,
      packaging: 4,
    } as Record<string, number> | null,
  },
  {
    user: "claire_mum_london",
    stars: 5,
    time: "1 month ago",
    item: "Girls Winter Coat",
    text: "Gorgeous coat in excellent condition. My daughter loves the colour. Very well packaged and arrived quickly. Thank you!",
    aspects: {
      described: 5,
      communication: 5,
      shipping: 5,
      packaging: 5,
    } as Record<string, number> | null,
  },
  {
    user: "sam_thrifty",
    stars: 3,
    time: "2 months ago",
    item: "Boys Denim Shorts",
    text: "Shorts were fine but had a small stain not mentioned in the listing. Seller offered a partial refund which was fair.",
    aspects: {
      described: 2,
      communication: 4,
      shipping: 4,
      packaging: 3,
    } as Record<string, number> | null,
  },
];

const ratingBreakdown = [
  { stars: 5, count: 31, pct: 66 },
  { stars: 4, count: 10, pct: 21 },
  { stars: 3, count: 4, pct: 9 },
  { stars: 2, count: 1, pct: 2 },
  { stars: 1, count: 1, pct: 2 },
];

const aspectLabels: Record<string, string> = {
  described: "As described",
  communication: "Communication",
  shipping: "Shipping",
  packaging: "Packaging",
};

export default function SellerReviews() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 border-b border-black bg-white">
          <div className="flex items-center gap-4">
            <Avatar size="md" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-lg font-bold text-black">
                  <TextPlaceholder width="150px" />
                </h1>
                <ActionButton variant="outlined">Follow</ActionButton>
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
            <TabItem to={ROUTES.SELLER_PROFILE}>Listings (82)</TabItem>
            <TabItem active>Reviews (47)</TabItem>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="flex gap-8">
            <div className="w-[280px] flex-shrink-0">
              <div className="border border-black p-5 bg-white sticky top-6">
                <div className="text-center mb-5 pb-5 border-b border-black">
                  <p className="text-4xl font-bold text-black mb-1">4.2</p>
                  <RatingBar
                    rating={4}
                    size="md"
                    className="justify-center mb-1"
                  />
                  <TextPlaceholder width="100px" />
                </div>
                <div className="flex flex-col gap-2">
                  {ratingBreakdown.map(row => (
                    <div key={row.stars} className="flex items-center gap-2">
                      <span className="text-xs text-black w-3 text-right">
                        {row.stars}
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="#000"
                        stroke="#000"
                        strokeWidth="1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <ProgressBar value={row.pct} />
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-black">
                  <p className="text-xs font-semibold text-black mb-3">
                    Average Ratings
                  </p>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Item as described", score: 4.3 },
                      { label: "Communication", score: 4.6 },
                      { label: "Shipping speed", score: 4.0 },
                      { label: "Packaging", score: 4.4 },
                    ].map(aspect => (
                      <div key={aspect.label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-black">
                            {aspect.label}
                          </span>
                          <span className="text-xs font-semibold text-black">
                            {aspect.score.toFixed(1)}
                          </span>
                        </div>
                        <ProgressBar value={(aspect.score / 5) * 100} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "All",
                    "5 stars",
                    "4 stars",
                    "3 stars",
                    "2 stars",
                    "1 star",
                  ].map((filter, i) => (
                    <button
                      key={filter}
                      className={`px-3 py-1.5 text-xs rounded-full border cursor-pointer ${i === 0 ? "bg-white text-black border-2 border-black font-semibold" : "border-black text-black"}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <SelectInputField placeholder="Sort: Most recent" />
              </div>
              <div className="flex flex-col gap-4">
                {reviews.map((review, i) => (
                  <div key={i} className="border border-black p-4 bg-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar size="sm" />
                        <div>
                          <TextPlaceholder width="100px" />
                          <div className="flex items-center gap-1.5 mt-1">
                            <RatingBar rating={review.stars} />
                            <TextPlaceholder width="60px" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3 p-2 bg-white">
                      <ImagePlaceholder className="w-11 h-11 flex-shrink-0" />
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-black">Purchased:</span>
                        <TextPlaceholder width="140px" />
                      </div>
                    </div>
                    <div className="mb-3 flex flex-col gap-1.5">
                      <TextPlaceholder width="95%" />
                      <TextPlaceholder width="80%" />
                    </div>
                    {review.aspects && (
                      <div className="flex items-center gap-4 pt-3 border-t border-black">
                        {Object.entries(review.aspects).map(([key, val]) => (
                          <div key={key} className="flex items-center gap-1.5">
                            <span className="text-xs text-black">
                              {aspectLabels[key]}
                            </span>
                            <div className="flex items-center gap-0.5">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <div
                                  key={j}
                                  className={`w-2 h-2 rounded-full ${j < val ? "bg-black" : "bg-white border border-black"}`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <PaginationBar pages={[1, 2, 3, 4, 5]} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Detailed (Mid-Fi + Hi-Fi) ── */
  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />
      <div
        className="px-6 py-6 border-b border-gray-200 bg-gray-50"
        style={
          isHifi
            ? {
                borderColor: DS.outlineVariant,
                background: DS.surfaceContainerLow,
              }
            : undefined
        }
      >
        <div className="flex items-center gap-4">
          {isHifi ? (
            <Avatar size="md" src={PROFILE_PHOTOS.p3} alt="Seller" />
          ) : (
            <Avatar size="md" />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1
                className="text-lg font-bold text-gray-800"
                style={isHifi ? { color: DS.onSurface } : undefined}
              >
                sarah_mum_of_3
              </h1>
              <ActionButton variant="outlined">Follow</ActionButton>
            </div>
            <div
              className="flex items-center gap-4 text-xs text-gray-400"
              style={isHifi ? { color: DS.onSurfaceVariant } : undefined}
            >
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
      <div
        className="px-6 border-b border-gray-200"
        style={isHifi ? { borderColor: DS.outlineVariant } : undefined}
      >
        <div className="flex gap-6">
          <TabItem to={ROUTES.SELLER_PROFILE}>Listings (82)</TabItem>
          <TabItem active>Reviews (47)</TabItem>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="flex gap-8">
          <div className="w-[280px] flex-shrink-0">
            <div
              className="border border-gray-200 rounded-lg p-5 bg-white sticky top-6"
              style={
                isHifi
                  ? {
                      border: `1px solid ${DS.outlineVariant}`,
                      background: DS.surface,
                    }
                  : undefined
              }
            >
              <div
                className="text-center mb-5 pb-5 border-b border-gray-100"
                style={
                  isHifi
                    ? { borderBottom: `1px solid ${DS.outlineVariant}` }
                    : undefined
                }
              >
                <p
                  className="text-4xl font-bold text-gray-800 mb-1"
                  style={isHifi ? { color: DS.onSurface } : undefined}
                >
                  4.2
                </p>
                <RatingBar
                  rating={4}
                  size="md"
                  className="justify-center mb-1"
                />
                <p
                  className="text-xs text-gray-400"
                  style={isHifi ? { color: DS.onSurfaceVariant } : undefined}
                >
                  Based on 47 reviews
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {ratingBreakdown.map(row => (
                  <div
                    key={row.stars}
                    className="flex items-center gap-2 rounded px-1 py-0.5 -mx-1"
                  >
                    <span
                      className="text-xs text-gray-500 w-3 text-right"
                      style={
                        isHifi ? { color: DS.onSurfaceVariant } : undefined
                      }
                    >
                      {row.stars}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={isHifi ? DS.tertiary : "#D1D5DB"}
                      stroke={isHifi ? DS.tertiary : "#D1D5DB"}
                      strokeWidth="1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <ProgressBar value={row.pct} />
                    <span
                      className="text-xs text-gray-400 w-5 text-right"
                      style={
                        isHifi ? { color: DS.onSurfaceVariant } : undefined
                      }
                    >
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 pt-5 border-t border-gray-100"
                style={
                  isHifi
                    ? { borderTop: `1px solid ${DS.outlineVariant}` }
                    : undefined
                }
              >
                <p
                  className="text-xs font-semibold text-gray-600 mb-3"
                  style={isHifi ? { color: DS.onSurface } : undefined}
                >
                  Average Ratings
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Item as described", score: 4.3 },
                    { label: "Communication", score: 4.6 },
                    { label: "Shipping speed", score: 4.0 },
                    { label: "Packaging", score: 4.4 },
                  ].map(aspect => (
                    <div key={aspect.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="text-xs text-gray-500"
                          style={
                            isHifi ? { color: DS.onSurfaceVariant } : undefined
                          }
                        >
                          {aspect.label}
                        </span>
                        <span
                          className="text-xs font-semibold text-gray-700"
                          style={isHifi ? { color: DS.onSurface } : undefined}
                        >
                          {aspect.score.toFixed(1)}
                        </span>
                      </div>
                      <ProgressBar value={(aspect.score / 5) * 100} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-2 flex-wrap">
                {[
                  "All",
                  "5 stars",
                  "4 stars",
                  "3 stars",
                  "2 stars",
                  "1 star",
                ].map((filter, i) => (
                  <ChipItem key={filter} active={i === 0}>
                    {filter}
                  </ChipItem>
                ))}
              </div>
              <SelectInputField placeholder="Sort: Most recent" />
            </div>
            <div className="flex flex-col gap-4">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-lg p-4 bg-white"
                  style={
                    isHifi
                      ? {
                          border: `1px solid ${DS.outlineVariant}`,
                          background: DS.surface,
                        }
                      : undefined
                  }
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {isHifi ? (
                        <Avatar
                          size="sm"
                          src={
                            PROFILE_PHOTOS[
                              (["p4", "p7", "p8", "p11", "p12"] as const)[i % 5]
                            ]
                          }
                          alt="Reviewer"
                        />
                      ) : (
                        <Avatar size="sm" />
                      )}
                      <div>
                        <p
                          className="text-sm font-medium text-gray-700"
                          style={isHifi ? { color: DS.onSurface } : undefined}
                        >
                          {review.user}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <RatingBar rating={review.stars} />
                          <span
                            className="text-xs text-gray-400"
                            style={
                              isHifi
                                ? { color: DS.onSurfaceVariant }
                                : undefined
                            }
                          >
                            {review.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center gap-2 mb-3 p-2 bg-gray-50 rounded"
                    style={
                      isHifi
                        ? { background: DS.surfaceContainerLow }
                        : undefined
                    }
                  >
                    <ImagePlaceholder
                      label="Item"
                      className="w-11 h-11 rounded flex-shrink-0"
                    />
                    <span
                      className="text-xs text-gray-500"
                      style={
                        isHifi ? { color: DS.onSurfaceVariant } : undefined
                      }
                    >
                      Purchased:{" "}
                      <span
                        className="font-medium text-gray-600"
                        style={isHifi ? { color: DS.onSurface } : undefined}
                      >
                        {review.item}
                      </span>
                    </span>
                  </div>
                  <p
                    className="text-sm text-gray-600 leading-relaxed mb-3"
                    style={isHifi ? { color: DS.onSurfaceVariant } : undefined}
                  >
                    {review.text}
                  </p>
                  {review.aspects && (
                    <div
                      className="flex items-center gap-4 pt-3 border-t border-gray-100"
                      style={
                        isHifi
                          ? { borderTop: `1px solid ${DS.outlineVariant}` }
                          : undefined
                      }
                    >
                      {Object.entries(review.aspects).map(([key, val]) => (
                        <div key={key} className="flex items-center gap-1.5">
                          <span
                            className="text-xs text-gray-400"
                            style={
                              isHifi
                                ? { color: DS.onSurfaceVariant }
                                : undefined
                            }
                          >
                            {aspectLabels[key]}
                          </span>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <div
                                key={j}
                                className={`w-2 h-2 rounded-full ${isHifi ? "" : j < val ? "bg-gray-400" : "bg-gray-200"}`}
                                style={
                                  isHifi
                                    ? {
                                        background:
                                          j < val
                                            ? DS.primary
                                            : DS.surfaceContainerHighest,
                                      }
                                    : undefined
                                }
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <PaginationBar pages={[1, 2, 3, 4, 5]} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
