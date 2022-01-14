import React from "react";
import { Table } from "reactstrap";
import { useHistory } from "react-router";
import Sidebar from "../common/sidebar";

const StoreApplication = () => {
  const history = useHistory();
  const handleStore = () => {
    history.push("./store");
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Stores</h3>
          <nav className="navbarContainer">
            <span>Store Application </span>
            <span onClick={handleStore}>Stores</span>
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
