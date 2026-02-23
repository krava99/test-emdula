import { type FC } from "react";
import clsx from "clsx";
import {
  getCalendarDays,
  getShortDayNames,
  isDateAvailable,
  withinCurrentMonth,
} from "./utils";
import { format, isSameDay, isToday } from "date-fns";

type Props = {
  current: Date;
  onSelect: (date: Date | null) => void;
  selected: Date | null;
};

const CalendarGrid: FC<Props> = ({ current, onSelect, selected }) => {
  const dayNames = getShortDayNames();
  const days = getCalendarDays(current);

  const clickHandler = (x: Date) =>
    onSelect(selected && isSameDay(x, selected) ? null : x);

  return (
    <div className="grid grid-cols-7 gap-2 p-2">
      {dayNames.map((x) => (
        <span key={x}>{x}</span>
      ))}

      {days.map((x, i) => (
        <button
          onClick={() => clickHandler(x)}
          disabled={!isDateAvailable(x)}
          className={clsx("btn-second", {
            ["invisible"]: !withinCurrentMonth(current, x),
            ["today"]: isToday(x),
            ["selected"]: selected && isSameDay(x, selected),
          })}
          key={i}
        >
          {format(x, "d")}
        </button>
      ))}

      <span></span>
    </div>
  );
};

export default CalendarGrid;
