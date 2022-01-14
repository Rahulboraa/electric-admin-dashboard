import React from "react";
import { useHistory } from "react-router";
import CommonTable from "../common/CommonTable";
import Sidebar from "../common/sidebar";
const Vehicle = ({}) => {
  const history = useHistory();

  const handleBrand = (params) => {
    history.push("./brands");
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
            <span>Vehicle </span>
            <span>Vehicles</span>
            <span onClick={handleBrand}>Brand</span>
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
          <CommonTable />
        </div>
      </div>
    </>
  );
};

export default Vehicle;
