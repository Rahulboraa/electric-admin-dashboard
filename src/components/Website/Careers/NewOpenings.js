import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../api/instance";

const NewOpenings = () => {
  const [data, setData] = useState({
    description: "",
    department: "",
    role: "",
    location: "",
    fromExpYear: "",
    toExpYear: "",
  });

  const { description, role, location, department, toExpYear, fromExpYear } =
    data;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // !Add Jobs
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/career/addJob", data)
      .then((result) => {
        console.log(result.data.data);
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // !Clearing Inputs
  const handleReset = () => {
    setData({});
  };

  const history = useHistory();
  return (
    <>
      <section className="addform">
        <form onSubmit={handleFormSubmit}>
          <div className="addFormWidth">
            <div className="addformInner" style={{ marginTop: "34px" }}>
              <div>
                <h2>Add Job Openings</h2>
              </div>
              <div>
                <h4 onClick={() => history.goBack()}>X</h4>
              </div>
            </div>
            <hr style={{ marginTop: "18px" }} />
            <main>
              <div>
                <label
                  className="modalFormLabels"
                  style={{ marginTop: "2rem" }}
                >
                  01. Job Role
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter the Job Role"
                    className="inputModalStyles"
                    name="role"
                    value={role}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    className="modalFormLabels"
                    style={{ marginTop: "2rem" }}
                  >
                    02. Department
                  </label>
                  <input
                    style={{ marginTop: "2rem" }}
                    type="text"
                    placeholder="Enter Department"
                    className="inputModalStyles"
                    name="department"
                    value={department}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    className="modalFormLabels"
                    style={{ marginTop: "3rem" }}
                  >
                    03. Location
                  </label>
                  <input
                    style={{ marginTop: "2rem" }}
                    type="text"
                    placeholder="Enter Location"
                    className="inputModalStyles"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    className="modalFormLabels"
                    style={{ marginTop: "3rem" }}
                  >
                    04. Description
                  </label>
                  <input
                    style={{ marginTop: "2rem" }}
                    type="text"
                    placeholder="Enter Location"
                    className="inputModalStyles"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex gap-5">
                  <div>
                    <label
                      className="modalFormLabels"
                      style={{ marginTop: "3rem" }}
                    >
                      05. Min Exp
                    </label>
                    <input
                      style={{ marginTop: "2rem" }}
                      type="number"
                      placeholder="Enter Min Exp"
                      className="inputModalStyles"
                      name="fromExpYear"
                      value={fromExpYear}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="modalFormLabels"
                      style={{ marginTop: "3rem" }}
                    >
                      06. Max Exp
                    </label>
                    <input
                      style={{ marginTop: "2rem" }}
                      type="number"
                      placeholder="Enter Max Exp"
                      className="inputModalStyles"
                      name="toExpYear"
                      value={toExpYear}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </main>
            <div
              className="addformInner"
              style={{ marginTop: "48px", marginBottom: "2rem" }}
            >
              <div>
                <button className="SaveNextBtn" type="submit">
                  Submit
                </button>
              </div>
              <div>
                <button className="clearBtn" type="reset" onClick={handleReset}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewOpenings;
