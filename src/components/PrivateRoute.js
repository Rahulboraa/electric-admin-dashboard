import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const parsedLogin = JSON?.parse(localStorage.getItem("loginUser"));

  return parsedLogin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
