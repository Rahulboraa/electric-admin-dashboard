import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "../../api/instance";
import Sidebar from "../common/sidebar";
import VehicleDropdown from "./VehicleDropdown";

const AddVehicle = () => {
  //!Getting User Token
  const getToken = localStorage.getItem("token");
  const parsedLogin = JSON.parse(localStorage.getItem("loginUser"));

  const [data2, setData2] = useState({
    Length: "",
    Height: "",
    Width: "",
  });

  const [data, setData] = useState({
    productName: "",
    price: "",
    discription: "",
    vehicleType: "",
    range: "",
    charge: "",
    display: "",
    motor: "",
    battery: "",
    loadCapacity: "",
    dimension: "",
    vehicleWeight: "",
    brand: "",
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
    brand,
    maxSpeed,
    vehicleWeight,
  } = data;

  const handleVehicleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleVehicleChange2 = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData2({ ...data2, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data3 = {
      ...data,
      dimension: `${data2.Length} X ${data2.Width} X ${data2.Height}`,
    };

    axios
      .post(`/product/add`, data3, {
        header: {
          "x-access-token": getToken ? getToken : parsedLogin,
        },
      })
      .then((result) => {
        console.log(result.data.data);
        history.push("./vehiclestepper");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // !Vehicle Type
  const FetchVehicle = () => {
    axios
      .get(`/category`)
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <span>Vehicle Application</span>
            <span>Vehicles</span>
            <span>Brand</span>
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Add Vehicle</h4>

          <h5 className="basic__information">Basic Information</h5>

          <form onSubmit={handleFormSubmit}>
            <section className="d-flex justify-content-between formData">
              <div>
                <label className="vehicleLabel" htmlFor="Vehicle Name">
                  Vehicle Name
                </label>
                <div>
                  <input
                    style={{ marginRight: "20px" }}
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
                    style={{ marginRight: "20px" }}
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
                <label className="vehicleLabel">Vehicle Description</label>
                <div>
                  {/* <textarea
                    style={{ marginRight: "20px" }}
                    name="textarea"
                    className="textAreaStyles"
                    name={discription}
                    onChange={handleVehicleChange}
                    value={discription}
                  >
                    Write something here
                  </textarea> */}
                  <input
                    type="text"
                    className="textAreaStyles"
                    name={discription}
                    onChange={handleVehicleChange}
                    value={discription}
                  />
                </div>
              </div>
            </section>

            <section className="d-flex justify-content-between align-items-center formData">
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
            <h5 className="basic__information">Features</h5>
            <section className="d-flex justify-content-between formData">
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
            <h5 className="basic__information">Specifications</h5>
            <section className="d-flex justify-content-between formData">
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

            <section className="d-flex justify-content-between formData">
              <div>
                <label
                  className="vehicleLabel"
                  htmlFor="Load Capacity"
                  style={{ marginTop: "1rem" }}
                >
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
              <div style={{ marginRight: "-25px" }}>
                <label
                  className="vehicleLabel"
                  htmlFor="Battery"
                  style={{ marginTop: "1rem", marginBottom: "2rem" }}
                >
                  Dimensions
                </label>
                <div className="dimensions">
                  <input
                    type="text"
                    name="Length"
                    placeholder="Length"
                    value={data2.Length}
                    onChange={handleVehicleChange2}
                  />
                  <input
                    type="text"
                    name="Width"
                    value={data2.Width}
                    placeholder="Width"
                    onChange={handleVehicleChange2}
                  />
                  <input
                    name="Height"
                    type="text"
                    value={data2.Height}
                    placeholder="Height"
                    onChange={handleVehicleChange2}
                  />
                </div>
              </div>
              <div>
                <label
                  className="vehicleLabel"
                  htmlFor="Vehicle Weight"
                  style={{ marginTop: "1rem" }}
                >
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

            <div className="d-flex justify-content-end actionButtons formData">
              <button className="cancelBtn">Cancel</button>
              <button className="SaveNextBtn" type="submit">
                Save and Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddVehicle;
