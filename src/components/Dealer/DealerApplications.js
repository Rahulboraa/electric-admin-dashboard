import React from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";

const DealerApplications = () => {
  const history = useHistory();
  const handleDealer = () => {
    history.push("./dealarform");
  };
  return (
    <>
      <div>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Dealer</h3>
            <nav className="navbarContainer">
              <span>Dealership Applications</span>
              <span onClick={handleDealer}>Dealers</span>
            </nav>
            <h4 style={{ marginBottom: "2.18rem" }}>Dealership Applications</h4>
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
    </>
  );
};

export default DealerApplications;
