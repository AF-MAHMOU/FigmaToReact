import * as React from "react";
import { HeaderProps } from "./types";

export const AcademicHeader: React.FC<HeaderProps> = ({ logoSrc, title }) => {
  return (
    <div className="flex flex-wrap gap-10 px-5 pb-3 text-xl text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)]">
      <img
        loading="lazy"
        src={logoSrc}
        alt="Academic Logo"
        className="object-contain shrink-0 max-w-full aspect-[5.08] w-[407px]"
      />
      <div className="my-auto" role="heading" aria-level={1}>
        {title}
      </div>
    </div>
  );
};
