import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Table } from "reactstrap";
import axios from "../../../api/instance";
import member from "../../../assets/Team/member.svg";
import member2 from "../../../assets/Team/member2.svg";
import Pagination from "../../common/Pagination/Pagination";
import Sidebar from "../../common/sidebar";
import GalleryNavigation from "../Gallery/Navigation/GalleryNavigation";

const Testimonials = () => {
  const history = useHistory();
  const handleTestimonial = () => {
    history.push("./addtestimonial");
  };

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = 3;

  const fetchTestimonial = () => {
    axios
      .get(`/review/?page=${currentPage}&limit=${2}`)
      .then((result) => {
        setData(result.data.data.results);
        setPageCount(
          Math.ceil(result.data.data.next.totalCount / itemsPerPage)
        );
        console.log(result.data.data, "test");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const handlePageClick = (e) => {
    console.log(e, "event");
    setCurrentPage(e.selected + 1);
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
                  {data?.length > 0 &&
                    data?.map((item) => (
                      <tr key={item.id}>
                        <td>{new Date(item.date).toDateString()}</td>
                        <td>
                          <img
                            src={item.dealerImage[0]}
                            alt="member"
                            style={{
                              marginRight: "10px",
                              height: "2rem",
                              width: "2rem",
                              borderRadius: "50%",
                            }}
                          />
                          {item.dealerName}
                        </td>
                        <td>{item.dealerType}</td>
                        <td>{item.review}</td>
                        <td>Edit Testimonial</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount + 1}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
