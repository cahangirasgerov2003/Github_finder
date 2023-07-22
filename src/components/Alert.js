import React, { useContext } from "react";
import { ErrorMessage } from "../contexts/errorsContext";

const Alert = () => {
  const { state } = useContext(ErrorMessage);
  if (state) {
    return (
      <div className="container">
        <div className={`alert alert-${state.type}`} role="alert">
          {state.mes}
        </div>
      </div>
    );
  }
};

export default Alert;
