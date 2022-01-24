import React, { useState, useEffect } from "react";
import Sidebar from "../../common/sidebar";
import gallery from "../../../assets/Gallery/gallery.svg";
import gallery2 from "../../../assets/Gallery/gallery2.svg";
import gallery3 from "../../../assets/Gallery/galllery3.svg";
import GalleryNavigation from "./Navigation/GalleryNavigation";
// import InfiniteScroll from "react-infinite-scroll-component";

function Gallery() {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar />
        </div>
        <div className="navbarTop">
          <h3 className="navbarTopHeading">Websites</h3>
          <nav className="navbarContainer">
            <GalleryNavigation />
          </nav>

          <div className="subHeadingButton">
            <div>
              <h4>Gallery</h4>
            </div>
            <div>
              <button className="mainAddBtn">Add Image</button>
            </div>
          </div>
        </div>
      </div>
      {/* <InfiniteScroll
        // dataLength={items.length}
        // next={fetchData}
        // hasMore={hasMore}
        loader={<h2>Loading ....</h2>}
        endMessage={
          <h3 style={{ textAlign: "center" }}>You have came to an end!</h3>
        }
      > */}
      <div className="container">
        <div className="row m-2">
          <>
            <section className="gallery_list">
              <>
                <div
                  className="gallery_item"
                  style={{ display: "flex" }}
                  // key={item.id}
                >
                  <img
                    // src={item?.imageUrl}
                    style={{
                      objectFit: "cover",
                      width: "247px",
                      height: "190px",
                    }}
                  />
                </div>
              </>
            </section>
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
          </>
        </div>
      </div>
      {/* </InfiniteScroll> */}
    </>
  );
}

export default Gallery;
