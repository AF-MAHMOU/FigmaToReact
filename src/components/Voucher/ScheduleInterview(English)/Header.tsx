import * as React from "react";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => (
  <div className="flex flex-wrap gap-5 justify-between py-1 text-xl text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] max-md:max-w-full">
    <img
      loading="lazy"
      src={logoSrc}
      alt="Company Logo"
      className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
    />
    <div className="my-auto">| {title}</div>
  </div>
);
