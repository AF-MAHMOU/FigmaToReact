import * as React from "react";
import { DatePickerProps } from "./types";

export const DatePicker: React.FC<DatePickerProps> = ({ icon }) => {
  return (
    <div className="flex overflow-hidden gap-5 px-1 py-0.5 whitespace-nowrap bg-white border-2 border-solid border-neutral-500">
      <div className="flex gap-1.5 my-auto">
        <div className="flex gap-0.5 self-start">
          <div className="grow my-auto text-xs">mm</div>
          <div className="text-sm">/</div>
        </div>
        <div className="flex gap-1 text-sm">
          <div className="grow">dd</div>
          <div>/</div>
          <div>yyyy</div>
        </div>
      </div>
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 aspect-square w-[18px]"
        alt=""
      />
    </div>
  );
};
