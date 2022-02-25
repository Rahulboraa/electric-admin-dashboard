import React, { useState } from "react";
import axios from "../../../api/instance";
import { useHistory } from "react-router-dom";

const AddRecentPublications = () => {
  const [data, setData] = useState({
    text: "",
    descripiton: "",
  });

  const { text, descripiton } = data;

  const [recent, setImageSelected] = useState();
  const [recentPDF, setRecentPDF] = useState();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // !Add Recent Publication
  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recent", recent);
    // formData.append("date", date);
    formData.append("text", text);
    formData.append("recentPDF", recentPDF);
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
              <div>
                <input
                  type="text"
                  placeholder="No file selected"
                  className="inputModalStyles"
                  type="file"
                  onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <label className="modalFormLabels">02. Publication Title</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter Publication Title"
                  className="inputModalStyles"
                  name="text"
                  value={text}
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
              <div>
                <input
                  type="file"
                  placeholder="No file selected"
                  className="inputModalStyles"
                  onChange={(e) => {
                    setRecentPDF(e.target.files[0]);
                  }}
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
