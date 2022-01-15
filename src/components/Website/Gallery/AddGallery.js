import React from "react";

const AddGallery = () => {
  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#E5E5E5",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
            alignItems: "center",
            marginTop: "62px",
          }}
        >
          <div>
            <h2>Add Image</h2>
          </div>
          <div>
            <h4>X</h4>
          </div>
        </div>
        <hr />
        <main>
          <div style={{ marginTop: "2rem" }}>
            <label className="modalFormLabels">01. Feature Image</label>
            <div>
              <input
                type="text"
                placeholder="No file selected"
                className="inputModalStyles"
              />
            </div>
            <article style={{ marginBottom: "3rem" }}>
              <p>1. File should be in PNG, JPG, JPEG, BMP</p>
              <p>2. The size of the image should be exceeds the 2MP </p>
              <p>3. The Minimum Size of the image should be 4200 x 3486 px</p>
            </article>
          </div>
        </main>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "600px", marginBottom: "2rem", marginTop: "2rem" }}
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

export default AddGallery;
