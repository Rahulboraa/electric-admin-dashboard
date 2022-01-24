import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/instance";

const EditVehicle = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`/users/${id}`);
    setUser(result.data);
  };

  const delteVehicle = (id) => {
    axios
      .delete(`/product/delete/${id}`)
      .then((result) => {
        console.log(result.data.data);
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
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4 ">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
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
            delteVehicle(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditVehicle;
