import React, { useState } from "react";
import axios from "../../api/instance";

const AddTeamMember = () => {
  //!Getting User Token
  const getToken = localStorage.getItem("token");
  const parsedLogin = JSON.parse(localStorage.getItem("loginUser"));

  const [profilePic, setImageSelected] = useState("");

  const [data, setData] = useState({
    name: "",
    emailId: "",
    designation: "",
  });

  const { name, emailId, designation } = data;

  const handleAddTeamChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    console.log("userData", data);
  };

  // ! Add Team Member
  const handleAddTeamMember = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("emailId", emailId);
    formData.append("designation", designation);
    formData.append("profilePic", profilePic);
    axios
      .post(`/Team/add`, formData, {
        headers: {
          "x-access-token": getToken ? getToken : parsedLogin,
        },
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleAddTeamMember} className="addform">
        <div className="addFormWidth">
          <div className="addformInner">
            <div>
              <h2>Add Team Member</h2>
            </div>
            <div>
              <h4>X</h4>
            </div>
          </div>
          <hr />
          <main>
            <div>
              <label className="modalFormLabels">01. Profile Picture</label>
              <div>
                <input
                  type="file"
                  placeholder="No file selected"
                  className="inputModalStyles"
                  onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            <div>
              <label className="modalFormLabels">02. Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Name"
                  className="inputModalStyles"
                  name="name"
                  value={name}
                  onChange={handleAddTeamChange}
                />
              </div>
            </div>
            <div>
              <label className="modalFormLabels">03. Designation</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Designation"
                  className="inputModalStyles"
                  name="designation"
                  value={designation}
                  onChange={handleAddTeamChange}
                />
              </div>
            </div>

            <div>
              <label className="modalFormLabels" htmlFor="04.Email">
                04. Email
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Email Address"
                  className="inputModalStyles"
                  name="emailId"
                  value={emailId}
                  onChange={handleAddTeamChange}
                />
              </div>
            </div>
          </main>
          <div className="d-flex justify-content-between align-items-center inputModalStylesBtn">
            <div>
              <button className="SaveNextBtn">Submit</button>
            </div>
            <div>
              <button className="clearBtn">Clear All</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTeamMember;
