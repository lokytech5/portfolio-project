"use client"
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BackendStatusProvider } from "./BackendStatusContext";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode}) {
    return (
        <QueryClientProvider client={queryClient}>
      <BackendStatusProvider>
        {children}
      </BackendStatusProvider>
        </QueryClientProvider>
      );
}

export default Providers;