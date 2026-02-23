export const ConsultationForm = () => {
  return (
    <section className="bg-[#17121D] py-7 px-43.75 rounded-b-2xl border-[3px] border-[rgba(253,252,252,0.25)]">
      <div className="flex flex-col">
        <form>
          <h2 className="mb-6">Enter details</h2>
          <div className="mb-6">
            <label className="flex flex-col gap-1 " htmlFor="">
              Name
              <input
                className="border border-[rgba(253,252,252,0.25)] rounded-[10px] h-10"
                type="text"
              />
            </label>
          </div>
          <div className="mb-6">
            <label className="flex flex-col gap-1" htmlFor="">
              Email
              <input
                className="border border-[rgba(253,252,252,0.25)] rounded-[10px] h-10"
                type="text"
              />
            </label>
          </div>
          <button className="btn-second mb-6">Add Guests</button>

          <label className="flex flex-col text-[14px] font-normal" htmlFor="">
            Please share anything that will help prepare meeting
            <textarea
              className="mb-6 border border-[rgba(253,252,252,0.25)] rounded-[10px] py-2 px-3 h-20 resize-none"
              name=""
              id=""
            ></textarea>
          </label>
          <button className="btn-primary  mb-6">Schedule Event</button>
          <h3 className="text-center font-medium text-sm text-[#E9AC32]  ">
            Cookie settings
          </h3>
        </form>
      </div>
    </section>
  );
};
