import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../../common/sidebar";
import GalleryNavigation from "../Gallery/Navigation/GalleryNavigation";

function Careers() {
  const [toggle, setToggle] = useState(true);
  return (
    <section>
      <div className="d-flex">
        <Sidebar />
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Websites</h3>
          <nav className="navbarContainer">
            <GalleryNavigation />
          </nav>

          <div className="subHeadingButton">
            <div>
              <h4>Careers</h4>
            </div>
            <div>
              <button className="mainAddBtn">New Opening</button>
            </div>
          </div>
          <div className="TableInfo">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <td colSpan={5}>
                    <th
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                      }}
                    >
                      <th
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        {/* <NavLink
                          to="/careers"
                          className="navlinkUnactive"
                          activeClassName="navbaractive"
                        > */}
                        <input
                          type="radio"
                          id="activated"
                          name="select"
                          value="activated"
                          checked
                          onClick={() => {
                            setToggle(false);
                          }}
                        />
                        <label for="activated">Activated</label>
                        {/* </NavLink> */}
                      </th>
                      <th
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        {/* <NavLink
                          to="/careers"
                          className="navlinkUnactive"
                          activeClassName="navbaractive"
                        > */}
                        <input
                          type="radio"
                          id="deactivated"
                          name="select"
                          value="deactivated"
                          onClick={() => {
                            setToggle(true);
                          }}
                        />
                        <label for="deactivated">Deactivated</label>
                        {/* </NavLink> */}
                      </th>
                    </th>
                  </td>
                  <td>
                    <a href="/" style={{ color: "black", cursor: "pointer" }}>
                      View All Resumes
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Active From</th>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Application Received</th>
                  <th>Action</th>
                </tr>
              </thead>

              {toggle ? (
                <tbody>
                  <tr>
                    <td>1 Dec, 2021</td>
                    <td>Dianne Russell</td>
                    <td>Management</td>
                    <td>Gurugram</td>
                    <td>345</td>

                    <td>{/* <Kebab /> */}</td>
                  </tr>
                  <tr>
                    <td>1 Dec, 2021</td>
                    <td>Dianne Russell</td>
                    <td>Management</td>
                    <td>Watch and pray that you might not enter...</td>
                    <td>345</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1 Dec, 2021</td>

                    <td>Dianne Russell</td>
                    <td>Management</td>
                    <td>Watch and pray that you might not enter...</td>

                    <td>345</td>
                    <td></td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>k</td>
                    <td>Dianne Russell</td>
                    <td>Management</td>
                    <td>Gurugram</td>
                    <td>345</td>

                    <td>{/* <Kebab /> */}</td>
                  </tr>
                  <tr>
                    <td>1 Dec, 2021</td>
                    <td>Dianne Russell</td>
                    <td>Management</td>
                    <td>Watch and pray that you might not enter...</td>
                    <td>345</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1 Dec, 2021</td>

                    <td>Dianne Russell</td>
                    <td>Management</td>
                    <td>Watch and pray that you might not enter...</td>

                    <td>345</td>
                    <td></td>
                  </tr>
                </tbody>
              )}
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
