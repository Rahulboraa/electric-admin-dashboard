import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbarContainer">
      <NavLink
        to="/vehicleapplication"
        className="navlinkUnactive"
        activeClassName="navbaractive"
      >
        <span>Vehicle Application</span>
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
  );
};

export default Navigation;
