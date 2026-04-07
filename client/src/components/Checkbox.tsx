import { useFidelityMode } from "@/contexts/FidelityModeContext";

interface CheckboxProps {
  checked: boolean;
  className?: string;
}

export function Checkbox({ checked, className = "" }: CheckboxProps) {
  const { isLofi, isHifi } = useFidelityMode();

  if (isLofi) {
    return (
      <div
        className={`w-4 h-4 border-2 border-black flex items-center justify-center flex-shrink-0 ${className}`}
      >
        {checked && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-black"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    );
  }

  return (
    <div
      className={`w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 ${isHifi ? "rounded-[2px]" : ""} ${checked ? "bg-gray-800 border-gray-800" : "border-gray-300"} ${className}`}
    >
      {checked && (
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </div>
  );
}
