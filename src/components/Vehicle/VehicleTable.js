import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../common/sidebar";
import VerticalLinearStepper from "./VehicleStepperData";

const VehicleTable = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="vehicleFull">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <NavLink
              to="/vehicleapplication"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Vehicles Application</span>
            </NavLink>

            <NavLink
              to="/vehicle"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Vehicles</span>
            </NavLink>

            <NavLink
              to="/brands"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Brand</span>
            </NavLink>
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Vehicles Applications</h4>
          {/* <CommonTable /> */}
          <div>
            <button className="buttonStyle">Back</button>
            <span className="VehicleHead">LOFI</span>
            <button className="buttonStyle">Back To Application</button>
          </div>
          <tr className="TableTr">
            <td className="tableTd">
              <span className="tableHeading">Date of application</span>
              <p className="tableData">Aug 22,2021</p>
              <tr>
                <td className="tableTd">
                  <span className="tableHeading">Investment Budget</span>
                  <p className="tableData">10-15Lacs</p>
                </td>
              </tr>
            </td>
            <td className="tableTd">
              <span className="tableHeading">Application No.</span>
              <p className="tableData">ST-4213730012021</p>
              <tr>
                <td className="tableTd">
                  <span className="tableHeading">Property/Showroom</span>
                  <p className="tableData">Own Property</p>
                </td>
              </tr>
            </td>
            <td className="tableTd">
              <span className="tableHeading">Preferred City & State</span>
              <p className="tableData">Gurugram</p>
              <tr>
                <td className="tableTd">
                  <span className="tableHeading">Showroom Area</span>
                  <p className="tableData">Less than 1000 sqft</p>
                </td>
              </tr>
            </td>
            <td className="tableTd">
              <span className="tableHeading">Store Format</span>
              <p className="tableData">Flagship</p>
            </td>
          </tr>
          <hr className="hrLine" />
          <VerticalLinearStepper />
        </div>
      </div>
    </>
  );
};

export default VehicleTable;
