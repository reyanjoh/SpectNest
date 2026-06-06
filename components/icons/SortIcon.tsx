import React from "react";

type Props = {
  color?: string;
  stroke?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const SortIcon = ({
  color = "#5D6679",
  height = "20",
  width = "20",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
        stroke={color}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
