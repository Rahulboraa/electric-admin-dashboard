import React, { useState } from "react";

const AddStore = () => {
  const [data, setData] = useState({});

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
            <h2>Add Store</h2>
          </div>
          <div>
            <h4>X</h4>
          </div>
        </div>
        <hr />
        <main>
          <div>
            <label className="modalFormLabels">01. Dealer ID </label>
            <div>
              <input
                type="text"
                placeholder="20967576042"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">02. Dealer Name </label>
            <div>
              <input
                type="text"
                placeholder="Sharda Electric Vehicles"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">
              03. Enter your preferred city for dealership *
            </label>
            <div>
              <input
                type="text"
                placeholder="First Preference"
                className="inputModalStyles"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Second Preference"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">04. Investment Budget</label>
            <div>
              <input
                type="text"
                placeholder="Choose an option"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels" htmlFor="Choose an option">
              05. Property/Showroom
            </label>
            <div>
              <input
                type="text"
                placeholder="Choose an option"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels" htmlFor="06.  Showroom Area">
              06. Showroom Area
            </label>
            <div>
              <input
                type="text"
                placeholder="Choose an option"
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

export default AddStore;
