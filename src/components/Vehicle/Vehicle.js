import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import axios from "../../api/instance";
import Sidebar from "../common/sidebar";
import Navigation from "./Navigation/Navigation";

const Vehicle = () => {
  const history = useHistory();

  const addVehicle = () => {
    history.push("./addvehicle");
  };

  const [data, setData] = useState();

  const fetchVehicleDetails = () => {
    axios
      .get(`/product/get`)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchVehicleDetails();
  }, []);

  const handleRedirect = (id) => {
    history.push(`./vehicle/edit/${id}`);
  };

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
          <div className="addBrandNav">
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
              {data?.map(({ id, vehicleType, vehicleName, brand }) => {
                return (
                  <tr>
                    <React.Fragment key={id}>
                      <td>{id}</td>
                      <td>{brand}</td>
                      <td>{vehicleName}</td>
                      <td>{vehicleType}</td>
                      <td
                        onClick={() => {
                          handleRedirect(id);
                        }}
                      >
                        Edit Details
                      </td>
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
