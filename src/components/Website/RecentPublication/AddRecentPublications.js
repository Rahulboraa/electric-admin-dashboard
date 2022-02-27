import React, { useState, useEffect } from "react";
import axios from "../../../api/instance";
import { useHistory } from "react-router-dom";
import moment from "moment";

const AddRecentPublications = () => {
  const [data, setData] = useState({
    title: "",
    descripiton: "",
  });

  const { title, text, descripiton } = data;

  const [recentPDF, setRecentPDF] = useState();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
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

  // !Preview Publication Documents
  const [selectedFile2, setSelectedFile2] = useState();
  const [preview2, setPreview2] = useState();

  useEffect(() => {
    if (!selectedFile2) {
      setPreview2(undefined);
      return;
    }

    const objectUrl2 = URL.createObjectURL(selectedFile2);
    setPreview2(objectUrl2);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl2);
  }, [selectedFile2]);

  const onSelectFile2 = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile2(undefined);
      return;
    }
    setSelectedFile2(e.target.files[0]);
  };

  let date = new Date();
  let DateFormat = moment(date).format("MMMM Do, YYYY");

  // !Add Recent Publication
  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recent", selectedFile);
    formData.append("date", DateFormat);
    formData.append("recentPDF", selectedFile2);
    formData.append("title", title);
    formData.append("descripiton", descripiton);
    axios
      .post(`/recentPub/add`, formData)
      .then((result) => {
        history.goBack();
        setData({});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let history = useHistory();

  return (
    <>
      <form className="addform" onSubmit={addProduct}>
        <div className="addFormWidth">
          <div className="addformInner" style={{ marginTop: "3.5rem" }}>
            <div>
              <h2>Add Publication</h2>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h4 onClick={() => history.goBack()}>X</h4>
            </div>
          </div>

          <hr />

          <main>
            <div style={{ marginTop: "1.5rem" }}>
              <label className="modalFormLabels">01. Feature Image</label>
              <div style={{ marginTop: "1.5rem" }}>
                {selectedFile && (
                  <img
                    src={preview}
                    style={{
                      width: "220px",
                      height: "120px",
                      marginBottom: "1.2rem",
                    }}
                  />
                )}
                <div className="form-group mb-4">
                  <input
                    type="file"
                    onChange={onSelectFile}
                    className="form-control form-control-md"
                    id="formFileSm"
                  />
                </div>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <label className="modalFormLabels">02. Publication Title</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Publication Title"
                  className="inputModalStyles"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <label className="modalFormLabels">03. Description</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Publication Title"
                  className="inputModalStyles"
                  name="descripiton"
                  value={descripiton}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div style={{ marginTop: "3.5rem" }}>
              <label className="modalFormLabels">
                04. Publication Document
              </label>
              <div style={{ marginTop: "1.5rem" }}>
                {selectedFile2 && (
                  // <img
                  //   src={preview2}
                  //   style={{
                  //     width: "220px",
                  //     height: "120px",
                  //     marginBottom: "1.2rem",
                  //   }}
                  // />
                  <></>
                )}
              </div>
              <div className="form-group mb-4">
                <input
                  type="file"
                  onChange={onSelectFile2}
                  className="form-control form-control-md"
                  id="formFileSm"
                />
              </div>
            </div>
            <div
              className="d-flex justify-content-between align-items-center inputModalStylesBtn"
              style={{ marginBottom: "4rem" }}
            >
              <div>
                <button className="SaveNextBtn">Submit</button>
              </div>
              <div>
                <button className="clearBtn">Clear All</button>
              </div>
            </div>
          </main>
        </div>
      </form>
    </>
  );
};

export default AddRecentPublications;
