import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const history = useHistory();
  const parsedLogin = JSON?.parse(localStorage.getItem("loginUser"));

  useEffect(() => {
    if (!parsedLogin) {
      history.push("./");
    }
  }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default PrivateRoute;
