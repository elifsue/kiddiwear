import { createContext, useContext, useState, type ReactNode } from "react";

export type FidelityMode = "lofi" | "midfi" | "hifi";

interface FidelityModeContextType {
  mode: FidelityMode;
  setMode: (mode: FidelityMode) => void;
  isLofi: boolean;
  isMidfi: boolean;
  isHifi: boolean;
  figmaCaptureMode: boolean;
  setFigmaCaptureMode: (v: boolean) => void;
}

const FidelityModeContext = createContext<FidelityModeContextType | null>(null);

export function FidelityModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<FidelityMode>("hifi");
  const [figmaCaptureMode, setFigmaCaptureMode] = useState(false);

  return (
    <FidelityModeContext.Provider
      value={{
        mode,
        setMode,
        isLofi: mode === "lofi",
        isMidfi: mode === "midfi",
        isHifi: mode === "hifi",
        figmaCaptureMode,
        setFigmaCaptureMode,
      }}
    >
      {children}
    </FidelityModeContext.Provider>
  );
}

export function useFidelityMode() {
  const ctx = useContext(FidelityModeContext);
  if (!ctx)
    throw new Error("useFidelityMode must be used within FidelityModeProvider");
  return ctx;
}
