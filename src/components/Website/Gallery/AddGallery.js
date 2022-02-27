import React, { useState, useEffect } from "react";
import axios from "../../../api/instance";
import { useHistory } from "react-router-dom";

const AddGallery = () => {
  // !Preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  // !Add Gallery
  const handleAddGallery = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("text", "gallery");
    axios
      .post(`/gallery/add`, formData)
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let history = useHistory();

  return (
    <>
      <form className="addform">
        <div className="addFormWidth">
          <div className="addformInner" style={{ marginTop: "3rem" }}>
            <div>
              <h2>Add Image</h2>
            </div>
            <div>
              <h4 onClick={() => history.goBack()}>X</h4>
            </div>
          </div>
          <hr />

          <main>
            <div style={{ marginTop: "2rem" }}>
              <label className="modalFormLabels">01. Feature Image</label>

              <div className="d-flex justify-content-center align-content-center  m-auto mb-3">
                {selectedFile && (
                  <img
                    src={preview}
                    style={{
                      width: "320px",
                      height: "160px",
                      marginTop: "1.4rem",
                    }}
                  />
                )}
              </div>

              <div
                style={{ marginTop: "3rem", marginBottom: "1rem" }}
                className="form-group mb-5"
              >
                <div className="form-group mb-5">
                  <input
                    type="file"
                    onChange={onSelectFile}
                    placeholder="No file selected"
                    className="form-control form-control-md"
                    id="formFileSm"
                  />
                </div>
              </div>

              <article style={{ marginBottom: "4rem", marginTop: "3rem" }}>
                <p style={{ marginBottom: "1rem" }}>
                  1. File should be in PNG, JPG, JPEG, BMP
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  2. The size of the image should be exceeds the 2MP
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  3. The Minimum Size of the image should be 4200 x 3486 px
                </p>
              </article>
            </div>
          </main>

          <div
            className="d-flex justify-content-between align-items-center inputModalStylesBtn"
            style={{ marginBottom: "8rem" }}
          >
            <div>
              <button
                className="SaveNextBtn"
                onClick={handleAddGallery}
                type="submit"
              >
                Submit
              </button>
            </div>
            <div>
              <button className="clearBtn" type="reset">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddGallery;
