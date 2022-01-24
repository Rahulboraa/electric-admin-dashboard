import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import axios from "../../../api/instance";
import member from "../../../assets/Team/member.svg";
import member2 from "../../../assets/Team/member2.svg";
import Sidebar from "../../common/sidebar";
import GalleryNavigation from "../Gallery/Navigation/GalleryNavigation";

const Testimonials = () => {
  const history = useHistory();
  const handleTestimonial = () => {
    history.push("./addtestimonial");
  };

  const [data, setData] = useState([]);
  const fetchTestimonial = () => {
    axios
      .get("/review")
      .then((result) => {
        setData(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTestimonial();
  }, []);

  return (
    <>
      <section>
        <div className="d-flex">
          <div>
            <Sidebar />
          </div>
          <div className="navbarTop">
            <h3 className="navbarTopHeading">Websites</h3>
            <nav className="navbarContainer">
              <GalleryNavigation />
            </nav>

            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginBottom: "2.18rem" }}
            >
              <div>
                <h4>Testimonials</h4>
              </div>
              <div>
                <button className="mainAddBtn" onClick={handleTestimonial}>
                  Add Testimonial
                </button>
              </div>
            </div>
            <Table bordered responsive borderless style={{ width: "880px" }}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Customer </th>
                  <th>Dealership Type</th>
                  <th>Reviews</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 Dec, 2021</td>
                  <td>
                    <img
                      src={member2}
                      alt="member"
                      style={{ marginRight: "10px" }}
                    />
                    <p>Dianne Russell</p>
                  </td>
                  <td>Associate Director</td>
                  <td>Watch and pray that you might not enter...</td>
                  <td>Edit Testimonial</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
