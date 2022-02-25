import axios from "../../../api/instance";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import Sidebar from "../../common/sidebar";
import GalleryNavigation from "../Gallery/Navigation/GalleryNavigation";
import Kebab from "./subComponent/kabeb";

function Careers() {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState([]);
  const fetchJob = () => {
    axios
      .get("/career/getJobs")
      .then((result) => {
        setData(result.data.jobs);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //POST
  const Careers = () => {
    const handleRecentPublicationId = (id) => {
      axios
        .post(`/career/addJob/${id}`, { text: "hello" })
        .then((result) => {
          console.log(result.data.jobs);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <section>
      <div className="d-flex">
        <Sidebar />
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Websites</h3>
          <nav className="navbarContainer">
            <GalleryNavigation />
          </nav>

          <div className="subHeadingButton">
            <div>
              <h4>Careers</h4>
            </div>
            <div>
              <button className="mainAddBtn">New Opening</button>
            </div>
          </div>
          <div className="TableInfo">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <td colSpan={5}>
                    <th
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                      }}
                    >
                      <th
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <input
                          type="radio"
                          id="activated"
                          name="select"
                          value="activated"
                          checked
                          onClick={() => {
                            setToggle(false);
                          }}
                        />
                        <label for="activated">Activated</label>
                      </th>
                      <th
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                        }}
                      >
                        <input
                          type="radio"
                          id="deactivated"
                          name="select"
                          value="deactivated"
                          onClick={() => {
                            setToggle(true);
                          }}
                        />
                        <label for="deactivated">Deactivated</label>
                      </th>
                    </th>
                  </td>
                  <td>
                    <a href="/" style={{ color: "black", cursor: "pointer" }}>
                      View All Resumes
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Active From</th>
                  <th>Job Title</th>
                  <th>Department</th>
                  <th>Location</th>
                  <th>Application Received</th>
                  <th>Action</th>
                </tr>
              </thead>

              {toggle ? (
                <tbody>
                  {data?.map((item) => (
                    <tr>
                      <React.Fragment key={item.id}>
                        <td>{item.createdAt}</td>
                        <td>{item.description}</td>
                        <td>{item.role}</td>
                        <td>{item.location}</td>
                        <td>{item.experience}</td>
                        <td>
                          <Kebab />
                        </td>
                      </React.Fragment>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  {data?.map((item) => (
                    <tr>
                      <React.Fragment key={item.id}>
                        <td>{item.createdAt}</td>
                        <td>{item.description}</td>
                        <td>{item.role}</td>
                        <td>{item.location}</td>
                        <td>{item.experience}</td>
                        <td>
                          <Kebab />
                        </td>
                      </React.Fragment>
                    </tr>
                  ))}
                </tbody>
              )}
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
