import React from "react";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import { NavLink } from "react-router-dom";

const StoreApplication = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Stores</h3>
          <nav className="navbarContainer">
            <NavLink
              to="/storeapplication"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Store Application </span>
            </NavLink>
            
            <NavLink
              to="/store"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Stores</span>
            </NavLink>
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Store Applications</h4>

          <Table bordered size="md" responsive borderless>
            <thead>
              <tr>
                <th>Date</th>
                <th>Application Number</th>
                <th>Dealer Name</th>
                <th>Location</th>
                <th>Store Type</th>
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

export default StoreApplication;
