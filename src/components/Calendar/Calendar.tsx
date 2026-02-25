import { useState } from "react";
import DateSelect from "./DateSelect";
import CalendarGrid from "./CalendarGrid";
import TimeList from "./TimeList";
import clsx from "clsx";
import type { SubProps } from "../../types/types";

const Calendar = ({ onSubmit, timezone, setTimezone }: SubProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div
      className={clsx(
        "flex gap-3 min-h-36.5 p-7 bg-[#17121D] rounded-b-2xl border-[3px] border-[rgba(253,252,252,0.25)]",
        selectedDate ? "justify-start" : "justify-center",
      )}
    >
      <div className="flex flex-col max-w-[344px] ">
        <DateSelect current={currentDate} setCurrentDate={setCurrentDate} />
        <CalendarGrid
          current={currentDate}
          selected={selectedDate}
          onSelect={setSelectedDate}
          timezone={timezone}
          onTimezoneChange={setTimezone}
        />
      </div>
      <div
        className={clsx("flex flex-col min-w-full", {
          ["hidden"]: !selectedDate,
        })}
      >
        <TimeList
          selected={selectedDate}
          onSelect={setSelectedDate}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
export default Calendar;
