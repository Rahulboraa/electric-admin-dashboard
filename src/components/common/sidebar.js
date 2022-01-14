import React from "react";
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
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();

  const handlehome = () => {
    history.push("./home");
  };

  const handleVehicle = () => {
    history.push("./vehicle");
  };

  const handleTestRide = () => {
    history.push("./testride");
  };

  const handleSupport = () => {
    history.push("./helpsupport");
  };

  const handleStore = () => {
    history.push("./store");
  };

  const handleDealer = () => {
    history.push("./dealarform");
  };

  const handleBooking = () => {
    history.push("./upcommingbookings");
  };

  const handleTeams = () => {
    history.push("./teammember");
  };

  // !logout User
  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("loginUser");
    history.push("./login");
  };

  const homeRedirect = () => {
    history.push("/home");
  };

  return (
    <>
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

        <aside>
          <div className="Sidebar__container mainHeading">
            <img src={User} alt="User" />
            <div>
              <p onClick={handlehome}>Dashboard</p>
            </div>
          </div>

          <div className="Sidebar__container">
            <img src={vehicle} alt="booking" />
            <p onClick={handleVehicle}>Vehicles</p>
          </div>

          <div className="Sidebar__container">
            <img src={store} alt="booking" />
            <p onClick={handleStore}>Store</p>
          </div>

          <div className="Sidebar__container">
            <img src={dealers} alt="dealers" />
            <p onClick={handleDealer}>Dealers</p>
          </div>
        </aside>

        <hr className="horizontalRule" />
        <section>
          <div className="Sidebar__container mainHeading">
            <img src={booking} alt="Support" />
            <p onClick={handleBooking}>Booking</p>
          </div>

          <div className="Sidebar__container">
            <img src={merchendice} alt="logout" />
            <p onClick={handleLogOut}>Merchandise</p>
          </div>
          <div className="Sidebar__container">
            <img src={teams} alt="logout" />
            <p onClick={handleTeams}>Teams</p>
          </div>
          <div className="Sidebar__container">
            <img src={website} alt="logout" />
            <p onClick={handleLogOut}>Website</p>
          </div>
          <div className="Sidebar__container">
            <img src={logout} alt="logout" />
            <p onClick={handleLogOut}>Logout</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
