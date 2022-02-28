import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../../api/instance";

const AddBrands = () => {
  const [brandName, setBrandName] = useState("");
  // const [logo, setImageSelected] = useState("");

  const handleBrandChange = (e) => {
    setBrandName(e.target.value);
  };

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

  // !Add Brands
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", selectedFile);
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
    // setImageSelected();
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
                  {/* <input
                    style={{ marginTop: "48px" }}
                    type="file"
                    placeholder="No file selected"
                    className="inputModalStyles"
                    onChange={(e) => {
                      setImageSelected(e.target.files[0]);
                    }}
                  /> */}

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
                  <div className="form-group mb-5">
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
