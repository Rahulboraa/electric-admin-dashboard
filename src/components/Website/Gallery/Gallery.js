// // import React, { useState, useEffect } from "react";
// // import { NavLink } from "react-router-dom";
// // import Sidebar from "../../common/sidebar";
import gallery from "../../../assets/Gallery/gallery.svg";
import gallery2 from "../../../assets/Gallery/gallery2.svg";
import gallery3 from "../../../assets/Gallery/galllery3.svg";
// // import { useHistory } from "react-router-dom";
// // import axios from "../../../api/instance";
// // import InfiniteScroll from "react-infinite-scroll-component";

// // const Gallery = () => {
// //   const history = useHistory();
// //   const handleAddImage = () => {
// //     history.push("./addgallery");
// //   };

// //   // !Fetch Gallery
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [page, setPage] = useState(1);

// //   const FetchGallery = () => {
// //     axios
// //       .get("/gallery")
// //       .then((result) => {
// //         setData(result.data.data);
// //         console.log(result.data.data);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   };

// //   useEffect(() => {
// //     FetchGallery();
// //   }, []);

// //   if (loading === true) {
// //     return <h2>Loading....</h2>;
// //   }

// //   return (
// //     <>
// //       <section>
// //         <div className="d-flex">
// //           <div>
// //             <Sidebar />
// //           </div>
// //           <div className="navbarTop">
// //             <h3 className="navbarTopHeading">Websites</h3>
// //             <nav className="navbarContainer">
// //               <NavLink
// //                 to="/recentpublications"
// //                 className="navlinkUnactive"
// //                 activeClassName="navbaractive"
// //               >
// //                 <span>Recent Publications</span>
// //               </NavLink>

// //               <NavLink
// //                 to="/gallery"
// //                 className="navlinkUnactive"
// //                 activeClassName="navbaractive"
// //               >
// //                 <span>Gallery</span>
// //               </NavLink>

// //               <NavLink
// //                 to="/testimonials"
// //                 className="navlinkUnactive"
// //                 activeClassName="navbaractive"
// //               >
// //                 <span>Testimonials</span>
// //               </NavLink>
// //               <hr />
// //             </nav>

// //             <div
// //               className="d-flex align-items-center justify-content-between"
// //               style={{ marginBottom: "2.18rem" }}
// //             >
// //               <div>
// //                 <h4>Gallery</h4>
// //               </div>
// //               <div>
// //                 <button className="mainAddBtn" onClick={handleAddImage}>
// //                   Add Image
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Dummy Image Section */}

// // <section className="gallery_list">
// //   {data?.map((item, i) => (
// //     <>
// //       <div className="gallery_item">
// //         <img
// //           src={item?.imageUrl}
// //           style={{
// //             objectFit: "cover",
// //             width: "247px",
// //             height: "190px",
// //           }}
// //         />
// //       </div>
// //     </>
// //   ))}
// // </section>

// //             {/* Dummy Image Section */}
// //             <section
// //               style={{
// //                 display: "flex",
// //                 justifyContent: "space-between",
// //                 gap: "2.5rem",
// //                 marginTop: "1.5rem",
// //                 visibility: "hidden",
// //               }}
// //             >
// //               <figure>
// //                 <img src={gallery2} alt="gallery" />
// //               </figure>
// //               <figure>
// //                 <img src={gallery2} alt="gallery" />
// //               </figure>
// //               <figure>
// //                 <img src={gallery2} alt="gallery" />
// //               </figure>
// //             </section>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Gallery;

// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import Sidebar from "../../common/sidebar";
// import { useHistory } from "react-router-dom";
// import axios from "../../../api/instance";
// import InfiniteScroll from "react-infinite-scroll-component";

// const Gallery = () => {
//   const history = useHistory();
//   const handleAddImage = () => {
//     history.push("./addgallery");
//   };

//   // !Fetch Gallery
//   const [items, setItems] = useState([]);
//   const [hasMore, sethasMore] = useState(true);
//   const [page, setpage] = useState(2);

//   const FetchGallery = () => {
//     axios
//       .get("/gallery?page=1&limit=10")
//       .then((result) => {
//         setItems(result.data.data.results);
//         console.log(result.data.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   console.log(items, "items");

//   useEffect(() => {
//     FetchGallery();
//   }, []);

//   // !Fetch Loader
//   const fetchComments = async () => {
//     const res = await fetch(
//       `http://be-electricone-v2.antino.ca/gallery?page=${page}&limit=10`
//     );
//     const data = await res.json();
//     console.log(data, "data");
//     return data;
//   };

//   const fetchData = async () => {
//     const commentsFormServer = await fetchComments();
//     setItems([...items, ...commentsFormServer]);
//     sethasMore(false);
//     if (commentsFormServer.length === 0 || commentsFormServer.length < 10) {
//       setpage(page + 1);
//     }
//   };

//   return (
//     <>
//       {/* Infinity Scroll */}
//       <section>
//         <InfiniteScroll
//           //This is important field to render the next data
//           dataLength={items.length}
//           next={fetchData}
//           hasMore={hasMore}
//           loader={<h4>Loading...</h4>}
//           endMessage={
//             <p style={{ textAlign: "center" }}>
//               <b>Yay! You have seen it all</b>
//             </p>
//           }
//         >
//           <section className="gallery_list">
//             {items.length > 0 &&
//               items?.map((item, i) => (
//                 <>
//                   <div
//                     className="gallery_item"
//                     style={{ display: "flex" }}
//                     key={item.id}
//                   >
//                     <img
//                       src={item?.imageUrl}
//                       style={{
//                         objectFit: "cover",
//                         width: "247px",
//                         height: "190px",
//                       }}
//                     />
//                   </div>
//                 </>
//               ))}
//           </section>
//           <section
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               gap: "2.5rem",
//               marginTop: "1.5rem",
//               visibility: "hidden",
//             }}
//           >
//             <figure>
//               <img src={gallery2} alt="gallery" />
//             </figure>
//             <figure>
//               <img src={gallery2} alt="gallery" />
//             </figure>
//             <figure>
//               <img src={gallery2} alt="gallery" />
//             </figure>
//           </section>
//         </InfiniteScroll>
//       </section>
//     </>
//   );
// };

// export default Gallery;

import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
// import Comment from "./components/Comment";
// import Loader from "./components/Loader";
// import EndMsg from "./components/EndMsg";

function Gallery() {
  const [items, setItems] = useState([]);

  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(2);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `http://be-electricone-v2.antino.ca/gallery?page=1&limit=10`
      );
      const data = await res.json();
      setItems(data.data.results);
    };

    getComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `http://be-electricone-v2.antino.ca/gallery?page=${page}&limit=10`
    );
    const data = await res.json();
    return data.data.results;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();
    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 10) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<h2>Loading ....</h2>}
      endMessage={
        <h3 style={{ textAlign: "center" }}>You have came to an end!</h3>
      }
    >
      <div className="container">
        <div className="row m-2">
          {items.map((item) => {
            return (
              <>
                <section className="gallery_list">
                  {items.length > 0 &&
                    items?.map((item, i) => (
                      <>
                        <div
                          className="gallery_item"
                          style={{ display: "flex" }}
                          key={item.id}
                        >
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
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default Gallery;
