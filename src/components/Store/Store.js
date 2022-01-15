import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";

const Store = () => {
  const history = useHistory();

  const handleAddStore = () => {
    history.push("./addstore");
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
            <NavLink
              to="/storeapplication"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span> New Store Applications</span>
            </NavLink>
            <NavLink
              to="/store"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Stores</span>
            </NavLink>
          </nav>
          <div
            style={{
              marginBottom: "2.18rem",
            }}
            className="d-flex justify-content-between"
          >
            <h4> Stores</h4>
            <button className="mainAddBtn" onClick={handleAddStore}>
              Add Store
            </button>
          </div>
          <Table bordered responsive borderless style={{ width: "860px" }}>
            <thead>
              <tr>
                <th>Store ID</th>
                <th>Store Type</th>
                <th>Location</th>
                <th>Dealer</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>555-0112</td>
                <td>Hero Electic</td>
                <td>LO:EV</td>
                <td>Barone LLC.</td>

                <td>View Application</td>
              </tr>
              <tr>
                <td>555-0112</td>
                <td>Hero Electic</td>
                <td>LO:EV</td>
                <td>Barone LLC.</td>

                <td>View Application</td>
              </tr>
              <tr>
                <td>555-0112</td>
                <td>Hero Electic</td>
                <td>LO:EV</td>
                <td>Barone LLC.</td>
                <td>View Application</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Store;
