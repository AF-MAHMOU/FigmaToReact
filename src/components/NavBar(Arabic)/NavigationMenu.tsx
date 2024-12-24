import * as React from "react";
import { NavigationItem } from "./NavigationItem";

const navigationItems = [
  { text: "Manage Applications", className: "" },
  { text: "Schedule Interview", className: "mt-9" },
  { text: "Generate Reports", className: "mt-10" },
];

export const NavigationMenu: React.FC = () => {
  return (
    <nav className="flex flex-col items-start px-8 pt-14 pb-9 text-base text-white max-w-[282px] shadow-[2px_0px_5px_rgba(0,0,0,0.1)]">
      {navigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          text={item.text}
          className={item.className}
        />
      ))}
      <button
        className="px-4 py-3 ml-6 text-xs text-center bg-sky-600 rounded-md mt-[847px]"
        aria-label="Switch to Arabic language"
      >
        Switch to Arabic
      </button>
    </nav>
  );
};
