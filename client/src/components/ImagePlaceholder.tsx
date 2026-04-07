import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS } from "@/contexts/DesignSystem";
import { getProductImg } from "@/photos/productPhotos";

export function ImagePlaceholder({
  label = "Image",
  className = "",
  aspectRatio,
  src,
}: {
  label?: string;
  className?: string;
  aspectRatio?: string;
  src?: string;
}) {
  const { isLofi, isHifi } = useFidelityMode();
  if (isLofi) {
    const loFiClassName = className
      .split(" ")
      .filter(
        c =>
          c === "rounded-full" ||
          c.startsWith("rounded-r-") ||
          c.startsWith("rounded-l-") ||
          c.startsWith("rounded-tl-") ||
          c.startsWith("rounded-bl-") ||
          c.startsWith("rounded-tr-") ||
          c.startsWith("rounded-br-") ||
          !c.startsWith("rounded")
      )
      .join(" ");
    return (
      <div
        className={`wireframe-img-placeholder ${loFiClassName}`}
        data-label={label}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    );
  }
  if (isHifi) {
    const imgSrc = src || getProductImg();
    const hasCustomRadius =
      className.includes("rounded-none") ||
      className.includes("rounded-t") ||
      className.includes("rounded-r-") ||
      className.includes("rounded-l-");
    return (
      <div
        className={`overflow-hidden ${className}`}
        style={{
          aspectRatio: aspectRatio || undefined,
          ...(hasCustomRadius ? {} : { borderRadius: DS.radiusSm }),
        }}
      >
        <img
          src={imgSrc}
          alt={label}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  // Mid-Fi: gray box with label text
  const midFiClassName = className
    .split(" ")
    .filter(
      c =>
        c === "rounded-full" ||
        c.startsWith("rounded-r-") ||
        c.startsWith("rounded-l-") ||
        c.startsWith("rounded-tl-") ||
        c.startsWith("rounded-bl-") ||
        c.startsWith("rounded-tr-") ||
        c.startsWith("rounded-br-") ||
        !c.startsWith("rounded")
    )
    .join(" ");
  return (
    <div
      className={`bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-400 text-xs ${midFiClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {label}
    </div>
  );
}
