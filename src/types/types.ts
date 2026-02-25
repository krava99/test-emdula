import type { PropsWithChildren } from "react";

export type Page = "calendar" | "details" | "result";

export type Details = {
  email: string;
};

export type State = {
  date: Date | null;
  details: Details | null;
  page: Page;
};

export const initialState: State = {
  date: null,
  details: null,
  page: "calendar",
};

export type Action =
  | { type: "SET_DATE"; payload: Date }
  | { type: "SET_DETAILS"; payload: Details };

export type DateProps = {
  current: Date;
  setCurrentDate: (date: Date) => void;
};

export type GridProps = {
  current: Date;
  onSelect: (date: Date | null) => void;
  selected: Date | null;
  timezone: string;
  onTimezoneChange: (tz: string) => void;
};

export type FormProps = {
  selectedDate: Date | null;
  timezone: string;
};

export type HeaderProps = {
  date: Date | null;
  timezone: string;
};
export type SubProps = {
  onSubmit: (value: Date) => void;
  timezone: string;
  setTimezone: (tz: string) => void;
};

export type TimeSelectProps = PropsWithChildren<{
  selected: Date | null;
  onSelect: (value: Date) => void;
  onSubmit: (value: Date) => void;
}>;

export type ModalProps = {
  onClose: () => void;
  name: string;
  date: Date | null;
  timezone: string;
};
