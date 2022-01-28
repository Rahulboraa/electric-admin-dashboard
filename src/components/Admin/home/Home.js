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
import deal from "../../../assets/dashboard/deal.svg";
import group from "../../../assets/dashboard/group.svg";
import faker from "faker";
import Sidebar from "../../common/sidebar";
import CommonTable from "../../common/CommonTable";
import NavigationUp from "./sub-components/NavigationUp";
import NavigationDown from "./sub-components/NavigationDown";
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
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        <div className="Home__Second__Container">
          <h2>Widgets</h2>
          <div className="Home__Inner__Container__1">
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <svg
                  width="11"
                  height="19"
                  viewBox="0 0 16 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9998 2.00016H11.2187C10.7454 0.837918 9.48984 0 7.99988 0C6.50875 0 5.25431 0.837918 4.78104 2.00016H0V3.99989H4.78129C5.25435 5.16213 6.50875 6.00005 7.99988 6.00005C9.48984 6.00005 10.7454 5.16213 11.2187 3.99989H16L15.9998 2.00016Z"
                    fill="#191919"
                  />
                  <path
                    d="M7.99963 6C3.58214 6 0 9.13481 0 12.9997V18.9998C0 20.1045 1.02215 20.9999 2.2854 20.9999H3.42859V15.9997C3.42859 13.7934 5.47962 11.9998 7.99988 11.9998C10.5214 11.9998 12.5712 13.7934 12.5712 15.9997V21.0008H13.7144C14.9769 21.0008 15.9998 20.1055 15.9998 19.001V12.9999C15.9998 9.13481 12.4174 6.00021 8.00012 6.00021L7.99963 6Z"
                    fill="#191919"
                  />
                  <path
                    d="M10.2864 15.9996C10.2864 14.8949 9.2619 13.9999 8.00055 13.9999C6.73803 13.9999 5.71466 14.8951 5.71466 15.9996V21.9997C5.71466 23.1044 6.7392 23.9998 8.00055 23.9998C9.26306 23.9998 10.2864 23.1044 10.2864 21.9997V15.9996Z"
                    fill="#191919"
                  />
                </svg>

                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <img src={deal} alt="deal" style={{ width: "16px" }} />
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
            <div className="Home__Inner__1">
              <img src={rectangle} className="Home__Inner__Img" />
              <div className="Home__Inner__div__1">
                <img src={group} alt="group" style={{ width: "16px" }} />
                <p className="Home__p1">Total number of vehicles sold</p>
              </div>
              <div className="Home__Inner__div__2">
                <p className="Home__p2"> 25.5m</p>
              </div>
            </div>
          </div>
          <div className="Home__Inner__Container__2">
            <NavigationUp />
            <Line
              options={options}
              data={data}
              style={{ height: "400px", maxWidth: "1000px" }}
            />
          </div>
          <div className="Home__Inner__Container__2">
            <div className="subHeadingButton">
              <NavigationDown />
              <button
                className="mainAddBtn"
                // onClick={addVehicle}
              >
                View Detailed Page
              </button>
            </div>
            <CommonTable />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
