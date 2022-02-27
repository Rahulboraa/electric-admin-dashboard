import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Table } from "reactstrap";
import axios from "../../../api/instance";
import Sidebar from "../../common/sidebar";
import GalleryNavigation from "../Gallery/Navigation/GalleryNavigation";

function Careers() {
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

  useEffect(() => {
    fetchJob();
  }, []);

  const history = useHistory();

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
              <button
                className="mainAddBtn"
                onClick={() => {
                  history.push("./newOpening");
                }}
              >
                New Opening
              </button>
            </div>
          </div>
          <div className="TableInfo">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <td colSpan={5}></td>
                  <td>
                    <Link to="/viewall">
                      <h6 style={{ color: "black", cursor: "pointer" }}>
                        View All Resumes
                      </h6>
                    </Link>
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

              <tbody>
                {data?.map((item) => (
                  <tr key={item._id}>
                    <td> {moment(item.createdAt).format("MMMM Do, YYYY")}</td>
                    <td>{item.description.split("\n")}</td>
                    <td>{item.role}</td>
                    <td>{item.location}</td>
                    <td>-</td>
                    <td
                      onClick={() => {
                        history.push(`editCareer/${item._id}`);
                      }}
                    >
                      <button className="tableEditBtn">Edit Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Careers;
