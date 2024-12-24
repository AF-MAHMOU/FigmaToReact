import * as React from "react";
import { InterviewSchedulerProps, TableHeaderProps } from "./types";

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
  <div className="flex flex-wrap text-base font-bold whitespace-nowrap text-zinc-800 max-md:max-w-full">
    {headers.map((header, index) => (
      <div key={index} className="px-3 py-3.5 bg-slate-100 max-md:pr-5">
        {header}
      </div>
    ))}
  </div>
);

export const InterviewScheduler: React.FC<InterviewSchedulerProps> = ({
  onSchedule,
}) => {
  return (
    <div className="flex flex-col px-6 py-16 mx-auto mt-8 w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSchedule({
            applicant: "",
            date: "",
            time: "",
          });
        }}
      >
        <div className="flex flex-wrap gap-1 items-end max-w-full w-[835px]">
          <div className="flex flex-col self-start">
            <div className="self-start text-3xl font-bold text-sky-950">
              Schedule Interview
            </div>
            <div className="flex gap-1 mt-6 text-base text-black">
              <label htmlFor="applicant" className="grow my-auto">
                Select Applicant:{" "}
              </label>
              <select
                id="applicant"
                className="px-1.5 py-1 text-xs leading-none border border-solid bg-zinc-100 border-neutral-500"
              >
                <option>Choose Applicant</option>
              </select>
              <label htmlFor="date" className="grow shrink w-[82px]">
                Interview Date:{" "}
              </label>
            </div>
          </div>
          <div className="flex overflow-hidden gap-5 px-1 py-0.5 mt-12 text-black whitespace-nowrap bg-white border-2 border-solid border-neutral-500 max-md:mt-10">
            <input type="date" id="date" className="flex gap-1.5 my-auto" />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/1497ef3a636757f7b3a6d26d56d2094fda634bb5bec5fd70136a212e23e9d826?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
              alt=""
              className="object-contain shrink-0 aspect-square w-[18px]"
            />
          </div>
          <label
            htmlFor="time"
            className="grow shrink mt-12 text-base text-black w-[86px] max-md:mt-10"
          >
            Interview Time:
          </label>
          <input
            type="time"
            id="time"
            className="flex shrink-0 mt-12 h-6 bg-white border-2 border-solid border-neutral-500 w-[99px] max-md:mt-10"
          />
          <button
            type="submit"
            className="px-2 py-1.5 mt-11 text-xs text-center text-black border-2 border-black border-solid bg-zinc-100 max-md:mt-10"
          >
            Schedule Interview
          </button>
        </div>
      </form>
      <TableHeader headers={["Applicant", "Date", "Time", "Actions"]} />
    </div>
  );
};
