import React, { useState } from "react";
import axios from "../../../api/instance";
import { useHistory } from "react-router-dom";

const AddRecentPublications = () => {
  const [data, setData] = useState({
    date: "",
    text: "",
    recentPDF: "",
  });

  const { date, text, recentPDF } = data;

  const [recent, setImageSelected] = useState();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recent", recent);
    formData.append("date", date);
    formData.append("text", text);
    formData.append("recentPDF", recentPDF);
    axios
      .post(`/recentPub/add`, formData)
      .then((result) => {
        console.log(result);
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
        <div className="addformInner">
          <div>
            <h2>Add Publication</h2>
          </div>

          <div>
            <h4 onClick={() => history.goBack()}>X</h4>
          </div>
        </div>

        <hr />

        <main>
          <div>
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

          <div>
            <label className="modalFormLabels">02. Publication Title</label>
            <div>
              <input
                type="text"
                placeholder="Enter the Publication Title"
                className="inputModalStyles"
              />
            </div>
          </div>

          <div>
            <label className="modalFormLabels">03. Publication Document</label>
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
            <button className="SaveNextBtn" type="submit">
              Submit
            </button>
          </div>

          <div>
            <button
              className="clearBtn"
              type="reset"
              onClick={() => {
                setData({});
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddRecentPublications;
