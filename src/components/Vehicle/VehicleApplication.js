import React, { useState } from "react";
import VehicleDropdown from "./VehicleDropdown";

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
              <label className="vehicleLabel" htmlFor="Vehicle Name">
                Vehicle Name
              </label>
              <div>
                <input
                  type="text"
                  className="formInputStyle"
                  placeholder="Enter the Vehicle Name"
                  onChange={handleVehicleChange}
                />
              </div>
            </div>

            <div>
              <label className="vehicleLabel" htmlFor="Brand Name">
                Brand Name
              </label>
              <div>
                <input
                  type="text"
                  className="formInputStyle"
                  placeholder="Enter the Brand Name"
                  onChange={handleVehicleChange}
                />
              </div>
            </div>

            <div>
              <label className="vehicleLabel" htmlFor="Vehicle Description">
                Vehicle Description
              </label>
              <div>
                <textarea name="textarea" className="textAreaStyles">
                  Write something here
                </textarea>
              </div>
            </div>
          </section>

          <section className="d-flex justify-content-between">
            <div>
              <label className="vehicleLabel" htmlFor="Brand Name">
                Price Range
              </label>
              <div>
                <input
                  type="text"
                  className="formInputStyle"
                  placeholder="Enter the Price Range"
                  onChange={handleVehicleChange}
                />
              </div>
            </div>

            <div>
              <label className="vehicleLabel" htmlFor="Brand Name">
                Vehicle Type
              </label>
              <div>
                <VehicleDropdown />
              </div>
            </div>

            <div className="visibilityHidden">
              <label className="vehicleLabel" htmlFor="Vehicle Description">
                Vehicle Description
              </label>
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

          <hr />
          <h5>Features</h5>
          <section className="d-flex justify-content-between">
            <div>
              <label className="vehicleLabel" htmlFor="Maximum Speed">
                Maximum Speed
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Maximum Speed"
                  className="formInputStyle"
                />
              </div>
            </div>
            <div>
              <label className="vehicleLabel" htmlFor="Range">
                Range
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Vehicle Range"
                  className="formInputStyle"
                />
              </div>
            </div>
            <div>
              <label className="vehicleLabel" htmlFor="Charge">
                Charge
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Charge Time"
                  className="formInputStyle"
                />
              </div>
            </div>
          </section>

          <hr />
          <h5>Specifications</h5>
          <section className="d-flex justify-content-between">
            <div>
              <label className="vehicleLabel" htmlFor="Display">
                Display
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the display size"
                  className="formInputStyle"
                />
              </div>
            </div>
            <div>
              <label className="vehicleLabel" htmlFor="Motor">
                Motor
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Vehicle motor"
                  className="formInputStyle"
                />
              </div>
            </div>
            <div>
              <label className="vehicleLabel" htmlFor="Battery">
                Battery
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the  battery"
                  className="formInputStyle"
                />
              </div>
            </div>
          </section>

          <section className="d-flex justify-content-between">
            <div>
              <label className="vehicleLabel" htmlFor="Load Capacity">
                Load Capacity
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Load Capacity"
                  className="formInputStyle"
                />
              </div>
            </div>
            <div>
              <label className="vehicleLabel" htmlFor="Battery">
                Dimensions
              </label>
              <div className="dimensions">
                <input type="text" placeholder="Length" />
                <input type="text" placeholder="Width" />
                <input type="text" placeholder="Height" />
              </div>
            </div>
            <div>
              <label className="vehicleLabel" htmlFor="Vehicle Weight">
                Vehicle Weight
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the  Weight"
                  className="formInputStyle"
                />
              </div>
            </div>
          </section>

          <div className="d-flex justify-content-end actionButtons">
            <button className="cancelBtn">Cancel</button>
            <button className="SaveNextBtn">Save And Next</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddVehicle;
