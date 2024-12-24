import * as React from "react";
import { DashboardSectionProps } from "./types";

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col px-6 pt-14 pb-6 mt-8 w-full bg-white rounded-lg max-w-[1856px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
      <div className="text-3xl font-bold text-sky-950">{title}</div>
      {children}
    </div>
  );
};
