import React, { useState } from "react";
import Sidebar from "../common/sidebar";
import upload from "./../../assets/vehicles/upload.svg";
import Navigation from "./Navigation/Navigation";
import axios from "../../api/instance";
import AddVehicleStepper from "./AddVehicleStepper";

const VehicleStepper = () => {
  // !Getting Vehicle Type
  const [selectedOption, setSelectedOption] = useState(null);

  const getDropdownItem = () => {
    axios
      .get("/color")
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

  const [addVehicle, setAddVehicle] = useState(false);
  const handleAddBtn = () => {
    setAddVehicle(true);
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <Navigation />
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Add Vehicle</h4>

          <section className="d-flex  justify-content-between align-items-center vehicleStepper">
            <div style={{ marginRight: "30px" }}>
              <select
                onChange={vehicleChange}
                style={{
                  padding: "1rem",
                }}
              >
                <option value="0">Choose the Vehicle Color</option>
                {selectedOption?.map((items) => {
                  return (
                    <React.Fragment key={items.id}>
                      <option value={items.id}>{items.color}</option>
                    </React.Fragment>
                  );
                })}
              </select>
            </div>

            <div
              className="d-flex justify-content-center m-auto align-items-center "
              style={{ gap: "40px" }}
            >
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
              <figure>
                <img src={upload} alt="imageUpload" className="imageUpload" />
              </figure>
            </div>
          </section>

          <button
            onClick={handleAddBtn}
            style={addVehicle ? { display: "none" } : {}}
          >
            Add More
          </button>

          {addVehicle && (
            <div style={{ marginTop: "2rem" }}>
              <AddVehicleStepper />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VehicleStepper;
