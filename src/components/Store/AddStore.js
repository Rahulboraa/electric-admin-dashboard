import React, { useState } from "react";
import axios from "../../api/instance";
import { useHistory } from "react-router-dom";
// import Select from "react-select/dist/declarations/src/Select";

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

  const [selectedOption, setSelectedOption] = useState();

  const { dealerName, dealerId, city1, city2, budget, storeType, storeArea } =
    data;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

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
          <hr />
          <main>
            <main className="inputGaping">
              <div>
                <label className="modalFormLabels">01. Dealer ID </label>
                <div>
                  <input
                    type="text"
                    placeholder="20967576042"
                    className="inputModalStyles"
                    name="dealerId"
                    onChange={handleInputChange}
                    value={dealerId}
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
                    name="dealerName"
                    onChange={handleInputChange}
                    value={dealerName}
                  />
                </div>
              </div>
              {/* <div>
                <label className="modalFormLabels">
                  03. Enter your preferred city for dealership *
                </label>
                <div style={{ marginTop: "1rem" }}>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
                <div>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
              </div> */}

              {/* <div>
                <label className="modalFormLabels">04. Investment Budget</label>
                <div>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
              </div> */}
              <div>
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
            <div className="d-flex justify-content-between align-items-center inputModalStylesBtn">
              <div>
                <button className="SaveNextBtn">Submit</button>
              </div>
              <div>
                <button className="clearBtn" type="reset" onClick={handleReset}>
                  Clear All
                </button>
              </div>
            </div>
          </main>
        </div>
      </form>
    </>
  );
};

export default AddStore;
