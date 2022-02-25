import React from "react";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import Navigation from "./Navigation";

const Approvals = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <Navigation />
          <h4 style={{ marginBottom: "2.18rem" }}>Approvals Required</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="TableInfo">
              <Table bordered responsive borderless>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Edit Team</td>
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

export default Approvals;
