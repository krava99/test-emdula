import clsx from "clsx";
import {
  getCalendarDays,
  getShortDayNames,
  isDateAvailable,
  withinCurrentMonth,
} from "./utils";
import { format, isSameDay, isToday } from "date-fns";
import type { GridProps } from "../../types/types";

const CalendarGrid = ({
  current,
  onSelect,
  selected,
  timezone,
  onTimezoneChange,
}: GridProps) => {
  const dayNames = getShortDayNames();
  const days = getCalendarDays(current);

  const clickHandler = (x: Date) =>
    onSelect(selected && isSameDay(x, selected) ? null : x);

  return (
    <div className="min-w-88 ">
      <div className="grid grid-cols-7 gap-2 pr-2 text-center items-center mb-6">
        {dayNames.map((x) => (
          <span
            key={x}
            className="text-sm font-normal  uppercase text-gray-400"
          >
            {x}
          </span>
        ))}

        {days.map((x, i) => {
          const isAvailable = isDateAvailable(x);
          const isSel = selected && isSameDay(x, selected);

          return (
            <button
              key={i}
              onClick={() => clickHandler(x)}
              disabled={!isAvailable}
              className={clsx(
                "w-11 h-11 rounded-full flex flex-col items-center justify-center transition-colors relative",
                {
                  invisible: !withinCurrentMonth(current, x),
                  "bg-[#2d1f14] text-[#FED172]": isAvailable && !isSel,
                  "bg-[#FED172] text-[#A86415]": isSel,
                  "text-gray-600 cursor-not-allowed": !isAvailable,
                },
              )}
            >
              <span>{format(x, "d")}</span>
              {isToday(x) && (
                <span
                  className={clsx(
                    "absolute bottom-1.5 w-1 h-1 rounded-full",
                    isSel ? "bg-[#A86415]" : "bg-[#FDFCFC]/50",
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
      <div>
        <label htmlFor="timezone">Time zone</label>
        <div className="flex gap-3 items-center mb-6">
          <img
            src="/public/earth-icon.svg"
            alt="earth-icon"
            className="w-3.5 h-3.5 "
          />
          <select
            value={timezone}
            onChange={(e) =>
              onTimezoneChange(e.target.options[e.target.selectedIndex].text)
            }
            className="font-medium text-[14px] bg-[#17121D]"
          >
            <option>European Time</option>
            <option>Europe/London</option>
            <option>America/New York</option>
            <option>Asia/Tokyo</option>
          </select>
        </div>
        <p className="text-center font-medium text-[14px] text-[#E9AC32]">
          Cookie settings
        </p>
      </div>
    </div>
  );
};

export default CalendarGrid;
