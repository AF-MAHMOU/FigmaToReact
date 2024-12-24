import * as React from "react";
import { DashboardSectionProps } from "./types";
import { ActionButton } from "./ActionButton";

export const DashboardSection: React.FC<DashboardSectionProps> = ({
  title,
  description,
  buttons,
}) => (
  <div className="flex flex-col items-end py-12 pr-6 pl-20 mt-8 w-full text-right text-black bg-white rounded-lg max-w-[1856px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
    <div className="text-3xl font-bold text-sky-950">{title}</div>
    {description && (
      <div className="mt-2.5 text-base max-md:max-w-full">{description}</div>
    )}
    <div className="flex gap-4 mt-4 text-sm text-center">
      {buttons.map((button, index) => (
        <ActionButton key={index} text={button} />
      ))}
    </div>
  </div>
);
