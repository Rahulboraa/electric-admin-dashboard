import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";
import moment from "moment";
import { toast } from "react-toastify";

const DealarForm = () => {
  // !Fetch Dealers
  const [data, setData] = useState([]);
  const fetchUpcomingBookings = () => {
    axios
      .get(`/dealerForm`)
      .then((result) => {
        setData(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUpcomingBookings();
  }, []);

  const history = useHistory();

  // !Delete Upcoming Dealer
  const handleDeleteDealer = (id) => {
    axios
      .delete(`dealerForm/deleteDealer/${id}`)
      .then((result) => {
        fetchUpcomingBookings();
        toast.success("Dealer Deleted Successfully");
      })
      .catch((err) => {
        toast.error("Error Occurred");
      });
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Dealer</h3>
          <nav className="navbarContainer">
            <NavLink
              to="/delarapplication"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Dealer Applications</span>
            </NavLink>
            <NavLink
              to="/dealarform"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Dealers</span>
            </NavLink>
          </nav>
          <div className="subHeadingButton">
            <h4> Dealers</h4>
          </div>
          <div className="TableInfo">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Application No.</th>
                  <th>Dealer Name</th>
                  <th>Mobile No.</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  const {
                    dealerId,
                    userName,
                    phoneNumber,
                    emailId,
                    verified,
                    date,
                  } = item;
                  return (
                    <>
                      {verified && (
                        <tr>
                          <td>{moment(date).format("YYYY-MM-DD")}</td>
                          <td>{dealerId}</td>
                          <td>{userName}</td>
                          <td>{phoneNumber}</td>
                          <td>{emailId}</td>
                          <td
                            onClick={() => {
                              handleDeleteDealer(dealerId);
                            }}
                          >
                            <button className="tableEditBtn">Delete</button>
                          </td>
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
    </>
  );
};

export default DealarForm;
