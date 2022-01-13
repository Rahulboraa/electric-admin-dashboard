import React from "react";
import logo from "../../assets/Admin/logo.svg";
import User from "../../assets/Admin/user.svg";
import booking from "../../assets/Admin/booking.svg";
import testRide from "../../assets/Admin/testride.svg";
// import becomeDealer from "../Img&Svg/Admin/becomeDealer.svg";
import Support from "../../assets/Admin/support.svg";
import logout from "../../assets/Admin/logout.svg";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();

  const handleProfile = () => {
    history.push("./profile");
  };

  const handleBooking = () => {
    history.push("./bookings");
  };

  const handleTestRide = () => {
    history.push("./testride");
  };

  const handleSupport = () => {
    history.push("./helpsupport");
  };

  // !logout User
  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("loginUser");
    history.push("./login");
  };

  const homeRedirect = () => {
    history.push("/");
  };

  return (
    <>
      <section className="sidebar__Main">
        <div className="sidebarContainer">
          <figure>
            <img
              src={logo}
              alt="electric-one logo"
              className="SidebarMain_logo"
              onClick={homeRedirect}
            />
          </figure>

          <h4 className="Sidebar__title">
            Hello <span className="admin__name">Anurag,</span>
          </h4>

          <hr className="horizontalRule" />
        </div>

        <aside>
          <div className="Sidebar__container mainHeading">
            <figure>
              <img src={User} alt="User" />
            </figure>
            <div>
              <p onClick={handleProfile}>Profile</p>
            </div>
          </div>

          <div className="Sidebar__container">
            <figure>
              <img src={booking} alt="booking" />
            </figure>
            <p onClick={handleBooking}>Bookings</p>
          </div>

          <div className="Sidebar__container">
            <figure>
              <img src={testRide} alt="testRide" />
            </figure>
            <p onClick={handleTestRide}>Test Rides</p>
          </div>
        </aside>

        <hr className="horizontalRule" />
        <section>
          <div className="Sidebar__container mainHeading">
            <figure>
              <img src={Support} alt="Support" />
            </figure>
            <p onClick={handleSupport}>Support</p>
          </div>

          <div className="Sidebar__container">
            <figure>
              <img src={logout} alt="logout" />
            </figure>
            <p onClick={handleLogOut}>Log Out</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
