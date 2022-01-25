import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { NavLink } from "react-router-dom";
import rectangle from "../../../assets/Admin/rectangle.png";
import faker from "faker";
import Sidebar from "../../common/sidebar";
import CommonTable from "../../common/CommonTable";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Home = () => {
  console.log(faker);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        // display: true,
        text: "Vehicle Sales",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Vehicles Sales",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "transparent",
        backgroundColor: "black",
      },
    ],
  };
  return (
    <div className="Home__Container">
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="Home__Second__Container">
          <h2>Widgets</h2>
          <div className="Home__Inner__Container__1">
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
          </div>
          <div className="Home__Inner__Container__2">
            {/* <Line
              options={options}
              data={data}
              style={{ height: "400px", width: "700px" }}
            /> */}
          </div>
          <div className="Home__Inner__Container__2">
            <nav className="navbarContainer">
              <NavLink
                to="/vehiclesales"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>Vehicle Sales</span>
              </NavLink>
              <NavLink
                to="/newdealers"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>New Dealers</span>
              </NavLink>
              <NavLink
                to="/newstore"
                className="navlinkUnactive"
                activeClassName="navbaractive"
              >
                <span>New Store</span>
              </NavLink>
            </nav>
            <CommonTable />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
