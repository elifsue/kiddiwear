import { ROUTES } from "@/routes";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { TextInputField } from "@/components/TextInputField";
import { SelectInputField } from "@/components/SelectInputField";
import { TextInputFieldMultiLine } from "@/components/TextInputFieldMultiLine";
import { CategorySelect } from "@/dialogs/CategorySelect";
import { Checkbox } from "@/components/Checkbox";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PhotoInputField } from "@/components/PhotoInputField";
import { productImages } from "@/photos/productPhotos";
import { Link } from "wouter";

/* Use the first 4 photos from Product Detail (Seller) screen carousel */
const EDIT_PHOTOS = [
  productImages[10], // main product image (same as screen 9)
  productImages[0], // carousel image 2
  productImages[1], // carousel image 3
  productImages[2], // carousel image 4
];

export default function EditItem() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-xl font-bold text-black mb-2">Edit Item</h1>
            <TextPlaceholder width="320px" className="mb-6" />
            <div className="flex items-center gap-2 mb-8">
              {["Photos", "Details", "Pricing", "Shipping"].map((step, i) => (
                <div key={step} className="flex items-center gap-2 flex-1">
                  <div className="w-9 h-9 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-black">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-black">
                    {step}
                  </span>
                  {i < 3 && <div className="flex-1 h-px bg-black" />}
                </div>
              ))}
            </div>
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-1">Photos</h2>
              <TextPlaceholder width="300px" className="mb-4" />
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-2 row-span-2">
                  <PhotoInputField variant="filled" src={EDIT_PHOTOS[0]} />
                </div>
                {Array.from({ length: 7 }).map((_, i) =>
                  i < 3 ? (
                    <PhotoInputField
                      key={i}
                      variant="filled"
                      src={EDIT_PHOTOS[i + 1]}
                    />
                  ) : (
                    <PhotoInputField key={i} variant="slot" />
                  )
                )}
              </div>
            </div>
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">
                Item Details
              </h2>
              <div className="flex flex-col gap-4">
                <TextInputField
                  label="Title"
                  value="Boys Striped Cotton T-Shirt"
                />
                <TextInputFieldMultiLine
                  label="Description"
                  rows={4}
                  value="Lovely striped cotton t-shirt from Next. Worn a handful of times, in very good condition. No stains or marks. From a smoke-free, pet-free home. Happy to bundle with other items."
                />
                <div className="grid grid-cols-2 gap-3">
                  <SelectInputField label="Gender" value="Boys" />
                  <CategorySelect
                    defaultCategory="Tops"
                    defaultSubcategory="T-Shirts"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <SelectInputField
                    label="Age / Size"
                    value="4 years / 104 cm"
                  />
                  <SelectInputField label="Condition" value="Very good" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <TextInputField label="Brand" value="Next" />
                  <SelectInputField label="Colour" value="Blue / White" />
                </div>
              </div>
            </div>
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Pricing</h2>
              <div className="bg-white border border-black p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold text-black flex-shrink-0">
                    i
                  </span>
                  <span className="text-xs font-medium text-black">
                    Price Suggestion
                  </span>
                </div>
                <TextPlaceholder width="80%" className="mb-2" />
                <div className="flex items-center gap-4">
                  <div className="text-center flex flex-col items-center gap-1">
                    <TextPlaceholder width="100px" />
                    <TextPlaceholder width="70px" />
                  </div>
                  <div className="h-8 w-px bg-black" />
                  <div className="text-center flex flex-col items-center gap-1">
                    <TextPlaceholder width="60px" />
                    <TextPlaceholder width="80px" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-black">
                  Your Price
                </label>
                <div className="h-10 border border-black px-3 flex items-center gap-2">
                  <span className="text-sm text-black font-medium">
                    &pound; 8.00
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TextPlaceholder width="200px" />
                <Link
                  to={ROUTES.BUYER_PROTECTION}
                  className="text-xs font-medium text-black underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="border border-black p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">
                Shipping
              </h2>
              <div className="flex flex-col gap-3">
                {[true, true, false].map((checked, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Checkbox checked={checked} />
                    <TextPlaceholder width={`${40 + i * 10}%`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <ActionButton
                to={ROUTES.PROFILE}
                variant="outlined"
                className="flex-1"
              >
                Delete Listing
              </ActionButton>
              <ActionButton
                to={ROUTES.PROFILE}
                variant="primary"
                className="flex-1"
              >
                Save Changes
              </ActionButton>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  /* ── Detailed (Mid-Fi / Hi-Fi) ── */
  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />
      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-bold text-gray-800 mb-2">Edit Item</h1>
          <p className="text-sm text-gray-400 mb-6">
            Update your listing details below.
          </p>
          <div className="flex items-center gap-2 mb-8">
            {["Photos", "Details", "Pricing", "Shipping"].map((step, i) => (
              <div key={step} className="flex items-center gap-2 flex-1">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isHifi ? DS.secondaryContainer : "#f3f4f6",
                    border: isHifi ? "none" : "1px solid #d1d5db",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      color: isHifi ? DS.onSecondaryContainer : "#6b7280",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {step}
                </span>
                {i < 3 && <div className="flex-1 h-px bg-gray-200" />}
              </div>
            ))}
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-1">Photos</h2>
            <p className="text-xs text-gray-400 mb-4">
              Upload at least 3 photos (up to 8). The first photo will be the
              cover.
            </p>
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-2 row-span-2">
                <PhotoInputField variant="filled" src={EDIT_PHOTOS[0]} />
              </div>
              {Array.from({ length: 7 }).map((_, i) =>
                i < 3 ? (
                  <PhotoInputField
                    key={i}
                    variant="filled"
                    src={EDIT_PHOTOS[i + 1]}
                  />
                ) : (
                  <PhotoInputField key={i} variant="slot" />
                )
              )}
            </div>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Item Details
            </h2>
            <div className="flex flex-col gap-4">
              <TextInputField
                label="Title"
                placeholder="e.g., Boys Striped Cotton T-Shirt"
                value="Boys Striped Cotton T-Shirt"
              />
              <TextInputFieldMultiLine
                label="Description"
                rows={4}
                placeholder="Describe the item, including any wear or defects..."
                value="Lovely striped cotton t-shirt from Next. Worn a handful of times, in very good condition. No stains or marks. From a smoke-free, pet-free home. Happy to bundle with other items."
              />
              <div className="grid grid-cols-2 gap-3">
                <SelectInputField
                  label="Gender"
                  placeholder="Boys / Girls / Unisex"
                  value="Boys"
                />
                <CategorySelect
                  defaultCategory="Tops"
                  defaultSubcategory="T-Shirts"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <SelectInputField
                  label="Age / Size"
                  placeholder="e.g. 4 years / 104 cm"
                  value="4 years / 104 cm"
                />
                <SelectInputField
                  label="Condition"
                  placeholder="Select condition..."
                  value="Very good"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <TextInputField
                  label="Brand"
                  placeholder="e.g., Next, H&M, Zara"
                  value="Next"
                />
                <SelectInputField
                  label="Colour"
                  placeholder="Select colour..."
                  value="Blue / White"
                />
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
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Pricing
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-400 flex-shrink-0">
                  i
                </span>
                <span
                  className="text-xs font-medium"
                  style={{ color: isHifi ? DS.onSurface : "#4b5563" }}
                >
                  Price Suggestion
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                Based on similar items recently sold on Kiddiwear, we suggest
                the following.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p
                    className="text-lg font-bold"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    &pound;6.00 &ndash; &pound;10.00
                  </p>
                  <p className="text-[10px] text-gray-500">Suggested range</p>
                </div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center">
                  <p
                    className="text-lg font-bold"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    &pound;8.00
                  </p>
                  <p className="text-[10px] text-gray-500">
                    Average sold price
                  </p>
                </div>
              </div>
            </div>
            <TextInputField
              label="Your Price"
              placeholder="£ 0.00"
              value="£ 8.00"
            />
            <p className="text-xs text-gray-400 mt-2">
              Buyer will see &pound;8.50 including Buyer Protection fee.{" "}
              <Link
                to={ROUTES.BUYER_PROTECTION}
                className="text-xs underline font-medium"
                style={{ color: isHifi ? DS.primary : "#4b5563" }}
              >
                Learn more
              </Link>
            </p>
          </div>
          <div
            className="border border-gray-200 rounded-lg p-5 mb-5"
            style={{
              background: isHifi ? DS.surfaceContainerLowest : undefined,
              borderColor: isHifi ? DS.outlineVariant : undefined,
            }}
          >
            <h2 className="text-sm font-semibold text-gray-700 mb-4">
              Shipping
            </h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "Royal Mail (Prepaid label)", checked: true },
                { label: "Evri ParcelShop", checked: true },
                { label: "InPost Locker", checked: false },
              ].map(opt => (
                <div key={opt.label} className="flex items-center gap-2">
                  <Checkbox checked={opt.checked} />
                  <span className="text-sm text-gray-600">{opt.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <ActionButton
              to={ROUTES.PROFILE}
              variant="secondary"
              className="flex-1"
            >
              Delete Listing
            </ActionButton>
            <ActionButton
              to={ROUTES.PROFILE}
              variant="primary"
              className="flex-1"
            >
              Save Changes
            </ActionButton>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
