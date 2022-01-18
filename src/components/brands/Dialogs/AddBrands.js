import React from "react";

const AddBrands = () => {
  return (
    <>
      <form className="addform">
        <div className="addformInner">
          <div>
            <h2>Add Brand</h2>
          </div>
          <div>
            <h4>X</h4>
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
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">02. Brand Logo</label>
            <div>
              <input
                type="text"
                placeholder="No file selected"
                className="inputModalStyles"
              />
            </div>
          </div>
        </main>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "600px", marginBottom: "2rem" }}
        >
          <div>
            <button className="SaveNextBtn">Submit</button>
          </div>
          <div>
            <button className="clearBtn">Clear All</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBrands;
