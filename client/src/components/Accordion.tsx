import React from "react";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { DS, useDSSync } from "@/contexts/DesignSystem";
import { TextPlaceholder } from "@/components/TextPlaceholder";

interface AccordionItem {
  /** Text label shown in mid-fi/hi-fi mode */
  label?: string;
  /** Width percentage for lo-fi placeholder (e.g. "50%") */
  placeholderWidth?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const { isLofi, isHifi } = useFidelityMode();
  useDSSync();

  if (isLofi) {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {items.map((item, i) => (
          <div key={i} className="border border-black bg-white">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
              <TextPlaceholder width={item.placeholderWidth || "60%"} />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black flex-shrink-0"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg bg-white">
          <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-700">{item.label || ""}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-400 flex-shrink-0"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
