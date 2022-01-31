import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/instance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditStore = () => {
  // !Toast Configure
  toast.configure({
    position: toast.POSITION.Top_RIGHT,
    hideProgressBar: true,
    autoClose: 3000,
  });

  const [data, setData] = useState({
    brandName: "",
    logo: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //   const [loadData, setLoadData] = useState([]);
  //   //*   Fetching Brands
  //   const loadBrand = () => {
  //     axios
  //       .get(`/brand`)
  //       .then((result) => {
  //         setLoadData(result.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   useEffect(() => {
  //     loadBrand();
  //   }, []);

  //   // !Delete Brand
  //   const deleteBrand = (id) => {
  //     axios
  //       .delete(`/brand/${id}`)
  //       .then((result) => {
  //         toast.success("Brand Deleted SuccessFully");
  //         history.goBack();
  //       })
  //       .catch((err) => {
  //         toast.error(err.message);
  //         console.log(err);
  //       });
  //   };

  let history = useHistory();
  const { id } = useParams();

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
              placeholder="Store Type"
              name="productName"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Location"
              name="text"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Dealer"
              name="text"
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button className="btn btn-warning d-flex m-auto">Update Store</button>
        <button
          className="btn btn-danger d-flex mt-3 m-auto"
          onClick={() => {
            // deleteBrand(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditStore;
