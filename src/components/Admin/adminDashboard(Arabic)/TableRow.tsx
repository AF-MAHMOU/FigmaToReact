import * as React from "react";
import { TableRowProps } from "./types";
import { ActionButton } from "./ActionButton";

export const TableRow: React.FC<TableRowProps> = ({ actions, cells }) => (
  <div className="flex flex-wrap w-full text-base text-black max-md:max-w-full">
    <div className="flex gap-1.5 py-3.5 pr-20 pl-3 text-sm text-center whitespace-nowrap max-md:pr-5">
      {actions.map((action, index) => (
        <ActionButton key={index} text={action} />
      ))}
    </div>
    {cells.map((cell, index) => (
      <div key={index} className="px-3 py-3.5 max-md:pr-5">
        {cell}
      </div>
    ))}
  </div>
);
