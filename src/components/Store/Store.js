import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../common/sidebar";
import axios from "../../api/instance";

const Store = () => {
  // !Fetching Store
  const [data, setData] = useState(null);

  const AddStore = () => {
    axios
      .get(`/store?page=1&limit=20`)
      .then((result) => {
        setData(result.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    AddStore();
  }, []);

  const handleAddStore = () => {
    history.push("./addstore");
  };

  const handleEditStore = (id) => {
    history.push(`./editstore/${id}`);
  };
  const history = useHistory();

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Stores</h3>
          <nav className="navbarContainer">
            <NavLink
              to="/store"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span>Stores</span>
            </NavLink>
          </nav>
          <div
            style={{
              marginBottom: "2.18rem",
            }}
            className="subHeadingButton"
          >
            <h4> Stores</h4>
            <button className="mainAddBtn" onClick={handleAddStore}>
              Add Store
            </button>
          </div>
          <div className="TableInfo">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <th>Store ID</th>
                  <th>Store Type</th>
                  <th>Location</th>
                  <th>Dealer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 &&
                  data?.map(({ id, dealerName, storeType, city1 }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{storeType}</td>
                      <td>{city1}</td>
                      <td>{dealerName}</td>
                      <td
                        onClick={() => {
                          handleEditStore(id);
                        }}
                      >
                        Edit Store
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

export default Store;
