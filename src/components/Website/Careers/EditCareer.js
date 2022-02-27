import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../api/instance";

const EditCareer = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    description: "",
    role: "",
    experience: "",
    location: "",
  });

  const { description, role, experience, location } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let history = useHistory();

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/career/updateJob/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`/career/updateJob/${id}`);
    setUser(result.data);
  };

  const deleteCareer = () => {
    axios
      .delete(`/career/deleteJob/${id}`)
      .then((result) => {
        toast.success("Job Deleted Successfully");
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-center mb-4">Edit Job Application</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your description"
              name="description"
              value={description}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your role"
              name="role"
              value={role}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4 ">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your experience"
              name="experience"
              value={experience}
              onChange={onInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your location"
              name="location"
              value={location}
              onChange={onInputChange}
            />
          </div>
        </form>
        <div className="d-flex justify-content-center align-content-center gap-5 mt-5">
          <button className="btn btn-primary " onClick={onSubmit}>
            Update Brand
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteCareer();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EditCareer;
