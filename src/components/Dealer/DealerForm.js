import React from "react";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";

const DealarForm = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Dealer</h3>
          <nav className="navbarContainer">
            <span>Dealer Applications</span>
            <span>Dealers</span>
          </nav>
          <div
            style={{
              marginBottom: "2.18rem",
            }}
            className="d-flex justify-content-between"
          >
            <h4> Stores</h4>
            <button> Add Store</button>
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
