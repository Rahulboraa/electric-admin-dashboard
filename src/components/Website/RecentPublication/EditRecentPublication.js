import React, { useState, useEffect } from "react";
import dummy from "../../../assets/recentPublicaton/dummy.svg";
import axios from "../../../api/instance";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

const EditRecentPublication = () => {
  const handleImageReset = () => {};

  const [user, setUser] = useState({
    title: "",
    descripiton: "",
    date: "",
    image: "",
  });

  const { title, date, descripiton, image } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { id } = useParams();

  // !FETCH USER
  const loadUser = async () => {
    const result = await axios.get(`/recentPub/single/${id}`);
    setUser(result.data.brand[0]);
  };

  useEffect(() => {
    loadUser();
  }, []);

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

  // !Update Recent Publication
  const [recentPDF, setImageSelected] = useState("");

  let newDate = new Date();
  let dateFormated = moment(newDate).format("MMMM Do, YYYY");
  let formdata = new FormData();
  formdata.append("title", title);
  formdata.append("descripiton", descripiton);
  formdata.append("dateFormated", dateFormated);
  formdata.append("image", selectedFile);
  formdata.append("recentPDF", recentPDF);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/recentPub/update/${id}`, formdata);
    history.goBack();
  };

  // !DELETE PUBLICATIONS
  const handleDeleteBtn = (id) => {
    axios
      .delete(`/recentPub/delete/${id}`)
      .then((result) => {
        toast.success("Deleted Successfully");
        history.goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let history = useHistory();

  return (
    <>
      <form className="addform" onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "600px",
            alignItems: "center",
            marginTop: "62px",
          }}
        >
          <div>
            <h2>Edit Publication</h2>
          </div>
          <div>
            <h4
              onClick={() => {
                history.goBack();
              }}
            >
              X
            </h4>
          </div>
        </div>
        <hr />
        <main>
          <div style={{ marginTop: "1rem" }}>
            <label className="modalFormLabels">01. Feature Image</label>
            <div>
              <figure>
                {/* <img
                  src={image}
                  alt="image"
                  style={{
                    width: "400px",
                    height: "300px",
                    marginTop: "20px",
                    marginBottom: "0px",
                  }}
                /> */}
                <div className="d-flex justify-content-center align-content-center  m-auto mb-3">
                  {selectedFile ? (
                    <img
                      src={preview}
                      style={{
                        width: "400px",
                        height: "300px",
                        marginTop: "20px",
                        marginBottom: "0px",
                      }}
                    />
                  ) : (
                    <img
                      src={image}
                      alt="image"
                      style={{
                        width: "400px",
                        height: "300px",
                        marginTop: "20px",
                        marginBottom: "0px",
                      }}
                    />
                  )}
                </div>
              </figure>

              <div className="form-group mb-5">
                <input
                  type="file"
                  onChange={onSelectFile}
                  className="form-control form-control-md"
                  id="formFileSm"
                />
              </div>

              {/* <button
                style={{
                  marginBottom: "30px",
                  padding: "8px",
                  outline: "none",
                  border: "1px solid #191919",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Change Feature Image
              </button> */}
            </div>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <label className="modalFormLabels">02. Publication Title</label>
            <div>
              <input
                type="text"
                placeholder="Enter the Publication Title"
                className="inputModalStyles"
                name="title"
                value={title}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <label className="modalFormLabels">03. Publication Document</label>
            <div className="form-group mt-4">
              <input
                type="file"
                name="recentPDF"
                onChange={(e) => {
                  setImageSelected(e.target.files[0]);
                }}
                className="form-control form-control-md"
                id="formFileSm"
              />
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <label className="modalFormLabels">04. Publication Date</label>
            <div>
              <input
                type="date"
                className="inputModalStyles"
                name="date"
                value={date}
                onChange={onInputChange}
              />
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <label className="modalFormLabels">05. Description</label>
            <div>
              <input
                type="text"
                className="inputModalStyles"
                name="descripiton"
                value={descripiton}
                onChange={onInputChange}
              />
            </div>
          </div>
        </main>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "400px", marginBottom: "2rem", marginTop: "2rem" }}
        >
          <div>
            <button className="SaveNextBtn">Submit</button>
          </div>
          <div>
            <button
              className="clearBtn"
              onClick={() => {
                handleDeleteBtn(id);
              }}
              type="reset"
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditRecentPublication;
