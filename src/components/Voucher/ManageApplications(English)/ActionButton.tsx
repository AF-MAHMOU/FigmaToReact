import * as React from "react";
import { ActionButtonProps } from "./types";

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="px-2.5 py-1.5 border-2 border-black border-solid bg-zinc-100"
    tabIndex={0}
  >
    {label}
  </button>
);
