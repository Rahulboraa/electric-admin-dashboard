import React, { useEffect, useState } from "react";
import axios from "../../../api/instance";
import Sidebar from "../../common/sidebar";
import { Table } from "reactstrap";
import { useHistory } from "react-router-dom";
import GalleryNavigation from "../Gallery/Navigation/GalleryNavigation";
import Pagination from "../../common/Pagination/Pagination";

const RecentPublication = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = 2;

  // !FETCH RECENT PUBLICATIONS
  const handleRecentPublication = () => {
    axios
      .get(`/recentPub?page=${currentPage}&limit=${2}`)
      .then((result) => {
        console.log(result.data.data.results, "====");
        setData(result.data.data.results);
        setPageCount(
          Math.ceil(result.data.data.next.totalCount / itemsPerPage)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleRecentPublication();
  }, [currentPage]);

  // !UPDATE RECENT PUBLICATION
  const handleRecentPublicationId = (id) => {
    axios
      .post(`/recentPub/update/${id}`, { text: "hello" })
      .then((result) => {
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // !Delete RECENT PUBLICATION
  const RemoveRecentPublication = (id) => {
    axios
      .delete(`/recentPub/delete/${id}`)
      .then((result) => {
        if (result.data.status === true) {
          handleRecentPublication();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   !Add Recent Publication Route
  const history = useHistory();
  const addRecentPublication = () => {
    history.push("./addrecentpublication");
  };

  const handleEditPublications = (id) => {
    console.log(id);
    history.push(`/editrecentpublication/${id}`);
  };

  const handlePageClick = (e) => {
    console.log(e, "event");
    setCurrentPage(e.selected + 1);
  };

  return (
    <>
      <section className="d-flex">
        <Sidebar />

        <div className="navbarTop">
          <h3 className="navbarTopHeading">Websites</h3>
          <nav className="navbarContainer">
            <GalleryNavigation />
          </nav>
          <div style={{ marginBottom: "2.18rem" }} className="subHeadingButton">
            <h4>Recent Publications</h4>
            <button className="mainAddBtn" onClick={addRecentPublication}>
              New Publication
            </button>
          </div>
          <div className="TableInfo">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <th>Publication Date</th>
                  <th>Feature Image</th>
                  <th>Publication Title</th>
                  <th>Publication Document</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 &&
                  data?.map((items) => (
                    <tr key={items.id}>
                      <td>{items.descripiton}</td>
                      <td>
                        <img
                          src={items.image}
                          alt="Image"
                          style={{ width: "200px", height: "100px" }}
                        />
                      </td>
                      <td>{items.title}</td>
                      <td>
                        <img
                          src={items.recentPDF}
                          alt="recentPDF"
                          style={{ width: "200px", height: "100px" }}
                        />
                      </td>
                      <td
                        onClick={() => {
                          handleEditPublications(items.id);
                        }}
                      >
                        Edit Publication
                      </td>
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
      </section>
    </>
  );
};

export default RecentPublication;
