import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "../../api/instance";
import moment from "moment";
import Sidebar from "../common/sidebar";

const Brochure = () => {
  const [data, setData] = useState([]);

  const fetchBrochure = () => {
    axios
      .get(`/Brochure`)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBrochure();
  }, []);

  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>

        <div className="navbarTop">
          <h3 className="navbarTopHeading">Merchandise</h3>
          <Navigation />

          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "100%" }}>
              <section>
                <main>
                  <h4>Brochure</h4>
                  {data.map(({ id, brochure, brochureName, date }) => {
                    return (
                      <>
                        <div
                          className="d-flex align-content-center  justify-content-between"
                          style={{ marginRight: "22rem" }}
                        >
                          <p className="mt-4" key={id}>
                            <b>{brochureName}</b>,
                            {moment(date).format("MMMM Do, YYYY")}
                          </p>

                          <div
                            style={{
                              marginTop: "0.5rem",
                              marginBottom: "1rem",
                            }}
                          >
                            <a
                              href={brochure}
                              rel="noopener noreferrer"
                              download
                            >
                              <button className="SaveNextBtn">
                                Download Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </main>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brochure;
