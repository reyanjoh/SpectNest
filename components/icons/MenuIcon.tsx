import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const MenuIcon = ({
  color = "#4D00F1",
  height = "24",
  width = "24",
  className,
  active = false,
}: Props) => {
  return active ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.25562 2H5.35563C3.16563 2 2.01562 3.15 2.01562 5.33V7.23C2.01562 9.41 3.16562 10.56 5.34562 10.56H7.24563C9.42562 10.56 10.5756 9.41 10.5756 7.23V5.33C10.5856 3.15 9.43563 2 7.25562 2Z"
        fill={color}
      />
      <path
        d="M18.6856 2H16.7856C14.6056 2 13.4556 3.15 13.4556 5.33V7.23C13.4556 9.41 14.6056 10.56 16.7856 10.56H18.6856C20.8656 10.56 22.0156 9.41 22.0156 7.23V5.33C22.0156 3.15 20.8656 2 18.6856 2Z"
        fill={color}
      />
      <path
        d="M18.6856 13.4301H16.7856C14.6056 13.4301 13.4556 14.5801 13.4556 16.7601V18.6601C13.4556 20.8401 14.6056 21.9901 16.7856 21.9901H18.6856C20.8656 21.9901 22.0156 20.8401 22.0156 18.6601V16.7601C22.0156 14.5801 20.8656 13.4301 18.6856 13.4301Z"
        fill={color}
      />
      <path
        d="M7.25562 13.4301H5.35563C3.16563 13.4301 2.01562 14.5801 2.01562 16.7601V18.6601C2.01562 20.8501 3.16562 22.0001 5.34562 22.0001H7.24563C9.42562 22.0001 10.5756 20.8501 10.5756 18.6701V16.7701C10.5856 14.5801 9.43563 13.4301 7.25562 13.4301Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.01562 10H7.01562C9.01562 10 10.0156 9 10.0156 7V5C10.0156 3 9.01562 2 7.01562 2H5.01562C3.01562 2 2.01562 3 2.01562 5V7C2.01562 9 3.01562 10 5.01562 10Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0156 10H19.0156C21.0156 10 22.0156 9 22.0156 7V5C22.0156 3 21.0156 2 19.0156 2H17.0156C15.0156 2 14.0156 3 14.0156 5V7C14.0156 9 15.0156 10 17.0156 10Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0156 22H19.0156C21.0156 22 22.0156 21 22.0156 19V17C22.0156 15 21.0156 14 19.0156 14H17.0156C15.0156 14 14.0156 15 14.0156 17V19C14.0156 21 15.0156 22 17.0156 22Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.01562 22H7.01562C9.01562 22 10.0156 21 10.0156 19V17C10.0156 15 9.01562 14 7.01562 14H5.01562C3.01562 14 2.01562 15 2.01562 17V19C2.01562 21 3.01562 22 5.01562 22Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
