import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../../api/instance";
import Sidebar from "../../common/sidebar";
import { Table } from "reactstrap";
import { useHistory } from "react-router-dom";

const RecentPublication = () => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [recent, setImageSelected] = useState("");
  const [recentPDF, setImageSelected2] = useState("");

  const getToken = localStorage.getItem("token");

  const parsedLogin = JSON.parse(localStorage.getItem("loginUser"));

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recent", recent);
    formData.append("date", date);
    formData.append("text", text);
    formData.append("recentPDF", recentPDF);
    axios
      .post(`/recentPub/add`, formData, {
        headers: {
          "x-access-token": getToken ? getToken : parsedLogin,
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  // !UPDATE RECENT PUBLICATION
  const handleRecentPublicationId = (id) => {
    axios
      .post(
        `/recentPub/update/${id}`,
        { text: "hello" },
        {
          headers: {
            "x-access-token": getToken ? getToken : parsedLogin,
          },
        }
      )
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
      .delete(`/recentPub/delete/${id}`, {
        headers: {
          "x-access-token": getToken ? getToken : parsedLogin,
        },
      })
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
        <Sidebar />

        <div className="navbarTop">
          <h3 className="navbarTopHeading">Websites</h3>
          <nav className="navbarContainer">
            <NavLink
              to="/recentpublications"
              className="navlinkUnactiveRecentPublication"
              activeClassName="navbaractiveRecentPublication"
            >
              <span>Recent Publications</span>
            </NavLink>

            <NavLink
              to="/gallery"
              className="navlinkUnactiveRecentPublication"
              activeClassName="navbaractiveRecentPublication"
            >
              <span>Gallery</span>
            </NavLink>

            <NavLink
              to="/testimonials"
              className="navlinkUnactiveRecentPublication"
              activeClassName="navbaractiveRecentPublication"
            >
              <span>Testimonials</span>
            </NavLink>
            <hr />
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
                <tr>
                  {/* <td>1 Dec, 2021</td>
                <td>
                  <img
                    src={member2}
                    alt="member"
                    style={{ marginRight: "10px" }}
                  />
                </td>
                <td>Associate Director</td>
                <td>Example.pdf</td>
                <td>Edit Publication</td> */}
                  {data.length > 0 &&
                    data?.map((items) => (
                      <>
                        <td></td>
                        <td>
                          <img src="" alt="" />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </>
                    ))}
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentPublication;
