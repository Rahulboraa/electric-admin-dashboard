import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";
import { toast } from "react-toastify";

const DealerApplications = () => {
  
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

  const history = useHistory();
  return (
    <>
      <div>
        <div className="d-flex">
          <Sidebar />
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Dealer</h3>
            <nav className="navbarContainer">
              <NavLink
                to="/delarapplication"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Dealership Applications</span>
              </NavLink>
              <NavLink
                to="/dealarform"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Dealers</span>
              </NavLink>
            </nav>
            <h4 style={{ marginBottom: "2.18rem" }}>Dealership Applications</h4>
            <div className="TableInfo">
              <Table bordered responsive borderless>
                <thead>
                  <tr>
                    {/* <th>SNO</th> */}
                    <th>Application No.</th>
                    <th>Dealer Name</th>
                    <th>Mobile No.</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    const { dealerId, userName, phoneNumber, emailId } = item;
                    return (
                      <>
                        <tr>
                          {/* <td>{index + 1}</td> */}
                          <td>{dealerId}</td>
                          <td>{userName}</td>
                          <td>{phoneNumber}</td>
                          <td>{emailId}</td>
                          {/* <td
                            onClick={() => {
                              history.push(`./editDealer/${dealerId}`);
                            }}
                          >
                            Edit
                          </td> */}
                          <td
                            onClick={() => {
                              handleDeleteDealer(dealerId);
                            }}
                          >
                            Delete
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerApplications;
