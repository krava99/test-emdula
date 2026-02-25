import { format } from "date-fns";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ModalProps } from "../../types/types";

export default function Modal({ onClose, name, date, timezone }: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return createPortal(
    <div
      className="fixed top-0 left-0 z-9999 w-screen h-screen bg-black/60 flex justify-center items-center"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="min-w-17.5 min-h-82.5 bg-[#17121D] rounded-2xl border-[3px] border-[rgba(253,252,252,0.25)] text-center">
        <div className="flex mt-10 mb-2 mx-30.25 justify-center gap-0.5">
          <img className="w-6 h-6" src="/public/check.svg" alt="check" />
          <h2 className="text-[#F4F1EB]">You are scheduled</h2>
        </div>
        <p className="gray-text mb-7">
          A calendar invitation has been sent to your email address.
        </p>
        <div className="w-115 h-41 border border-[rgba(253,252,252,0.25)] rounded-lg mx-31 py-4 px-6">
          <p className="flex flex-start mb-2.5 text-[#F4F1EB]">
            Schedule eClosing
          </p>
          <ul>
            <div className="flex mb-3 gap-1">
              <img className="w-5 h-5" src="/public/person.svg" alt="person" />
              <li className="gray-text">{name}</li>
            </div>
            <div className="flex mb-3 gap-1">
              <img
                className="w-5 h-5"
                src="/public/calendar-icon.svg"
                alt="calendar"
              />
              <li className="gray-text">
                {date ? format(date, "HH:mm, d MMMM, yyyy") : ""}
              </li>
            </div>
            <div className="flex mb-3 gap-1">
              <img
                className="w-5 h-5"
                src="/public/earth-icon.svg"
                alt="person"
              />
              <li className="gray-text">{timezone}</li>
            </div>
          </ul>
        </div>
      </div>
      <button
        className="disabled:"
        onClick={onClose}
        aria-label="Close modal"
      ></button>
    </div>,
    document.body,
  );
}
