import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../api/instance";

const AddBrands = () => {
  const [brandName, setBrandName] = useState("");
  const [logo, setImageSelected] = useState("");

  const handleBrandChange = (e) => {
    setBrandName(e.target.value);
  };

  // !Add Brands
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("brandName", brandName);
    axios
      .post("/brand/add", formData)
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
    setBrandName();
    setImageSelected();
  };

  const history = useHistory();
  return (
    <>
      <section className="addform">
        <form onSubmit={handleFormSubmit}>
          <div className="addFormWidth">
            <div className="addformInner" style={{ marginTop: "100px" }}>
              <div>
                <h2>Add Brand</h2>
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
                  style={{ marginTop: "48px" }}
                >
                  01. Brand Name
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Enter the Brand Name"
                    className="inputModalStyles"
                    onChange={handleBrandChange}
                  />
                </div>
                <div>
                  <label
                    className="modalFormLabels"
                    style={{ marginTop: "48px" }}
                  >
                    02. Brand Logo
                  </label>
                  <input
                    style={{ marginTop: "48px" }}
                    type="file"
                    placeholder="No file selected"
                    className="inputModalStyles"
                    onChange={(e) => {
                      setImageSelected(e.target.files[0]);
                    }}
                  />
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

export default AddBrands;
