import React from "react";

type Props = {
  color?: string;
  stroke?: string;
  height?: string;
  width?: string;
  strokeWidth?: string;
  className?: string;
  active?: boolean;
};

export const EditIcon = ({
  color = "#171717",
  height = "12",
  width = "12",
  strokeWidth = "1.5",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 1H4.5C2 1 1 2 1 4.5V7.5C1 10 2 11 4.5 11H7.5C10 11 11 10 11 7.5V6.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.01994 1.51L4.07994 5.45C3.92994 5.6 3.77994 5.895 3.74994 6.11L3.53494 7.615C3.45494 8.16 3.83994 8.54 4.38494 8.465L5.88994 8.25C6.09994 8.22 6.39494 8.07 6.54994 7.92L10.4899 3.98C11.1699 3.3 11.4899 2.51 10.4899 1.51C9.48994 0.510004 8.69994 0.830004 8.01994 1.51Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.45508 2.07495C7.79008 3.26995 8.72508 4.20495 9.92508 4.54495"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
