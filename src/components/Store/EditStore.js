import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/instance";
import { toast } from "react-toastify";

const EditStore = () => {
  const [data, setData] = useState({
    dealerName: "",
  });

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

  //!   Fetching Store
  const fetchStore = () => {
    axios
      .get(`/store/singleStore/${id}`)
      .then((result) => {
        setData(result.data.storeById[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchStore();
  }, []);

  // !Update Store
  const data2 = { ...data, city1, city2, storeType };

  const UpdateStore = () => {
    axios
      .put(`store/edit/${id}`, data2)
      .then((result) => {
        toast.success("Store Updated SuccessFully");
        setData({});
        history.goBack();
      })
      .catch((err) => {
        toast.error("Error Occurred");
      });
  };

  // !Delete Brand
  const deleteStore = (id) => {
    axios
      .delete(`/store/delete/${id}`)
      .then((result) => {
        toast.success("Store Deleted SuccessFully");
        history.goBack();
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  const { id } = useParams();
  let history = useHistory();

  return (
    <>
      <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-center mb-4">Edit Store</h3>
        <form>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Store Id"
              name="ID"
              value={id}
              disabled
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Dealer Name"
              name="dealerName"
              value={data.dealerName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <select
              className="form-select inputModalStyles"
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

          <div className="form-group mb-4">
            <select
              className="inputModalStyles form-select"
              onChange={cityChange}
            >
              <option value="0">Edit First Preference</option>
              {selectedCity?.map((items) => {
                return (
                  <React.Fragment key={items.id}>
                    <option value={items.id}>{items.cityName}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          <div className="form-group mb-4">
            <select
              className=" form-select inputModalStyles"
              onChange={cityChangeTwo}
            >
              <option value="0"> Edit Second Preference</option>
              {selectedCityTwo?.map((items) => {
                return (
                  <React.Fragment key={items.id}>
                    <option value={items.id}>{items.cityName}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
        </form>

        <button className="btn btn-warning d-flex m-auto" onClick={UpdateStore}>
          Update Store
        </button>
        <button
          className="btn btn-danger d-flex mt-3 m-auto"
          onClick={() => {
            deleteStore(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditStore;
