import { format, addMonths, subMonths } from "date-fns";
import clsx from "clsx";
import type { DateProps } from "../../types/types";

const DateSelect = ({ current, setCurrentDate }: DateProps) => {
  const monthLabel = format(current, "MMMM yyyy");

  const prevMonth = () => setCurrentDate(subMonths(current, 1));
  const nextMonth = () => setCurrentDate(addMonths(current, 1));

  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={prevMonth}
        className={clsx(
          "w-11 h-11 rounded-full flex items-center justify-center transition-colors ",
          "hover:bg-[#3a291e] active:bg-[#FED172] active:text-[#A86415]",
        )}
      >
        <img
          className="w-2.5 h-3.75"
          src="/public/left-vector.svg"
          alt="prev"
        />
      </button>

      <p className="text-white font-medium">{monthLabel}</p>

      <button
        onClick={nextMonth}
        className={clsx(
          "w-11 h-11 rounded-full flex items-center justify-center transition-colors text-[#FDFCFC]/50%",
          "hover:bg-[#3a291e] active:bg-[#FED172] active:text-[#A86415]",
        )}
      >
        <img
          className="w-2.5 h-3.75 "
          src="/public/right-vector.svg"
          alt="next"
        />
      </button>
    </div>
  );
};

export default DateSelect;
