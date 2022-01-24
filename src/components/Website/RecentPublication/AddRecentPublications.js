import React from "react";

const AddRecentPublications = () => {
  return (
    <>
      <form className="addform">
        <div className="addFormWidth">
          <div className="addformInner">
            <div>
              <h2>Add Publication</h2>
            </div>
            <div>
              <h4>X</h4>
            </div>
          </div>
          <hr />
          <main>
            <div>
              <label className="modalFormLabels">01. Feature Image</label>
              <div>
                <input
                  type="text"
                  placeholder="No file selected"
                  className="inputModalStyles"
                />
              </div>
            </div>
            <div>
              <label className="modalFormLabels">02. Publication Title</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Publication Title"
                  className="inputModalStyles"
                />
              </div>
            </div>
            <div>
              <label className="modalFormLabels">
                03. Publication Document
              </label>
              <div>
                <input
                  type="text"
                  placeholder="No file selected"
                  className="inputModalStyles"
                />
              </div>
            </div>
          </main>
          <div className="d-flex justify-content-between align-items-center inputModalStylesBtn">
            <div>
              <button className="SaveNextBtn">Submit</button>
            </div>
            <div>
              <button className="clearBtn">Clear All</button>
            </div>
          </div>
        </div>
      </form>

      {/* <form className="text-center"                                                                                                                                                        onSubmit={addProduct}>
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
            </div> */}
    </>
  );
};

export default AddRecentPublications;
