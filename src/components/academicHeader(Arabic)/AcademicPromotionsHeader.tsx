import * as React from "react";

interface AcademicPromotionsHeaderProps {
  logoSrc: string;
  title: string;
}

export const AcademicPromotionsHeader: React.FC<
  AcademicPromotionsHeaderProps
> = ({ logoSrc, title }) => {
  return (
    <div className="flex flex-wrap gap-10 pl-10 text-2xl text-right text-white border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] max-md:pl-5">
      <div className="my-auto">{title}</div>
      <img
        loading="lazy"
        src={logoSrc}
        alt="Academic Promotions Logo"
        className="object-contain shrink-0 mt-1.5 max-w-full aspect-[4.67] w-[407px]"
      />
    </div>
  );
};
