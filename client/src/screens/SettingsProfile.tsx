import { DS, useDSSync } from "@/contexts/DesignSystem";
import { Avatar } from "@/components/Avatar";
import { ActionButton } from "@/components/ActionButton";
import { TextInputField } from "@/components/TextInputField";
import { TextInputFieldMultiLine } from "@/components/TextInputFieldMultiLine";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import SettingsLayout from "@/layout/SettingsLayout";

export default function Settings() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  return (
    <SettingsLayout>
      {isLofi ? (
        <>
          {/* Profile Photo */}
          <div className="border border-black p-5 mb-5">
            <h2 className="text-sm font-semibold text-black mb-4">
              Profile Photo
            </h2>
            <div className="flex items-center gap-5">
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
              <div className="flex flex-col gap-2">
                <ActionButton variant="outlined">Upload New Photo</ActionButton>
                <p className="text-[10px] text-black">
                  JPG, PNG or GIF. Max 5MB.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="border border-black p-5 mb-5">
            <h2 className="text-sm font-semibold text-black mb-4">
              Personal Information
            </h2>
            <div className="flex flex-col gap-3">
              <TextInputField label="Display Name" />
              <TextInputField label="Username" />
              <TextInputField label="Email Address" />
              <TextInputField label="Phone Number" />
              <TextInputFieldMultiLine label="Bio" rows={3} />
            </div>
          </div>

          {/* Address */}
          <div className="border border-black p-5 mb-5">
            <h2 className="text-sm font-semibold text-black mb-4">Address</h2>
            <div className="flex flex-col gap-3">
              <TextInputField label="Address Line 1" />
              <TextInputField label="Address Line 2" optionalLabel />
              <div className="grid grid-cols-3 gap-3">
                <TextInputField label="City" />
                <TextInputField label="County" />
                <TextInputField label="Postcode" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Profile Photo */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Profile Photo
            </h2>
            <div className="flex items-center gap-5">
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
              <div className="flex flex-col gap-2">
                <ActionButton variant="outlined">Upload New Photo</ActionButton>
                <p className="text-[10px] text-gray-400">
                  JPG, PNG or GIF. Max 5MB.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Personal Information
            </h2>
            <div className="flex flex-col gap-3">
              <TextInputField label="Display Name" placeholder="Jane Smith" />
              <TextInputField label="Username" placeholder="jane_smith" />
              <TextInputField
                label="Email Address"
                placeholder="jane@example.com"
              />
              <TextInputField
                label="Phone Number"
                placeholder="+44 7700 900000"
              />
              <TextInputFieldMultiLine
                label="Bio"
                rows={3}
                placeholder="Tell buyers a bit about yourself and what you sell..."
              />
            </div>
          </div>

          {/* Address */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Address
            </h2>
            <div className="flex flex-col gap-3">
              <TextInputField
                label="Address Line 1"
                placeholder="42 Primrose Lane"
              />
              <TextInputField label="Address Line 2" optionalLabel />
              <div className="grid grid-cols-3 gap-3">
                <TextInputField label="City" placeholder="London" />
                <TextInputField label="County" placeholder="Greater London" />
                <TextInputField label="Postcode" placeholder="SW1A 1AA" />
              </div>
            </div>
          </div>
        </>
      )}
    </SettingsLayout>
  );
}
