import React from "react";
import dummy from "../../../assets/recentPublicaton/dummy.svg";

const EditRecentPublication = () => {
  return (
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
          <h2>Edit Publication</h2>
        </div>
        <div>
          <h4>X</h4>
        </div>
      </div>
      <hr />
      <main>
        <div>
          <label className="modalFormLabels">01. Feature Image</label>
          <div>
            <figure>
              <img
                src={dummy}
                alt="dummy"
                style={{
                  width: "400px",
                  height: "300px",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />
            </figure>
            <button
              style={{
                marginBottom: "20px",
              }}
            >
              Change Feature Image
            </button>
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
          <button className="SaveNextBtn">Submit</button>
        </div>
        <div>
          <button className="clearBtn">Clear All</button>
        </div>
      </div>
    </form>
  );
};

export default EditRecentPublication;
