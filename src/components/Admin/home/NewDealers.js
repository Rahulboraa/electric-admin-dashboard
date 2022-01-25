import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../common/sidebar";
import rectangle from "../../../assets/Admin/rectangle.png";

function NewDealers() {
  return (
    <div className="Home__Container">
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div className="Home__Second__Container">
          <h2>Widgets</h2>
          <div className="Home__Inner__Container__1">
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
          </div>
          <div className="Home__Inner__Container__2">
            {/* <Line
        options={options}
        data={data}
        style={{ height: "400px", width: "700px" }}
      /> */}
          </div>
          <div className="Home__Inner__Container__2">
            <nav className="navbarContainer">
              <NavLink
                to="/vehiclesales"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Vehicle Sales</span>
              </NavLink>
              <NavLink
                to="/newdealers"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>New Dealers</span>
              </NavLink>
              <NavLink
                to="/newstore"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>New Store</span>
              </NavLink>
            </nav>
          </div>
          <h2>New Dealers</h2>
        </div>
      </div>
    </div>
  );
}

export default NewDealers;
