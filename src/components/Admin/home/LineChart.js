import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Sales chart",
      },
      tooltip: {
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: "2",
        titleColor: "black",
        titleAlign: "center",
        displayColors: false,
        bodyAlign: "center",
        bodyColor: "black",
      },
    },

    scales: {
      x: {
        grace: "40%",
        grid: {
          display: false,
        },
      },
      y: {
        grace: "40%",
        grid: {
          display: true,
          border: false,
          borderWidth: 0,
        },
      },
    },
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        // label: "user gained",
        data: [
          10000, 20000, 25000, 30000, 45000, 50000, 10000, 20000, 25000, 30000,
          45000, 50000,
        ],
        borderColor: "#cccbcb",
        backgroundColor: "black",
        borderWidth: 1,
        pointHoverBorderColor: "black",
        pointHoverBackgroundColor: "black",
        pointBorderWidth: 2,
        pointBorderColor: "black",
        pointHoverBorderWidth: 5,
      },
    ],
  };
  return (
    <>
      <Line data={data} options={options} height={300} width={800} />
    </>
  );
};

export default LineChart;
