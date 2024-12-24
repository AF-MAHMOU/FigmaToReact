import * as React from "react";
import { ActionButtonProps } from "./types";

export const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  onClick,
}) => (
  <div
    onClick={onClick}
    role="button"
    tabIndex={0}
    className="px-4 py-1.5 text-sm text-center text-black border-2 border-black border-solid bg-zinc-100 cursor-pointer"
    onKeyDown={(e) => e.key === "Enter" && onClick?.()}
  >
    {text}
  </div>
);
