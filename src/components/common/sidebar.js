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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const loginDetails = useSelector((state) => state.login.user);

  const { firstName } = loginDetails;
  console.log(firstName);

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
  };

  React.useEffect(() => {
    // setIsSidebarOpen(true);
    toggleButton();
    console.log("Toggle Useefect");
  }, []);

  const toggleButton = (e) => {
    console.log("toggle clicked");
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {!isSidebarOpen ? (
        <div
          className={`sidebarHideDiv ${
            isSidebarOpen ? "Sidebarhideopena" : "Sidebarhideopenb"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 50 50"
            overflow="visible"
            stroke="black"
            stroke-width="10"
            stroke-linecap="round"
            id="crossToggle"
            onClick={toggleButton}
          >
            <line x2="50" y2="50" />
            <line x1="50" y2="50" />
          </svg>
          <section className="sidebar__Main">
            <div className="sidebarContainer">
              <img
                src={logo}
                alt="electric-one logo"
                className="SidebarMain_logo"
                onClick={homeRedirect}
              />

              <h4 className="Sidebar__title">
                Hello <span className="admin__name">{firstName},</span>
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
      ) : (
        <svg
          className="toggleButton"
          onClick={toggleButton}
          style={{ width: "45px", height: "45px" }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
      )}
    </>
  );
};

export default Sidebar;
