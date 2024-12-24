import * as React from "react";
import { SidebarItemProps } from "./types";

const SidebarItem: React.FC<SidebarItemProps> = ({ text, isActive }) => (
  <div
    className={`px-4 py-3 ${isActive ? "bg-sky-600 rounded-md" : ""}`}
    role="button"
    tabIndex={0}
  >
    {text}
  </div>
);

export const Sidebar: React.FC = () => (
  <div className="flex flex-col grow px-4 py-12 text-base text-white shadow-[2px_0px_5px_rgba(0,0,0,0.1)] max-md:mt-8">
    <div className="self-start ml-4 max-md:ml-2.5">Manage Applications</div>
    <SidebarItem text="Schedule Interview" isActive={true} />
    <div className="self-start mt-7 ml-4 max-md:ml-2.5">Generate Reports</div>
    <div className="self-center px-4 py-3 ml-4 max-w-full text-xs text-center bg-sky-600 rounded-md mt-[839px] w-[127px] max-md:mt-10">
      Switch to Arabic
    </div>
  </div>
);
