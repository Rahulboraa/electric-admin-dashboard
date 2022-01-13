import React from "react";
import { useHistory } from "react-router";
import CommonTable from "../common/CommonTable";

const Brands = () => {
  const history = useHistory()
  const handleVehicleApplication = () => {
    console.log("hello")
     history.push("./vehicleapplication")
  }
  

  return (
    <>
      <div style={{ marginLeft: "81px" }}>
        <h3 style={{ marginBottom: "61px", marginTop: "81px" }}>Vehicles</h3>
        <nav className="navbar">
          <span style={{ marginRight: "41px" }} onClick={handleVehicleApplication}>Vehicle Application</span>
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
          <h4> Brands </h4>
          <button style={{ marginBottom: "8px" }}>Add Brand</button>
        </div>
      </div>
      <CommonTable />
    </>
  );
};

export default Brands;
