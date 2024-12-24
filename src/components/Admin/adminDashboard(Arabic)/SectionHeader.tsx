import * as React from "react";
import { SectionHeaderProps } from "./types";
import { ActionButton } from "./ActionButton";

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  buttons,
}) => (
  <div className="flex flex-col self-end max-w-full">
    <div className="self-end text-3xl font-bold text-right text-sky-950">
      {title}
    </div>
    <div className="flex flex-wrap gap-4 mt-3.5 text-sm text-center text-black">
      {buttons.map((button, index) => (
        <ActionButton key={index} text={button} />
      ))}
    </div>
  </div>
);
