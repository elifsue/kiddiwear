import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { GoogleIcon, FacebookIcon, AppleIcon } from "@/icons/SocialIcons";
import { Checkbox } from "@/components/Checkbox";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";

export default function SignUp() {
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
                Create your account
              </h1>
              <div className="flex justify-center">
                <TextPlaceholder width="70%" />
              </div>
            </div>
            <div className="border border-black p-6">
              <div className="flex flex-col gap-3 mb-5">
                {["Google", "Facebook", "Apple"].map(provider => (
                  <button
                    key={provider}
                    className="h-10 border border-black flex items-center justify-center gap-2 text-sm text-black"
                  >
                    <div className="w-5 h-5 border border-black bg-white relative flex-shrink-0">
                      <svg viewBox="0 0 20 20" className="w-full h-full">
                        <line
                          x1="0"
                          y1="0"
                          x2="20"
                          y2="20"
                          stroke="black"
                          strokeWidth="1"
                        />
                        <line
                          x1="20"
                          y1="0"
                          x2="0"
                          y2="20"
                          stroke="black"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    Continue with {provider}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-black" />
                <span className="text-xs text-black uppercase">
                  or sign up with email
                </span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <div className="flex flex-col gap-4 mb-5">
                <div className="grid grid-cols-2 gap-3">
                  <TextInputField label="First Name" placeholder="Jane" />
                  <TextInputField label="Last Name" placeholder="Smith" />
                </div>
                <TextInputField
                  label="Email Address"
                  placeholder="jane@example.com"
                />
                <TextInputField label="Username" placeholder="jane_smith" />
                <TextInputField label="Password" placeholder="Enter password" />
                <TextInputField
                  label="Confirm Password"
                  placeholder="Enter password"
                />
              </div>
              <div className="flex items-center gap-2 mb-5">
                <Checkbox checked={false} />
                <TextPlaceholder width="85%" />
              </div>
              <ActionButton variant="primary" full>
                Create Account
              </ActionButton>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <TextPlaceholder width="140px" />
              <Link
                to={ROUTES.LOGIN}
                className="text-black underline font-medium text-sm"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Detailed (exact original) ── */
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
              Create your account
            </h1>
            <p className="text-sm text-gray-400">
              Join Kiddiwear to buy and sell kids' clothing.
            </p>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-6"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex flex-col gap-3 mb-5">
              <button className="h-10 border border-gray-300 rounded flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
                {isHifi ? (
                  <GoogleIcon size={20} />
                ) : (
                  <div className="w-5 h-5 bg-gray-200 rounded-full" />
                )}
                Continue with Google
              </button>
              <button className="h-10 border border-gray-300 rounded flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
                {isHifi ? (
                  <FacebookIcon size={20} />
                ) : (
                  <div className="w-5 h-5 bg-gray-200 rounded-full" />
                )}
                Continue with Facebook
              </button>
              <button className="h-10 border border-gray-300 rounded flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
                {isHifi ? (
                  <AppleIcon size={20} />
                ) : (
                  <div className="w-5 h-5 bg-gray-200 rounded-full" />
                )}
                Continue with Apple
              </button>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 uppercase">
                or sign up with email
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <div className="grid grid-cols-2 gap-3">
                <TextInputField label="First Name" placeholder="Jane" />
                <TextInputField label="Last Name" placeholder="Smith" />
              </div>
              <TextInputField
                label="Email Address"
                placeholder="jane@example.com"
                type="email"
              />
              <TextInputField label="Username" placeholder="jane_smith" />
              <TextInputField
                label="Password"
                placeholder="Enter password"
                type="password"
              />
              <TextInputField
                label="Confirm Password"
                placeholder="Enter password"
                type="password"
              />
            </div>
            <div className="flex items-center gap-2 mb-5">
              <Checkbox checked={false} />
              <p className="text-xs text-gray-400">
                I agree to the{" "}
                <Link
                  to={ROUTES.TERMS}
                  className="underline font-medium"
                  style={{ color: isHifi ? DS.primary : "#4b5563" }}
                >
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to={ROUTES.PRIVACY}
                  className="underline font-medium"
                  style={{ color: isHifi ? DS.primary : "#4b5563" }}
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
            <ActionButton variant="primary" full>
              Create Account
            </ActionButton>
          </div>
          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <Link
              to={ROUTES.LOGIN}
              className="underline font-medium"
              style={{ color: isHifi ? DS.primary : "#4b5563" }}
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
