import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";
import Navigation from "./Navigation/Navigation";
import { useHistory } from "react-router-dom";

const VehicleTable = () => {
  const [data, setData] = useState();
  const fetchVehicleDetails = () => {
    axios
      .get(`/product`)
      .then((result) => {
        setData(result.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchVehicleDetails();
  }, []);

  const history = useHistory();

  const handleRedirect = (id) => {
    history.push(`/edit/${id}`);
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="vehicleFull">
          <h3 className="navbarTopHeading">Vehicles</h3>
          <nav className="navbarContainer">
            <Navigation />
          </nav>
          <h4 style={{ marginBottom: "2.18rem" }}> Vehicles Applications</h4>
          <div
            style={{
              marginBottom: "2rem",
            }}
          >
            {/* <button className="buttonStyle">Back</button>
            <span className="VehicleHead">LOFI</span>
            <button className="buttonStyle">Back To Application</button> */}
          </div>
          <div className="TableInfo">
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
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{productName}</td>
                      <td>{text}</td>
                      <td> - </td>
                      <td> - </td>
                      <td
                        onClick={() => {
                          handleRedirect(id);
                        }}
                      >
                        Edit Details
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleTable;
