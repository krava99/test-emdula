import { useState } from "react";
import Modal from "../Modal/Modal";
import type { FormProps } from "../../types/types";

export const ConsultationForm = ({ selectedDate }: FormProps) => {
  const [showGuestInput, setShowGuestInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <section className="bg-[#17121D] py-7 px-44 rounded-b-2xl border-[3px] border-[rgba(253,252,252,0.25)]">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-6">Enter details</h2>

          <div className="mb-6">
            <label className="flex flex-col gap-1">
              Name
              <input
                name="username"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-4 pt-2 pr-4 pb-2 border border-[rgba(253,252,252,0.25)] rounded-[10px] h-10"
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="flex flex-col gap-1">
              Email
              <input
                type="email"
                className="pl-4 pt-2 pr-4 pb-2 border border-[rgba(253,252,252,0.25)] rounded-[10px] h-10"
              />
            </label>
          </div>

          {!showGuestInput && (
            <button
              type="button"
              className="btn-second mb-6"
              onClick={() => setShowGuestInput(true)}
            >
              Add Guests
            </button>
          )}

          {showGuestInput && (
            <div className="mb-6">
              <label className="flex flex-col gap-1">
                Guest Name
                <input className="pl-4 pt-2 pr-4 pb-2 border border-[rgba(253,252,252,0.25)] rounded-[10px] h-10" />
              </label>
            </div>
          )}

          <label className="flex flex-col text-[14px] font-normal">
            Please share anything that will help prepare meeting
            <textarea className="mt-1 mb-6 border border-[rgba(253,252,252,0.25)] rounded-[10px] py-2 px-3 h-20 resize-none" />
          </label>

          <button
            type="submit"
            className="btn-primary mb-6"
            onClick={openModal}
          >
            Schedule Event
          </button>
          {isModalOpen && (
            <Modal onClose={closeModal} name={name} date={selectedDate} />
          )}
          <h3 className="text-center font-medium text-sm text-[#E9AC32]">
            Cookie settings
          </h3>
        </form>
      </div>
    </section>
  );
};
