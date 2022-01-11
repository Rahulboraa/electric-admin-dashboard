import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "../../../api/instance";

const ForgotPassDialog = ({ setOpenModal, open }) => {
  // !Forgot Password
  const [password, setForgetPassword] = useState("");
  const getToken = localStorage.getItem("token");

  const handleForgotPassword = () => {
    axios
      .post(
        `/user/updatePassword`,
        { password },
        {
          headers: {
            authorization: getToken,
          },
        }
      )
      .then((data) => {
        setForgetPassword(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        isOpen={open}
        toggle={() => {
          setOpenModal(false);
        }}
      >
        <ModalHeader style={{ borderTopColor: "#FFF" }}>
          <span className="forgotHeader"> Forgot Password ?</span>
        </ModalHeader>
        <ModalBody>
          <p className="modalBody">
            Enter your e-mail address and get a link to reset your password.
          </p>
          <div>
            <input
              type="text"
              placeholder="Enter Password"
              className="emailAddress"
              value={password}
              onChange={(e) => {
                setForgetPassword(e.target.value);
              }}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="forgotBtn"
            onClick={() => {
              setOpenModal(false);
              handleForgotPassword();
            }}
          >
            Submit
          </button>
        </ModalFooter>
      </Modal>
      </>
  );
};

export default ForgotPassDialog;
