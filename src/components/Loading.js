import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-warning mt-5">
      <p className="h1 px-3">Loading:</p>
      <div className="spinner-border loadingGift" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
