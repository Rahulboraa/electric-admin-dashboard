import React from "react";

const Spinner = () => {
  return (
    <>
      <div
        className="text-center"
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "blue",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
