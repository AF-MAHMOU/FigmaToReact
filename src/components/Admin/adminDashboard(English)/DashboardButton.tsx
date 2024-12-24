import * as React from "react";
import { ButtonProps } from "./types";

export const DashboardButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1.5 text-sm text-center text-black border-2 border-black border-solid bg-zinc-100 ${className}`}
    >
      {children}
    </button>
  );
};
