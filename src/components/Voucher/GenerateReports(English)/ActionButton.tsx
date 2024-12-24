import * as React from "react";
import { ActionButtonProps } from "./types";

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1.5 text-sm text-center text-black border-2 border-black border-solid bg-zinc-100"
    >
      {label}
    </button>
  );
};
