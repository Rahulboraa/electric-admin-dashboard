import React from "react";

const AddDealer = () => {
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
            <h2>Add Dealer</h2>
          </div>
          <div>
            <h4>X</h4>
          </div>
        </div>
        <hr />
        <main>
          <div>
            <label className="modalFormLabels">
              1. Name of the main applicant *
            </label>
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">2. Age of applicant *</label>
            <div>
              <input
                type="text"
                placeholder="Enter Age"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">3. Qualification *</label>
            <div>
              <input
                type="text"
                placeholder="Enter Education Details"
                className="inputModalStyles"
              />
            </div>
          </div>
          <div>
            <label className="modalFormLabels">4. Contact Number *</label>
            <div>
              <input
                type="text"
                placeholder="+91 "
                className="inputModalStyles"
              />
            </div>
          </div>

          <div>
            <label className="modalFormLabels">5. E-mail ID *</label>
            <div>
              <input
                type="text"
                placeholder="Email ID"
                className="inputModalStyles"
              />
            </div>
          </div>

          <div>
            <label className="modalFormLabels">
              6. Enter your preferred city for dealership *
            </label>
            <div>
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
          </div>

          <div>
            <label className="modalFormLabels">
              7. Are you currently involved in any other businesses?
            </label>
            <div>
              <input type="checkbox" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="no">No</label>
            </div>

            <div>
              <label className="modalFormLabels">
                8. Do you have any prior experience in automotive or retail
                sector?
              </label>
              <div>
                <input type="checkbox" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input type="checkbox" />
                <label htmlFor="no">No</label>
              </div>
            </div>

            <div>
              <label className="modalFormLabels">9. Interest </label>
              <div>
                <input
                  type="text"
                  placeholder="Choose an option"
                  className="inputModalStyles"
                />
              </div>
            </div>

            <div>
              <label className="modalFormLabels">10. Investment Budget</label>
              <div>
                <input
                  type="text"
                  placeholder="Choose an option"
                  className="inputModalStyles"
                />
              </div>

              <div>
                <label className="modalFormLabels">11. Property/Showroom</label>
                <div>
                  <input
                    type="text"
                    placeholder="Choose an option"
                    className="inputModalStyles"
                  />
                </div>
              </div>

              <div>
                <label className="modalFormLabels">12. Showroom Area</label>
                <div>
                  <input
                    type="text"
                    placeholder="Choose an option"
                    className="inputModalStyles"
                  />
                </div>
              </div>
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

export default AddDealer;
