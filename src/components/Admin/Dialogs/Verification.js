import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "../../../api/instance";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Verification = ({ setVerify, verify }) => {
  const loginDetails = useSelector((state) => state.login.user);
  const history = useHistory();

  // !Verify OTP
  const handleOTPVerification = () => {
    if (loginDetails) {
      axios
        .post(`/user/sendOtp`, { email: loginDetails?.email })
        .then((result) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    handleOTPVerification();
  }, []);

  const [otp, setVerificationCode] = useState(null);

  const handleInputChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const userOTpData = { email: loginDetails?.email, otp: +otp };

  //! Storing Auth
  const handleSubmitOtp = () => {
    axios
      .post(`/user/verifyOtp`, userOTpData)
      .then((result) => {
        if (result.data) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal
        isOpen={verify}
        toggle={() => {
          setVerify(false);
        }}
      >
        <ModalHeader style={{ borderTopColor: "#FFF" }}>
          <span className="forgotHeader"> Verification </span>
        </ModalHeader>
        <ModalBody>
          <p className="modalBody">
            Enter the verification code sent in your email id &nbsp;
            <b>{loginDetails?.email}</b>
          </p>
          <div>
            <input
              type="number"
              placeholder="Enter Verification Code"
              className="emailAddress"
              value={parseInt(otp)}
              onChange={handleInputChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="forgotBtn"
            onClick={() => {
              handleSubmitOtp();
              setVerify(false);
            }}
          >
            Verify
          </button>
          <button
            className="resendBtn"
            onClick={() => {
              handleOTPVerification();
            }}
          >
            Resend
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Verification;
