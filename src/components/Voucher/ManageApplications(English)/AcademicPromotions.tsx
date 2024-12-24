import * as React from "react";
import { SidebarItem } from "./SidebarItem";
import { ApplicationRow } from "./ApplicationRow";
import { applicationData } from "./data";

const Filter = () => (
  <div className="flex gap-4 mt-4 max-w-full text-xs w-[330px]">
    <input
      type="text"
      placeholder="Search Applications"
      aria-label="Search Applications"
      className="overflow-hidden px-2.5 py-4 bg-white rounded-md border border-solid border-stone-300 text-neutral-500 max-md:pr-5"
    />
    <select
      aria-label="Filter by Status"
      className="px-3.5 py-4 leading-tight text-black rounded-md border border-solid bg-zinc-100 border-stone-300 max-md:pr-5"
    >
      <option>Filter by Status</option>
    </select>
  </div>
);

const TableHeader = () => (
  <div className="flex mt-2.5 text-base font-bold text-zinc-800 max-md:max-w-full">
    <div className="px-3 py-4 whitespace-nowrap bg-slate-100 max-md:pr-5">
      ID
    </div>
    <div className="px-3 py-4 bg-slate-100 max-md:pr-5 max-md:mr-0">
      Applicant Name
    </div>
    <div className="px-3 py-4 bg-slate-100 max-md:pr-5 max-md:mr-0">
      Submitted Date
    </div>
    <div className="px-3 py-4 whitespace-nowrap bg-slate-100 max-md:pr-5">
      Status
    </div>
    <div className="px-3 py-4 whitespace-nowrap bg-slate-100 max-md:pr-5 max-md:max-w-full">
      Actions
    </div>
  </div>
);

export const AcademicPromotions: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState("Manage Applications");

  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-wrap gap-5 justify-between py-1 text-xl text-center text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/e0facd45421ab0d2621a06929fbb5819dbba27caa9391a631f0975e3629fdbb7?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
          alt=""
          className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
        />
        <div className="my-auto">| Academic Promotions</div>
      </div>
      <div className="w-full max-w-[1891px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 py-11 text-base text-white shadow-[2px_0px_5px_rgba(0,0,0,0.1)] max-md:mt-8">
              <SidebarItem
                label="Manage Applications"
                isActive={activeItem === "Manage Applications"}
                onClick={() => setActiveItem("Manage Applications")}
              />
              <SidebarItem
                label="Schedule Interviews"
                isActive={activeItem === "Schedule Interviews"}
                onClick={() => setActiveItem("Schedule Interviews")}
              />
              <SidebarItem
                label="Generate Reports"
                isActive={activeItem === "Generate Reports"}
                onClick={() => setActiveItem("Generate Reports")}
              />
              <button className="self-center px-4 py-3 max-w-full text-xs text-center bg-sky-600 rounded-md mt-[843px] w-[127px] max-md:mt-10">
                Switch to Arabic
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 pt-14 mx-auto mt-8 w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-3xl font-bold text-sky-950">
                Manage Applications
              </div>
              <Filter />
              <TableHeader />
              {applicationData.map((application) => (
                <ApplicationRow
                  key={application.id}
                  application={application}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
