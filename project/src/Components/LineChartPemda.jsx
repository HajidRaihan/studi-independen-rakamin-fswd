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
import { UserData } from "./DataChart";
import { DataPetani1, DataPetani2 } from "../data/DataProduksiPetani";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export const options = {
  responsive: true,
  scales: {
    y: {
      min: 0,
      max: 100,

      title: {
        display: true,
        text: "Produksi Ton",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "black",
        padding: {
          bottom: 15,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "Waktu",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "black",
        padding: {
          top: 15,
        },
      },
    },
  },
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true, // Use a circular point style for legend items
      },
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels: DataPetani1.map((data) => data.date),
  datasets: [
    {
      label: "Petani 1",
      data: DataPetani1.map((data) => data.produksi),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Dataset 2",
      data: DataPetani2.map((data) => data.produksi),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      cubicInterpolationMode: "monotone",
    },
  ],
};

export function LineChartPemda() {
  return <Line options={options} data={data} />;
}
