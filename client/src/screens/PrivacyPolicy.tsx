import { TextPlaceholder } from "@/components/TextPlaceholder";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function PrivacyPolicy() {
  const { isLofi, isHifi } = useFidelityMode();

  const sections = [
    "1. Introduction",
    "2. Information We Collect",
    "3. How We Use Your Information",
    "4. Sharing Your Information",
    "5. Data Retention",
    "6. Your Rights",
    "7. Cookies",
    "8. Children's Privacy",
    "9. Security",
    "10. Changes to This Policy",
    "11. Contact Us",
  ];

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        {/* Hero */}
        <div className="px-6 py-10 bg-white text-center border-b border-black">
          <h1 className="text-3xl font-bold text-black mb-2">Privacy Policy</h1>
          <TextPlaceholder width="200px" className="mx-auto" />
        </div>

        {/* Content */}
        <div className="px-6 py-8 max-w-3xl mx-auto w-full">
          {sections.map(title => (
            <div key={title} className="mb-8">
              <h2 className="text-base font-bold text-black mb-3">{title}</h2>
              <div className="flex flex-col gap-2">
                <TextPlaceholder lines={3} />
                <TextPlaceholder lines={2} />
              </div>
            </div>
          ))}
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
      {/* Hero */}
      <div className="px-6 py-10 bg-gray-50 text-center border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400">Last updated: 1 April 2026</p>
      </div>

      {/* Content */}
      <div className="px-6 py-8 max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            1. Introduction
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Kiddiwear Ltd ("we", "us", "our") is committed to protecting and
            respecting your privacy. This Privacy Policy explains how we
            collect, use, and protect your personal data when you use our
            platform. We are the data controller for the purposes of UK data
            protection legislation.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            2. Information We Collect
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            We collect information you provide directly, including: your name,
            email address, username, and password when you create an account;
            your postal address and phone number when you make a purchase or
            sale; payment information processed securely through our payment
            provider; and item listings, photos, and descriptions you upload.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            We also automatically collect: device information, IP address, and
            browser type; usage data such as pages visited, search queries, and
            interaction patterns; and location data (approximate, based on IP
            address).
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            3. How We Use Your Information
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We use your information to: operate and maintain the platform;
            process transactions and send related notifications; provide
            customer support and resolve disputes; personalise your experience
            and show relevant listings; send marketing communications (with your
            consent); detect and prevent fraud; and comply with legal
            obligations.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            4. Sharing Your Information
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We share your information with: other users as necessary to complete
            transactions (e.g., shipping address shared with seller); payment
            processors to handle transactions securely; delivery partners to
            facilitate shipping; and law enforcement or regulatory bodies when
            required by law. We do not sell your personal data to third parties.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            5. Data Retention
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We retain your personal data for as long as your account is active
            or as needed to provide the Service. Transaction records are kept
            for 7 years for tax and legal compliance. You may request deletion
            of your account and associated data at any time, subject to our
            legal retention obligations.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            6. Your Rights
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Under UK data protection law, you have the right to: access the
            personal data we hold about you; request correction of inaccurate
            data; request deletion of your data; object to or restrict
            processing; data portability; and withdraw consent at any time. To
            exercise these rights, contact us through our Help Centre.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">7. Cookies</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We use essential cookies to operate the platform, analytics cookies
            to understand usage patterns, and preference cookies to remember
            your settings. You can manage cookie preferences through your
            browser settings. Disabling essential cookies may affect platform
            functionality.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            8. Children's Privacy
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            While Kiddiwear is a marketplace for children's clothing, the
            platform is intended for use by adults (18+). We do not knowingly
            collect personal data from children under 18. If we become aware
            that a child has provided us with personal data, we will take steps
            to delete such information.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            9. Security
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We implement appropriate technical and organisational measures to
            protect your personal data against unauthorised access, alteration,
            disclosure, or destruction. All payment data is encrypted and
            processed through PCI-DSS compliant payment providers.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            10. Changes to This Policy
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes by posting a notice on our platform and
            updating the "Last updated" date. We encourage you to review this
            policy periodically.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            11. Contact Us
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            If you have any questions about this Privacy Policy or wish to
            exercise your data protection rights, please contact our Data
            Protection Officer through our Help Centre or email
            privacy@kiddiwear.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
