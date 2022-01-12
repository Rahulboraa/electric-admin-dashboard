import React, { useEffect, useState } from "react";
import axios from "../../api/instance";

const RecentPublications = () => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [recent_image, setImageSelected] = useState("");

  const getToken = localStorage.getItem("token");

  const parsedLogin = JSON.parse(localStorage.getItem("loginUser"));

  const addProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recent_image", recent_image);
    formData.append("date", date);
    formData.append("text", text);
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
        `/update/${id}`,
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

  return (
    <>
      <form className="text-center" onSubmit={addProduct}>
        <h3>Recent Publication</h3>
        <input
          className="text-center"
          type="file"
          onChange={(e) => {
            setImageSelected(e.target.files[0]);
          }}
        />
        <div>
          <label htmlFor="Date">Date:&nbsp; </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="Name">Name:&nbsp;</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <br />

      <div>
        <h3>Display Recent Publications</h3>
        <div className="explore_heading" id="RecentPublication">
          <div className="topWrapper"></div>
          <p className="exploreCreative">Recent Publications</p>
        </div>
        {data?.map(({ title, text, date, image, id }) => {
          return (
            <React.Fragment key={id}>
              <div style={{ border: "1px solid black", marginBottom: "16px" }}>
                <p>{title}</p>
                <p>{text}</p>
                <p>{date}</p>
                <figure>
                  <img
                    src={image}
                    alt=""
                    style={{ width: "300px", height: "200px" }}
                  />
                </figure>
                <button
                  onClick={() => {
                    handleRecentPublicationId(id);
                  }}
                >
                  Update Recent Publication
                </button>

                <br />
                <br />
                <button
                  onClick={() => {
                    RemoveRecentPublication(id);
                  }}
                >
                  Delete
                </button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default RecentPublications;
