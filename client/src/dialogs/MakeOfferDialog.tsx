import { DS } from "@/contexts/DesignSystem";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ActionButton } from "@/components/ActionButton";
import { TextInputField } from "@/components/TextInputField";
import { TextInputFieldMultiLine } from "@/components/TextInputFieldMultiLine";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/ui/dialog";

interface MakeOfferDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MakeOfferDialog({ open, onOpenChange }: MakeOfferDialogProps) {
  const { isLofi, isHifi, figmaCaptureMode } = useFidelityMode();
  const handleOpenChange = (v: boolean) => {
    if (v || !figmaCaptureMode) onOpenChange(v);
  };

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
          className="sm:max-w-[420px] border-2 border-black bg-white p-0 gap-0"
          onPointerDownOutside={e => {
            if (figmaCaptureMode) e.preventDefault();
          }}
          onInteractOutside={e => {
            if (figmaCaptureMode) e.preventDefault();
          }}
        >
          <DialogTitle className="sr-only">Make an Offer</DialogTitle>
          <div className="flex items-center justify-between p-4">
            <h2 className="text-base font-bold text-black">Make an Offer</h2>
            <button
              onClick={() => onOpenChange(false)}
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
          <div className="px-6 pb-4">
            <div className="flex items-center gap-3 p-4 border border-black mb-5 bg-white">
              <ImagePlaceholder
                className="w-14 h-14 flex-shrink-0"
                aspectRatio="1/1"
              />
              <div className="flex-1 min-w-0">
                <TextPlaceholder width="80%" className="mb-1" />
                <TextPlaceholder width="60%" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-sm font-medium text-black">
                Your Offer Price
              </label>
              <div className="h-10 border border-black px-3 flex items-center gap-2">
                <span className="text-sm text-black font-medium">£</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-black">
                  Message
                </label>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5 rounded">
                  Optional
                </span>
              </div>
              <div className="h-28 border border-black bg-white px-3 py-2" />
            </div>
          </div>
          <DialogFooter className="px-6 pb-6 pt-0 flex gap-3">
            <ActionButton
              variant="outlined"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </ActionButton>
            <ActionButton
              variant="primary"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Submit Offer
            </ActionButton>
          </DialogFooter>
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
        className={`sm:max-w-[420px] border border-gray-200 bg-white p-0 gap-0 shadow-xl ${isHifi ? "rounded-lg" : ""}`}
        onPointerDownOutside={e => {
          if (figmaCaptureMode) e.preventDefault();
        }}
        onInteractOutside={e => {
          if (figmaCaptureMode) e.preventDefault();
        }}
      >
        <DialogTitle className="sr-only">Make an Offer</DialogTitle>
        <div className="flex items-center justify-between px-5 py-4">
          <h2
            className="text-base font-semibold"
            style={{ color: isHifi ? DS.onSurface : "#1f2937" }}
          >
            Make an Offer
          </h2>
          <button
            onClick={() => onOpenChange(false)}
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
        <div className="px-6 pb-4">
          <div
            className="flex items-center gap-3 p-4 border mb-5 bg-white"
            style={{
              borderColor: isHifi ? DS.outlineVariant : "#d1d5db",
              borderRadius: isHifi ? DS.radiusSm : "0px",
            }}
          >
            <ImagePlaceholder
              label="Item"
              className="w-14 h-14 rounded flex-shrink-0"
              aspectRatio="1/1"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700">
                Boys Striped Cotton T-Shirt
              </p>
              <p className="text-xs text-gray-400">
                Listed price:{" "}
                <span className="font-bold text-gray-700">£8.00</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mb-5">
            <TextInputField label="Your Offer Price" placeholder="£ 0.00" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <label
                className="text-sm font-medium"
                style={{ color: isHifi ? "#0D2818" : "#374151" }}
              >
                Message
              </label>
              <span
                className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                style={{
                  color: isHifi ? DS.onSurfaceVariant : "#9ca3af",
                  border: `1px solid ${isHifi ? DS.outline : "#d1d5db"}`,
                }}
              >
                Optional
              </span>
            </div>
            <TextInputFieldMultiLine
              placeholder="Hi! Would you consider £6.50? Happy to buy right away."
              rows={4}
            />
          </div>
        </div>
        <DialogFooter className="px-6 pb-6 pt-0 flex gap-3">
          <ActionButton
            variant="outlined"
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </ActionButton>
          <ActionButton
            variant="primary"
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Submit Offer
          </ActionButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
