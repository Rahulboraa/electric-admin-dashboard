import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";

const UpcomingBookings = () => {
  const [booking, setData] = useState([]);
  const fetchConfirmedBooking = () => {
    axios
      .get(`/bookForm?page=1&limit=200`)
      .then((result) => {
        setData(result.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchConfirmedBooking();
  }, []);

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
                <span>Confirmed Bookings</span>
              </NavLink>

              <NavLink
                to="/refundbooking"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Refund Bookings</span>
              </NavLink>
            </nav>
            <h4 style={{ marginBottom: "2.18rem" }}>Confirmed Bookings</h4>
            <div className="TableInfo">
              <Table bordered responsive borderless>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Booking No.</th>
                    <th>Vehicle Name</th>
                    <th>Dealer Name</th>
                    <th>Customer Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {booking?.map((item, index) => {
                    const { status, bookingId, firstName, lastName } = item;
                    return (
                      <>
                        {status === "accepted" && (
                          <tr>
                            <td>{firstName}</td>
                            <td>{bookingId}</td>
                            <td>{item.product.name}</td>
                            <td>{item.dealer.name}</td>
                            <td>
                              {firstName} {lastName}{" "}
                            </td>
                            <td>{status}</td>
                          </tr>
                        )}
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
