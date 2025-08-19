import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function GroupedBarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Dataset 1",
        data: [30, 45, 50, 40, 25, 45, 15, 40, 25],
        backgroundColor: "#4545fe",
        categoryPercentage: 0.7, 
        barPercentage: 0.5,      
      },
      {
        label: "Dataset 2",
        data: [20, 35, 50, 30, 45, 25, 35, 40, 50],
        backgroundColor: "#12b76a",
        categoryPercentage: 0.7,
        barPercentage: 0.5,
      },
      {
        label: "Dataset 3",
        data: [10, 25, 40, 20, 35, 45, 35, 50, 40],
        backgroundColor: "#f04438",
        categoryPercentage: 0.7,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
          ticks: {
        callback: function (value) {
          return value + "m"; 
        },
        
        
      },
        
      },
    },
  };

  return <Bar data={data} options={options} />;
}
