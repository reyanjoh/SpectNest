import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const PlusIcon = ({
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
      <g clipPath="url(#clip0_1222_36554)">
        <path
          d="M7 0.5V13.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          strokeWidth="2"
          d="M0.5 6.95996H13.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
