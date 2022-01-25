import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/instance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditVehicle = () => {
  // !Toast Configure
  toast.configure({
    position: toast.POSITION.Top_RIGHT,
    hideProgressBar: true,
    autoClose: 3000,
  });

  let history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState({
    productName: "",
    text: "",
    display: "",
  });

  const { productName, text, email, phone, website, display } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/users/${id}`, user);
    history.push("/");
  };

  // !FETCH USER
  const loadUser = async () => {
    const result = await axios.get(`/product/single/${id}`);
    setUser(result.data.product);
  };

  useEffect(() => {
    loadUser();
  }, []);

  // !DELETE USER
  const deleteVehicle = (id) => {
    axios
      .delete(`/product/delete/${id}`)
      .then((result) => {
        toast.success("Vehicle Deleted Successfully");
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-center mb-4">Edit Vehicle</h3>
        <form onSubmit={onSubmit}>
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
              value={productName}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Vehicle Name"
              name="text"
              value={text}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4 ">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Dealer Name"
              name="display"
              value={display}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Status"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>
        </form>
        <button className="btn btn-warning d-flex m-auto">
          Update Vehicle
        </button>
        <button
          className="btn btn-danger d-flex mt-3 m-auto"
          onClick={() => {
            deleteVehicle(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditVehicle;
