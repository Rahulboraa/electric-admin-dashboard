import React from "react";

const AddTeamMember = () => {
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
            <h2>Add Team Member</h2>
          </div>
          <div>
            <h4>X</h4>
          </div>
        </div>
        <hr />
        <main>
          <div>
            <label className="modalFormLabels">01. Profile Picture</label>
            <div>
              <input
                type="text"
                placeholder="No file selected"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">02. Name</label>
            <div>
              <input
                type="text"
                placeholder="Enter the Name"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">03. Designation</label>
            <div>
              <input
                type="text"
                placeholder="Enter the Designation"
                className="inputModalStyles"
              />
            </div>
          </div>

          <div>
            <label className="modalFormLabels" htmlFor="04.  Email">
              04. Email
            </label>
            <div>
              <input
                type="text"
                placeholder="Enter the Email Address"
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

export default AddTeamMember;
