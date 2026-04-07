import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { SearchBar } from "@/components/SearchBar";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { InPostIcon, EvriIcon } from "@/icons/DeliveryIcons";
import { useLocation } from "wouter";
import { ROUTES } from "@/routes";
import { useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/ui/dialog";

interface PickupPointDialogProps {
  open: boolean;
  onClose: () => void;
}

const PICKUP_POINTS = [
  {
    id: 1,
    type: "InPost",
    name: "24/7 InPost Locker | Shop Pick-up",
    location: "InPost Locker - Pimlico Sainsbury's",
    address: "35 Warwick Way, SW1V 1QS, London",
    time: "7-9 business days",
    price: "£2.26",
    hours: "Open 24/7",
    selected: true,
  },
  {
    id: 2,
    type: "Evri",
    name: "Evri ParcelShop | Drop-off",
    location: "Evri ParcelShop - Victoria News",
    address: "78 Wilton Road, SW1V 1DE, London",
    time: "3-5 business days",
    price: "£2.49",
    hours: "Mon–Sat 7:00–21:00, Sun 9:00–18:00",
    selected: false,
  },
  {
    id: 3,
    type: "InPost",
    name: "24/7 InPost Locker | Shop Pick-up",
    location: "InPost Locker - Tesco Victoria",
    address: "10 Buckingham Palace Road, SW1W 0QP, London",
    time: "7-9 business days",
    price: "£2.26",
    hours: "Open 24/7",
    selected: false,
  },
  {
    id: 4,
    type: "Evri",
    name: "Evri ParcelShop | Drop-off",
    location: "Evri ParcelShop - Westminster Off-Licence",
    address: "12 Strutton Ground, SW1P 2HP, London",
    time: "3-5 business days",
    price: "£2.49",
    hours: "Mon–Fri 8:00–20:00, Sat 9:00–18:00",
    selected: false,
  },
  {
    id: 5,
    type: "InPost",
    name: "24/7 InPost Locker | Shop Pick-up",
    location: "InPost Locker - St James's Park Station",
    address: "55 Broadway, SW1H 0BD, London",
    time: "7-9 business days",
    price: "£2.26",
    hours: "Open 24/7",
    selected: false,
  },
];

export default function PickupPointDialog({
  open,
  onClose,
}: PickupPointDialogProps) {
  const { isLofi, isHifi, figmaCaptureMode } = useFidelityMode();
  useDSSync();
  const [location, navigate] = useLocation();

  const handleConfirm = () => {
    onClose();
    if (location !== ROUTES.CHECKOUT_COLLECTION) {
      navigate(ROUTES.CHECKOUT_COLLECTION);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen && !figmaCaptureMode) onClose();
  };

  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: "nearest" });
    }
  }, [open]);

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <Dialog
        open={open}
        onOpenChange={handleOpenChange}
        modal={!figmaCaptureMode}
      >
        <DialogContent
          showCloseButton={false}
          noOverlay={figmaCaptureMode}
          className="sm:max-w-[1000px] max-h-[680px] border-2 border-black bg-white p-0 gap-0 rounded-none"
          onPointerDownOutside={e => {
            if (figmaCaptureMode) e.preventDefault();
          }}
          onInteractOutside={e => {
            if (figmaCaptureMode) e.preventDefault();
          }}
        >
          <DialogTitle className="sr-only">Choose a pick-up point</DialogTitle>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-black">
            <h2 className="text-base font-bold text-black">
              Choose a pick-up point
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          {/* Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left: List */}
            <div className="w-[325px] border-r border-black overflow-y-auto max-h-[580px]">
              <p className="text-xs text-black px-4 pt-3 pb-2">
                Pick-up points in this area
              </p>
              {PICKUP_POINTS.map(point => (
                <div
                  key={point.id}
                  ref={point.selected ? selectedRef : undefined}
                  className={`px-4 py-3 border-b border-b-black relative cursor-pointer ${point.selected ? "bg-gray-50" : "hover:bg-gray-50"}`}
                >
                  {point.selected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-black" />
                  )}
                  <div
                    className="absolute top-3 right-3 h-8 w-16 border border-black bg-white"
                    style={{
                      background:
                        "linear-gradient(to top right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px)), linear-gradient(to bottom right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px))",
                    }}
                  />
                  <div className="mb-1">
                    <TextPlaceholder width="75%" />
                  </div>
                  <div className="mb-1.5">
                    <TextPlaceholder width="20%" />
                  </div>
                  <div className="mb-0.5">
                    <TextPlaceholder width="65%" />
                  </div>
                  <div className="mb-0.5">
                    <TextPlaceholder width="60%" />
                  </div>
                  <div>
                    <TextPlaceholder width="55%" />
                  </div>
                </div>
              ))}
            </div>
            {/* Right: Map + Detail */}
            <div className="flex-1 flex flex-col">
              {/* Search bar */}
              <div className="p-3 border-b border-black">
                <SearchBar size="small" placeholder="Search location..." />
              </div>
              {/* Fake Map - crossbox placeholder */}
              <div
                className="flex-1 border-b border-black min-h-[200px] border border-black bg-white"
                style={{
                  background:
                    "linear-gradient(to top right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px)), linear-gradient(to bottom right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px))",
                }}
              />
              {/* Selected point detail + Confirm */}
              <div className="p-4 relative flex items-end justify-between w-full">
                <div className="relative" style={{ width: "325px" }}>
                  <div
                    className="absolute top-0 right-0 h-8 w-16 border border-black bg-white"
                    style={{
                      background:
                        "linear-gradient(to top right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px)), linear-gradient(to bottom right, transparent calc(50% - 0.5px), #000 calc(50% - 0.5px), #000 calc(50% + 0.5px), transparent calc(50% + 0.5px))",
                    }}
                  />
                  <div className="mb-1">
                    <TextPlaceholder width="70%" />
                  </div>
                  <div className="mb-2">
                    <TextPlaceholder width="20%" />
                  </div>
                  <div className="mb-0.5">
                    <TextPlaceholder width="65%" />
                  </div>
                  <div className="mb-0.5">
                    <TextPlaceholder width="55%" />
                  </div>
                  <div className="mb-0.5">
                    <TextPlaceholder width="60%" />
                  </div>
                  <div>
                    <TextPlaceholder width="30%" />
                  </div>
                </div>
                <button
                  onClick={handleConfirm}
                  className="px-5 py-2.5 text-sm font-medium border border-black bg-white text-black text-center flex-shrink-0"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  /* ── Mid-Fi / Hi-Fi ── */
  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}
      modal={!figmaCaptureMode}
    >
      <DialogContent
        showCloseButton={false}
        noOverlay={figmaCaptureMode}
        className={`sm:max-w-[1000px] max-h-[680px] bg-white p-0 gap-0 shadow-xl overflow-hidden ${isHifi ? "rounded-lg" : "rounded-lg"}`}
        style={{
          border: `1px solid ${isHifi ? DS.outlineVariant : "#e5e7eb"}`,
        }}
        onPointerDownOutside={e => {
          if (figmaCaptureMode) e.preventDefault();
        }}
        onInteractOutside={e => {
          if (figmaCaptureMode) e.preventDefault();
        }}
      >
        <DialogTitle className="sr-only">Choose a pick-up point</DialogTitle>
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
        >
          <h2
            className="text-base font-semibold"
            style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
          >
            Choose a pick-up point
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left: List */}
          <div
            className="w-[325px] overflow-y-auto border-r max-h-[580px]"
            style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
          >
            <p
              className="text-xs px-4 pt-3 pb-2"
              style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
            >
              Pick-up points in this area
            </p>
            {PICKUP_POINTS.map(point => (
              <div
                key={point.id}
                ref={point.selected ? selectedRef : undefined}
                className="px-4 py-3 border-b relative cursor-pointer"
                style={{
                  borderBottomColor: isHifi ? DS.outlineVariant : "#e5e7eb",
                  background: point.selected
                    ? isHifi
                      ? DS.surfaceContainerLow
                      : "#f9fafb"
                    : undefined,
                }}
                onMouseEnter={e => {
                  if (!point.selected)
                    e.currentTarget.style.background = isHifi
                      ? DS.surfaceContainerLow
                      : "#f9fafb";
                }}
                onMouseLeave={e => {
                  if (!point.selected) e.currentTarget.style.background = "";
                }}
              >
                {point.selected && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: isHifi ? DS.primary : "#374151" }}
                  />
                )}
                {isHifi ? (
                  <div className="absolute top-3 right-3">
                    {point.type === "InPost" ? <InPostIcon /> : <EvriIcon />}
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 h-8 w-16 border border-gray-300 bg-gray-100 flex items-center justify-center text-gray-400 text-[9px]">
                    {point.type}
                  </div>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-medium"
                    style={{ color: isHifi ? DS.onSurface : "#374151" }}
                  >
                    {point.name}
                  </span>
                </div>
                <p
                  className="text-sm font-bold"
                  style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
                >
                  {point.price}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                    className="flex-shrink-0"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                  <span
                    className="text-[11px]"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    {point.location}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                    className="flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span
                    className="text-[11px]"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    {point.address}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                    className="flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span
                    className="text-[11px]"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    At pick-up point in {point.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Right: Map + Detail */}
          <div className="flex-1 flex flex-col">
            {/* Search bar */}
            <div
              className="p-3 border-b"
              style={{ borderColor: isHifi ? DS.outlineVariant : "#e5e7eb" }}
            >
              <SearchBar
                size="small"
                placeholder="Search location..."
                value="42 Primrose Lane, London, SW1A 1AA, UK"
              />
            </div>
            {/* Fake Map */}
            {isHifi ? (
              <div
                className="flex-1 relative border-b min-h-[200px] overflow-hidden"
                style={{
                  borderColor: DS.outlineVariant,
                  background: "#e8f0e8",
                }}
              >
                {/* Grid overlay with exact square cells */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(156,163,156,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(156,163,156,0.3) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                  }}
                />
                {/* Simulated map grid */}
                {/* Map labels */}
                <span
                  className="absolute text-[10px] text-gray-500 font-medium"
                  style={{ top: "20%", left: "15%" }}
                >
                  Mayfair
                </span>
                <span
                  className="absolute text-[10px] text-gray-500 font-medium"
                  style={{ top: "30%", left: "45%" }}
                >
                  Westminster
                </span>
                <span
                  className="absolute text-[10px] text-gray-500 font-medium"
                  style={{ top: "50%", left: "65%" }}
                >
                  Pimlico
                </span>
                <span
                  className="absolute text-[10px] text-gray-500 font-medium"
                  style={{ top: "70%", left: "30%" }}
                >
                  Belgravia
                </span>
                <span
                  className="absolute text-[10px] text-gray-500 font-medium"
                  style={{ top: "15%", left: "70%" }}
                >
                  Victoria
                </span>
                {/* Markers */}
                {[
                  { top: "30%", left: "40%", type: "InPost" },
                  { top: "50%", left: "60%", type: "Evri" },
                  { top: "65%", left: "35%", type: "InPost" },
                  { top: "25%", left: "70%", type: "Evri" },
                  { top: "45%", left: "25%", type: "InPost" },
                ].map((marker, i) => (
                  <img
                    key={i}
                    src={
                      marker.type === "InPost"
                        ? "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/ApnYmXHOvgnhqAAT.svg"
                        : "https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/WSVaGtkyAnPbOhZI.svg"
                    }
                    alt={marker.type}
                    className="absolute w-8 h-8 object-contain drop-shadow-md"
                    style={{
                      top: marker.top,
                      left: marker.left,
                      transform: "translate(-50%, -100%)",
                    }}
                  />
                ))}
                {/* Zoom controls */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  <div
                    className="w-7 h-7 bg-white rounded shadow flex items-center justify-center border"
                    style={{ borderColor: DS.outlineVariant }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: DS.onSurface }}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className="w-7 h-7 bg-white rounded shadow flex items-center justify-center border"
                    style={{ borderColor: DS.outlineVariant }}
                  >
                    <span
                      className="text-sm font-bold"
                      style={{ color: DS.onSurface }}
                    >
                      −
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="flex-1 border-b min-h-[200px] border border-gray-300 bg-gray-100 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to top right, transparent calc(50% - 0.5px), #d1d5db calc(50% - 0.5px), #d1d5db calc(50% + 0.5px), transparent calc(50% + 0.5px)), linear-gradient(to bottom right, transparent calc(50% - 0.5px), #d1d5db calc(50% - 0.5px), #d1d5db calc(50% + 0.5px), transparent calc(50% + 0.5px)), #f3f4f6",
                }}
              >
                <span className="text-gray-400 text-xs bg-gray-100 px-2">
                  Map
                </span>
              </div>
            )}
            {/* Selected point detail + Confirm */}
            <div className="p-4 relative flex items-end justify-between w-full">
              <div className="relative" style={{ width: "325px" }}>
                {isHifi ? (
                  <div className="absolute top-0 right-0">
                    <InPostIcon />
                  </div>
                ) : (
                  <div className="absolute top-0 right-0 h-8 w-16 border border-gray-300 bg-gray-100 flex items-center justify-center text-gray-400 text-[9px]">
                    InPost
                  </div>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-sm font-medium"
                    style={{ color: isHifi ? DS.onSurface : "#374151" }}
                  >
                    24/7 InPost Locker | Shop Pick-up
                  </span>
                </div>
                <p
                  className="text-sm font-bold mb-2"
                  style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
                >
                  £2.26
                </p>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                    className="flex-shrink-0"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                  </svg>
                  <span
                    className="text-xs"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    24/7 InPost Locker - Pimlico Sainsbury's
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                    className="flex-shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span
                    className="text-xs"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    35 Warwick Way, SW1V 1QS, London
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                    className="flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span
                    className="text-xs"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    At pick-up point in 7-9 business days
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#9ca3af" }}
                    className="flex-shrink-0"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span
                    className="text-xs"
                    style={{ color: isHifi ? DS.onSurfaceVariant : "#6b7280" }}
                  >
                    Open 24/7
                  </span>
                </div>
              </div>
              <button
                onClick={handleConfirm}
                className="px-5 py-2.5 text-sm font-medium border text-center flex-shrink-0"
                style={{
                  background: isHifi ? DS.primary : "#1f2937",
                  color: isHifi ? DS.onPrimary : "#fff",
                  borderColor: isHifi ? DS.primary : "#1f2937",
                  borderRadius: isHifi ? DS.radiusSm : undefined,
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
