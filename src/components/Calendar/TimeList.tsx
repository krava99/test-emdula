import { useMemo, type FC, type PropsWithChildren } from "react";
import { getAvailableTime } from "./utils";
import { format } from "date-fns";

type Props = PropsWithChildren<{
  selected: Date | null;
  onSelect: (value: Date) => void;
  onSubmit: (value: Date) => void;
}>;

const TimeList: FC<Props> = ({ selected, onSelect, onSubmit }) => {
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
    <div className="flex flex-col">
      <ul>
        {availableDates.map((x) => (
          <li key={x.getTime()}>
            <button onClick={() => onSelect(x)}>{format(x, "HH:mm")}</button>
          </li>
        ))}
      </ul>
      <button disabled={!isButtonEnabled} onClick={submitHandler}>
        next
      </button>
    </div>
  );
};

export default TimeList;
