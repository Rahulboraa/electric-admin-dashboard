import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../api/instance";

const AddBrands = () => {
  const [brandName, setBrandName] = useState("");
  const [logo, setImageSelected] = useState("");

  const handleBrandChagne = (e) => {
    setBrandName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("brandName", brandName);
    axios
      .post("/brand/add", formData)
      .then((result) => {
        console.log(result.data.data);
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
      <form className="addform" onSubmit={handleFormSubmit}>
        <div className="addformInner">
          <div>
            <h2>Add Brand</h2>
          </div>
          <div>
            <h4 onClick={() => history.goBack()}>X</h4>
          </div>
        </div>
        <hr />
        <main>
          <div>
            <label className="modalFormLabels">01. Brand Name </label>
            <div>
              <input
                type="text"
                placeholder="Enter the Brand Name"
                className="inputModalStyles"
                onChange={handleBrandChagne}
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">02. Brand Logo</label>
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
        </main>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "600px", marginBottom: "2rem" }}
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
      </form>
    </>
  );
};

export default AddBrands;
