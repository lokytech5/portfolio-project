"use client"
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BackendStatusProvider } from "./BackendStatusContext";
import BackendModals from "./components/BackendModals";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode}) {
    return (
        <QueryClientProvider client={queryClient}>
      <BackendStatusProvider>
        {children}
        <BackendModals />
      </BackendStatusProvider>
        </QueryClientProvider>
      );
}

export default Providers;