import React, { useState } from "react";
import axios from "../../../api/instance";

const AddGallery = () => {
  const [galleryImageFile, setImageSelected] = useState("");

  // !Add Gallery
  const handleAddGallery = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", galleryImageFile.name);
    formData.append("galleryImageFile", galleryImageFile);
    axios
      .post(`/gallery/add`, formData)
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="addform">
        <div className="addFormWidth">
          <div className="addformInner">
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
                  type="file"
                  placeholder="No file selected"
                  className="inputModalStyles"
                  onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                  }}
                />
              </div>
              <article style={{ marginBottom: "3rem" }}>
                <p>1. File should be in PNG, JPG, JPEG, BMP</p>
                <p>2. The size of the image should be exceeds the 2MP </p>
                <p>3. The Minimum Size of the image should be 4200 x 3486 px</p>
              </article>
            </div>
          </main>

          <div className="d-flex justify-content-between align-items-center inputModalStylesBtn">
            <div>
              <button className="SaveNextBtn" onClick={handleAddGallery}>
                Submit
              </button>
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

export default AddGallery;
