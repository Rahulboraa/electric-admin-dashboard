import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";
import moment from "moment";

const RefundBooking = () => {
  // !fetch Refund
  const [data, setData] = useState([]);
  const fetchRefund = () => {
    axios
      .get(`payment/getPaymentsByStatus?status=refundRequest`)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchRefund();
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
            <h4 style={{ marginBottom: "2.18rem" }}>Refund Booking</h4>
            <div className="TableInfo">
              <Table bordered responsive borderless>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>User Id</th>
                    <th>Vehicle Name</th>
                    <th>Dealer Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map(({ createdAt, userId }) => {
                    return (
                      <tr>
                        <td>{moment(createdAt).format("YYYY-MM-DD")}</td>
                        <td>{userId}</td>
                        <td>-</td>
                        <td>-</td>
                        <td>View Details</td>
                      </tr>
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

export default RefundBooking;
