import React from "react";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";

const TeamMember = () => {
  return (
    <>
      <section>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Teams</h3>

            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginBottom: "2.18rem" }}
            >
              <div>
                <h4>Team Member</h4>
              </div>
              <div>
                <button>Add Team Member</button>
              </div>
            </div>
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Booking No.</th>
                  <th>Vehicle Name</th>
                  <th>Dealer Name</th>
                  <th>Dealer Name</th>
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
      </section>
    </>
  );
};

export default TeamMember;
