import React from "react";
import { useReducer } from "react";
import ErrorsReducer from "../reducers/errorsReducer";

export const ErrorMessage = React.createContext();

const ErrorMessageProvider = (props) => {
  const [state, dispatch] = useReducer(ErrorsReducer, null);

  const createErrorMessage = (mes, typeErr) => {
    if (mes && typeErr) {
      // dispatch({
      //   type: "CLEAR_RESULT",
      // });

      dispatch({
        type: "ADD_ERROR",
        mes,
        typeErr,
      });
      setTimeout(() => {
        dispatch({
          type: "REMOVE_ERROR",
        });
      }, 10000);
    } else {
      dispatch({
        type: "REMOVE_ERROR",
      });
    }
  };

  return (
    <ErrorMessage.Provider
      value={{
        createErrorMessage,
        state,
      }}
    >
      {props.children}
    </ErrorMessage.Provider>
  );
};

export default ErrorMessageProvider;
