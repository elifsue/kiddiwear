import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { GoogleIcon, FacebookIcon, AppleIcon } from "@/icons/SocialIcons";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import SettingsLayout from "@/layout/SettingsLayout";

export default function SettingsAccount() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  return (
    <SettingsLayout hideBottomButtons>
      {isLofi ? (
        <>
          {/* Linked Social Accounts */}
          <div className="border border-black p-5 mb-5">
            <h2 className="text-sm font-semibold text-black mb-4">
              Linked Social Accounts
            </h2>
            <div className="flex flex-col">
              {[
                { name: "Google", linked: true },
                { name: "Facebook", linked: false },
                { name: "Apple", linked: false },
              ].map(account => (
                <div
                  key={account.name}
                  className="flex items-center justify-between py-3 border-b border-black last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-black bg-white relative flex-shrink-0">
                      <svg
                        viewBox="0 0 40 40"
                        className="absolute inset-0 w-full h-full"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="40"
                          y2="40"
                          stroke="black"
                          strokeWidth="0.75"
                        />
                        <line
                          x1="40"
                          y1="0"
                          x2="0"
                          y2="40"
                          stroke="black"
                          strokeWidth="0.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">
                        {account.name}
                      </p>
                      <TextPlaceholder width="100px" />
                    </div>
                  </div>
                  <ActionButton
                    variant={account.linked ? "outlined" : "primary"}
                  >
                    {account.linked ? "Unlink" : "Link"}
                  </ActionButton>
                </div>
              ))}
            </div>
          </div>

          {/* Account Settings */}
          <div className="border border-black p-5">
            <h2 className="text-sm font-semibold text-black mb-4">
              Account Settings
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">
                    Change Password
                  </p>
                  <TextPlaceholder width="65%" />
                </div>
                <ActionButton variant="outlined" to={ROUTES.CHANGE_PASSWORD}>
                  Change Password
                </ActionButton>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">
                    Deactivate Account
                  </p>
                  <TextPlaceholder width="65%" />
                </div>
                <ActionButton variant="outlined">Deactivate</ActionButton>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-black">
                    Delete Account
                  </p>
                  <TextPlaceholder width="65%" />
                </div>
                <ActionButton variant="destructive">
                  Delete Account
                </ActionButton>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Linked Social Accounts */}
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Linked Social Accounts
            </h2>
            <div className="flex flex-col">
              {[
                { name: "Google", linked: true },
                { name: "Facebook", linked: false },
                { name: "Apple", linked: false },
              ].map(account => (
                <div
                  key={account.name}
                  className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    {isHifi ? (
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        {account.name === "Google" && <GoogleIcon size={28} />}
                        {account.name === "Facebook" && (
                          <FacebookIcon size={28} />
                        )}
                        {account.name === "Apple" && <AppleIcon size={28} />}
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {account.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {account.linked ? "Connected" : "Not connected"}
                      </p>
                    </div>
                  </div>
                  <ActionButton
                    variant={account.linked ? "outlined" : "primary"}
                  >
                    {account.linked ? "Unlink" : "Link"}
                  </ActionButton>
                </div>
              ))}
            </div>
          </div>

          {/* Account Settings */}
          <div
            className="border border-gray-200 rounded-lg p-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Account Settings
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Change Password
                  </p>
                  <p className="text-xs text-gray-400">
                    Update your password to keep your account secure.
                  </p>
                </div>
                <ActionButton variant="outlined" to={ROUTES.CHANGE_PASSWORD}>
                  Change Password
                </ActionButton>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Deactivate Account
                  </p>
                  <p className="text-xs text-gray-400">
                    Temporarily disable your account. You can reactivate
                    anytime.
                  </p>
                </div>
                <ActionButton variant="outlined">Deactivate</ActionButton>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Delete Account
                  </p>
                  <p className="text-xs text-gray-400">
                    Permanently delete your account. This action cannot be
                    undone.
                  </p>
                </div>
                <ActionButton variant="destructive">
                  Delete Account
                </ActionButton>
              </div>
            </div>
          </div>
        </>
      )}
    </SettingsLayout>
  );
}
