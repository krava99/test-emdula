export const ConsultationHeader = () => {
  return (
    <section className="bg-[#17121D] rounded-t-2xl border-[3px] border-[rgba(253,252,252,0.25)]">
      <div className=" text-center  mx-16 py-6">
        <h1 className="mb-6 text-[32px]">Consultation</h1>
        <div className="flex gap-4 gray-text mb-6">
          <div className=" flex gap-2">
            <img
              src="/public/time-icon.svg"
              alt="time-icon"
              className="w-5 h-5"
            />
            <p className="">30 min</p>
          </div>
          <div className="flex gap-2">
            <img
              src="/public/camera-icon.svg"
              alt="camera-icon"
              className="w-5 h-5"
            />
            <p>Web conferencing details provided upon confirmation.</p>
          </div>
        </div>
        <div className="flex gap-4 gray-text">
          <div className="flex gap-2">
            <img
              src="/public/calendar-icon.svg"
              alt="calendar-icon"
              className="w-5 h-5"
            />
            <p>10:00 - 10:30, Thuesday, Februay 12, 2026</p>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/public/earth-icon.svg"
              alt="earth-icon"
              className="w-5 h-5"
            />
            <p>European Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};
