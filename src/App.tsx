import { useReducer } from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import { ConsultationCalendar } from "./components/ConsultationCalendar/ConsultationCalendar";
import { ConsultationForm } from "./components/ConsultationForm/ConsultationForm";
import { ConsultationHeader } from "./components/ConsultationHeader/ConsultationHeader";

export type Page = "calendar" | "details" | "result";

type Details = {
  email: string;
};

interface State {
  date: Date | null;
  details: Details | null;
  page: Page;
}

const initialState: State = {
  date: null,
  details: null,
  page: "calendar",
};

type Action =
  | { type: "SET_DATE"; payload: Date }
  | { type: "SET_DETAILS"; payload: Details };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_DATE":
      return {
        ...state,
        date: action.payload,
        page: "details",
      };

    case "SET_DETAILS":
      return {
        ...state,
        details: { ...state.details, ...action.payload },
        page: "result",
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDate = (date: Date) => dispatch({ type: "SET_DATE", payload: date });

  return (
    <div className="mt-10 inter-text ">
      {state.page === "calendar" && <Calendar onSubmit={setDate} />}
      {/* {state.page === "details" && <Details />}
      {state.page === "result" && <Result />} */}

      {/* <ConsultationHeader />
      <ConsultationCalendar /> */}
      {/* <ConsultationForm /> */}

      {/* 

      */}
    </div>
  );
}

export default App;
