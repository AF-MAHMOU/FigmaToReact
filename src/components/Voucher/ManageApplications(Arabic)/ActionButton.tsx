import * as React from "react";
import { ActionButtonProps } from "./types";

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
}) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={(e) => e.key === "Enter" && onClick?.()}
    className="px-1.5 pt-2 pb-0.5 border-2 border-black border-solid bg-zinc-100 cursor-pointer"
  >
    {label}
  </div>
);
