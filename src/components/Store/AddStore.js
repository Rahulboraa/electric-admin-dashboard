import React, { useState } from "react";
import axios from "../../api/instance";
import { useHistory } from "react-router-dom";

const AddStore = () => {
  const [data, setData] = useState({
    dealerId: "",
    dealerName: "",
    city1: "",
    city2: "",
    budget: "",
    storeType: "",
    storeArea: "",
  });

  const { dealerName, dealerId, city1, budget, storeType, storeArea } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // !Submit Form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/store/add`, data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // !Clear Form
  const handleReset = () => {
    setData({});
  };

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

  let history = useHistory();

  return (
    <>
      <form className="addform" onSubmit={handleFormSubmit}>
        <div className="addFormWidth">
          <div className="addformInner">
            <div>
              <h2>Add Store</h2>
            </div>
            <div>
              <h4 onClick={() => history.goBack()}>X</h4>
            </div>
          </div>
          <hr style={{ marginTop: "2rem" }} />

          <section>
            <main className="inputGaping">
              <div style={{ marginTop: "30px" }}>
                <label className="modalFormLabels">01. Dealer ID </label>
                <div>
                  <input
                    type="text"
                    placeholder="20967576042"
                    className="inputModalStyles"
                    onChange={handleInputChange}
                    name="dealerId"
                    value={dealerId}
                  />
                </div>
              </div>

              <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                <label className="modalFormLabels">02. Dealer Name </label>
                <div>
                  <input
                    type="text"
                    placeholder="Sharda Electric Vehicles"
                    className="inputModalStyles"
                    onChange={handleInputChange}
                    name="dealerName"
                    value={dealerName}
                  />
                </div>
              </div>

              <div>
                <label className="modalFormLabels">
                  03. Enter your preferred city for dealership *
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <select className="inputModalStyles" onChange={vehicleChange}>
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

                <div>
                  <select className="inputModalStyles" onChange={vehicleChange}>
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
              </div>

              <div style={{ marginTop: "1rem" }}>
                <label className="modalFormLabels">04. Investment Budget</label>
                <div>
                  <select className="inputModalStyles" onChange={vehicleChange}>
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
              </div>

              <div style={{ marginTop: "1rem" }}>
                <label className="modalFormLabels" htmlFor="Choose an option">
                  05. Property/Showroom
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="Choose an option"
                    className="inputModalStyles"
                    name="storeType"
                    onChange={handleInputChange}
                    value={storeType}
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
                    name="storeArea"
                    onChange={handleInputChange}
                    value={storeArea}
                  />
                </div>
              </div>
            </main>
            <div
              className="d-flex justify-content-between align-items-center inputModalStylesBtn"
              style={{ marginBottom: "4rem" }}
            >
              <div>
                <button className="SaveNextBtn" type="submit">
                  Submit
                </button>
              </div>
              <div>
                <button className="clearBtn" type="reset" onClick={handleReset}>
                  Clear All
                </button>
              </div>
            </div>
          </section>
        </div>
      </form>
    </>
  );
};

export default AddStore;
