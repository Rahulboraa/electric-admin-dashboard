import axios from "../../api/instance";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, getUser } from "./LoginSlice";
import Verification from "../Admin/Dialogs/Verification";

const SignUp = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserValue({ ...userValue, [name]: value });
  };

  const [register, setRegister] = useState(null);

  const [verify, setVerify] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post(`/user/register/admin`, userValue)
      .then((data) => {
        setUserValue("");
        dispatch(registerUser(userValue));
        setRegister(data.data.msg);
        setVerify(data.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useHistory();

  const handleSignIn = () => {
    history.push("./login");
  };

  return (
    <>
      <section className="loginContainer">
        <form className="loginCard" onSubmit={handleSubmitForm}>
          <span className="topIconBorder"></span>
          <h3 className="login">Sign up</h3>

          <section className="firstLastName">
            <div>
              <label htmlFor="First Name" className="loginLabel">
                First Name
              </label>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="firstName"
                  name="firstName"
                  value={userValue.firstName}
                  onChange={handleInputForm}
                  autoComplete="off"
                />
              </div>
            </div>

            <div>
              <label htmlFor="Last Name" className="loginLabel">
                Last Name
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="firstName"
                  name="lastName"
                  value={userValue.lastName}
                  onChange={handleInputForm}
                  autoComplete="off"
                />
              </div>
            </div>
          </section>

          <div>
            <label htmlFor="Email Address" className="loginLabel">
              Email Address
            </label>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="inputStyles"
                name="email"
                value={userValue.email}
                onChange={handleInputForm}
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <label htmlFor="Mobile Number" className="loginLabel">
              Mobile Number
            </label>
            <div>
              <input
                type="text"
                placeholder="Mobile Number"
                className="inputStyles"
                name="phoneNumber"
                value={userValue.phoneNumber}
                onChange={handleInputForm}
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <label htmlFor="Password" className="loginLabel">
              Password
            </label>
            <div>
              <input
                type="password"
                placeholder="Enter password"
                className="inputStyles"
                name="password"
                value={userValue.password}
                onChange={handleInputForm}
                autoComplete="off"
              />
            </div>
          </div>

          <footer className="createAccount">
            <>
              <button className="signInButton" type="submit">
                Create Account
              </button>
              {verify && (
                <Verification
                  verify={verify}
                  setVerify={setVerify}
                  userValue={userValue}
                />
              )}
            </>
          </footer>

          <hr />
          <p className="forgotPassword">
            Have an account?{" "}
            <span onClick={handleSignIn} style={{ cursor: "default" }}>
              Sign in
            </span>
          </p>

          {/* <footer>
            <p>
              by creating an account, you are to Electric One’s
              <span>Terms of Service</span>
              and <br />
              have read and understood the <span>Privacy Policy.</span>
            </p>
          </footer> */}
        </form>
      </section>
    </>
  );
};

export default SignUp;
