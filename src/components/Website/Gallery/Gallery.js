import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../common/sidebar";
import gallery from "../../../assets/Gallery/gallery.svg";
import gallery2 from "../../../assets/Gallery/gallery2.svg";
import gallery3 from "../../../assets/Gallery/galllery3.svg";
import { useHistory } from "react-router-dom";
import axios from "../../../api/instance";
import GalleryNavigation from "./Navigation/GalleryNavigation";
import { toast } from "react-toastify";

const Gallery = () => {
  const history = useHistory();
  // !Fetch Gallery
  const [data, setData] = useState([]);
  const FetchGallery = () => {
    axios
      .get(`gallery?page=1&limit=30`)
      .then((result) => {
        setData(result.data.data.results);
        // console.log(result.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FetchGallery();
  }, []);

  const handleDeleteGallery = (id) => {
    axios
      .delete(`gallery/delete/${id}`)
      .then((result) => {
        toast.success("Image Deleted Successfully");
        FetchGallery();
      })
      .catch((err) => {
        toast.error("An Error Occurred");
      });
  };

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

            <section>
              <div className="d-flex justify-content-between align-content-center mb-5">
                <div>
                  <h4>Gallery</h4>
                </div>

                <div>
                  <button
                    className="mainAddBtn"
                    onClick={() => {
                      history.push("./addgallery");
                    }}
                  >
                    Add Image
                  </button>
                </div>
              </div>

              {/* Dummy Image Section */}

              <section className="gallery_list">
                {data?.map((item, i) => (
                  <>
                    <div
                      className="gallery_item"
                      style={{ flexDirection: "column", marginBottom: "1rem" }}
                    >
                      <img
                        src={item?.image}
                        style={{
                          objectFit: "cover",
                          width: "247px",
                          height: "190px",
                        }}
                      />
                      <div
                        onClick={() => {
                          handleDeleteGallery(item.id);
                        }}
                        style={{
                          display: "block",
                          color: "red",
                          border: "1px solid black",
                          background: "#fff",
                          padding: "5px",
                          marginTop: "1rem",
                        }}
                      >
                        Delete
                      </div>
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
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
