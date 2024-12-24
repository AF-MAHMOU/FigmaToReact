import * as React from "react";
import { HeaderProps } from "./types";

export const Header: React.FC<HeaderProps> = ({ title, logoSrc }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between px-8 py-1 max-w-full text-2xl text-center text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] w-[1920px] max-md:px-5">
      <div className="my-auto">{title}</div>
      <img
        loading="lazy"
        src={logoSrc}
        alt="Organization logo"
        className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
      />
    </div>
  );
};
