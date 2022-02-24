import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";

const UpcomingBookings = () => {
  const [data, setData] = useState([])
  return (
    <>
      <section>
        <div className="d-flex">
          <Sidebar />
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Bookings</h3>
            <nav className="navbarContainer">
              <NavLink
                to="/upcommingbookings"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Upcoming Bookings</span>
              </NavLink>

              <NavLink
                to="/pastbooking"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Past Bookings</span>
              </NavLink>
            </nav>
            <h4 style={{ marginBottom: "2.18rem" }}>Upcoming Bookings</h4>
            <div className="TableInfo">
              <Table bordered responsive borderless>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Booking No.</th>
                    <th>Vehicle Name</th>
                    <th>Dealer Name</th>
                    <th>Dealer Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>-</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Edit</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingBookings;
