import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function ResetPassword() {
  const { isLofi, isHifi } = useFidelityMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar hideAccountLinks />
        <div className="flex-1 flex items-center justify-center py-12 px-6">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-lg font-bold">KW</span>
              </div>
              <h1 className="text-2xl font-bold text-black mb-2">
                Set new password
              </h1>
              <div className="flex flex-col items-center gap-1 max-w-xs mx-auto">
                <TextPlaceholder width="85%" />
                <TextPlaceholder width="55%" />
              </div>
            </div>
            <div className="border border-black p-6">
              <div className="flex flex-col gap-4 mb-5">
                <TextInputField label="New Password" />
                <TextInputField label="Confirm New Password" />
              </div>
              <div className="mb-5">
                <p className="text-xs font-medium text-black mb-2">
                  Password requirements:
                </p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border border-black rounded-full flex-shrink-0" />
                    <TextPlaceholder width="60%" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border border-black rounded-full flex-shrink-0" />
                    <TextPlaceholder width="70%" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border border-black rounded-full flex-shrink-0" />
                    <TextPlaceholder width="75%" />
                  </div>
                </div>
              </div>
              <ActionButton variant="primary" full to={ROUTES.HOME}>
                Reset Password
              </ActionButton>
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
      <NavigationBar hideAccountLinks />
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            {isHifi ? (
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/zeAnyiNIJppqyNeF.png"
                alt="Kiddiwear"
                className="w-12 h-12 object-contain mx-auto mb-4"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-bold">KW</span>
              </div>
            )}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Set new password
            </h1>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              Your identity has been verified. Please choose a new password for
              your account.
            </p>
          </div>
          <div
            className="border border-gray-200 rounded-xl p-6"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex flex-col gap-4 mb-5">
              <TextInputField
                label="New Password"
                placeholder="Enter new password"
                type="password"
              />
              <TextInputField
                label="Confirm New Password"
                placeholder="Confirm new password"
                type="password"
              />
            </div>
            <div className="mb-5">
              <p className="text-xs font-medium text-gray-800 mb-2">
                Password requirements:
              </p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border border-gray-300 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">
                    At least 8 characters long.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border border-gray-300 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">
                    Contains at least one uppercase letter.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border border-gray-300 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">
                    Contains at least one number or special character.
                  </span>
                </div>
              </div>
            </div>
            <ActionButton variant="primary" full to={ROUTES.HOME}>
              Reset Password
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
