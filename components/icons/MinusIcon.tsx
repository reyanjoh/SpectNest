import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const MinusIcon = ({
  color = "white",
  height = "5",
  width = "5",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.5 7H13.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
