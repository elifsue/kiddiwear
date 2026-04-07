import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function VerifyCode() {
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
                Enter verification code
              </h1>
              <div className="flex flex-col items-center gap-1 max-w-xs mx-auto">
                <TextPlaceholder width="90%" />
                <TextPlaceholder width="70%" />
              </div>
            </div>
            <div className="border border-black p-6">
              <div className="mb-5">
                <label className="block text-sm font-medium text-black mb-5">
                  Verification Code
                </label>
                <div className="flex gap-2 justify-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-11 h-13 border border-black flex items-center justify-center text-lg font-bold text-black"
                    >
                      {i < 3 ? "\u2022" : ""}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-5">
                <TextPlaceholder width="140px" />
                <span className="text-sm text-black underline font-medium cursor-pointer">
                  Resend code
                </span>
              </div>
              <ActionButton variant="primary" full to={ROUTES.RESET_PASSWORD}>
                Verify Code
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
              Enter verification code
            </h1>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              We've sent a 6-digit verification code to your email address.
              Please enter it below.
            </p>
          </div>
          <div
            className="border border-gray-200 rounded-xl p-6"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-800 mb-5">
                Verification Code
              </label>
              <div className="flex gap-2 justify-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-11 h-13 border border-gray-200 rounded-md flex items-center justify-center text-lg font-bold text-gray-800"
                  >
                    {i < 3 ? "\u2022" : ""}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-400 text-center mb-5">
              Didn't receive a code?{" "}
              <span
                className="underline font-medium cursor-pointer"
                style={{ color: isHifi ? DS.primary : "#4b5563" }}
              >
                Resend code
              </span>
            </p>
            <ActionButton variant="primary" full to={ROUTES.RESET_PASSWORD}>
              Verify Code
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
