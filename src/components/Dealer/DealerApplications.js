import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";

const DealerApplications = () => {
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
        </div>
      </div>
    </>
  );
};

export default DealerApplications;
