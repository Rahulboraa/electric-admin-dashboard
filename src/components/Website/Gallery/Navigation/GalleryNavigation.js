import React from "react";
import { NavLink } from "react-router-dom";

const GalleryNavigation = () => {
  return (
    <>
      <NavLink
        to="/recentpublications"
        className="navlinkUnactive"
        activeClassName="navbaractive"
      >
        <span>Recent Publications</span>
      </NavLink>

      <NavLink
        to="/gallery"
        className="navlinkUnactive"
        activeClassName="navbaractive"
      >
        <span>Gallery</span>
      </NavLink>

      <NavLink
        to="/testimonials"
        className="navlinkUnactive"
        activeClassName="navbaractive"
      >
        <span>Testimonials</span>
      </NavLink>
      <hr />
    </>
  );
};

export default GalleryNavigation;
