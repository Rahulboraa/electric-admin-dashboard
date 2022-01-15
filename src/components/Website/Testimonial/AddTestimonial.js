import React from "react";

const AddTestimonial = () => {
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
            <h2>Add Testimonial</h2>
          </div>
          <div>
            <h4>X</h4>
          </div>
        </div>
        <hr />
        <main>
          <div>
            <label className="modalFormLabels">01. Dealer Name</label>
            <div>
              <input
                type="text"
                placeholder="Enter the Dealer Name"
                className="inputModalStyles"
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

export default AddTestimonial;
