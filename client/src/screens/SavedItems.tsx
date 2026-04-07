import { ROUTES } from "@/routes";
import { Avatar } from "@/components/Avatar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { Footer } from "@/components/Footer";
import { NavigationBar } from "@/components/NavigationBar";
import { SelectInputField } from "@/components/SelectInputField";
import { Carousel } from "@/components/Carousel";
import { BadgeLabel } from "@/components/BadgeLabel";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { PROFILE_PHOTOS } from "@/photos/profilePhotos";
import { Link } from "wouter";
import { ChipItem } from "@/components/ChipItem";

const sellerPhotos = [
  PROFILE_PHOTOS.p4,
  PROFILE_PHOTOS.p3,
  PROFILE_PHOTOS.p16,
  PROFILE_PHOTOS.p15,
  PROFILE_PHOTOS.p5,
  PROFILE_PHOTOS.p6,
  PROFILE_PHOTOS.p14,
  PROFILE_PHOTOS.p13,
];

export default function SavedItems() {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[900px]">
        <NavigationBar />
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-black mb-1">Saved Items</h1>
              <TextPlaceholder width="80px" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              {["All", "Boys", "Girls", "Shoes", "Accessories"].map((f, i) => (
                <ChipItem key={f} active={i === 0}>
                  {f}
                </ChipItem>
              ))}
            </div>
            <SelectInputField placeholder="Sort: Recently saved" />
          </div>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="relative">
                <ProductCard to={ROUTES.PRODUCT_DETAIL_BUY} filled />
                {i < 2 && (
                  <div className="absolute top-2 left-2">
                    <BadgeLabel variant="alert" size="large">
                      Price dropped
                    </BadgeLabel>
                  </div>
                )}
                {i === 4 && (
                  <div className="absolute top-2 left-2">
                    <BadgeLabel variant="positive" size="large">
                      Sold
                    </BadgeLabel>
                  </div>
                )}
                {i === 6 && (
                  <div className="absolute top-2 left-2">
                    <BadgeLabel variant="neutral" size="large">
                      Hidden
                    </BadgeLabel>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-6 border-t border-black">
          <div className="flex items-center justify-between mb-4">
            <SectionHeader noLine noMargin>
              Sellers You Follow
            </SectionHeader>
            <Link
              to={ROUTES.FOLLOWINGS}
              className="text-sm text-black underline font-medium"
            >
              View all &rarr;
            </Link>
          </div>
          <Carousel>
            <div className="grid grid-cols-8 gap-4">
              {[
                { name: "emma_preloved", items: 24 },
                { name: "sarah_mum_of_3", items: 82 },
                { name: "lisa_vintage", items: 31 },
                { name: "claire_mum", items: 8 },
                { name: "rachel_tots", items: 36 },
                { name: "tom_kidswear", items: 45 },
                { name: "mark_reseller", items: 67 },
                { name: "anna_bundles", items: 19 },
              ].map(s => (
                <Link
                  key={s.name}
                  to={ROUTES.SELLER_PROFILE}
                  className="flex flex-col items-center gap-2 border border-black p-3 hover:bg-gray-50"
                >
                  <Avatar size="md" />
                  <span className="text-xs text-black font-medium text-center">
                    {s.name}
                  </span>
                  <TextPlaceholder width="50px" />
                </Link>
              ))}
            </div>
          </Carousel>
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
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-1">
              Saved Items
            </h1>
            <p className="text-sm text-gray-400">14 items saved</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            {["All", "Boys", "Girls", "Shoes", "Accessories"].map((f, i) => (
              <ChipItem key={f} active={i === 0}>
                {f}
              </ChipItem>
            ))}
          </div>
          <SelectInputField placeholder="Sort: Recently saved" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="relative">
              <ProductCard to={ROUTES.PRODUCT_DETAIL_BUY} filled />
              {i < 2 && (
                <div className="absolute top-2 left-2">
                  <BadgeLabel variant="alert" size="large" shadow>
                    Price dropped
                  </BadgeLabel>
                </div>
              )}
              {i === 4 && (
                <div className="absolute top-2 left-2">
                  <BadgeLabel variant="positive" size="large" shadow>
                    Sold
                  </BadgeLabel>
                </div>
              )}
              {i === 6 && (
                <div className="absolute top-2 left-2">
                  <BadgeLabel variant="neutral" size="large">
                    Hidden
                  </BadgeLabel>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <SectionHeader noLine noMargin>
            Sellers You Follow
          </SectionHeader>
          <Link
            to={ROUTES.FOLLOWINGS}
            className="text-sm underline font-medium"
            style={{ color: isHifi ? DS.primary : "#4b5563" }}
          >
            View all &rarr;
          </Link>
        </div>
        <Carousel>
          <div className="grid grid-cols-8 gap-4">
            {[
              { name: "emma_preloved", items: 24 },
              { name: "sarah_mum_of_3", items: 82 },
              { name: "lisa_vintage", items: 31 },
              { name: "claire_mum", items: 8 },
              { name: "rachel_tots", items: 36 },
              { name: "tom_kidswear", items: 45 },
              { name: "mark_reseller", items: 67 },
              { name: "anna_bundles", items: 19 },
            ].map((s, idx) => (
              <Link
                key={s.name}
                to={ROUTES.SELLER_PROFILE}
                className={`flex flex-col items-center gap-2 border border-gray-200 rounded-lg p-3 transition-all ${isHifi ? "shadow-sm hover:shadow-md" : ""}`}
                style={{
                  background: isHifi ? DS.surfaceContainerLowest : undefined,
                  borderColor: isHifi ? DS.outlineVariant : undefined,
                }}
              >
                <Avatar
                  size="md"
                  src={sellerPhotos[idx % sellerPhotos.length]}
                  alt={s.name}
                />
                <p className="text-xs text-gray-600 font-medium text-center">
                  {s.name}
                </p>
                <p className="text-xs text-gray-400">{s.items} items</p>
              </Link>
            ))}
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}
