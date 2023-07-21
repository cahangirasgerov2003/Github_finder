import React from "react";

const Alert = ({ error }) => {
  return (
    <div className="container">
      <div className={`alert alert-${error.type}`} role="alert">
        {error.mes}
      </div>
    </div>
  );
};

export default Alert;
