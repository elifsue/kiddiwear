import { TextPlaceholder } from "@/components/TextPlaceholder";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function TermsAndConditions() {
  const { isLofi, isHifi } = useFidelityMode();

  const sections = [
    "1. Introduction",
    "2. Definitions",
    "3. Account Registration",
    "4. Buying Items",
    "5. Selling Items",
    "6. Buyer Protection",
    "7. Payments & Fees",
    "8. Prohibited Items",
    "9. Intellectual Property",
    "10. Limitation of Liability",
    "11. Termination",
    "12. Governing Law",
    "13. Changes to These Terms",
    "14. Contact Us",
  ];

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        {/* Hero */}
        <div className="px-6 py-10 bg-white text-center border-b border-black">
          <h1 className="text-3xl font-bold text-black mb-2">
            Terms & Conditions
          </h1>
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
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-400">Last updated: 1 April 2026</p>
      </div>

      {/* Content */}
      <div className="px-6 py-8 max-w-3xl mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            1. Introduction
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-3">
            Welcome to Kiddiwear. These Terms &amp; Conditions ("Terms") govern
            your access to and use of the Kiddiwear platform, including our
            website and any related services (collectively, the "Service"). By
            accessing or using the Service, you agree to be bound by these
            Terms.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Kiddiwear is a peer-to-peer marketplace for buying and selling
            second-hand children's clothing and accessories. We act as an
            intermediary platform and are not a party to the transactions
            between buyers and sellers.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            2. Definitions
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            "Buyer" means any user who purchases items through the Service.
            "Seller" means any user who lists items for sale. "Item" refers to
            any children's clothing, shoes, or accessories listed on the
            platform. "Buyer Protection" refers to our programme that safeguards
            purchases as described in our Buyer Protection policy.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            3. Account Registration
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            You must be at least 18 years old to create an account. You are
            responsible for maintaining the confidentiality of your login
            credentials and for all activities that occur under your account.
            You agree to provide accurate and complete information during
            registration and to keep your account information up to date.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            4. Buying Items
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            When you purchase an item, you enter into a contract directly with
            the seller. All purchases are covered by our Buyer Protection
            programme. You have 2 days after delivery to inspect the item and
            raise a dispute if it does not match the listing description.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            5. Selling Items
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Sellers must ensure that all listed items are accurately described,
            including condition, size, brand, and any defects. Items must be
            children's clothing, shoes, or accessories only. Sellers are
            responsible for shipping items within 5 working days of a sale.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            6. Buyer Protection
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            A Buyer Protection fee of 5% (minimum &pound;0.50) is added to each
            purchase. This covers secure payment processing, dispute resolution,
            and our refund guarantee. Full details are available on our Buyer
            Protection page.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            7. Payments &amp; Fees
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Payments are processed securely through our platform. Sellers
            receive the full item price — the Buyer Protection fee is paid by
            the buyer. Seller earnings are held in their Kiddiwear Wallet and
            can be withdrawn to a linked bank account or PayPal.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            8. Prohibited Items
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            The following items may not be listed: counterfeit or replica items,
            recalled products, items that do not meet safety standards, adult
            clothing, non-clothing items (unless accessories), and any items
            prohibited by applicable law.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            9. Intellectual Property
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            All content on the Kiddiwear platform, including logos, design, and
            software, is owned by Kiddiwear Ltd. Users retain ownership of
            content they upload but grant Kiddiwear a licence to use such
            content for the purpose of operating the Service.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            10. Limitation of Liability
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Kiddiwear acts as an intermediary and is not liable for the quality,
            safety, or legality of items listed by sellers. Our liability is
            limited to the amount of the Buyer Protection fee paid in connection
            with the relevant transaction.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            11. Termination
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We may suspend or terminate your account at any time if you violate
            these Terms. You may close your account at any time by contacting
            our support team. Upon termination, any pending transactions will be
            completed or refunded as appropriate.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            12. Governing Law
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            These Terms are governed by and construed in accordance with the
            laws of England and Wales. Any disputes arising from these Terms
            shall be subject to the exclusive jurisdiction of the courts of
            England and Wales.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            13. Changes to These Terms
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We may update these Terms from time to time. We will notify you of
            any material changes by posting the updated Terms on our platform
            and updating the "Last updated" date. Your continued use of the
            Service after changes constitutes acceptance of the revised Terms.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-base font-bold text-gray-800 mb-3">
            14. Contact Us
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            If you have any questions about these Terms, please contact us
            through our Help Centre or email us at legal@kiddiwear.com.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
