import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/instance";
import moment from "moment";
import { toast } from "react-toastify";

const EditBrands = () => {
  let history = useHistory();
  const { id } = useParams();

  const [data, setData] = useState({
    logo: "",
    brandName: "",
    collaborationDate: "",
  });

  const { brandName, collaborationDate } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //*   Fetching Brands
  const loadBrand = () => {
    axios
      .get(`/brand/single/${id}`)
      .then((result) => {
        setData(result.data.brand[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadBrand();
  }, []);

  // *Update Brand
  // !DATA WILL BE SENT IN FORM DATA FILED
  const handleUpdateBrand = () => {
    axios
      .put(`/brand/${id}`, { brandName })
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // !Delete Brand
  const deleteBrand = (id) => {
    axios
      .delete(`/brand/${id}`)
      .then((result) => {
        toast.success("Brand Deleted SuccessFully");
        history.goBack();
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-center mb-4">Edit Brand</h3>
        <form>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Application Number"
              name="ID"
              value={id}
              disabled
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Brand Name"
              name="productName"
              onChange={handleInputChange}
              value={brandName}
              name="brandName"
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Collaboration Date"
              name="collaborationDate"
              onChange={handleInputChange}
              value={moment(collaborationDate).format("YYYY-MM-DD")}
            />
          </div>
        </form>
        <button
          className="btn btn-warning d-flex m-auto"
          onClick={handleUpdateBrand}
        >
          Update Brand
        </button>
        <button
          className="btn btn-danger d-flex mt-3 m-auto"
          onClick={() => {
            deleteBrand(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditBrands;
