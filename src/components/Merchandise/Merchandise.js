import axios from "../../api/instance";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Sidebar from "../common/sidebar";
import upload from "./../../assets/vehicles/upload.svg";

const Merchandise = () => {
  const [uploadfile, setUploadfile] = useState({});
  const [data, setData] = useState({
    number: "",
    address: "",
    emailId: "",
  });

  const [see, setsee] = useState("");
  const handleUpload = async () => {
    let formData = new FormData();
    formData.append("logo", uploadfile);
    formData.append("emailId", data.emailId);
    formData.append("number", data.number);
    formData.append("address", data.address);

    let config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-access-token": JSON.parse(localStorage.getItem("loginUser")),
      },
    };

    let result = await axios.post("/LetterHead/add", formData, config);
    setsee(result.data.data?.logo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
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

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "100%" }}>
                <section>
                  <main>
                    <h4 style={{ marginBottom: "2.18rem" }}> Letterhead</h4>
                    <figure>
                      <h6>Logo</h6>
                      <div class="image-upload">
                        <label for="file-input">
                          <img src={upload} />
                        </label>

                        <input
                          id="file-input"
                          style={{ display: "none" }}
                          type="file"
                          onChange={(e) => setUploadfile(e.target.files[0])}
                        />
                      </div>
                    </figure>
                  </main>

                  <div style={{ marginTop: "20px" }}>
                    <label htmlFor="Email">Contact Number</label>
                    <div style={{ width: "50%" }}>
                      <input
                        type="text"
                        placeholder="1800 890 6635 "
                        className="formInputStyle"
                        name="number"
                        value={data.number}
                        onChange={(e) => handleChange(e)}
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
                        name="emailId"
                        value={data.emailid}
                        onChange={(e) => handleChange(e)}
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
                        name="address"
                        value={data.address}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div style={{ width: "400px" }}>
                <aside style={{ textAlign: "center" }}>
                  <figure>
                    {see ? (
                      <a href={see}>
                        <img src={see} alt="merchandise" />
                      </a>
                    ) : (
                      <img src={upload} alt="merchandise" />
                    )}
                  </figure>
                </aside>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "20px", marginTop: "63px" }}>
              <button className="SaveNextBtn" onClick={() => handleUpload()}>
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

export default Merchandise;
