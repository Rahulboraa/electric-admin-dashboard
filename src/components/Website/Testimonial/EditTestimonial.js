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
    review: "",
    dealerName: "",
  });

  const { dealerImage, review, dealerName, date } = data;

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

  // !Dealer Type
  const [dealer, setDealerType] = useState(null);
  const getDealerType = () => {
    axios
      .get("/dealerType")
      .then((result) => {
        setDealerType(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDealerType();
  }, []);

  const [dealerType, setDealer] = useState("");
  const showDealerChange = (e) => {
    setDealer(e.target.value);
  };

  // !Update Testimonial
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
      .delete(`/review/delete/${id}`)
      .then((result) => {
        toast.success("Testimonial Deleted SuccessFully");
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
            <select
              className="form-select inputModalStyles"
              onChange={showDealerChange}
            >
              <option value="0">Select the Dealership Type</option>
              {dealer?.map((items) => {
                return (
                  <React.Fragment key={items.id}>
                    <option value={items.id}>{items.title}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>

          <div className="form-group mb-5">
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

        <div className="d-flex justify-content-center gap-5">
          <button className="btn btn-primary" onClick={handleUpdateBrand}>
            Update Testimonial
          </button>
          <button
            className="btn btn-danger d-flex"
            onClick={() => {
              deleteBrand(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTestimonial;
