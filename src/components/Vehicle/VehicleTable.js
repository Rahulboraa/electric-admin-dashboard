import React from "react";
import CommonTable from "../common/CommonTable";

const VehicleTable = () => {
  return (
    <>
      <div className="navbarTop">
        <h3 className="navbarTopHeading">Vehicles</h3>
        <nav className="navbarContainer">
          <span>Vehicle Application</span>
          <span>Vehicles</span>
          <span>Brand</span>
        </nav>
        <h4 style={{ marginBottom: "2.18rem" }}> Vehicles Applications</h4>
      </div>
      <CommonTable />
    </>
  );
};

export default VehicleTable;
