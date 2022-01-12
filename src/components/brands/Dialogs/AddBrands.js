import React from "react";

const AddBrands = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          justifyContent: "center",
          background: "#E5E5E5",
          height: "100%",
          width: "100%",
        }}
      >
        <h3>Add Brand</h3>
        <main>
          <form>
            <div>
              <label>01. Brand Name </label>
              <input type="text" />
            </div>
            <div>
              <label>02. Brand Logo </label>
              <input type="file" />
            </div>
          </form>
        </main>
        <footer>
          <button>Submit</button>
          <button>Clear All</button>
        </footer>
      </div>
    </>
  );
};

export default AddBrands;
