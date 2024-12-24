import * as React from "react";
import { ReportTableRowProps } from "./types";

export const ReportTableRow: React.FC<ReportTableRowProps> = ({
  id,
  type,
  date,
  status,
}) => {
  return (
    <div className="flex flex-wrap w-full text-base max-md:max-w-full">
      <div className="flex gap-1 py-3.5 pr-20 pl-3 text-sm text-center max-md:pr-5">
        <button className="px-3.5 py-1 border-2 border-black border-solid bg-zinc-100">
          عرض التفاصيل
        </button>
        <button className="px-3 py-1 whitespace-nowrap border-2 border-black border-solid bg-zinc-100">
          تحميل
        </button>
      </div>
      <div className="px-3 py-4 font-bold whitespace-nowrap max-md:pr-5">
        {status}
      </div>
      <div className="px-3 py-4 whitespace-nowrap max-md:pr-5">{date}</div>
      <div className="px-3 py-3.5 max-md:pr-5">{type}</div>
      <div className="px-3 py-4 whitespace-nowrap max-md:pr-5">{id}</div>
    </div>
  );
};
