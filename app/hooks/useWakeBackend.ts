import { useState, useEffect, useRef } from "react";
import apiClient from "../utils/apiClient";
import { HealthStatus } from "../components/types";

type BackendStatus = "idle" | "starting" | "ready" | "error";

const useWakeBackend = () => {
  const [status, setStatus] = useState<BackendStatus>("idle");
  const [uptime, setUptime] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
          setUptime(res.data.uptime); // Initial uptime from backend
          startLiveUptime(res.data.uptime);
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

  const startLiveUptime = (initial: string) => {
    const [h, m, s] = initial.split(/[hms ]+/).filter(Boolean).map(Number);
    let totalSeconds = h * 3600 + m * 60 + s;

    intervalRef.current = setInterval(() => {
      totalSeconds += 1;
      const hrs = Math.floor(totalSeconds / 3600);
      const mins = Math.floor((totalSeconds % 3600) / 60);
      const secs = totalSeconds % 60;
      setUptime(`${hrs}h ${mins}m ${secs}s`);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { status, uptime, startBackend };
};

export default useWakeBackend;
