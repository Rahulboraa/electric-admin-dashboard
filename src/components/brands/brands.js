import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import axios from "../../api/instance";
import Sidebar from "../common/sidebar";
import Navigation from "../Vehicle/Navigation/Navigation";
import moment from "moment";

const Brands = () => {
  const handleBrand = () => {
    history.push("./addbrands");
  };

  const [data, setData] = useState([]);

  const fetchBrands = () => {
    axios
      .get(`/brand?page=1&limit=10`)
      .then((result) => {
        setData(result.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleEditBrand = (id) => {
    history.push(`./brands/edit/${id}`);
  };

  const history = useHistory();

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
          <div className="TableInfo">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <th>Collaboration Date </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map(({ brandName, id, logo, collaborationDate }) => (
                  <tr key={id}>
                    <td>{brandName}</td>
                    <td>{moment(collaborationDate).format("MMMM Do, YYYY")}</td>
                    <td
                      onClick={() => {
                        handleEditBrand(id);
                      }}
                    >
                      Edit Details
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
