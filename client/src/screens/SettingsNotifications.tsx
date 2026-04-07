import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { Switch } from "@/components/Switch";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import SettingsLayout from "@/layout/SettingsLayout";

const notifPrefs = [
  { label: "New messages", enabled: true },
  { label: "New review", enabled: true },
  { label: "New listings from followed sellers", enabled: true },
  { label: "Updates on saved items", enabled: true },
  { label: "Dispute updates", enabled: true },
  { label: "Kiddiwear News", enabled: false },
];

export default function SettingsNotifications() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  return (
    <SettingsLayout>
      {isLofi ? (
        <>
          {/* Notification Preferences */}
          <div className="border border-black p-5 mb-5">
            <h2 className="text-sm font-semibold text-black mb-4">
              Notification Preferences
            </h2>
            <div className="flex flex-col gap-3">
              {notifPrefs.map((pref, i) => (
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
        </>
      ) : (
        <>
          {/* Notification Preferences */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Notification Preferences
            </h2>
            <div className="flex flex-col gap-3">
              {notifPrefs.map(pref => (
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
        </>
      )}
    </SettingsLayout>
  );
}
