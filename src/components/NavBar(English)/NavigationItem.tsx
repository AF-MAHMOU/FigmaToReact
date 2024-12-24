import * as React from "react";

type NavigationItemProps = {
  text: string;
  className?: string;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  className,
}) => {
  return (
    <div className={`${className || ""}`} tabIndex={0} role="button">
      {text}
    </div>
  );
};
