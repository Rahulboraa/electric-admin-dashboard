import React from "react";
import CommonTable from "../common/CommonTable";

const Vehicle = () => {
  return (
    <>
      <div style={{ marginLeft: "81px" }}>
        <h3 style={{ marginBottom: "61px", marginTop: "81px" }}>Vehicles</h3>
        <nav style={{ marginBottom: "41px" }}>
          <span style={{ marginRight: "41px" }}>Vehicle </span>
          <span style={{ marginRight: "41px" }}>Vehicles</span>
          <span style={{ marginRight: "41px" }}>Brand</span>
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2.18rem",
          }}
        >
          <h4> Vehicles </h4>
          <button style={{ marginBottom: "8px" }}>Add Vehicle</button>
        </div>
      </div>
      <CommonTable />
    </>
  );
};

export default Vehicle;
