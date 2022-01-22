import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import axios from "../../api/instance";
import Sidebar from "../common/sidebar";
import Navigation from "./Navigation/Navigation";

const Vehicle = ({}) => {
  const history = useHistory();

  const handleBrand = () => {
    history.push("./brands");
  };

  const handleVehicleApplication = () => {
    history.push("./vehicleapplication");
  };

  const addVehicle = () => {
    history.push("./addvehicle");
  };

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
        <div style={{ marginLeft: "81px" }}>
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <Navigation />
          </nav>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2.18rem",
            }}
          >
            <h4> Vehicles </h4>
            <button
              style={{ marginBottom: "8px" }}
              className="mainAddBtn"
              onClick={addVehicle}
            >
              Add Vehicle
            </button>
          </div>
          <Table style={{ width: "880px" }} bordered responsive borderless>
            <thead>
              <tr>
                <th>Model Number</th>
                <th>Brand Name</th>
                <th>Vehicle Name</th>
                <th>Vehicle Type</th>
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
                      <td>{vehicleType}</td>
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

export default Vehicle;
