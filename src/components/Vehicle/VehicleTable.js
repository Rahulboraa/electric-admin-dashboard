import React from "react";
import { NavLink } from "react-router-dom";
import CommonTable from "../common/CommonTable";
import Sidebar from "../common/sidebar";

const VehicleTable = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
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
          <CommonTable />
        </div>
      </div>
    </>
  );
};

export default VehicleTable;
