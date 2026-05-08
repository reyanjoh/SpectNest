import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const CheckIcon = ({
  color = "#00BA00",
  height = "35",
  width = "35",
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 187 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="93.5" cy="93.5" r="93.5" fill={color} />
      <line
        x1="65.9025"
        y1="93.5"
        x2="88.7051"
        y2="116.303"
        stroke="white"
        stroke-width="22"
        stroke-linecap="round"
      />
      <line
        x1="91.0226"
        y1="113.905"
        x2="134.869"
        y2="69.6056"
        stroke="white"
        stroke-width="22"
        stroke-linecap="round"
      />
    </svg>
  );
};
