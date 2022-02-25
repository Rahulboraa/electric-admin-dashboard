import React, { useState } from "react";
import logo from "../../assets/Admin/logo.svg";
import User from "../../assets/Admin/user.svg";
import booking from "../../assets/Admin/booking.svg";
import testRide from "../../assets/Admin/testride.svg";
import Support from "../../assets/Admin/support.svg";
import store from "../../assets/Admin/store.svg";
import teams from "../../assets/Admin/teams.svg";
import logout from "../../assets/Admin/logout.svg";
import dealers from "../../assets/Admin/dealers.svg";
import vehicle from "../../assets/Admin/vehicle.svg";
import website from "../../assets/Admin/website.svg";
import merchendice from "../../assets/Admin/merchendice.svg";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  // !Home Redirect
  const history = useHistory();

  const homeRedirect = () => {
    history.push("/home");
  };

  // !logout User
  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("loginUser");
    history.push("./");
    window.location.reload();
  };

  return (
    <>
      <div>
        <section className="sidebar__Main">
          <div className="sidebarContainer">
            <img
              src={logo}
              alt="electric-one logo"
              className="SidebarMain_logo"
              onClick={homeRedirect}
            />

            <h4 className="Sidebar__title">
              Hello <span className="admin__name">Anurag,</span>
            </h4>

            <hr className="horizontalRule" />
          </div>

          <aside className="Sidebar__container_maindiv">
            <div className="Sidebar__container mainHeading">
              <img src={User} alt="User" />
              <div>
                <NavLink
                  to="/home"
                  className="navlink"
                  activeClassName="activeLink"
                >
                  Dashboard
                </NavLink>
              </div>
            </div>

            <div className="Sidebar__container">
              <img src={vehicle} alt="booking" />
              <NavLink
                to="/vehicle"
                className="navlink"
                activeClassName="activeLink"
              >
                Vehicles
              </NavLink>
            </div>

            <div className="Sidebar__container">
              <img src={store} alt="booking" />
              <NavLink
                to="/store"
                className="navlink"
                activeClassName="activeLink"
              >
                Store
              </NavLink>
            </div>

            <div className="Sidebar__container">
              <img src={dealers} alt="dealers" />
              <NavLink
                to="/delarapplication"
                className="navlink"
                activeClassName="activeLink"
              >
                Dealers
              </NavLink>
            </div>
          </aside>

          <hr className="horizontalRule" />

          <nav>
            <div className="Sidebar__container mainHeading">
              <img src={booking} alt="Support" />
              <NavLink
                to="/upcommingbookings"
                className="navlink"
                activeClassName="activeLink"
              >
                Booking
              </NavLink>
            </div>

            <div className="Sidebar__container">
              <img src={merchendice} alt="logout" />
              <NavLink
                to="/merchandise"
                className="navlink"
                activeClassName="activeLink"
              >
                Merchandise
              </NavLink>
            </div>
            <div className="Sidebar__container">
              <img src={teams} alt="logout" />
              <NavLink
                to="/teammember"
                className="navlink"
                activeClassName="activeLink"
              >
                Teams
              </NavLink>
            </div>
            <div className="Sidebar__container">
              <img src={website} alt="logout" />
              <NavLink
                to="/recentpublications"
                className="navlink"
                activeClassName="activeLink"
              >
                Website
              </NavLink>
            </div>

            <div className="Sidebar__container">
              <img src={logout} alt="logout" />
              <p onClick={handleLogOut}>Logout</p>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
