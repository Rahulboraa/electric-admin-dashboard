import React, { useState } from "react";
import logo from "../../assets/Admin/logo.svg";
import User from "../../assets/Admin/user.svg";
import booking from "../../assets/Admin/booking.svg";
import testRide from "../../assets/Admin/testride.svg";
// import becomeDealer from "../Img&Svg/Admin/becomeDealer.svg";
import Support from "../../assets/Admin/support.svg";
import store from "../../assets/Admin/store.svg";
import teams from "../../assets/Admin/teams.svg";
import logout from "../../assets/Admin/logout.svg";
import dealers from "../../assets/Admin/dealers.svg";
import vehicle from "../../assets/Admin/vehicle.svg";
import website from "../../assets/Admin/website.svg";
import merchendice from "../../assets/Admin/merchendice.svg";
import { useHistory, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigation } from "react-minimal-side-navigation";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const loginDetails = useSelector((state) => state.login.user);

  const { firstName } = loginDetails;
  console.log(firstName);

  // !Home Redirect
  const history = useHistory();
  const homeRedirect = () => {
    history.push("/home");
  };

  const location = useLocation();

  // !logout User
  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("loginUser");
    history.push("./");
  };

  const togglebutton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* <div
        onClick={() => togglebutton}
        className={`sidebarHide ${isSidebarOpen ? "block" : "hidden"}`}
      /> */}

      {/* Sidebar */}
      <div
        className={`sidebarHideDiv ${
          isSidebarOpen ? "Sidebarhideopena" : "Sidebarhideopenb"
        }`}
      >
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

          <div>
            <button
              className="btn-menu"
              onClick={() => togglebutton}
              type="button"
            >
              //////\/\\\\\\\\
            </button>
          </div>

          <hr className="horizontalRule" />
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Dashboard",
              itemId: "/home",
              // Optional
              elemBefore: () => <img src={User} alt="User" />,
            },
            {
              title: "Vehicles",
              itemId: "/vehicle",
              // Optional
              elemBefore: () => <img src={vehicle} alt="booking" />,
            },
            {
              title: "Store",
              itemId: "/store",
              // Optional
              elemBefore: () => <img src={store} alt="booking" />,
            },
            {
              title: "Dealers",
              itemId: "/delarapplication",
              // Optional
              elemBefore: () => <img src={dealers} alt="dealers" />,
            },
            {
              title: "Booking",
              itemId: "/upcommingbookings",
              // Optional
              elemBefore: () => <img src={booking} alt="Support" />,
            },
            {
              title: "Merchandise",
              itemId: "/merchandise",
              // Optional
              elemBefore: () => <img src={merchendice} alt="merchendice" />,
            },
            {
              title: "Teams",
              itemId: "/teammember",
              // Optional
              elemBefore: () => <img src={teams} alt="teams" />,
            },
            {
              title: "Website",
              itemId: "/recentpublications",
              // Optional
              elemBefore: () => <img src={website} alt="website" />,
            },
            {
              title: "Logout",
              itemId: "/home",
              // Optional
              elemBefore: () => (
                <>
                  <img src={logout} alt="logout" />
                </>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default Sidebar;
