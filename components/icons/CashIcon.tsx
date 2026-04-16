import React from "react";

type Props = {
  color?: string;
  stroke?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const CashIcon = ({
  color = "#96F231",
  stroke = "black",
  height = "25",
  width = "40",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 2C0 0.89543 0.895431 0 2 0H38C39.1046 0 40 0.895431 40 2V23C40 24.1046 39.1046 25 38 25H2C0.895431 25 0 24.1046 0 23V2Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.1025 3.00488C36.6067 3.05621 37 3.48232 37 4V21C37 21.5177 36.6067 21.9438 36.1025 21.9951L36 22H4C3.48232 22 3.05621 21.6067 3.00488 21.1025L3 21V4C3 3.44772 3.44772 3 4 3H36L36.1025 3.00488ZM23.6807 5C25.0912 6.73826 26 9.45075 26 12.5C26 15.5492 25.0912 18.2617 23.6807 20H35V5H23.6807ZM20 5C19.2714 5 18.3188 5.47218 17.4482 6.85059C16.5938 8.20345 16 10.1955 16 12.5C16 14.8045 16.5938 16.7966 17.4482 18.1494C18.3188 19.5278 19.2714 20 20 20C20.7286 20 21.6812 19.5278 22.5518 18.1494C23.4062 16.7966 24 14.8045 24 12.5C24 10.1955 23.4062 8.20345 22.5518 6.85059C21.6812 5.47218 20.7286 5 20 5ZM5 20H16.3193C14.9088 18.2617 14 15.5492 14 12.5C14 9.45075 14.9088 6.73826 16.3193 5H5V20Z"
        fill={stroke}
      />
    </svg>
  );
};
