import React from "react";

type Props = {
  color?: string;
  stroke?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const SearchCustomerIcon = ({
  color = "#96F231",
  height = "25",
  width = "40",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15"
        stroke={color}
        strokeWidth="2"
        opacity={"0.4"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22L21 21"
        stroke={color}
        opacity={"0.4"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
