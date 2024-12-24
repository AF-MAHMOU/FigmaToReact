import * as React from "react";
import { SidebarItemProps } from "./types";

export const SidebarItem: React.FC<SidebarItemProps> = ({ text, isActive }) => {
  return (
    <div
      className={`px-16 py-2.5 ${
        isActive ? "bg-sky-600 rounded-md" : ""
      } max-md:pl-5`}
    >
      {text}
    </div>
  );
};
