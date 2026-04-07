import { DS } from "@/contexts/DesignSystem";
import { useFidelityMode } from "@/contexts/FidelityModeContext";
import { Link } from "wouter";

interface PageHeaderProps {
  title: string;
  backTo: string;
  className?: string;
}

export function PageHeader({ title, backTo, className = "" }: PageHeaderProps) {
  const { isLofi, isHifi } = useFidelityMode();

  if (isLofi) {
    return (
      <div className={`flex items-center gap-3 mb-2 ${className}`}>
        <Link
          to={backTo}
          className="w-8 h-8 border border-black flex items-center justify-center"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-black"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-black">{title}</h1>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 mb-2 ${className}`}>
      <Link
        to={backTo}
        className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
        style={{
          background: isHifi ? DS.surfaceContainerLowest : undefined,
          borderColor: isHifi ? DS.outlineVariant : undefined,
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-500"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
    </div>
  );
}
