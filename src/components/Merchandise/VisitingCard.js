import React from "react";
import Sidebar from "../common/sidebar";
import upload from "./../../assets/vehicles/upload.svg";
import visiting from "../../assets/Merchandise/visiting.svg";
import { NavLink } from "react-router-dom";

const VisitingCard = () => {
  return (
    <>
      <section>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>

          <div className="navbarTop">
            <h3 className="navbarTopHeading">Merchandise</h3>
            <nav className="navbarContainer">
              <NavLink
                to="/merchandise"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Letterhead</span>
              </NavLink>

              <NavLink
                to="/visitingcard"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Visiting Card</span>
              </NavLink>
              <hr />
            </nav>

            <div className="d-flex align-items-center" style={{ gap: "2rem" }}>
              <section>
                <main>
                  <h4 style={{ marginBottom: "2.18rem" }}>Visiting Card</h4>
                  <figure>
                    <h6>Logo</h6>
                    <img
                      src={upload}
                      alt="imageUpload"
                      className="imageUpload"
                    />
                  </figure>
                </main>

                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="Email">Contact Number</label>
                  <div>
                    <input
                      type="text"
                      placeholder="1800 890 6635 "
                      className="formInputStyle"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="Email">Email</label>
                  <div>
                    <input
                      type="text"
                      placeholder="info@electric-one.com"
                      className="formInputStyle"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="Contact Number">Address</label>
                  <div>
                    <input
                      type="text"
                      placeholder="521-523, Tower A, Space iTech Park Sector-49, Sohna Road"
                      className="formInputStyle"
                    />
                  </div>
                </div>
              </section>

              <aside style={{ backgroundColor: "#F5F4F5" }}>
                <figure>
                  <img
                    src={visiting}
                    alt="visiting"
                    style={{ padding: "83px 163px" }}
                  />
                </figure>
              </aside>
            </div>

            <div className="d-flex" style={{ gap: "20px", marginTop: "63px" }}>
              <button className="SaveNextBtn">Save Changes</button>
              <button className="cancelBtn">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisitingCard;
