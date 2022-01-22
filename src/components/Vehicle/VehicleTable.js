import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import CommonTable from "../common/CommonTable";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";

const VehicleTable = () => {
  const [data, setData] = useState();
  const fetchVehicleDetails = () => {
    axios
      .get(`/product`)
      .then((result) => {
        setData(result.data.products);
        console.log(result.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchVehicleDetails();
  }, []);
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <NavLink
              to="/vehicleapplication"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Vehicles Application</span>
            </NavLink>

            <NavLink
              to="/vehicle"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Vehicles</span>
            </NavLink>

            <NavLink
              to="/brands"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Brand</span>
            </NavLink>
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Vehicles Applications</h4>
          <Table bordered responsive borderless>
            <thead>
              <tr>
                <th>Application Number</th>
                <th>Brand Name</th>
                <th>Vehicle Name</th>
                <th>Dealer Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(({ id, productName, vehicleType, text }) => {
                return (
                  <tr>
                    <React.Fragment key={id}>
                      <td>{id}</td>
                      <td>{productName}</td>
                      <td>{text}</td>
                      <td> - </td>
                      <td> - </td>
                      <td>Edit Details</td>
                    </React.Fragment>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default VehicleTable;
