import React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import axios from "../../api/instance";
import CommonTable from "../common/CommonTable";
import Sidebar from "../common/sidebar";
import Navigation from "../Vehicle/Navigation/Navigation";

const Brands = () => {
  const history = useHistory();
  const handleBrand = () => {
    history.push("./addbrands");
  };

  const fetchBrands = () => {
    return axios.get(`/brand`).catch((err) => {
      console.log(err);
    });
  };

  const { data } = useQuery("brands", fetchBrands);

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="vehicleFull">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <Navigation />
          <div className="subHeadingButton">
            <h4> Brands </h4>
            <button
              style={{ marginBottom: "8px" }}
              className="mainAddBtn"
              onClick={handleBrand}
            >
              Add Brand
            </button>
          </div>
          <CommonTable />
        </div>
      </div>
    </>
  );
};

export default Brands;
