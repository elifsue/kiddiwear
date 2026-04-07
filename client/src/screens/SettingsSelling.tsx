import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { SelectInputField } from "@/components/SelectInputField";
import { Switch } from "@/components/Switch";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import SettingsLayout from "@/layout/SettingsLayout";

export default function SettingsSelling() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  return (
    <SettingsLayout>
      {isLofi ? (
        <>
          {/* Bundle Discount */}
          <div className="border border-black p-5 mb-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-sm font-semibold text-black">
                  Enable Bundle Discount
                </h2>
                <TextPlaceholder width="100%" />
              </div>
              <Switch enabled={true} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-black w-24 flex-shrink-0">
                  2 items
                </span>
                <SelectInputField placeholder="Select %" className="flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-black w-24 flex-shrink-0">
                  3 items
                </span>
                <SelectInputField placeholder="Select %" className="flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-black w-24 flex-shrink-0">
                  5 items
                </span>
                <SelectInputField placeholder="Select %" className="flex-1" />
              </div>
            </div>
          </div>

          {/* Holiday Mode */}
          <div className="border border-black p-5 mb-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-black">
                  Holiday Mode
                </h2>
                <TextPlaceholder width="100%" />
              </div>
              <Switch enabled={false} />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Bundle Discount */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-sm font-semibold text-gray-700 mb-2">
                  Enable Bundle Discount
                </h2>
                <p className="text-xs text-gray-400">
                  Offer buyers a discount when they purchase multiple items from
                  your listings.
                </p>
              </div>
              <Switch enabled={true} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24 flex-shrink-0">
                  2 items
                </span>
                <SelectInputField placeholder="5%" className="flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24 flex-shrink-0">
                  3 items
                </span>
                <SelectInputField placeholder="10%" className="flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24 flex-shrink-0">
                  5 items
                </span>
                <SelectInputField placeholder="15%" className="flex-1" />
              </div>
            </div>
          </div>

          {/* Holiday Mode */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-gray-700 mb-2">
                  Holiday Mode
                </h2>
                <p className="text-xs text-gray-400">
                  On a holiday? Hide your listings while you are away.
                </p>
              </div>
              <Switch enabled={false} />
            </div>
          </div>
        </>
      )}
    </SettingsLayout>
  );
}
