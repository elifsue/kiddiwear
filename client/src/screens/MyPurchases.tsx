import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { BadgeLabel } from "@/components/BadgeLabel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";
import { ChipItem } from "@/components/ChipItem";
import { SearchBar } from "@/components/SearchBar";
import { TabItem } from "@/components/TabItem";

const purchasesDetailed = [
  {
    id: "TT-20260408-6291",
    status: "Pending Shipment",
    title: "Girls Floral Dress",
    brand: "Next Kids",
    size: "3 years / 98\u2013103 cm",
    condition: "Very good",
    seller: "emma_preloved",
    price: "\u00A315.40",
    date: "8 Apr 2026",
    tracking: false,
  },
  {
    id: "TT-20260406-7190",
    status: "Shipped",
    title: "Unisex Raincoat",
    brand: "H&M",
    size: "5 years / 110 cm",
    condition: "Good",
    seller: "rainy_day_kids",
    price: "\u00A314.00",
    date: "6 Apr 2026",
    tracking: false,
  },
  {
    id: "TT-20260405-7823",
    status: "Out for Delivery",
    title: "Boys Striped Cotton T-Shirt",
    brand: "Next Kids",
    size: "4 years / 104 cm",
    condition: "Like new",
    seller: "sarah_mum_of_3",
    price: "\u00A311.49",
    date: "5 Apr 2026",
    tracking: false,
  },
  {
    id: "TT-20260330-5210",
    status: "Delivered",
    title: "Girls Knitted Cardigan",
    brand: "Zara",
    size: "24\u201336 months / 92 cm",
    condition: "Very good",
    seller: "mum_of_twins",
    price: "\u00A312.00",
    date: "30 Mar 2026",
    tracking: false,
    hasDispute: true,
  },
  {
    id: "TT-20260328-5104",
    status: "Delivered",
    title: "Baby Snowsuit Bundle",
    brand: "M&S",
    size: "6\u20139 months / 68 cm",
    condition: "Good",
    seller: "tiny_wardrobe",
    price: "\u00A322.80",
    date: "28 Mar 2026",
    tracking: false,
  },
  {
    id: "TT-20260320-4887",
    status: "Cancelled",
    title: "Boys School Shoes",
    brand: "Clarks",
    size: "5 years / 110 cm",
    condition: "New with tags",
    seller: "kidsstyle_uk",
    price: "\u00A318.50",
    date: "20 Mar 2026",
    tracking: false,
  },
];

