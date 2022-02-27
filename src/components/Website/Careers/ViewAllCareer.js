import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import axios from "../../../api/instance";
import Sidebar from "../../common/sidebar";

const ViewAllCareer = () => {
  const [data, setData] = useState([]);

  const fetchBrands = () => {
    axios
      .get(`/jobApplication`)
      .then((result) => {
        setData(result.data.applications);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  //   !Delete Job
  const handleDeleteJob = (id) => {
    axios
      .delete(`jobApplication/delete/${id}`)
      .then((result) => {
        toast.success("Job Deleted SuccessFully");
        fetchBrands();
      })
      .catch((err) => {
        toast.error("An error Occurred");
      });
  };

  const history = useHistory();
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>

        <div
          className="TableInfo"
          style={{
            width: "90vw",
            marginTop: "5rem",
            marginLeft: "5rem",
          }}
        >
          <div className="d-flex justify-content-between align-content-center mb-5">
            <div
              onClick={() => {
                history.goBack();
              }}
            >
              <h2>
                <span> {"<"} </span> Back to Careers{" "}
              </h2>
            </div>
          </div>
          <Table bordered responsive borderless>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number </th>
                <th>Email</th>
                {/* <th>Experience</th> */}
                <th>Resume</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(({ firstName, id, phone, email, resume }) => (
                <tr key={id}>
                  <td>{firstName}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  {/* <td>-</td> */}
                  <td>
                    <a href={resume} rel="noopener noreferrer" download>
                      <button
                        style={{
                          outline: "none",
                          fontSize: "16px",
                          border: "none",
                          background: "#191919",
                          color: "#Fff",
                          padding: "8px",
                        }}
                      >
                        Download Resume
                      </button>
                    </a>
                  </td>
                  <td
                    onClick={() => {
                      handleDeleteJob(id);
                    }}
                  >
                    <button className="tableEditBtn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default ViewAllCareer;
