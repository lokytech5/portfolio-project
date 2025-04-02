// context/BackendStatusContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type BackendStatus = "idle" | "starting" | "ready" | "error";

interface BackendContextType {
  status: BackendStatus;
  setStatus: (s: BackendStatus) => void;
  uptime: string | null;
  setUptime: (u: string | null) => void;
}

const BackendStatusContext = createContext<BackendContextType | undefined>(undefined);

export const BackendStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [status, setStatus] = useState<BackendStatus>("idle");
  const [uptime, setUptime] = useState<string | null>(null);

  return (
    <BackendStatusContext.Provider value={{ status, setStatus, uptime, setUptime }}>
      {children}
    </BackendStatusContext.Provider>
  );
};

export const useBackendStatus = () => {
  const context = useContext(BackendStatusContext);
  if (!context) throw new Error("useBackendStatus must be used within BackendStatusProvider");
  return context;
};
