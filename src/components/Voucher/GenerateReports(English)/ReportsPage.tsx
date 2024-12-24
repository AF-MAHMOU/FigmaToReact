import * as React from "react";
import { DatePicker } from "./DatePicker";
import { ReportHistory } from "./ReportHistory";
import { ActionButton } from "./ActionButton";

export const ReportsPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <header className="flex flex-wrap gap-5 justify-between py-1 text-xl text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/1ca5bb7bba0aff60e9d1d5c019d0eae39fd1709245fae162ab6d99424e9cb2b7?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
          alt="Company Logo"
          className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
        />
        <div className="my-auto">| Academic Promotions</div>
      </header>

      <div className="w-full max-w-[1888px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 pt-14 pb-9 text-base text-white shadow-[2px_0px_5px_rgba(0,0,0,0.1)] max-md:mt-8">
              <button className="self-start ml-4 max-md:ml-2.5">
                Manage Applications
              </button>
              <button className="self-start mt-9 ml-4 max-md:ml-2.5">
                Schedule Interview
              </button>
              <button className="px-4 py-2.5 mt-7 bg-sky-600 rounded-md max-md:pr-5">
                Generate Reports
              </button>
              <button className="self-center px-4 py-3 max-w-full text-xs text-center bg-sky-600 rounded-md mt-[838px] w-[127px] max-md:mt-10">
                Switch to Arabic
              </button>
            </div>
          </nav>

          <main className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start px-6 pt-14 pb-6 mx-auto mt-8 w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-1 items-end max-w-full w-[802px]">
                <div className="flex flex-col self-start">
                  <h1 className="self-start text-3xl font-bold text-sky-950">
                    Generate Reports
                  </h1>
                  <div className="flex gap-1.5 mt-5 text-black">
                    <label
                      htmlFor="reportType"
                      className="grow my-auto text-base"
                    >
                      Select Report Type:{" "}
                    </label>
                    <select
                      id="reportType"
                      className="px-1.5 py-1 text-sm leading-none border border-solid bg-zinc-100 border-neutral-500 max-md:pr-5"
                    >
                      <option>Choose Report Type</option>
                    </select>
                  </div>
                </div>
                <div className="grow shrink mt-12 text-base text-black w-[109px] max-md:mt-10">
                  Select Date Range:{" "}
                </div>
                <DatePicker
                  onDateChange={() => {}}
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/aad380f96e3640bf4f0869052b7c276bb445e72747da5cb16837d8fb46b458e7?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
                />
                <DatePicker
                  onDateChange={() => {}}
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/9c2010e548bd8234def33b2595f0b767be2f6bd5456a9b94ad33a00b647c5f22?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
                />
                <ActionButton label="Generate Report" onClick={() => {}} />
              </div>

              <ReportHistory />

              <div className="mt-6 text-2xl font-bold text-black">
                Advanced Options
              </div>
              <div className="flex gap-1 mt-6 text-xs text-center text-black">
                <ActionButton label="Export All Reports" onClick={() => {}} />
                <ActionButton label="View Analytics" onClick={() => {}} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
