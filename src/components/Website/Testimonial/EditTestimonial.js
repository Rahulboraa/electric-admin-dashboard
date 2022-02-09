import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../../api/instance";
import moment from "moment";
import { toast } from "react-toastify";

const EditTestimonial = () => {
  let history = useHistory();
  const { id } = useParams();

  const [data, setData] = useState({
    date: "",
    dealerImage: "",
    dealerType: "",
    review: "",
    dealerName: "",
  });

  const { dealerImage, dealerType, review, dealerName, date } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //*   Fetching Testimonials
  const fetchTestimonial = () => {
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
    fetchTestimonial();
  }, []);

  // *Update Brand
  // !DATA WILL BE SENT IN FORM DATA FILED
  const handleUpdateBrand = () => {
    axios
      .put(`/brand/${id}`)
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
        <h3 className="text-center mb-4">Edit Testimonial</h3>
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
              type="date"
              className="form-control form-control-lg"
              placeholder="Collaboration Date"
              name="date"
              onChange={handleInputChange}
              value={moment(date).format("YYYY-MM-DD")}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Customer Name"
              name="dealerName"
              onChange={handleInputChange}
              value={dealerName}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Dealership Type"
              name="dealerType"
              onChange={handleInputChange}
              value={dealerType}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Reviews"
              name="review"
              onChange={handleInputChange}
              value={review}
              name="brandName"
            />
          </div>
        </form>
        <button className="btn btn-warning" onClick={handleUpdateBrand}>
          Update Testimonial
        </button>
        <button
          className="btn btn-danger "
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

export default EditTestimonial;
