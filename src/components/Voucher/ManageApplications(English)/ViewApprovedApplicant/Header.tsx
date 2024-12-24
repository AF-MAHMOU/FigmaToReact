import * as React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between py-1 text-xl text-center border border-black border-solid shadow-[0px_2px_5px_rgba(0,0,0,0.1)] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/d3090947d86e4bf18e0baf7e5d7ff520/e0facd45421ab0d2621a06929fbb5819dbba27caa9391a631f0975e3629fdbb7?apiKey=d3090947d86e4bf18e0baf7e5d7ff520&"
        alt="Academic Promotions Logo"
        className="object-contain shrink-0 max-w-full aspect-[4.67] w-[407px]"
      />
      <div className="my-auto">| Academic Promotions</div>
    </div>
  );
};
