import { useEffect, useRef } from "react";
import apiClient from "../utils/apiClient";
import { HealthStatus } from "../components/types";
import { useBackendStatus } from "../BackendStatusContext";

const useWakeBackend = () => {
  const {
    status, setStatus,
    uptime, setUptime,
    manuallyStarted, setManuallyStarted
  } = useBackendStatus();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startBackend = async () => {
    setStatus("starting");
    setManuallyStarted(true);
    sessionStorage.setItem("manuallyStarted", "true");

    try {
      await fetch("https://bh00y5ylm5.execute-api.us-east-1.amazonaws.com/prod/start", {
        method: "POST",
      });

      const maxAttempts = 12;
      const delay = 5000;

      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          const res = await apiClient.get<HealthStatus>("/health");
          if (res.data.status === "ok") {
            setStatus("ready");
            setUptime(res.data.uptime);
            startLiveUptime(res.data.uptime);
            localStorage.setItem("backendStatus", "ready");
            return;
          }
        } catch {
          console.log(`⏳ Attempt ${attempt}: backend not ready`);
        }

        await new Promise((res) => setTimeout(res, delay));
      }

      setStatus("error");
      localStorage.removeItem("backendStatus");

    } catch (err) {
      console.error("❌ Backend wake failed:", err);
      setStatus("error");
      localStorage.removeItem("backendStatus");
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
    const manually = sessionStorage.getItem("manuallyStarted") === "true";
    setManuallyStarted(manually);

    if (!manually) {
      const checkIfBackendIsRunning = async () => {
        const wasAlreadyMarkedReady = localStorage.getItem("backendStatus") === "ready";

        try {
          const res = await apiClient.get<HealthStatus>("/health");
          if (res.data.status === "ok") {
            setStatus("ready");
            setUptime(res.data.uptime);
            startLiveUptime(res.data.uptime);
            localStorage.setItem("backendStatus", "ready");
          } else if (wasAlreadyMarkedReady) {
            localStorage.removeItem("backendStatus");
            setStatus("idle");
          }
        } catch {
          if (wasAlreadyMarkedReady) {
            localStorage.removeItem("backendStatus");
          }
          setStatus("idle");
        }
      };

      checkIfBackendIsRunning();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { status, uptime, startBackend };
};

export default useWakeBackend;
