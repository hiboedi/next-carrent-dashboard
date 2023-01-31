import { Doughnut } from "react-chartjs-2";
import Card from "../components/Card";
import Layout from "../components/Layout";
import StatisticCard from "../components/StatisticCard";

import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import SearchNotif from "../components/svg/SearchNotif";
import SearchIcon from "../components/svg/SearchIcon";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import CarMenuIcon from "../components/svg/CarMenuIcon";
import ChevronIcon from "../components/svg/ChevronIcon";
import CalendarIcon from "../components/svg/CalendarIcon";
import ClockIcon from "../components/svg/ClockIcon";
import FilterIcon from "../components/svg/FilterIcon";
import EarningSumary from "../components/EarningSumary";

Chartjs.register(ArcElement, Tooltip);

const data = {
  labels: ["Hired", "Canceled", "Pending"],
  datasets: [
    {
      label: "Total",
      data: [54, 20, 26],
      backgroundColor: ["#006AFF", "#52C93F", "#FF2727"],
    },
  ],
};

const carNumbers = [
  "D 1945 UUD",
  "D 1936 PSB",
  "B 1",
  "B 0414 DD",
  "D 033 BDI",
];

export default function Home() {
  const [carNumber, setCarNumber] = useState("");
  const [query, setQuery] = useState("");

  // Replace data from API
  const filterCarNumber =
    query === ""
      ? carNumbers
      : carNumbers.filter((number) => {
          return number.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Layout>
      {/* Todays statistic */}
      <div className="flex w-[350px] flex-col space-y-4 overflow-auto bg-gray-04 py-8 px-7">
        {/* Header */}
        <div>
          <h2 className="text-gray-01">Todays Statistics</h2>
          <span className="h5 text-gray-03">
            {new Date().toLocaleString("id-ID", {
              weekday: "long",
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
        {/* Income Card */}
        <StatisticCard
          title="Income"
          date="Today"
          amount={564144}
          percentage={-1.5}
          comparedText="Compared to Rp 58.404,- last 24h"
          lastWeekText="Last week expences Rp 50.7876,-"
        />
        <StatisticCard
          title="Expegces"
          date="Today"
          amount={473869}
          percentage={2.5}
          comparedText="Compared to Rp 60.403,- last 24h"
          lastWeekText="Last week expences Rp 499.188,-"
        />
        <div>
          <Card>
            <div className="flex flex-col space-y-3">
              {/* Header */}
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-gray-02">Hire vs Cancel</h3>
                <span className="p5 rounded-sm bg-[#F4F5F7] px-2 py-1 text-gray-02">
                  Today
                </span>
              </div>
              <div>
                <Doughnut
                  data={data}
                  options={{ cutout: "80%" }}
                  className="mb-6"
                />
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row items-center">
                    <span className="h-4 w-4 flex-none rounded-full bg-primary"></span>
                    <p className="ml-3 mr-6 flex-1">Total Hired</p>
                    <p>
                      54% <span className="text-green">↑</span>
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <span className="h-4 w-4 flex-none rounded-full bg-secondary"></span>
                    <p className="ml-3 mr-6 flex-1">Total Canceled</p>
                    <p>
                      20% <span className="text-secondary">↓</span>
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <span className="h-4 w-4 flex-none rounded-full bg-green"></span>
                    <p className="ml-3 mr-6 flex-1">Total Pending</p>
                    <p>
                      26% <span className="text-secondary">↓</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-7">
        {/* Notification and search bar */}
        <div className="flex flex-row justify-end">
          <button className="mr-10">
            <SearchNotif />
          </button>
          <form
            action=""
            className=" flex flex-row items-center rounded-xl bg-white py-3 pl-8 pr-6 drop-shadow-card"
          >
            <label htmlFor="search" className="w-full max-w-xs">
              <input
                type="text"
                placeholder="Search here"
                className="focus-visible:outline-none"
              />
            </label>
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* Card lablelity */}
        <Card className="px-6 pt-8 pb-10">
          <h4 className="text-black">Car Available</h4>

          <div className="mt-4 flex flex-row items-center space-x-6">
            <Combobox value={carNumber} onChange={setCarNumber}>
              {({ open }) => (
                <div className="relative">
                  {/* Input */}
                  <div className="flex max-w-[200px] flex-row space-x-3 rounded border border-gray-05 py-3 px-4">
                    <CarMenuIcon className="flex-none" />
                    <Combobox.Input
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Car Number"
                      className=" w-full focus-visible:outline-none"
                    />
                    <Combobox.Button>
                      <ChevronIcon
                        className={`transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </Combobox.Button>
                  </div>
                  {/* Option */}
                  <Combobox.Options className="shadow-l absolute mt-1 w-full rounded bg-white p-4">
                    {filterCarNumber.map((carNumber: string) => (
                      <Combobox.Option
                        key={carNumber}
                        value={carNumber}
                        className="cursor-pointer hover:bg-primary hover:text-white"
                      >
                        {carNumber}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
              )}
            </Combobox>
            {/* Date */}
            <div className=" flex rounded border border-gray-05">
              <div className="flex flex-row">
                <div className="flex py-3 px-4">
                  <CalendarIcon className="mr-3 text-gray-02" />
                  <span>
                    {new Date().toLocaleString("id-id", {
                      month: "short",
                      year: "numeric",
                      day: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex border-l border-gray-05 py-3 px-4">
                  <ClockIcon className="mr-3 text-gray-02" />
                  <span>
                    {new Date().toLocaleString("id-id", {
                      hour: "2-digit",
                      hour12: true,
                    })}
                  </span>
                  <ChevronIcon />
                </div>
              </div>
            </div>

            {/* Button check */}
            <button
              className=" flex-1 rounded bg-primary py-3
               px-9 text-white hover:opacity-80 "
            >
              <span className="h3">Check</span>
            </button>
          </div>
        </Card>

        {/* Live status */}
        {/* <Card className="px-6 pt-8 pb-10">
          <div className="flex flex-row items-center justify-between">
            <h4 className="text-black">Live Car Status</h4>
            <button className=" flex items-center px-4 py-2 text-gray-02">
              <FilterIcon className="mr-2" />
              Filter
            </button>
          </div> */}

        {/* Table */}
        {/* <table className="table-auto">
            <thead>
              <tr className="text-sm font-light">
                <td>No.</td>
                <td>Car No.</td>
                <td>Driver</td>
                <td>Status</td>
                <td>Earning</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p5 py-4">01</td>
                <td className="py-4">
                  <h5 className="rounded bg-[#999999]/10 py-1 px-3 text-black">
                    6465
                  </h5>
                </td>
                <td className="py-4">Jhon F.K</td>
                <td>Complete</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </Card> */}
        <EarningSumary />
      </div>
    </Layout>
  );
}
