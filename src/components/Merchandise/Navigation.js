import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <h3 className="navbarTopHeading">Merchandise</h3>
      <nav className="navbarContainer">
        {/* <NavLink
          to="/approvals"
          className="navlinkUnactive"
          activeClassName="navbaractive"
        >
          <span>Approvals</span>
        </NavLink> */}

        <NavLink
          to="/merchandise"
          className="navlinkUnactive"
          activeClassName="navbaractive"
        >
          <span>Letterhead</span>
        </NavLink>

        <NavLink
          to="/visitingcard"
          className="navlinkUnactive"
          activeClassName="navbaractive"
        >
          <span>Visiting Card</span>
        </NavLink>

        <NavLink
          to="/brochure"
          className="navlinkUnactive"
          activeClassName="navbaractive"
        >
          <span>Brochure</span>
        </NavLink>

        <hr />
      </nav>
    </>
  );
};

export default Navigation;
