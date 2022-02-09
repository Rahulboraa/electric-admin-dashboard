import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import axios from "../../../api/instance";
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
      .get("/review?page=1&limit=20")
      .then((result) => {
        setData(result.data.data.results);
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const handleTestimonialEdit = (id) => {
    console.log(id);
    history.push(`/edittestimonial/${id}`);
  };

  return (
    <>
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
                <h4>Testimonials</h4>
              </div>
              <div>
                <button className="mainAddBtn" onClick={handleTestimonial}>
                  Add Testimonial
                </button>
              </div>
            </div>
            <div className="TableInfo">
              <Table bordered responsive borderless>
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
                  {data?.map(
                    ({
                      id,
                      dealerImage,
                      dealerType,
                      review,
                      dealerName,
                      date,
                    }) => {
                      return (
                        <tr key={id}>
                          <td>{moment(date).format("MMMM Do, YYYY")}</td>
                          <td>{dealerName}</td>
                          <td>{dealerType}</td>
                          <td>{review}</td>
                          <td
                            onClick={() => {
                              handleTestimonialEdit(id);
                            }}
                          >
                            Edit
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
