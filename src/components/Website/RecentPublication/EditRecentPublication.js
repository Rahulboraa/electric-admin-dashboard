import React, { useState, useEffect } from "react";
import dummy from "../../../assets/recentPublicaton/dummy.svg";
import axios from "../../../api/instance";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditRecentPublication = () => {
  const handleImageReset = () => {};

  // const [user, setUser] = useState({
  //   productName: "",
  //   text: "",
  //   display: "",
  // });

  // const { productName, text, email, phone, website, display } = user;
  // const onInputChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios.put(`/recentPub/single/${id}`, user);
    history.push("/");
  };

  const { id } = useParams();

  // !FETCH USER
  const loadUser = async () => {
    const result = await axios.get(`/product/single/${id}`);
    // setUser(result.data.product);
    console.log(result.data.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

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

  const handleResetBtn = () => {
    console.log("hello");
  };

  let history = useHistory();

  return (
    <>
      <form className="addform">
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
            <h4>X</h4>
          </div>
        </div>
        <hr />
        <main>
          <div style={{ marginTop: "1rem" }}>
            <label className="modalFormLabels">01. Feature Image</label>
            <div>
              <figure>
                <img
                  src={dummy}
                  alt="dummy"
                  style={{
                    width: "400px",
                    height: "300px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                />
              </figure>
              <button
                style={{
                  marginBottom: "20px",
                  padding: "8px",
                  outline: "none",
                  border: "1px solid #191919",
                }}
              >
                Change Feature Image
              </button>
              <button
                style={{
                  outline: "none",
                  color: " #D20000",
                  border: "1px solid #D20000",
                  marginBottom: "20px",
                  marginLeft: "50px",
                  padding: "8px",
                }}
                onClick={handleImageReset}
              >
                Remove Feature Image
              </button>
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <label className="modalFormLabels">02. Publication Title</label>
            <div>
              <input
                type="text"
                placeholder="Enter the Publication Title"
                className="inputModalStyles"
              />
            </div>
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <label className="modalFormLabels">03. Publication Document</label>
            <div>
              <input
                type="text"
                placeholder="No file selected"
                className="inputModalStyles"
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
