import React, { useState } from "react";

const AddStore = () => {
  const [data, setData] = useState({});

  return (
    <>
      <section
        style={{
          backgroundColor: "#E5E5E5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "162px",
        }}
      >
        <head>
          <h2>Add Store</h2>
          <hr />
        </head>
        <main>
          <label>01. Dealer ID </label>
          <input type="text" />
        </main>
      </section>
    </>
  );
};

export default AddStore;
