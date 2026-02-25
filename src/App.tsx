import { useReducer } from "react";
import Calendar from "./components/Calendar/Calendar";

import { ConsultationForm } from "./components/ConsultationForm/ConsultationForm";
import { ConsultationHeader } from "./components/ConsultationHeader/ConsultationHeader";
import { initialState, type Action, type State } from "./types/types";

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
      <ConsultationHeader date={state.date} />
      {state.page === "calendar" && <Calendar onSubmit={setDate} />}

      {state.page === "details" && (
        <ConsultationForm selectedDate={state.date} />
      )}
    </div>
  );
}

export default App;
