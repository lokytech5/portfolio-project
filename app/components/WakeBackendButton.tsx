import useWakeBackend from "../hooks/useWakeBackend";

const WakeBackendButton = () => {
  const { status, startBackend, uptime } = useWakeBackend();

  const baseClasses =
    "btn text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 mt-4 transition-all";

  if (status === "ready") {
    return (
      <div className="flex flex-col items-center space-y-2 mt-4">
        <button
          onClick={() => location.reload()}
          className="btn bg-green-600 text-white px-6 py-2"
        >
          ✅ Backend Ready — Refresh
        </button>
        {uptime && (
          <p className="text-sm text-green-300">
            ⏱️ Uptime: <span className="font-semibold">{uptime}</span>
          </p>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={startBackend}
      disabled={status === "starting"}
      className={`${
        status === "starting"
          ? "btn-disabled bg-gray-400 text-white mt-4"
          : baseClasses
      }`}
    >
      {status === "starting" ? "Starting Backend..." : "🔌 Wake Backend"}
    </button>
  );
};

export default WakeBackendButton;
