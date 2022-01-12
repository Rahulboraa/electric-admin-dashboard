import React, { useState } from "react";

const AddVehicle = () => {
  const [data, setData] = useState({});

  const handleVehicleChange = () => {};
  return (
    <>
      <div className="navbarTop">
        <h3 className="navbarTopHeading">Vehicles</h3>
        <nav className="navbarContainer">
          <span>Vehicle Application</span>
          <span>Vehicles</span>
          <span>Brand</span>
        </nav>
        <h4 style={{ marginBottom: "2.18rem" }}> Add Vehicle</h4>

        <h5>Basic Information</h5>
        <form>
          <section className="d-flex justify-content-between">
            <div>
              <label htmlFor="Vehicle Name">Vehicle Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Vehicle Name"
                  onChange={handleVehicleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="Brand Name">Brand Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Brand Name"
                  onChange={handleVehicleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="Vehicle Description">Vehicle Description</label>
              <div>
                <textarea
                  name="textarea"
                  rows="5"
                  cols="26"
                  style={{ resize: "none" }}
                >
                  Write something here
                </textarea>
              </div>
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="Brand Name">Brand Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Brand Name"
                  onChange={handleVehicleChange}
                />
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default AddVehicle;
