import { ROUTES } from "@/routes";
import { DS } from "@/contexts/DesignSystem";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/components/ProductCard";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { SelectInputField } from "@/components/SelectInputField";
import { PaginationBar } from "@/components/PaginationBar";
import { Checkbox } from "@/components/Checkbox";
import { useFidelityMode } from "@/contexts/FidelityModeContext";

export default function Products() {
  const { isLofi, isHifi } = useFidelityMode();

  const filterSection = (title: string, items: string[], isCheckbox = true) => (
    <div className="mb-5">
      <p
        className={`text-xs font-semibold ${isLofi ? "text-black" : "text-gray-500"} uppercase tracking-wider mb-2`}
      >
        {title}
      </p>
      <div
        className={
          isCheckbox ? "flex flex-col gap-2" : "flex flex-wrap gap-1.5"
        }
      >
        {items.map((item, i) =>
          isCheckbox ? (
            <div key={i} className="flex items-center gap-2">
              <Checkbox checked={false} />
              {isLofi ? (
                <TextPlaceholder width={`${45 + ((i * 7) % 30)}%`} />
              ) : (
                <span className="text-xs text-gray-600">{item}</span>
              )}
            </div>
          ) : (
            <div
              key={i}
              className={`border ${isLofi ? "border-black" : "border-gray-300"} rounded px-2 py-1 ${isLofi ? "w-8 h-6 bg-white" : "text-[10px] text-gray-500 hover:bg-gray-50 cursor-pointer"}`}
            >
              {isLofi ? null : item}
            </div>
          )
        )}
      </div>
    </div>
  );

  const categories = [
    "All Clothing",
    "Tops & T-shirts",
    "Trousers & Jeans",
    "Dresses & Skirts",
    "Outerwear",
    "Sleepwear",
    "Swimwear",
  ];
  const ageSizes = [
    "Preemie, up to 44 cm",
    "Newborns / 44 cm",
    "Up to 1 month / 50 cm",
    "1\u20133 months / 56 cm",
    "3\u20136 months / 62 cm",
    "6\u20139 months / 68 cm",
    "9\u201312 months / 74 cm",
    "12\u201318 months / 80 cm",
    "18\u201324 months / 86 cm",
    "24\u201336 months / 92 cm",
    "3 years / 98\u2013103 cm",
    "4 years / 104 cm",
    "5 years / 110 cm",
    "6 years / 116 cm",
    "7 years / 122 cm",
    "8 years / 128 cm",
    "9 years / 134 cm",
    "10 years / 140 cm",
    "11 years / 146 cm",
    "12 years / 152 cm",
    "13 years / 158 cm",
    "14 years / 164 cm",
    "15 years / 170 cm",
    "16 years / 176 cm",
  ];
  const conditions = [
    "New with tags",
    "New without tags",
    "Very good",
    "Good",
    "Satisfactory",
  ];
  const brands = ["Primark", "Next", "Zara", "H&M", "M&S", "John Lewis"];
  const b = isLofi ? "border-black" : "border-gray-200";
  const t = isLofi ? "text-black" : "text-gray-700";

  return (
    <div
      data-midfi={!isHifi || undefined}
      data-hifi={isHifi || undefined}
      className="flex flex-col min-h-[900px]"
    >
      <NavigationBar />
      <div
        className={`px-6 py-3 border-b ${isLofi ? "border-black" : "border-gray-100"} flex items-center justify-between`}
      >
        <div
          className={`flex items-center gap-2 text-xs ${isLofi ? "text-black" : "text-gray-400"}`}
        >
          <span>Home</span>
          <span>/</span>
          <span>Girls</span>
          <span>/</span>
          <span className={isLofi ? "text-black" : "text-gray-600"}>
            All Items
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`text-xs ${isLofi ? "text-black" : "text-gray-400"}`}
          >
            3,248 items
          </span>
          <SelectInputField placeholder="Sort: Relevance" />
        </div>
      </div>

      <div className="flex flex-1">
        <aside className={`w-[240px] border-r ${b} p-4 flex-shrink-0`}>
          <h3 className={`text-sm font-semibold ${t} mb-4`}>Filters</h3>
          {filterSection("Category", categories)}
          {filterSection("Age / Size", ageSizes)}
          {filterSection("Condition", conditions)}

          {/* Price Range */}
          <div className="mb-5">
            <p
              className={`text-xs font-semibold ${isLofi ? "text-black" : "text-gray-500"} uppercase tracking-wider mb-2`}
            >
              Price
            </p>
            <div className="flex items-center gap-2">
              <div
                className={`h-8 flex-1 border ${isLofi ? "border-black" : "border-gray-300"} rounded px-2 flex items-center`}
                style={{ borderColor: isHifi ? DS.outline : undefined }}
              >
                {isLofi ? (
                  <span className="text-sm text-black font-medium">
                    &pound;
                  </span>
                ) : (
                  <span className="text-xs" style={{ color: "#9ca3af" }}>
                    &pound; Min
                  </span>
                )}
              </div>
              <span
                className={`text-xs ${isLofi ? "text-black" : "text-gray-400"}`}
              >
                &ndash;
              </span>
              <div
                className={`h-8 flex-1 border ${isLofi ? "border-black" : "border-gray-300"} rounded px-2 flex items-center`}
                style={{ borderColor: isHifi ? DS.outline : undefined }}
              >
                {isLofi ? (
                  <span className="text-sm text-black font-medium">
                    &pound;
                  </span>
                ) : (
                  <span className="text-xs" style={{ color: "#9ca3af" }}>
                    &pound; Max
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="mb-5">
            <p
              className={`text-xs font-semibold ${isLofi ? "text-black" : "text-gray-500"} uppercase tracking-wider mb-2`}
            >
              Brand
            </p>
            <SearchBar
              size="small"
              placeholder="Search brands..."
              className="h-8 mb-2"
            />
            <div className="flex flex-col gap-2">
              {brands.map((brand, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox checked={false} />
                  {isLofi ? (
                    <TextPlaceholder width={`${40 + ((i * 10) % 30)}%`} />
                  ) : (
                    <span className="text-xs text-gray-600">{brand}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <ActionButton variant="primary" full>
            Apply Filters
          </ActionButton>
          <button
            className={`w-full text-xs font-medium mt-2 underline`}
            style={{
              color: isLofi ? undefined : isHifi ? DS.primary : "#4b5563",
            }}
          >
            Clear all filters
          </button>
        </aside>

        <div className="flex-1 p-6">
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <ProductCard key={i} to={ROUTES.PRODUCT_DETAIL_BUY} />
            ))}
          </div>

          <PaginationBar pages={[1, 2, 3, 4, 5]} totalPages={163} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
