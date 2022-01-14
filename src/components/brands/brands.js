import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import CommonTable from "../common/CommonTable";
import Sidebar from "../common/sidebar";

const Brands = () => {
  const history = useHistory();
  const handleBrand = () => {
    history.push("./addbrands");
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
