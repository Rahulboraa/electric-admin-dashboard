import React from "react";
import { NavLink } from "react-router-dom";

function NavigationUp() {
  return (
    <nav className="navbarContainer">
      <NavLink
        to="/booking"
        className="navlinkUnactive"
        activeClassName="navbaractive"
      >
        <span>Booking</span>
      </NavLink>
      <NavLink
        to="/newdealers"
        className="navlinkUnactive"
        activeClassName="navbaractive"
      >
        <span>New Dealer</span>
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

export default NavigationUp;
