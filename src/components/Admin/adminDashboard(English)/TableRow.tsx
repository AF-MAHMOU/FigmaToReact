import * as React from "react";
import { TableRowProps } from "./types";

export const TableRow: React.FC<TableRowProps> = ({ cells, actions }) => {
  return (
    <div className="flex flex-wrap w-full text-black max-md:max-w-full">
      {cells.map((cell, index) => (
        <div
          key={index}
          className="px-3 py-4 text-base whitespace-nowrap max-md:pr-5"
        >
          {cell}
        </div>
      ))}
      {actions && (
        <div className="flex gap-1.5 py-3.5 pr-20 pl-3 text-center whitespace-nowrap max-md:pr-5">
          {actions}
        </div>
      )}
    </div>
  );
};
