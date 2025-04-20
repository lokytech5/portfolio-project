"use client";
import { useEffect, useState } from "react";
import { useBackendStatus } from "../BackendStatusContext";

const BackendModals = () => {
  const { status, manuallyStarted, setManuallyStarted } = useBackendStatus();
  const [showModal, setShowModal] = useState<"loading" | "success" | "error" | null>(null);

  useEffect(() => {
    if (!manuallyStarted) return;

    if (status === "starting") {
      setShowModal("loading");
    } else if (status === "ready") {
      setShowModal("success");
    } else if (status === "error") {
      setShowModal("error");
    } else {
      setShowModal(null);
    }
  }, [status, manuallyStarted]);

  const clearManualFlag = () => {
    sessionStorage.removeItem("manuallyStarted");
    setManuallyStarted(false);
    setShowModal(null);
  };

  return (
    <>
      {showModal === "loading" && (
        <dialog open className="modal" id="wake_loading_modal">
          <div className="modal-box flex flex-col items-center space-y-4">
            <span className="loading loading-spinner loading-lg text-purple-600"></span>
            <p className="font-semibold text-lg text-center">Waking up backend... Please wait ⏳</p>
          </div>
        </dialog>
      )}

      {showModal === "success" && (
        <dialog open className="modal" id="wake_success_modal">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg text-green-600">✅ Backend is Ready!</h3>
            <p className="py-4">Your server is now live 🎉</p>
            <form method="dialog" className="modal-action">
              <button className="btn btn-success" onClick={clearManualFlag}>OK</button>
            </form>
          </div>
        </dialog>
      )}

      {showModal === "error" && (
        <dialog open className="modal" id="wake_error_modal">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg text-red-600">❌ Backend Failed</h3>
            <p className="py-4">Server didn’t start in time. Try again later.</p>
            <form method="dialog" className="modal-action">
              <button className="btn" onClick={clearManualFlag}>Close</button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default BackendModals;
