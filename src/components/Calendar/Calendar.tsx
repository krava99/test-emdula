import { useEffect, useState, type FC } from "react";
import DateSelect from "./DateSelect";
import CalendarGrid from "./CalendarGrid";
import TimeList from "./TimeList";
import clsx from "clsx";

type Props = {
  onSubmit: (value: Date) => void;
};

const Calendar: FC<Props> = ({ onSubmit }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  (window as any).setCurrentDate = setCurrentDate;

  useEffect(() => setSelectedDate(null), [currentDate]);

  return (
    <div className="flex gap-2">
      <div className="flex flex-col max-w-[344px] bg-black">
        <DateSelect current={currentDate} />
        <CalendarGrid
          current={currentDate}
          onSelect={setSelectedDate}
          selected={selectedDate}
        />
      </div>
      <div
        className={clsx("flex flex-col max-w-[260px] bg-black", {
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
