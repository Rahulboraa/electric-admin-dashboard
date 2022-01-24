import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "../../api/instance";
import Sidebar from "../common/sidebar";
import Navigation from "./Navigation/Navigation";

const AddVehicle = () => {
  const [data, setData] = useState({
    productName: "",
    price: "",
    range: "",
    charge: "",
    display: "",
    dealerName: "",
    motor: "",
    battery: "",
    loadCapacity: "",
    dimension: "",
    vehicleWeight: "",
    brand: "",
    maxSpeed: "",
  });

  const [data2, setData2] = useState({
    Length: "",
    Height: "",
    Width: "",
  });

  const {
    productName,
    price,
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
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // !Getting Vehicle Type
  const [selectedOption, setSelectedOption] = useState(null);
  const getDropdownItem = () => {
    axios
      .get("/category")
      .then((result) => {
        setSelectedOption(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getDropdownItem();
  }, []);

  const [vehicleId, setType] = useState("");
  const vehicleChange = (e) => {
    setType(e.target.value);
  };

  // !Vehicle Description OnChange
  const [discription, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDescriptionChange = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
  };

  //!Vehicle Application Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data3 = {
      ...data,
      dimension: `${data2.Length} X ${data2.Width} X ${data2.Height}`,
      vehicleType: `${vehicleId}`,
      discription,
    };

    axios
      .post(`/product/add`, data3)
      .then((result) => {
        console.log(result.data.data);
        history.push("./vehiclestepper");
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
            <Navigation />
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Add Vehicle</h4>

          <h5 className="basic__information">Basic Information</h5>

          <form onSubmit={handleFormSubmit}>
            <section className="d-flex justify-content-between">
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
                  <textarea
                    style={{ marginRight: "20px" }}
                    id="noter-text-area"
                    className="textAreaStyles"
                    name={discription}
                    onChange={handleChange}
                    value={discription}
                  >
                    Write something here
                  </textarea>
                </div>
              </div>
            </section>

            <section className="d-flex justify-content-between align-items-center">
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
                  <select onChange={vehicleChange}>
                    <option value="0">Select Vehicle Type</option>
                    {selectedOption?.map((items) => {
                      return (
                        <React.Fragment key={items?.id}>
                          <option value={items?.id}>{items?.title}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div>
                <label className="vehicleLabel" htmlFor="Brand Name">
                  Dealer Name
                </label>
                <div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Dealer Name"
                      className="formInputStyle"
                      value={maxSpeed}
                      name="maxSpeed"
                      onChange={handleVehicleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Hidden TextArea */}
              {/* <div className="visibilityHidden">
                <label className="vehicleLabel" htmlFor="Vehicle Description">
                  Vehicle Description
                </label>
                <div>
                  <textarea
                    name="textarea"
                    rows="5"
                    cols="26"
                    style={{ resize: "none" }}
                    value="abc"
                    onChange={handleVehicleChange}
                  >
                    Write something here
                  </textarea>
                </div>
              </div> */}
            </section>

            <hr />
            <h5 className="basic__information">Features</h5>
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
            <h5 className="basic__information">Specifications</h5>
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
                    onChange={handleDescriptionChange}
                  />

                  <input
                    type="text"
                    name="Width"
                    value={data2.Width}
                    placeholder="Width"
                    onChange={handleDescriptionChange}
                  />

                  <input
                    name="Height"
                    type="text"
                    value={data2.Height}
                    placeholder="Height"
                    onChange={handleDescriptionChange}
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

            <div className="d-flex justify-content-end actionButtons">
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