const statusFilters = [
  "All",
  "Pending Shipment",
  "Shipped",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

export default function MyOrders() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();
  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-xl font-bold text-black">My Orders</h1>
        </div>
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <TabItem active>Purchases</TabItem>
            <TabItem to={ROUTES.MY_SALES}>Sales</TabItem>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar – matches nav toolbar style */}
            <SearchBar
              placeholder="Search by item name or order number..."
              className="mb-4"
            />

            {/* Status Filter Bar */}
            <div className="flex gap-2 mb-5 flex-wrap">
              {statusFilters.map((filter, i) => (
                <button
                  key={filter}
                  className={`px-3 py-1.5 text-xs rounded-full border cursor-pointer ${i === 0 ? "bg-white text-black border-2 border-black font-semibold" : "border-black text-black"}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <TextPlaceholder width="100px" className="mb-4" />

            <div className="flex flex-col gap-4">
              {purchasesDetailed.map(order => (
                <div key={order.id} className="border border-black p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <TextPlaceholder width="130px" />
                      <BadgeLabel
                        variant={
                          order.status === "Delivered"
                            ? "positive"
                            : order.status === "Cancelled"
                              ? "negative"
                              : "neutral"
                        }
                      >
                        {order.status}
                      </BadgeLabel>
                    </div>
                    <TextPlaceholder width="70px" />
                  </div>
                  <TextPlaceholder width="100px" className="mb-3" />
                  <div className="flex items-center gap-4">
                    <ImagePlaceholder className="w-20 h-20 flex-shrink-0" />
                    <div className="flex-1 flex flex-col gap-1">
                      <TextPlaceholder width="85%" />
                      <TextPlaceholder width="60%" />
                      <span className="text-sm font-semibold text-black mt-1">
                        {order.price}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 w-[170px]">
                      {(order.status === "Out for Delivery" ||
                        order.status === "Shipped") && (
                        <ActionButton
                          to={ROUTES.TRACK_ORDER}
                          variant="outlined"
                          full
                        >
                          Track Order
                        </ActionButton>
                      )}
                      {order.status === "Delivered" && (
                        <ActionButton
                          to={ROUTES.LEAVE_REVIEW}
                          variant="outlined"
                          full
                        >
                          Leave Review
                        </ActionButton>
                      )}
                      {order.status === "Delivered" && order.hasDispute && (
                        <ActionButton
                          to={ROUTES.DISPUTE_STATUS}
                          variant="outlined"
                          full
                        >
                          View Dispute
                        </ActionButton>
                      )}
                      {order.status === "Cancelled" && (
                        <ActionButton variant="outlined" full>
                          View Details
                        </ActionButton>
                      )}
                      {order.status === "Pending Shipment" && (
                        <ActionButton
                          to={ROUTES.TRACK_ORDER}
                          variant="outlined"
                          full
                        >
                          Track Order
                        </ActionButton>
                      )}
                      {order.status === "Pending Shipment" && (
                        <ActionButton variant="outlined" full>
                          Cancel Order
                        </ActionButton>
                      )}
                      {order.status === "Delivered" && !order.hasDispute && (
                        <ActionButton
                          to={ROUTES.DISPUTE}
                          variant="outlined"
                          full
                        >
                          Report Issue
                        </ActionButton>
                      )}
                      {order.status !== "Cancelled" && (
                        <ActionButton
                          to={ROUTES.MESSAGES}
                          variant="outlined"
                          full
                        >
                          Message Seller
                        </ActionButton>
                      )}
                    </div>
                  </div>
                  {order.tracking && (
                    <div className="mt-3 pt-3 border-t border-black">
                      <div className="flex items-center gap-8">
                        {[
                          "Order placed",
                          "Shipped",
                          "In transit",
                          "Delivered",
                        ].map((step, j) => (
                          <div key={step} className="flex items-center gap-2">
                            <div
                              className={`w-3 h-3 rounded-full ${j <= 2 ? "bg-black" : "bg-white border border-black"}`}
                            />
                            <span className="text-xs text-black">{step}</span>
                            {j < 3 && (
                              <div
                                className={`w-8 h-px ${j < 2 ? "bg-black" : "bg-black"}`}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
      <div className="px-6 pt-6 pb-4">
        <h1 className="text-xl font-bold text-gray-800">My Orders</h1>
      </div>
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <TabItem active>Purchases</TabItem>
          <TabItem to={ROUTES.MY_SALES}>Sales</TabItem>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Search Bar – matches nav toolbar style */}
          <SearchBar
            placeholder="Search by item name or order number..."
            className="mb-4"
          />

          {/* Status Filter Bar */}
          <div className="flex gap-2 mb-5 flex-wrap">
            {statusFilters.map((filter, i) => (
              <ChipItem key={filter} active={i === 0}>
                {filter}
              </ChipItem>
            ))}
          </div>

          <p className="text-xs text-gray-400 mb-4">Showing 6 orders</p>

          <div className="flex flex-col gap-4">
            {purchasesDetailed.map(order => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-4"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-700">
                      Order #{order.id}
                    </span>
                    <BadgeLabel
                      variant={
                        order.status === "Delivered"
                          ? "positive"
                          : order.status === "Cancelled"
                            ? "negative"
                            : "neutral"
                      }
                    >
                      {order.status}
                    </BadgeLabel>
                  </div>
                  <span className="text-xs text-gray-400">{order.date}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  Seller:{" "}
                  <Link
                    to={ROUTES.SELLER_PROFILE}
                    className="underline hover:text-gray-500"
                  >
                    {order.seller}
                  </Link>
                </p>
                <div className="flex items-center gap-4">
                  <ImagePlaceholder
                    label="Item"
                    className="w-20 h-20 rounded flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium mb-1 ${order.status === "Cancelled" ? "text-gray-400 line-through" : "text-gray-700"}`}
                    >
                      {order.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {order.brand} &middot; {order.size} &middot;{" "}
                      {order.condition}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      {order.price}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-[170px]">
                    {(order.status === "Out for Delivery" ||
                      order.status === "Shipped") && (
                      <ActionButton
                        to={ROUTES.TRACK_ORDER}
                        variant="outlined"
                        full
                      >
                        Track Order
                      </ActionButton>
                    )}
                    {order.status === "Delivered" && (
                      <ActionButton
                        to={ROUTES.LEAVE_REVIEW}
                        variant="outlined"
                        full
                      >
                        Leave Review
                      </ActionButton>
                    )}
                    {order.status === "Delivered" && order.hasDispute && (
                      <ActionButton
                        to={ROUTES.DISPUTE_STATUS}
                        variant="outlined"
                        full
                      >
                        View Dispute
                      </ActionButton>
                    )}
                    {order.status === "Cancelled" && (
                      <ActionButton variant="outlined" full>
                        View Details
                      </ActionButton>
                    )}
                    {order.status === "Pending Shipment" && (
                      <ActionButton
                        to={ROUTES.TRACK_ORDER}
                        variant="outlined"
                        full
                      >
                        Track Order
                      </ActionButton>
                    )}
                    {order.status === "Pending Shipment" && (
                      <ActionButton variant="outlined" full>
                        Cancel Order
                      </ActionButton>
                    )}
                    {order.status === "Delivered" && !order.hasDispute && (
                      <ActionButton to={ROUTES.DISPUTE} variant="outlined" full>
                        Report Issue
                      </ActionButton>
                    )}
                    {order.status !== "Cancelled" && (
                      <ActionButton
                        to={ROUTES.MESSAGES}
                        variant="secondary"
                        full
                      >
                        Message Seller
                      </ActionButton>
                    )}
                  </div>
                </div>
                {order.tracking && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-8">
                      {[
                        "Order placed",
                        "Shipped",
                        "In transit",
                        "Delivered",
                      ].map((step, j) => (
                        <div key={step} className="flex items-center gap-2">
                          <div
                            className={`w-3 h-3 rounded-full ${j <= 2 ? "bg-gray-500" : "bg-gray-200"}`}
                          />
                          <span
                            className={`text-xs ${j <= 2 ? "text-gray-600" : "text-gray-300"}`}
                          >
                            {step}
                          </span>
                          {j < 3 && (
                            <div
                              className={`w-8 h-px ${j < 2 ? "bg-gray-500" : "bg-gray-200"}`}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
