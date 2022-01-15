import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";

const DealarForm = () => {
  const history = useHistory();
  const handleAddDealer = () => {
    history.push("./adddealer");
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
          <div
            style={{
              marginBottom: "2.18rem",
            }}
            className="d-flex justify-content-between"
          >
            <h4> Dealers</h4>
            <button onClick={handleAddDealer} className="mainAddBtn">
              Add Dealer
            </button>
          </div>
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
    </>
  );
};

export default DealarForm;
