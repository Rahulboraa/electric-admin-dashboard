import React from "react";
import { useHistory } from "react-router";
import CommonTable from "../common/CommonTable";
import Sidebar from "../common/sidebar";

const Brands = () => {
  const history = useHistory();

  const handleVehicleApplication = () => {
    history.push("./vehicleapplication");
  };

  const handleBrand = () => {
    history.push("./addbrands");
  };

  const handleVehicle = () => {
    history.push("./vehicle");
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div style={{ marginLeft: "81px" }}>
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <span onClick={handleVehicleApplication}>Vehicle Application</span>
            <span onClick={handleVehicle}>Vehicles</span>
            <span>Brand</span>
          </nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2.18rem",
            }}
          >
            <h4> Brands </h4>
            <button
              style={{ marginBottom: "8px" }}
              className="mainAddBtn"
              onClick={handleBrand}
            >
              Add Brand
            </button>
          </div>
          <CommonTable />
        </div>
      </div>
    </>
  );
};

export default Brands;
