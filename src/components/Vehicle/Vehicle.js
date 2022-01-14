import React from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
const Vehicle = ({}) => {
  const history = useHistory();

  const handleBrand = () => {
    history.push("./brands");
  };

  const handleVehicleApplication = () => {
    history.push("./vehicleapplication");
  };

  const addVehicle = () => {
    history.push("./addvehicle");
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
            <span onClick={handleVehicleApplication}>Vehicles Application</span>
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
            <button
              style={{ marginBottom: "8px" }}
              className="mainAddBtn"
              onClick={addVehicle}
            >
              Add Vehicle
            </button>
          </div>
          <Table style={{ width: "880px" }} bordered responsive borderless>
            <thead>
              <tr>
                <th>Model Number</th>
                <th>Brand Name</th>
                <th>Vehicle Name</th>
                <th>Vehicle Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>555-0112</td>
                <td>Hero Electic</td>
                <td>LO:EV</td>
                <td>Barone LLC.</td>
                <td>On Review</td>
              </tr>
              <tr>
                <td>555-0112</td>
                <td>Hero Electic</td>
                <td>LO:EV</td>
                <td>Barone LLC.</td>
                <td>On Review</td>
              </tr>
              <tr>
                <td>555-0112</td>
                <td>Hero Electic</td>
                <td>LO:EV</td>
                <td>Barone LLC.</td>
                <td>On Review</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
