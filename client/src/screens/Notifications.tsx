import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";
import { ChipItem } from "@/components/ChipItem";
import { Switch } from "@/components/Switch";

const notifications = [
  {
    type: "sale",
    icon: "💰",
    title: "You made a sale!",
    desc: "buyer_jane purchased Boys Striped Cotton T-Shirt for £8.00",
    time: "5 minutes ago",
    unread: true,
    link: ROUTES.WALLET,
  },
  {
    type: "dispute",
    icon: "🛡️",
    title: "Dispute update: Seller responded",
    desc: "mum_of_twins has responded to your dispute for Girls Knitted Cardigan. Our team is reviewing.",
    time: "1 hour ago",
    unread: true,
    link: ROUTES.DISPUTE_STATUS,
  },
  {
    type: "offer",
    icon: "🤝",
    title: "New offer received",
    desc: "chloe_vintage offered £6.00 for Girls Pink Skirt (listed at £10.00)",
    time: "2 days ago",
    unread: true,
    link: ROUTES.OFFER_RECEIVED_PENDING,
  },
  {
    type: "shipping",
    icon: "📦",
    title: "Item shipped",
    desc: "Your order #TT-20260406-7190 has been shipped",
    time: "3 days ago",
    unread: false,
    link: ROUTES.MY_PURCHASES,
  },
  {
    type: "price",
    icon: "📉",
    title: "Price drop on saved item",
    desc: "Boys Winter Coat dropped from £15.00 to £12.00",
    time: "4 days ago",
    unread: false,
    link: ROUTES.PRODUCT_DETAIL_BUY,
  },
  {
    type: "dispute",
    icon: "🛡️",
    title: "Dispute under review",
    desc: "Our team is now reviewing your dispute #DSP-20260330-001 for Girls Knitted Cardigan. You'll be notified of any updates.",
    time: "5 days ago",
    unread: false,
    link: ROUTES.DISPUTE_STATUS,
  },
  {
    type: "listing",
    icon: "🏷️",
    title: "New listing from seller you follow",
    desc: "sarah_mum_of_3 listed Girls Summer Dress — £5.00",
    time: "6 days ago",
    unread: false,
    link: ROUTES.PRODUCT_DETAIL_BUY,
  },
  {
    type: "dispute",
    icon: "🛡️",
    title: "Dispute submitted successfully",
    desc: "Your dispute #DSP-20260330-001 for Girls Knitted Cardigan has been received. We'll review it within 24 hours.",
    time: "1 week ago",
    unread: false,
    link: ROUTES.DISPUTE_STATUS,
  },
  {
    type: "review",
    icon: "⭐",
    title: "New review received",
    desc: "buyer_tom left you a 5-star review",
    time: "1 week ago",
    unread: false,
    link: ROUTES.PROFILE,
  },
  {
    type: "message",
    icon: "💬",
    title: "New message",
    desc: "sarah_mum_of_3 sent you a message about Boys Joggers",
    time: "2 weeks ago",
    unread: false,
    link: ROUTES.MESSAGES,
  },
];

const tabs = [
  "All",
  "Sales",
  "Messages",
  "Listings",
  "Shipping",
  "Reviews",
  "Disputes",
  "News",
];

export default function Notifications() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-xl font-bold text-black mb-1">
                  Notifications
                </h1>
                <TextPlaceholder width="60px" />
              </div>
              <button className="text-xs text-black underline font-medium">
                Mark all as read
              </button>
            </div>
            <div className="flex gap-2 mb-5 flex-wrap">
              {tabs.map((tab, i) => (
                <ChipItem key={tab} active={i === 0}>
                  {tab}
                </ChipItem>
              ))}
            </div>
            <div className="flex flex-col">
              {notifications.map((notif, i) => (
                <Link key={i} to={notif.link} className="no-underline">
                  <div className="flex items-start gap-3 px-4 py-4 border-b border-black cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white border border-black flex-shrink-0 overflow-hidden">
                      <svg viewBox="0 0 40 40" className="w-full h-full">
                        <line
                          x1="0"
                          y1="0"
                          x2="40"
                          y2="40"
                          stroke="black"
                          strokeWidth="1"
                        />
                        <line
                          x1="40"
                          y1="0"
                          x2="0"
                          y2="40"
                          stroke="black"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <TextPlaceholder width={`${40 + i * 4}%`} />
                        {notif.unread && (
                          <div className="w-2 h-2 rounded-full flex-shrink-0 bg-black" />
                        )}
                      </div>
                      <TextPlaceholder
                        width={`${55 + i * 3}%`}
                        className="mt-1"
                      />
                      <TextPlaceholder width="60px" className="mt-1" />
                    </div>
                    {(notif.type === "listing" || notif.type === "price") && (
                      <ImagePlaceholder className="w-10 h-10 flex-shrink-0" />
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5 border border-black p-4">
              <h3 className="text-sm font-semibold text-black mb-3">
                Notification Preferences
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "New messages", enabled: true },
                  { label: "New review", enabled: true },
                  {
                    label: "New listings from followed sellers",
                    enabled: true,
                  },
                  { label: "Updates on saved items", enabled: true },
                  { label: "Dispute updates", enabled: true },
                  { label: "Kiddiwear News", enabled: false },
                ].map((pref, i) => (
                  <div
                    key={pref.label}
                    className="flex items-center justify-between"
                  >
                    <TextPlaceholder width={`${45 + i * 7}%`} />
                    <Switch enabled={pref.enabled} />
                  </div>
                ))}
              </div>
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
      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold text-gray-800 mb-1">
                Notifications
              </h1>
              <p className="text-sm text-gray-400">3 unread</p>
            </div>
            <button
              className="text-xs underline font-medium"
              style={{ color: isHifi ? DS.primary : "#4b5563" }}
            >
              Mark all as read
            </button>
          </div>
          <div className="flex gap-2 mb-5 flex-wrap">
            {tabs.map((tab, i) => (
              <ChipItem key={tab} active={i === 0}>
                {tab}
              </ChipItem>
            ))}
          </div>
          <div className="flex flex-col">
            {notifications.map((notif, i) => (
              <Link key={i} to={notif.link} className="no-underline">
                <div
                  className={`flex items-start gap-3 px-4 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.unread ? "bg-gray-50" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 text-sm">
                    {notif.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p
                        className={`text-sm ${notif.unread ? "font-semibold text-gray-800" : "font-medium text-gray-700"}`}
                      >
                        {notif.title}
                      </p>
                      {notif.unread && (
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: isHifi ? DS.error : "#000000" }}
                        />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{notif.desc}</p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      {notif.time}
                    </p>
                  </div>
                  {(notif.type === "listing" || notif.type === "price") && (
                    <ImagePlaceholder
                      label="Item"
                      className="w-10 h-10 rounded flex-shrink-0"
                    />
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div
            className="mt-5 border border-gray-200 rounded-lg p-4"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Notification Preferences
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "New messages", enabled: true },
                { label: "New review", enabled: true },
                { label: "New listings from followed sellers", enabled: true },
                { label: "Updates on saved items", enabled: true },
                { label: "Dispute updates", enabled: true },
                { label: "Kiddiwear News", enabled: false },
              ].map(pref => (
                <div
                  key={pref.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-gray-600">{pref.label}</span>
                  <Switch enabled={pref.enabled} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
