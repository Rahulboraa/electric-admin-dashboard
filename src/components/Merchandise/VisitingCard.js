import React, { useState } from "react";
import Sidebar from "../common/sidebar";
import upload from "./../../assets/vehicles/upload.svg";
import visiting from "../../assets/Merchandise/visiting.svg";
import axios from "../../api/instance";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const VisitingCard = () => {
  const [logo, setImageSelected] = useState({});
  const [data, setData] = useState({
    number: "",
    address: "",
    emailId: "",
  });

  const { number, address, emailId } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFormUpload = () => {
    let formData = new FormData();
    formData.append("logo", logo);
    formData.append("number", data.number);
    formData.append("address", data.address);
    formData.append("emailId", data.emailId);

    axios
      .post("/visingCard/add", formData)
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section>
        <div className="d-flex">
          <Sidebar />

          <div className="navbarTop">
            <h3 className="navbarTopHeading">Merchandise</h3>
            <Navigation />

            <div className="d-flex align-items-center" style={{ gap: "2rem" }}>
              <form>
                <h4 style={{ marginBottom: "2.18rem" }}>Visiting Card</h4>
                <figure>
                  <h6>Logo</h6>
                  <input
                    type="file"
                    onChange={(e) => {
                      setImageSelected(e.target.files[0]);
                    }}
                  />
                  {/* <img
                    src={upload}
                    alt="imageUpload"
                    className="imageUpload"
                    onChange={(e) => {
                      setImageSelected(e.target.files[0]);
                    }}
                  /> */}
                </figure>

                <div style={{ marginTop: "20px" }}>
                  <label htmlFor="Email">Contact Number</label>
                  <div>
                    <input
                      type="number"
                      placeholder="1800 890 6635 "
                      className="formInputStyle"
                      onChange={handleChange}
                      name="number"
                      value={number}
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
                      onChange={handleChange}
                      name="emailId"
                      value={emailId}
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
                      onChange={handleChange}
                      name="address"
                      value={address}
                    />
                  </div>
                </div>
              </form>

              {/* <aside style={{ backgroundColor: "#F5F4F5" }}>
                <figure>
                  <img
                    src={visiting}
                    alt="visiting"
                    style={{ padding: "83px 163px" }}
                  />
                </figure>
              </aside> */}
            </div>

            <div className="d-flex" style={{ gap: "20px", marginTop: "63px" }}>
              <button
                className="SaveNextBtn"
                type="submit"
                onClick={handleFormUpload}
              >
                Save Changes
              </button>
              <button className="cancelBtn">Cancel</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisitingCard;
