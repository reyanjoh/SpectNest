import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const InventoryIcon = ({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.2102 7.81994L12.5102 12.2799C12.2002 12.4599 11.8102 12.4599 11.4902 12.2799L3.79021 7.81994C3.24021 7.49994 3.10021 6.74994 3.52021 6.27994C3.81021 5.94994 4.14021 5.67994 4.49021 5.48994L9.91021 2.48994C11.0702 1.83994 12.9502 1.83994 14.1102 2.48994L19.5302 5.48994C19.8802 5.67994 20.2102 5.95994 20.5002 6.27994C20.9002 6.74994 20.7602 7.49994 20.2102 7.81994Z"
        fill={color}
      />
      <path
        d="M11.43 14.14V20.96C11.43 21.72 10.66 22.22 9.97998 21.89C7.91998 20.88 4.44998 18.99 4.44998 18.99C3.22998 18.3 2.22998 16.56 2.22998 15.13V9.97C2.22998 9.18 3.05998 8.68 3.73998 9.07L10.93 13.24C11.23 13.43 11.43 13.77 11.43 14.14Z"
        fill={color}
      />
      <path
        d="M12.5698 14.14V20.96C12.5698 21.72 13.3398 22.22 14.0198 21.89C16.0798 20.88 19.5498 18.99 19.5498 18.99C20.7698 18.3 21.7698 16.56 21.7698 15.13V9.97C21.7698 9.18 20.9398 8.68 20.2598 9.07L13.0698 13.24C12.7698 13.43 12.5698 13.77 12.5698 14.14Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46994"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21.61V12.54"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.93014 2.48004L4.59014 5.44004C3.38014 6.11004 2.39014 7.79004 2.39014 9.17004V14.82C2.39014 16.2 3.38014 17.88 4.59014 18.55L9.93014 21.52C11.0701 22.15 12.9401 22.15 14.0801 21.52L19.4201 18.55C20.6301 17.88 21.6201 16.2 21.6201 14.82V9.17004C21.6201 7.79004 20.6301 6.11004 19.4201 5.44004L14.0801 2.47004C12.9301 1.84004 11.0701 1.84004 9.93014 2.48004Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
