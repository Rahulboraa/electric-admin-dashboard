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
      .get(`/store`)
      .then((result) => {
        setData(result.data.storedata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    AddStore();
  }, []);

  const history = useHistory();

  const handleAddStore = () => {
    history.push("./addstore");
  };

  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Stores</h3>
          <nav className="navbarContainer">
            <NavLink
              to="/storeapplication"
              className="navlinkUnactive"
              activeClassName="navbaractive"
            >
              <span> New Store Applications</span>
            </NavLink>
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
                  data?.map(
                    ({
                      id,
                      dealerId,
                      dealerName,
                      city1,
                      storeType,
                      budget,
                      storeArea,
                    }) => (
                      <React.Fragment key={id}>
                        <tr>
                          <td>{id}</td>
                          <td>{storeType}</td>
                          <td>{city1}</td>
                          <td>{dealerName}</td>
                          <td>{dealerId}</td>
                        </tr>
                      </React.Fragment>
                    )
                  )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
