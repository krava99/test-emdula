import { useMemo } from "react";
import { getAvailableTime } from "./utils";
import { format } from "date-fns";
import type { TimeSelectProps } from "../../types/types";

const TimeList = ({ selected, onSelect, onSubmit }: TimeSelectProps) => {
  const availableDates = useMemo(
    () => (selected ? getAvailableTime(selected) : []),
    [selected],
  );

  const isButtonEnabled = availableDates.some(
    (x) => !!selected && format(x, "HH:mm") === format(selected, "HH:mm"),
  );

  const submitHandler = () => {
    if (selected) {
      onSubmit(selected);
    }
  };

  return (
    <div className="max-h-125 width-full overflow-hidden">
      <p className="gray-text mb-6 font-normal">
        {selected ? format(selected, "EEEE, MMMM d") : "Select a date"}
      </p>
      <div className="flex flex-col w-65 max-h-132.5 ml-1 overflow-y-auto scrollbar-hide ">
        <ul>
          {availableDates.map((x) => (
            <li key={x.getTime()}>
              <button
                className={`time-btn w-59 h-10 text-center mb-2 ${
                  selected && format(x, "HH:mm") === format(selected, "HH:mm")
                    ? "selected"
                    : ""
                }`}
                onClick={() => onSelect(x)}
              >
                {format(x, "HH:mm")}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="btn-primary w-61 h-14 sticky bottom-0 "
        disabled={!isButtonEnabled}
        onClick={submitHandler}
      >
        Next
      </button>
    </div>
  );
};

export default TimeList;
