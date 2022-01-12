import React from "react";
import CommonTable from "../common/CommonTable";

const VehicleTable = () => {
  return (
    <>
      <div style={{ marginLeft: "81px" }}>
        <h3 style={{ marginBottom: "61px", marginTop: "81px" }}>Vehicles</h3>
        <nav style={{ marginBottom: "41px" }}>
          <span style={{ marginRight: "41px" }}>Vehicle Application</span>
          <span style={{ marginRight: "41px" }}>Vehicles</span>
          <span style={{ marginRight: "41px" }}>Brand</span>
        </nav>
        <h4 style={{ marginBottom: "2.18rem" }}> Vehicles Applications</h4>
      </div>
      <CommonTable />
    </>
  );
};

export default VehicleTable;
