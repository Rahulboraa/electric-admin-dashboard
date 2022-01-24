import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../common/sidebar";
import gallery from "../../../assets/Gallery/gallery.svg";
import gallery2 from "../../../assets/Gallery/gallery2.svg";
import gallery3 from "../../../assets/Gallery/galllery3.svg";
import { useHistory } from "react-router-dom";
import axios from "../../../api/instance";

const Gallery = () => {
  const history = useHistory();
  const handleAddImage = () => {
    history.push("./addgallery");
  };

  // !Fetch Gallery
  const [data, setData] = useState([]);
  const FetchGallery = () => {
    axios
      .get("/gallery")
      .then((result) => {
        setData(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchGallery();
  }, []);

  return (
    <>
      <section>
        <div className="d-flex">
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

            <div
              className="subHeadingButton"
              style={{ marginBottom: "2.18rem", width: "85%" }}
            >
              <div>
                <h4>Gallery</h4>
              </div>
              <div>
                <button className="mainAddBtn" onClick={handleAddImage}>
                  Add Image
                </button>
              </div>
            </div>

            {/* Dummy Image Section */}

            <section className="gallery_list">
              {data?.map((item, i) => (
                <>
                  <div className="gallery_item">
                    <img
                      src={item?.imageUrl}
                      style={{
                        objectFit: "cover",
                        width: "247px",
                        height: "190px",
                      }}
                    />
                  </div>
                </>
              ))}
            </section>

            {/* Dummy Image Section */}
            <section
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2.5rem",
                marginTop: "1.5rem",
                visibility: "hidden",
              }}
            >
              <figure>
                <img src={gallery2} alt="gallery" />
              </figure>
              <figure>
                <img src={gallery2} alt="gallery" />
              </figure>
              <figure>
                <img src={gallery2} alt="gallery" />
              </figure>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
