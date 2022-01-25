import React from "react";
import { NavLink } from "react-router-dom";

function NavigationDown() {
  return (
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
  );
}

export default NavigationDown;
