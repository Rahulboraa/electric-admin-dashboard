import React, { useEffect, useState } from "react";
import Sidebar from "../../common/sidebar";
import deal from "../../../assets/dashboard/deal.svg";
import group from "../../../assets/dashboard/group.svg";
import maskgroup from "../../../assets/dashboard/MaskGroup.svg";
import LineChart from "./LineChart.js";
import calender from "../../../assets/dashboard/calendar.svg";
import axios from "../../../api/instance";
import { Table } from "reactstrap";
import moment from "moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const getWidgetsData = () => {
    axios
      .get(`dashboard/widget`)
      .then((result) => {
        setData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getWidgetsData();
  }, []);

  //!Toggle Table
  const [toggle, setToggle] = useState(true);

  // !New Dealer
  const [dealerData, setDealerData] = useState(null);
  const fetchDealer = () => {
    axios(`/dealerForm`)
      .then((result) => {
        setDealerData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDealer();
  }, []);

  // !Delete Upcoming Dealer
  const handleDeleteDealer = (id) => {
    axios
      .delete(`dealerForm/deleteDealer/${id}`)
      .then((result) => {
        fetchDealer();
        toast.success("Dealer Deleted Successfully");
      })
      .catch((err) => {
        toast.error("Error Occurred");
      });
  };

  //!fetch New Store
  const [newStore, setNewStore] = useState(null);
  const fetchNewStore = () => {
    axios(`store?page=1&limit=20`)
      .then((result) => {
        setNewStore(result.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchNewStore();
  }, []);

  const handleEditStore = (id) => {
    history.push(`./editstore/${id}`);
  };

  const history = useHistory();

  return (
    <div className="d-flex" style={{ display: "flex", width: "100%" }}>
      <div>
        <Sidebar />
      </div>
      <div className="dashboard_main">
        <div className="dashboard_title"> Dashboard</div>
        <div className="widget_title"> widgets</div>
        <div className="widgetGrids">
          <div className="widgetBox">
            <div className="redline"></div>
            <div className="widgetDetails">
              <div className="widDetail">
                <img src={group} height="20px" width="20px" alt="logo"></img>
                <div className="title">Total number of vehicles sold</div>
              </div>

              <div className="additionDetail">{data?.soldvehichle}</div>
            </div>
          </div>

          <div className="widgetBox">
            <div className="redline"></div>
            <div className="widgetDetails">
              <div className="widDetail">
                <img src={deal} height="20px" width="20px" alt="logo"></img>
                <div className="title">New Dealers joined</div>
              </div>
              <div className="additionDetail">{data?.newdealers}</div>
            </div>
          </div>

          <div className="widgetBox">
            <div className="redline"></div>
            <div className="widgetDetails">
              <div className="widDetail">
                <img
                  src={maskgroup}
                  height="20px"
                  width="20px"
                  alt="logo"
                ></img>
                <div className="title">New Store started</div>
              </div>
              <div className="additionDetail">{data?.newStores}</div>
            </div>
          </div>
        </div>
        <div className="chart_title"> Charts</div>
        <div className="chartsection">
          <div className="chartTopsection">
            <div className="title">Vehicles Sales</div>
            <div className="filter">
              <div>2015</div>
              <img src={calender} height="15px" width="15px"></img>
            </div>
          </div>
          <div className="linechart">
            <LineChart />
          </div>
        </div>

        <div className="d-flex justify-content-between align-content-center mt-5 gap-3">
          <nav>
            <span
              className={toggle ? "tableactive" : null}
              style={{ marginRight: "1.5rem" }}
              onClick={() => {
                setToggle(true);
              }}
            >
              New Dealer
            </span>

            <span
              className={toggle ? null : "tableactive"}
              onClick={() => {
                setToggle(false);
              }}
            >
              New Store
            </span>
          </nav>

          {/* <div>
            <button className="detailedPage">View Detailed Page</button>
          </div> */}
        </div>
        {toggle ? (
          <div className="TableInfo mt-4">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Application Number</th>
                  <th>Dealer Name</th>
                  <th>City</th>
                  <th>Mobile No.</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dealerData?.map((item, index) => {
                  const {
                    dealerId,
                    userName,
                    preferredCity,
                    phoneNumber,
                    status,
                    verified,
                    date,
                  } = item;
                  return (
                    <>
                      {verified === false && (
                        <tr>
                          <td>{moment(date).format("MMMM Do, YYYY")}</td>
                          <td>{dealerId}</td>
                          <td>{userName}</td>
                          <td>{preferredCity}</td>
                          <td>{phoneNumber}</td>
                          <td>{status}</td>
                          <td
                            onClick={() => {
                              handleDeleteDealer(dealerId);
                            }}
                          >
                            <button className="tableEditBtn">Delete</button>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="TableInfo mt-4">
            <Table bordered responsive borderless>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Application Number</th>
                  <th>Dealer Name</th>
                  <th>City</th>
                  <th>Store Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {newStore?.map(({ id, dealerName, storeType, city1 }) => (
                  <tr key={id}>
                    <td>-</td>
                    <td>{id}</td>
                    <td>{dealerName}</td>
                    <td>{city1}</td>
                    <td>{storeType}</td>
                    <td>-</td>
                    <td
                      onClick={() => {
                        handleEditStore(id);
                      }}
                    >
                      <button className="tableEditBtn"> Edit Store</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
