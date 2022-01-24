import React, { useState } from "react";
import axios from "../../../api/instance";

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
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="addform" onSubmit={handleAddTestimonial}>
        <div className="addFormWidth">
          <div className="addformInner">
            <div>
              <h2>Add Testimonial</h2>
            </div>
            <div>
              <h4>X</h4>
            </div>
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
              <button className="clearBtn">Clear All</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTestimonial;
