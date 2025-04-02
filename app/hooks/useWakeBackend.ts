import { useState } from "react";
import apiClient from "../utils/apiClient";
import { HealthStatus } from "../components/types";

type BackendStatus = "idle" | "starting" | "ready" | "error";

const useWakeBackend = () => {
  const [status, setStatus] = useState<BackendStatus>("idle");

  const startBackend = async () => {
    setStatus("starting");

    try {
      await fetch("https://your-api-gateway-url.amazonaws.com/prod/start", {
        method: "POST",
      });

      for (let i = 0; i < 10; i++) {
        const res = await apiClient.get<HealthStatus>("/health");
        if (res.data.status === "ok") {
          setStatus("ready");
          return;
        }
        await new Promise((res) => setTimeout(res, 5000));
      }

      setStatus("error");
    } catch (err) {
      console.error("Backend wake failed", err);
      setStatus("error");
    }
  };

  return { status, startBackend };
};

export default useWakeBackend;
