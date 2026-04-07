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

const salesDetailed = [
  {
    id: "TT-20260406-4201",
    status: "Pending Shipment",
    title: "Boys Striped Cotton T-Shirt",
    brand: "Next Kids",
    size: "4 years / 104 cm",
    condition: "Like new",
    buyer: "emma_bargain_hunter",
    price: "\u00A36.50",
    date: "6 Apr 2026",
  },
  {
    id: "TT-20260404-4198",
    status: "Shipped",
    title: "Girls Floral Summer Dress",
    brand: "Next Kids",
    size: "3 years / 98\u2013103 cm",
    condition: "Very good",
    buyer: "lucy_mum_of_2",
    price: "\u00A312.00",
    date: "4 Apr 2026",
  },
  {
    id: "TT-20260402-4190",
    status: "Out for Delivery",
    title: "Girls Winter Coat",
    brand: "Zara",
    size: "4 years / 104 cm",
    condition: "Good",
    buyer: "mum_of_twins",
    price: "\u00A318.00",
    date: "2 Apr 2026",
  },
  {
    id: "TT-20260401-4185",
    status: "Delivered",
    title: "Unisex Raincoat",
    brand: "H&M",
    size: "6 years / 116 cm",
    condition: "New with tags",
    buyer: "dad_deals_uk",
    price: "\u00A315.00",
    date: "1 Apr 2026",
  },
  {
    id: "TT-20260325-4140",
    status: "Cancelled",
    title: "Boys School Trousers",
    brand: "M&S",
    size: "5 years / 110 cm",
    condition: "Good",
    buyer: "bargain_dad",
    price: "\u00A38.00",
    date: "25 Mar 2026",
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

export default function MySales() {
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
            <TabItem to={ROUTES.MY_PURCHASES}>Purchases</TabItem>
            <TabItem active>Sales</TabItem>
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
              {salesDetailed.map(sale => (
                <div key={sale.id} className="border border-black p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <TextPlaceholder width="130px" />
                      <BadgeLabel
                        variant={
                          sale.status === "Delivered"
                            ? "positive"
                            : sale.status === "Cancelled"
                              ? "negative"
                              : "neutral"
                        }
                      >
                        {sale.status}
                      </BadgeLabel>
                    </div>
                    <TextPlaceholder width="70px" />
                  </div>
                  <TextPlaceholder width="100px" className="mb-3" />
                  <div className="flex items-center gap-4">
                    <ImagePlaceholder
                      className="w-20 h-20 flex-shrink-0"
                      aspectRatio="1/1"
                    />
                    <div className="flex-1 flex flex-col gap-1">
                      <TextPlaceholder width="85%" />
                      <TextPlaceholder width="60%" />
                      <span className="text-sm font-semibold text-black mt-1">
                        {sale.price}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 w-[170px]">
                      {sale.status === "Pending Shipment" && (
                        <ActionButton variant="outlined" full>
                          Mark as Shipped
                        </ActionButton>
                      )}
                      {sale.status === "Pending Shipment" && (
                        <ActionButton
                          to={ROUTES.TRACK_ORDER}
                          variant="outlined"
                          full
                        >
                          Track Order
                        </ActionButton>
                      )}
                      {sale.status === "Pending Shipment" && (
                        <ActionButton variant="outlined" full>
                          Print Label
                        </ActionButton>
                      )}
                      {sale.status === "Pending Shipment" && (
                        <ActionButton
                          to={ROUTES.MESSAGES}
                          variant="outlined"
                          full
                        >
                          Message Buyer
                        </ActionButton>
                      )}
                      {sale.status === "Shipped" && (
                        <ActionButton
                          to={ROUTES.TRACK_ORDER}
                          variant="outlined"
                          full
                        >
                          Track Order
                        </ActionButton>
                      )}
                      {sale.status === "Shipped" && (
                        <ActionButton
                          to={ROUTES.MESSAGES}
                          variant="outlined"
                          full
                        >
                          Message Buyer
                        </ActionButton>
                      )}
                      {sale.status === "Out for Delivery" && (
                        <ActionButton
                          to={ROUTES.TRACK_ORDER}
                          variant="outlined"
                          full
                        >
                          Track Order
                        </ActionButton>
                      )}
                      {sale.status === "Out for Delivery" && (
                        <ActionButton
                          to={ROUTES.MESSAGES}
                          variant="outlined"
                          full
                        >
                          Message Buyer
                        </ActionButton>
                      )}
                      {sale.status === "Delivered" && (
                        <ActionButton
                          to={ROUTES.MESSAGES}
                          variant="outlined"
                          full
                        >
                          Message Buyer
                        </ActionButton>
                      )}
                      {sale.status === "Cancelled" && (
                        <ActionButton variant="outlined" full>
                          View Details
                        </ActionButton>
                      )}
                    </div>
                  </div>
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
          <TabItem to={ROUTES.MY_PURCHASES}>Purchases</TabItem>
          <TabItem active>Sales</TabItem>
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

          <p className="text-xs text-gray-400 mb-4">Showing 5 orders</p>

          <div className="flex flex-col gap-4">
            {salesDetailed.map(sale => (
              <div
                key={sale.id}
                className="border border-gray-200 rounded-lg p-4"
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-700">
                      Order #{sale.id}
                    </span>
                    <BadgeLabel
                      variant={
                        sale.status === "Delivered"
                          ? "positive"
                          : sale.status === "Cancelled"
                            ? "negative"
                            : "neutral"
                      }
                    >
                      {sale.status}
                    </BadgeLabel>
                  </div>
                  <span className="text-xs text-gray-400">{sale.date}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  Buyer:{" "}
                  <Link
                    to={ROUTES.SELLER_PROFILE}
                    className="underline hover:text-gray-500"
                  >
                    {sale.buyer}
                  </Link>
                </p>
                <div className="flex items-center gap-4">
                  <ImagePlaceholder
                    label="Item"
                    className="w-20 h-20 rounded flex-shrink-0"
                    aspectRatio="1/1"
                  />
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium mb-1 ${sale.status === "Cancelled" ? "text-gray-400 line-through" : "text-gray-700"}`}
                    >
                      {sale.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {sale.brand} &middot; {sale.size} &middot;{" "}
                      {sale.condition}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      {sale.price}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-[170px]">
                    {sale.status === "Pending Shipment" && (
                      <ActionButton variant="outlined" full>
                        Mark as Shipped
                      </ActionButton>
                    )}
                    {sale.status === "Pending Shipment" && (
                      <ActionButton
                        to={ROUTES.TRACK_ORDER}
                        variant="outlined"
                        full
                      >
                        Track Order
                      </ActionButton>
                    )}
                    {sale.status === "Pending Shipment" && (
                      <ActionButton variant="outlined" full>
                        Print Label
                      </ActionButton>
                    )}
                    {sale.status === "Pending Shipment" && (
                      <ActionButton
                        to={ROUTES.MESSAGES}
                        variant="secondary"
                        full
                      >
                        Message Buyer
                      </ActionButton>
                    )}
                    {sale.status === "Shipped" && (
                      <ActionButton
                        to={ROUTES.TRACK_ORDER}
                        variant="outlined"
                        full
                      >
                        Track Order
                      </ActionButton>
                    )}
                    {sale.status === "Shipped" && (
                      <ActionButton
                        to={ROUTES.MESSAGES}
                        variant="secondary"
                        full
                      >
                        Message Buyer
                      </ActionButton>
                    )}
                    {sale.status === "Out for Delivery" && (
                      <ActionButton
                        to={ROUTES.TRACK_ORDER}
                        variant="outlined"
                        full
                      >
                        Track Order
                      </ActionButton>
                    )}
                    {sale.status === "Out for Delivery" && (
                      <ActionButton
                        to={ROUTES.MESSAGES}
                        variant="secondary"
                        full
                      >
                        Message Buyer
                      </ActionButton>
                    )}
                    {sale.status === "Delivered" && (
                      <ActionButton
                        to={ROUTES.MESSAGES}
                        variant="secondary"
                        full
                      >
                        Message Buyer
                      </ActionButton>
                    )}
                    {sale.status === "Cancelled" && (
                      <ActionButton variant="outlined" full>
                        View Details
                      </ActionButton>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
