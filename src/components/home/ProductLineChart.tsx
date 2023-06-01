import React from "react";
import { Line } from "react-chartjs-2";

const ProductLineGraph: React.FC = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Products",
        data: [12, 11, 3, 5, 2, 3, 8, 9, 14, 4, 6, 1],
        fill: false,
        borderColor: "Black",
        backgroundColor: "yellow",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ProductLineGraph;
