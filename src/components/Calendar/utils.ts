import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addDays,
  format,
  getISODay,
  isWithinInterval,
  isPast,
  isToday,
  parse,
  isBefore,
  addMinutes,
} from "date-fns";

export const getCalendarDays = (date: Date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });
};

export const withinCurrentMonth = (date: Date, testDate: Date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  return isWithinInterval(testDate, {
    start: monthStart,
    end: monthEnd,
  });
};

export const isDateAvailable = (date: Date) => {
  const dayOfTheWeek = getISODay(date);
  return (
    dayOfTheWeek !== 7 && dayOfTheWeek !== 6 && (!isPast(date) || isToday(date))
  );
};

export const getShortDayNames = () => {
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  return Array.from({ length: 7 }).map((_, i) => {
    const date = addDays(startDate, i);
    return format(date, "EEE").toUpperCase();
  });
};

export const getAvailableTime = (date: Date) => {
  const min = parse(
    `08:00 ${format(date, "dd MM yyyy")}`,
    "HH:mm dd MM yyyy",
    new Date(),
  );
  const max = parse(
    `19:01 ${format(date, "dd MM yyyy")}`,
    "HH:mm dd MM yyyy",
    new Date(),
  );

  const result: Date[] = [];

  for (let _date = new Date(min); isBefore(_date, max); ) {
    result.push(_date);
    _date = addMinutes(_date, 30);
  }

  return result;
};
