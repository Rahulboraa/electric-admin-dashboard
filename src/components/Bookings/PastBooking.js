import React from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";

const PastBooking = () => {
  const history = useHistory();
  const handleUpcommingBooking = () => {
    history.push("./upcommingbookings");
  };
  return (
    <>
      <section>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Bookings</h3>
            <nav className="navbarContainer">
              <span onClick={handleUpcommingBooking}>Upcoming Bookings</span>
              <span>Past Bookings</span>
            </nav>
            <h4 style={{ marginBottom: "2.18rem" }}>Past Booking</h4>
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
                <tr>
                  <td>555-0112</td>
                  <td>Hero Electic</td>
                  <td>LO:EV</td>
                  <td>Barone LLC.</td>
                  <td>On Review</td>
                  <td>View Application</td>
                </tr>
                <tr>
                  <td>555-0112</td>
                  <td>Hero Electic</td>
                  <td>LO:EV</td>
                  <td>Barone LLC.</td>
                  <td>On Review</td>
                  <td>View Application</td>
                </tr>
                <tr>
                  <td>555-0112</td>
                  <td>Hero Electic</td>
                  <td>LO:EV</td>
                  <td>Barone LLC.</td>
                  <td>On Review</td>
                  <td>View Application</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastBooking;
