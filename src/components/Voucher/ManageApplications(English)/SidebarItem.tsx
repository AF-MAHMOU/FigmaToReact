import * as React from "react";
import { SidebarItemProps } from "./types";

export const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  isActive,
}) => (
  <div
    className={`self-start mt-7 ml-4 max-md:ml-2.5 ${
      isActive ? "px-4 py-2.5 bg-sky-600 rounded-md max-md:pr-5" : ""
    }`}
    tabIndex={0}
    role="button"
  >
    {label}
  </div>
);
