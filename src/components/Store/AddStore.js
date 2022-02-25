import React, { useState, useEffect } from "react";
import axios from "../../api/instance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddStore = () => {
  const [data, setData] = useState({
    dealerId: "",
    dealerName: "",
    city2: "",
    storeType: "",
    storeArea: "",
  });

  const { dealerName, dealerId } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // !Clear Form
  const handleReset = () => {
    setData({});
  };

  // !City Dropdown
  const [selectedCity, setSelectedCity] = useState(null);
  const getCityDropdowns = () => {
    axios
      .get("/city/getCities")
      .then((result) => {
        setSelectedCity(result.data.cities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCityDropdowns();
  }, []);

  const [city1, setCityId] = useState("");
  const cityChange = (e) => {
    setCityId(e.target.value);
  };

  // !City Dropdown 2
  const [selectedCityTwo, setSelectedCityTwo] = useState(null);

  const getCityDropdownsTwo = () => {
    axios
      .get("/city/getCities")
      .then((result) => {
        setSelectedCityTwo(result.data.cities);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCityDropdownsTwo();
  }, []);

  const [city2, setCityIdTwo] = useState("");
  const cityChangeTwo = (e) => {
    setCityIdTwo(e.target.value);
  };

  // !Getting Vehicle Budget Type
  const [selectedOption, setSelectedOption] = useState(null);
  const getDropdownItem = () => {
    axios
      .get("/dropdowns/getAllInvestmentBudget")
      .then((result) => {
        setSelectedOption(result.data.investmentBudgets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDropdownItem();
  }, []);

  const [budget, setType] = useState("");
  const vehicleChange = (e) => {
    setType(e.target.value);
  };

  // !ShowRoom Type
  const [showRoomType, setShowRoomType] = useState(null);
  const getShowRoomType = () => {
    axios
      .get("/dropdowns/getAllPropertyTypes")
      .then((result) => {
        setShowRoomType(result.data.propertyTypes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getShowRoomType();
  }, []);

  const [storeType, setShowRoomTypeID] = useState("");
  const showRoomChange = (e) => {
    setShowRoomTypeID(e.target.value);
  };

  // !ShowRoom Area
  const [showroomAreas, setShowroomArea] = useState(null);

  const getShowroomArea = () => {
    axios
      .get("/dropdowns/getAllShowroomAreas")
      .then((result) => {
        setShowroomArea(result.data.showroomAreas);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getShowroomArea();
  }, []);

  const [storeArea, setShowroomAreaType] = useState("");

  const showroomAreaChange = (e) => {
    setShowroomAreaType(e.target.value);
  };

  // !Submit Form
  const data2 = { ...data, city1, city2, budget, storeType, storeArea };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/store/add`, data2)
      .then((result) => {
        setShowroomAreaType("");
        setShowRoomTypeID("");
        setCityIdTwo("");
        setCityId("");
        setType("");
        setData({});
        toast.success("Store Added SuccessFully");
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
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
                    placeholder="Enter Dealer Id"
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
                    placeholder="Enter Name"
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
                  <select className="inputModalStyles" onChange={cityChange}>
                    <option value="0">First Preference</option>
                    {selectedCity?.map((items) => {
                      return (
                        <React.Fragment key={items.id}>
                          <option value={items.id}>{items.cityName}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <select className="inputModalStyles" onChange={cityChangeTwo}>
                    <option value="0">Second Preference</option>
                    {selectedCityTwo?.map((items) => {
                      return (
                        <React.Fragment key={items.id}>
                          <option value={items.id}>{items.cityName}</option>
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
                    <option value="0">Investment Budget</option>
                    {selectedOption?.map((items) => {
                      return (
                        <React.Fragment key={items.id}>
                          <option value={items.id}>
                            {items.investmentBudget}
                          </option>
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
                  <select
                    className="inputModalStyles"
                    onChange={showRoomChange}
                  >
                    <option value="0">Property/Showroom</option>
                    {showRoomType?.map((items) => {
                      return (
                        <React.Fragment key={items.id}>
                          <option value={items.id}>{items.propertyType}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <label className="modalFormLabels" htmlFor="06.  Showroom Area">
                  06. Showroom Area
                </label>
                <div>
                  <select
                    className="inputModalStyles"
                    onChange={showroomAreaChange}
                  >
                    <option value="0">Property/Showroom</option>
                    {showroomAreas?.map((items) => {
                      return (
                        <React.Fragment key={items.id}>
                          <option value={items.id}>{items.showroomArea}</option>
                        </React.Fragment>
                      );
                    })}
                  </select>
                </div>
              </div>
            </main>
            <div
              className="d-flex justify-content-between align-items-center inputModalStylesBtn"
              style={{ marginBottom: "4rem", marginTop: "3.4rem" }}
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
