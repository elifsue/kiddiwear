import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputFieldMultiLine } from "@/components/TextInputFieldMultiLine";
import { RatingBar } from "@/components/RatingBar";
import { PageHeader } from "@/components/PageHeader";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";

export default function LeaveReview() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-lg mx-auto">
            <PageHeader title="Leave a Review" backTo={ROUTES.MY_PURCHASES} />
            <TextPlaceholder width="260px" className="mb-6" />
            <div className="border border-black p-5 mb-5">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-sm font-semibold text-black">
                  Order #TT-20260405-7823
                </h2>
                <TextPlaceholder width="70px" />
              </div>
              <TextPlaceholder width="100px" className="mb-4" />
              <div className="flex items-center gap-3">
                <ImagePlaceholder className="w-20 h-20 flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-1">
                  <TextPlaceholder width="85%" />
                  <TextPlaceholder width="60%" />
                  <span className="text-sm font-semibold text-black mt-1">
                    &pound;8.00
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-black p-5 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-semibold text-black">
                  Overall Rating
                </h2>
              </div>
              <RatingBar
                rating={4}
                size="lg"
                interactive
                className="justify-center mb-2"
              />
              <div className="flex justify-center">
                <TextPlaceholder width="80px" />
              </div>
            </div>
            <div className="border border-black p-5 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <label className="text-sm font-medium text-black">
                  Rate Specific Aspects
                </label>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5">
                  Optional
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  "Item as described",
                  "Communication",
                  "Shipping speed",
                  "Packaging",
                ].map(aspect => (
                  <div
                    key={aspect}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-black">{aspect}</span>
                    <RatingBar rating={0} size="md" interactive />
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-black p-5 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <label className="text-sm font-medium text-black">
                  Your Review
                </label>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5">
                  Optional
                </span>
              </div>
              <div className="h-28 border border-black bg-white px-3 py-2" />
            </div>

            <div className="flex gap-3">
              <ActionButton
                to={ROUTES.MY_PURCHASES}
                variant="outlined"
                className="flex-1"
              >
                Cancel
              </ActionButton>
              <ActionButton
                to={ROUTES.MY_PURCHASES}
                variant="primary"
                className="flex-1"
              >
                Submit Review
              </ActionButton>
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
      <NavigationBar />
      <div className="px-6 py-6 flex-1">
        <div className="max-w-lg mx-auto">
          <PageHeader title="Leave a Review" backTo={ROUTES.MY_PURCHASES} />
          <p className="text-sm text-gray-400 mb-6">
            Share your experience with this purchase.
          </p>
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-gray-700">
                Order #TT-20260405-7823
              </span>
              <span className="text-xs text-gray-400">5 Apr 2026</span>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Seller:{" "}
              <Link
                to={ROUTES.SELLER_PROFILE}
                className="underline hover:text-gray-500"
              >
                sarah_mum_of_3
              </Link>
            </p>
            <div className="flex items-center gap-3">
              <ImagePlaceholder
                label="Item"
                className="w-20 h-20 rounded flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Boys Striped Cotton T-Shirt
                </p>
                <p className="text-xs text-gray-400">
                  Next Kids &middot; 4 years / 104 cm &middot; Very good
                </p>
                <p className="text-sm font-semibold text-gray-800 mt-1">
                  &pound;8.00
                </p>
              </div>
            </div>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-sm font-semibold text-gray-700">
                Overall Rating
              </h2>
            </div>
            <RatingBar
              rating={4}
              size="lg"
              interactive
              className="justify-center mb-2"
            />
            <p className="text-xs text-gray-400 text-center">
              4 out of 5 stars
            </p>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <label
                className="text-sm font-medium"
                style={{ color: isHifi ? "#0D2818" : "#374151" }}
              >
                Rate Specific Aspects
              </label>
              <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">
                Optional
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {[
                "Item as described",
                "Communication",
                "Shipping speed",
                "Packaging",
              ].map(aspect => (
                <div key={aspect} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{aspect}</span>
                  <RatingBar rating={0} size="md" interactive />
                </div>
              ))}
            </div>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <label
                className="text-sm font-medium"
                style={{ color: isHifi ? "#0D2818" : "#374151" }}
              >
                Your Review
              </label>
              <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">
                Optional
              </span>
            </div>
            <TextInputFieldMultiLine
              placeholder="Tell other buyers about your experience — was the item as described? How was the packaging?"
              rows={5}
            />
          </div>

          <div className="flex gap-3">
            <ActionButton
              to={ROUTES.MY_PURCHASES}
              variant="secondary"
              className="flex-1"
            >
              Cancel
            </ActionButton>
            <ActionButton
              to={ROUTES.MY_PURCHASES}
              variant="primary"
              className="flex-1"
            >
              Submit Review
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
