import React, { useState } from "react";
import upload from "./../../assets/vehicles/upload.svg";
import axios from "../../api/instance";

const AddVehicleStepper = () => {
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

  return (
    <>
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
    </>
  );
};

export default AddVehicleStepper;
