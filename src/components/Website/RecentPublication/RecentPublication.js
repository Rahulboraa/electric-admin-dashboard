import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../api/instance";
import Sidebar from "../../common/sidebar";
import { Table } from "reactstrap";
import { useHistory } from "react-router-dom";
import GalleryNavigation from "../Gallery/Navigation/GalleryNavigation";

const RecentPublication = () => {
  const [data, setData] = useState([]);

  // !FETCH RECENT PUBLICATIONS
  const handleRecentPublication = () => {
    axios
      .get("/recentPub")
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleRecentPublication();
  }, []);

  console.log(data);

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
  return (
    <>
      <section className="d-flex">
        <div>
          <Sidebar />
        </div>

        <div className="navbarTop">
          <h3 className="navbarTopHeading">Websites</h3>
          <nav className="navbarContainer">
            <GalleryNavigation />
          </nav>
          <div
            style={{ marginBottom: "2.18rem" }}
            className="d-flex justify-content-between align-items-center"
          >
            <h4>Recent Publications</h4>
            <button className="mainAddBtn" onClick={addRecentPublication}>
              New Publication
            </button>
          </div>

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
              {data.length > 0 &&
                data?.map((items) => (
                  <tr>
                    <React.Fragment key={items.id}>
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
                      <td>Edit Publication</td>
                    </React.Fragment>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default RecentPublication;
