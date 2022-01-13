import React, { useState } from "react";
import axios from "../../api/instance";
import VehicleDropdown from "./VehicleDropdown";

const AddVehicle = () => {
  const [data, setData] = useState({
    text: "",
    productName: "",
    price: "",
    discription: "",
    vehicleType: "",
    speed: "",
    range: "",
    charge: "",
    display: "",
    motor: "",
    battery: "",
    loadCapacity: "",
    dimension: "",
    vehicleWeight: "",
    brand: "",
    scooterImage: "",
    maxSpeed: "",
  });

  const {
    productName,
    price,
    discription,
    range,
    charge,
    display,
    motor,
    battery,
    loadCapacity,
    dimension,
    brand,
    maxSpeed,
    vehicleWeight,
  } = data;

  const handleVehicleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/product/add`, data, {
        header: {
          "x-access-token": "x-access-token",
        },
      })
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

        <form onSubmit={handleFormSubmit}>
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
                  value={productName}
                  onChange={handleVehicleChange}
                  name="productName"
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
                  value={brand}
                  name="brand"
                />
              </div>
            </div>

            <div>
              <label className="vehicleLabel" htmlFor="Vehicle Description">
                Vehicle Description
              </label>
              <div>
                <textarea
                  name="textarea"
                  className="textAreaStyles"
                  value={discription}
                  name={discription}
                  onChange={handleVehicleChange}
                >
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
                  value={price}
                  name="price"
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

            {/* Hidden TextArea */}
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
                  value={maxSpeed}
                  name="maxSpeed"
                  onChange={handleVehicleChange}
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
                  onChange={handleVehicleChange}
                  value={range}
                  name="range"
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
                  value={charge}
                  name="charge"
                  onChange={handleVehicleChange}
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
                  value={display}
                  name="display"
                  onChange={handleVehicleChange}
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
                  value={motor}
                  name="motor"
                  onChange={handleVehicleChange}
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
                  value={battery}
                  name="battery"
                  onChange={handleVehicleChange}
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
                  value={loadCapacity}
                  name="loadCapacity"
                  onChange={handleVehicleChange}
                />
              </div>
            </div>
            <div>
              <label className="vehicleLabel" htmlFor="Battery">
                Dimensions
              </label>
              <div className="dimensions">
                <input
                  type="text"
                  placeholder="Length"
                  onChange={handleVehicleChange}
                />
                <input
                  type="text"
                  placeholder="Width"
                  onChange={handleVehicleChange}
                />
                <input
                  type="text"
                  placeholder="Height"
                  onChange={handleVehicleChange}
                />
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
                  onChange={handleVehicleChange}
                  value={vehicleWeight}
                  name="vehicleWeight"
                />
              </div>
            </div>
          </section>

          <div className="d-flex justify-content-end actionButtons">
            <button className="cancelBtn">Cancel</button>
            <button className="SaveNextBtn" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddVehicle;
