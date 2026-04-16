import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const CreditCardIcon = ({
  color = "#8B52FF",
  height = "25",
  width = "41",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 41 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.9749 23C40.9749 24.1046 40.0794 25 38.9749 25H2.97485C1.87028 25 0.974854 24.1046 0.974854 23V9H40.9749V23ZM5.97485 17C5.42257 17 4.97485 17.4477 4.97485 18V21C4.97485 21.5523 5.42257 22 5.97485 22H10.9749C11.5271 22 11.9749 21.5523 11.9749 21V18C11.9749 17.4477 11.5271 17 10.9749 17H5.97485Z"
        fill={color}
      />
      <path
        d="M38.9749 0C40.0794 2.57702e-07 40.9749 0.895431 40.9749 2V6H0.974854V2C0.974854 0.895431 1.87028 1.61064e-08 2.97485 0H38.9749Z"
        fill={color}
      />
    </svg>
  );
};
