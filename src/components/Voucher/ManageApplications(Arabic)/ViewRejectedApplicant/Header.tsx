import * as React from "react";

interface HeaderProps {
  title: string;
  logoSrc: string;
}

export const Header: React.FC<HeaderProps> = ({ title, logoSrc }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between py-1 pr-9 pl-16 max-w-full text-2xl text-center border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] w-[1920px] max-md:px-5">
      <div className="my-auto">{title}</div>
      <img
        loading="lazy"
        src={logoSrc}
        alt="Academic Promotions Logo"
        className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
      />
    </div>
  );
};
