import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";

export default function ForgotPassword() {
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
                Forgot your password?
              </h1>
              <div className="flex flex-col items-center gap-1 max-w-xs mx-auto">
                <TextPlaceholder width="90%" />
                <TextPlaceholder width="60%" />
              </div>
            </div>
            <div className="border border-black p-6">
              <div className="flex flex-col gap-4 mb-5">
                <TextInputField label="Email Address" />
              </div>
              <ActionButton variant="primary" full to={ROUTES.VERIFY_CODE}>
                Send Reset Link
              </ActionButton>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link
                to={ROUTES.LOGIN}
                className="text-sm text-black underline font-medium"
              >
                Back to Log In
              </Link>
              <span className="text-black">|</span>
              <Link
                to={ROUTES.SIGNUP}
                className="text-sm text-black underline font-medium"
              >
                Create Account
              </Link>
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
              Forgot your password?
            </h1>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">
              No worries. Enter your email address below and we'll send you a
              link to reset your password.
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
                label="Email Address"
                placeholder="Enter your email address"
                type="email"
              />
            </div>
            <ActionButton variant="primary" full to={ROUTES.VERIFY_CODE}>
              Send Reset Link
            </ActionButton>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link
              to={ROUTES.LOGIN}
              className="text-sm underline font-medium"
              style={{ color: isHifi ? DS.primary : "#4b5563" }}
            >
              Back to Log In
            </Link>
            <span className="text-gray-800">|</span>
            <Link
              to={ROUTES.SIGNUP}
              className="text-sm underline font-medium"
              style={{ color: isHifi ? DS.primary : "#4b5563" }}
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
