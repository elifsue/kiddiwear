import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link, useLocation } from "wouter";

const settingsTabs = [
  { path: ROUTES.SETTINGS_PROFILE, label: "Profile Details" },
  { path: ROUTES.SETTINGS_PAYMENTS, label: "Payments" },
  { path: ROUTES.SETTINGS_SELLING, label: "Selling Settings" },
  { path: ROUTES.SETTINGS_NOTIFICATIONS, label: "Notifications" },
  { path: ROUTES.SETTINGS_ACCOUNT, label: "Account Settings" },
];

export default function SettingsLayout({
  children,
  hideBottomButtons,
}: {
  children: React.ReactNode;
  hideBottomButtons?: boolean;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  const [location] = useLocation();

  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 pt-6 pb-6 flex-1">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <Link
                to={ROUTES.PROFILE}
                className="w-8 h-8 border border-black flex items-center justify-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-black"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </Link>
              <h1 className="text-xl font-bold text-black">Settings</h1>
            </div>
            {/* Sidebar + Content */}
            <div className="flex gap-6">
              {/* Left sidebar menu */}
              <div className="w-56 flex-shrink-0 sticky top-6 self-start">
                <div className="border border-black">
                  {settingsTabs.map(tab => (
                    <Link
                      key={tab.path}
                      to={tab.path}
                      className={`block px-5 py-3.5 text-sm font-medium text-black border-b border-black last:border-b-0 ${
                        location === tab.path ? "bg-black text-white" : ""
                      }`}
                    >
                      {tab.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="flex-1">
                {children}
                {!hideBottomButtons && (
                  <div className="mt-6 flex justify-end">
                    <ActionButton variant="primary">Save Changes</ActionButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
      <div className="px-6 pt-6 pb-6 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Link
              to={ROUTES.PROFILE}
              className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
              style={{
                background: isHifi ? DS.surfaceContainerLowest : undefined,
                borderColor: isHifi ? DS.outlineVariant : undefined,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-500"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Settings</h1>
          </div>
          {/* Sidebar + Content */}
          <div className="flex gap-6">
            {/* Left sidebar menu */}
            <div className="w-56 flex-shrink-0 sticky top-6 self-start">
              <div
                className="border border-gray-200 rounded-lg overflow-hidden"
                style={{
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                }}
              >
                {settingsTabs.map(tab => {
                  const isActive = location === tab.path;
                  return (
                    <Link
                      key={tab.path}
                      to={tab.path}
                      className={`block px-5 py-3.5 text-sm font-medium border-b border-gray-200 last:border-b-0 transition-colors ${
                        isHifi
                          ? ""
                          : isActive
                            ? "bg-gray-100 text-gray-800"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                      style={{
                        borderColor: isHifi ? DS.outlineVariant : undefined,
                        ...(isActive && isHifi
                          ? {
                              background: DS.surfaceContainerLow,
                              color: DS.onSurface,
                            }
                          : {}),
                        ...(!isActive && isHifi
                          ? { color: DS.onSurfaceVariant }
                          : {}),
                      }}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* Content */}
            <div className="flex-1">
              {children}
              {!hideBottomButtons && (
                <div className="mt-6 flex justify-end">
                  <ActionButton variant="primary">Save Changes</ActionButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
