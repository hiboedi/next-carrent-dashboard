import React from "react";
import { Line } from "react-chartjs-2";
import Card from "./Card";
import {
  Chart as Chartjs,
  CategoryScale,
  Tooltip,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  PointElement,
  LineElement,
  Filler
);

const labels = ["Aug", "Sep", "Okt", "Nov", "Des", "Jan"];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Last 6 month",
      data: [15, 34, 41, 67, 52, 43],
      borderColor: "rgba(53,152,255)",
      backgroundColor: "rgba(53,152,255, 0.5)",
    },
  ],
};

function EarningSumary() {
  return (
    <Card className="px-6 pt-8 pb-10">
      <div className=" flex flex-row items-center">
        <h4 className="text-black">Earning Summary</h4>
        <select className="p5 ml-8">
          <option>Aug 2022 - Jan 2023</option>
        </select>
        <div className="ml-auto flex flex-row items-center space-x-2">
          <div className="h-[10px] w-[10px] rounded-full bg-gray-03"></div>
          <p className="p5 text-gray-02">Same period last year</p>
        </div>
      </div>

      <Line data={data} />
    </Card>
  );
}

export default EarningSumary;
