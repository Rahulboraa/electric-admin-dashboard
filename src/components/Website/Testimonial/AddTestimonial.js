import React, { useState } from "react";
import axios from "../../../api/instance";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddTestimonial = () => {
  const [data, setData] = useState({
    dealerName: "",
    companyName: "",
    review: "",
  });

  const { dealerImage, dealerName, review } = data;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // !Fetch Dealer Type
  const [dealer, setDealerType] = useState(null);
  const getDealerType = () => {
    axios
      .get("/dealerType")
      .then((result) => {
        setDealerType(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDealerType();
  }, []);

  const [dealerType, setDealer] = useState("");
  const showDealerChange = (e) => {
    setDealer(e.target.value);
  };

  // !Preview
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    //!free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  // !Submit Testimonial
  const formData = new FormData();
  formData.append("dealerName", dealerName);
  formData.append("dealerImage", selectedFile);
  formData.append("dealerType", dealerType);
  formData.append("review", review);
  // formData.append("date", date);

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    axios
      .post(`review/add`, formData)
      .then((result) => {
        toast.success("Testimonial Added");
        setData({});
        history.goBack();
      })
      .catch((err) => {
        toast.error("Please Fill the form");
        console.log(err);
      });
  };

  // !Clear User Input
  const handleClearAll = () => {
    setData({});
  };

  let history = useHistory();

  return (
    <>
      <form className="addform" onSubmit={handleAddTestimonial}>
        <div className="addFormWidth">
          <div className="addformInner">
            <h2>Add Testimonial</h2>
            <h4 onClick={() => history.goBack()}>X</h4>
          </div>

          <hr />

          <main className="inputGaping">
            <div>
              <label className="modalFormLabels">01. Dealer Name</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Dealer Name"
                  className="inputModalStyles"
                  name="dealerName"
                  value={dealerName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="modalFormLabels">02. Dealer’s Image</label>
              <div className="mt-3">
                {selectedFile && (
                  <img
                    src={preview}
                    style={{
                      width: "220px",
                      height: "120px",
                      marginBottom: "1.2rem",
                    }}
                  />
                )}
                <div className="form-group mb-4">
                  <input
                    type="file"
                    onChange={onSelectFile}
                    className="form-control form-control-md"
                    id="formFileSm"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="modalFormLabels">03. Dealership Type</label>
              <div>
                {/* <input
                  type="text"
                  placeholder="Select the Dealership Type"
                  className="inputModalStyles"
                  name="videoUrl"
                  // value={videoUrl}
                  onChange={handleInputChange}
                /> */}
                <select
                  className="form-select inputModalStyles"
                  onChange={showDealerChange}
                >
                  <option value="0">Select the Dealership Type</option>
                  {dealer?.map((items) => {
                    return (
                      <React.Fragment key={items.id}>
                        <option value={items.id}>{items.title}</option>
                      </React.Fragment>
                    );
                  })}
                </select>
              </div>
            </div>

            <div>
              <label className="modalFormLabels">04. Review</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter the Full Review"
                  className="inputModalStyles"
                  name="review"
                  value={review}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </main>

          <div className="d-flex justify-content-between align-items-center inputModalStylesBtn">
            <div>
              <button className="SaveNextBtn" type="submit">
                Submit
              </button>
            </div>

            <div>
              <button
                className="clearBtn"
                onClick={handleClearAll}
                type="reset"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTestimonial;
