import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
};

export const Logo = ({
  color = "#33148D",
  height = "35",
  width = "35",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5 0C21.7163 0 25.5843 1.49105 28.6055 3.97461L24.0664 8.06055C22.2044 6.76283 19.9417 6 17.5 6C11.1487 6 6 11.1487 6 17.5C6 23.8513 11.1487 29 17.5 29C21.0601 29 24.2412 27.3813 26.3506 24.8408L31.5342 27.9551C28.3436 32.231 23.2453 35 17.5 35C7.83502 35 0 27.165 0 17.5C0 7.83502 7.83502 0 17.5 0ZM31.3877 6.85254C33.6526 9.80233 35 13.4935 35 17.5C35 19.988 34.479 22.354 33.543 24.4971L28.3311 21.3643C28.7621 20.1562 29 18.8561 29 17.5C29 15.038 28.2238 12.7585 26.9062 10.8877L31.3877 6.85254Z"
        fill={color}
      />
    </svg>
  );
};
