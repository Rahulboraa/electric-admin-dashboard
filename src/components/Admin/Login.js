import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ForgotPassDialog from "../Admin/Dialogs/ForgotPassDialog";
import Verification from "../Admin/Dialogs/Verification";
import axios from "../../api/instance";

const Login = () => {
  //  !Modal State
  const [openModal, setOpenModal] = useState(false);
  const [verify, setVerify] = useState(false);

  // !State for inputs
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  console.log(data);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const getToken = localStorage.getItem("token");

  const handleSubmitForm = () => {
    axios
      .post(`/user/login`, data)
      .then((result) => {
        setData("");
        if (result.data.status === true) {
          history.push("./home");
          localStorage.setItem(
            "loginUser",
            JSON.stringify(result.data.accessToken)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const history = useHistory();

  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <>
      <div>
        <section className="loginContainer">
          <div className="loginCard">
            <span className="topIconBorder"></span>
            <main>
              <h3 className="login">Log in</h3>
              <div>
                <label htmlFor="Email Address" className="loginLabel">
                  Email Address
                </label>
                <div className="textContainer">
                  <input
                    name="email"
                    value={data.email}
                    type="text"
                    placeholder="Enter your email address"
                    className="inputStyles"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="passwordContainer">
                <label htmlFor="Password" className="loginLabel">
                  Password
                </label>
                <div className="textContainer">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="inputStyles"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </main>

            <section className="btnContainer">
              <button
                type="submit"
                className="signInButton"
                onClick={() => {
                  handleSubmitForm();
                  // setVerify(true);
                }}
              >
                SIGN IN
              </button>
            </section>

            {verify && (
              <Verification setVerify={setVerify} openModal={verify} />
            )}

            <hr className="horizontalRule" />

            <footer>
              {openModal && (
                <ForgotPassDialog
                  setOpenModal={setOpenModal}
                  open={openModal}
                />
              )}

              <p
                className="forgotPassword"
                onClick={(e) => {
                  setOpenModal(true);
                }}
              >
                Forgot password?
              </p>

              <p className="signUp">
                Don’t have an account?
                <span className="signupBtn" onClick={handleSignup}>
                  Sign up
                </span>
              </p>
            </footer>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
