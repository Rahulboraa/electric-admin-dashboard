import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../api/instance";
import { toast } from "react-toastify";

const EditTeamMember = () => {
  const { id } = useParams();
  let history = useHistory();

  const [user, setUser] = useState({
    name: "",
    emailId: "",
    designation: "",
    profilePic: "",
  });

  const { name, designation, emailId, profilePic } = user;

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // !OnSubmit
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/users/${id}`, user);
    history.push("/");
  };

  //*   Fetching Teams
  const loadTeam = async () => {
    const result = await axios.get(`/Team/single/${id}`);
    setUser(result.data.team[0]);
  };

  useEffect(() => {
    loadTeam();
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

  // !Preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  // ! Update Team
  let formData = new FormData();

  formData.append("name", name);
  formData.append("emailId", emailId);
  formData.append("designation", designation);
  formData.append("profilePic", selectedFile);
  const updateTeam = () => {
    axios
      .put(`Team/update/${id}`, formData)
      .then((result) => {
        toast.success("Member Updated SuccessFully");
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

          <div className="d-flex justify-content-center align-content-center  m-auto">
            {selectedFile ? (
              <img
                src={preview}
                style={{
                  width: "220px",
                  height: "120px",
                  marginBottom: "0.10rem",
                }}
              />
            ) : (
              <img
                src={profilePic}
                alt="logo"
                style={{
                  width: "220px",
                  height: "120px",
                  marginBottom: "0.10rem",
                }}
              />
            )}
          </div>

          <div className="form-group mb-4">
            <input
              type="file"
              onChange={onSelectFile}
              className="form-control form-control-md"
              id="formFileSm"
            />
          </div>
        </form>

        <div className="d-flex">
          <button
            className="btn btn-warning d-flex m-auto"
            onClick={updateTeam}
          >
            Update Team
          </button>
          <button
            className="btn btn-danger d-flex  m-auto"
            onClick={() => {
              deleteTeam(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTeamMember;
