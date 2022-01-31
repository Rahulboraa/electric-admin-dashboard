import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/instance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTeamMember = () => {
  // !Toast Configure
  toast.configure({
    position: toast.POSITION.Top_RIGHT,
    hideProgressBar: true,
    autoClose: 3000,
  });

  const [data, setData] = useState({
    name: "",
    designation: "",
    emailId: "",
    profilePic: "",
  });

  const { name, designation, emailId, profilePic } = data;

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //*   Fetching Brands
  const loadBrand = () => {
    axios
      .get(`/Team/single`)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadBrand();
  }, []);

  // !Delete Team
  const deleteTeam = (id) => {
    axios
      .delete(`Team/delete/${id}`)
      .then((result) => {
        toast.success("Member Deleted SuccessFully");
        history.goBack();
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  let history = useHistory();
  const { id } = useParams();

  return (
    <>
      <div className="w-75 mx-auto shadow p-5">
        <h3 className="text-center mb-4">Edit Team</h3>
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
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Designation"
              name="designation"
              value={designation}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Email"
              name="emailId"
              value={emailId}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <button className="btn btn-warning d-flex m-auto">
          Update Vehicle
        </button>
        <button
          className="btn btn-danger d-flex mt-3 m-auto"
          onClick={() => {
            deleteTeam(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditTeamMember;
