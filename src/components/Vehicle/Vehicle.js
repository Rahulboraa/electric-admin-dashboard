import React from "react";
import { useHistory } from "react-router";
import CommonTable from "../common/CommonTable";
const Vehicle = ({}) => {
  const history = useHistory();

  const handleBrand = (params) => {
    history.push("./brands");
  };

  return (
    <>
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
    </>
  );
};

export default Vehicle;
