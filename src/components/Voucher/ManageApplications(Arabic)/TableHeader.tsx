import * as React from "react";
import { TableHeaderProps } from "./types";

export const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
  <div className="flex flex-wrap mt-5 text-base font-bold text-zinc-800 max-md:mr-1.5 max-md:max-w-full">
    {headers.map((header, index) => (
      <div
        key={index}
        className="px-3 py-3.5 whitespace-nowrap bg-slate-100 max-md:pr-5"
      >
        {header}
      </div>
    ))}
  </div>
);
