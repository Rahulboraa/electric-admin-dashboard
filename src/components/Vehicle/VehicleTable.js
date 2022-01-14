import React from "react";
import { useHistory } from "react-router";
import CommonTable from "../common/CommonTable";
import Sidebar from "../common/sidebar";

const VehicleTable = () => {
  const history = useHistory();

  const handleVehicles = () => {
    history.push("./vehicle");
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <span>Vehicle Application</span>
            <span onClick={handleVehicles}>Vehicles</span>
            <span>Brand</span>
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Vehicles Applications</h4>
          <CommonTable />
        </div>
      </div>
    </>
  );
};

export default VehicleTable;
