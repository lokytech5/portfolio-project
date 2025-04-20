import useWakeBackend from "../hooks/useWakeBackend";

const WakeBackendButton = () => {
  const { status, startBackend, uptime } = useWakeBackend();

  const baseClasses =
    "btn text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 mt-4 transition-all";

  return (
    <div className="flex flex-col items-center space-y-2 mt-4">
      {status === "ready" ? (
        <>
          <p className="text-green-500 font-semibold text-lg">
            ✅ Backend is Ready
          </p>
          {uptime && (
            <p className="text-sm text-green-300">
              ⏱️ Uptime: <span className="font-semibold">{uptime}</span>
            </p>
          )}
        </>
      ) : (
        <button
          onClick={startBackend}
          disabled={status === "starting"}
          className={`${
            status === "starting"
              ? "btn-disabled bg-gray-400 text-white"
              : baseClasses
          }`}
        >
          {status === "starting" ? "Starting Backend..." : "🔌 Wake Backend"}
        </button>
      )}
    </div>
  );
};

export default WakeBackendButton;
