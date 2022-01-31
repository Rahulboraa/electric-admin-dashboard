import React, { useState } from "react";
import axios from "../../../api/instance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddTestimonial = () => {
  const [data, setData] = useState({
    text: "",
    author: "",
    videoUrl: "",
    companyName: "",
  });

  const { text, author, videoUrl, companyName } = data;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    axios
      .post(`/review/add`, data)
      .then((result) => {
        toast.success("Testimonial Added");
        setData({});
        history.goBack();
      })
      .catch((err) => {
        toast.error("Please Fill the form");
        console.log(err);
      });
  };

  // !Clear User Input
  const handleClearAll = () => {
    setData({});
  };

  let history = useHistory();

  return (
    <>
      <form className="addform" onSubmit={handleAddTestimonial}>
        <div className="addFormWidth">
          <div className="addformInner">
            <h2>Add Testimonial</h2>
            <h4 onClick={() => history.goBack()}>X</h4>
          </div>

          <hr />

          <main className="inputGaping">
            <div>
              <label className="modalFormLabels">01. Dealer Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Dealer Name"
                  className="inputModalStyles"
                  name="text"
                  value={text}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="modalFormLabels">02. Dealer’s Image</label>
              <div>
                <input
                  type="text"
                  placeholder="No file selected"
                  className="inputModalStyles"
                  name="author"
                  value={author}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="modalFormLabels">03. Dealership Type</label>
              <div>
                <input
                  type="text"
                  placeholder="Select the Dealership Type"
                  className="inputModalStyles"
                  name="videoUrl"
                  value={videoUrl}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="modalFormLabels">04. Review</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Full Review"
                  className="inputModalStyles"
                  name="companyName"
                  value={companyName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </main>

          <div className="d-flex justify-content-between align-items-center inputModalStylesBtn">
            <div>
              <button className="SaveNextBtn" type="submit">
                Submit
              </button>
            </div>

            <div>
              <button
                className="clearBtn"
                onClick={handleClearAll}
                type="reset"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTestimonial;
