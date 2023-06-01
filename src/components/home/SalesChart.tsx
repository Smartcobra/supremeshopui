import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart, Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale } from "chart.js";

ChartJS.register(CategoryScale, LinearScale);

const SalesChart: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3, 6, 2, 4, 1, 5, 8],
        backgroundColor: "black",
        borderColor: "yellow",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default SalesChart;
