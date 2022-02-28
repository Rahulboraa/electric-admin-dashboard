import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "../../api/instance";
import { toast } from "react-toastify";

const EditVehicleTable = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    productName: "",
    brand: "",
    vehicleName: "",
    vehicleType: "",
  });

  const { productName, brand, vehicleName, vehicleType } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // !FETCH USER
  const loadUser = async () => {
    const result = await axios.get(`/product/single/${id}`);
    setUser(result.data.product);
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/users/${id}`, user);
    history.push("/");
  };

  // !DELETE VEHICLE
  const deleteVehicle = (id) => {
    axios
      .delete(`/product/delete/${id}`)
      .then((result) => {
        toast.success("Vehicle Deleted Successfully");
        history.goBack();
      })
      .catch((err) => {
        toast.err("Vehicle Deleted Successfully");
        console.log(err);
      });
  };
  let history = useHistory();

  return (
    <>
      <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-center mb-4">Edit Vehicle</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Modal Number"
              disabled
              // name="brand"
              value={id}
              // onChange={onInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Brand Name"
              name="brand"
              value={brand}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4 ">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Vehicle Name"
              name="productName"
              value={productName}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Vehicle Type"
              name="vehicleType"
              value={vehicleType}
              onChange={onInputChange}
            />
          </div>
        </form>
        <div className="d-flex justify-content-center gap-5">
          <button
            className="btn btn-primary "
            style={{ marginRight: "20px" }}
            type="submit"
            ocn
          >
            Update Vehicle
          </button>
          <button
            className="btn btn-danger "
            onClick={() => {
              deleteVehicle(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EditVehicleTable;
