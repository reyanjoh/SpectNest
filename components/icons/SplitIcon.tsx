import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const SplitIcon = ({
  color = "#D94536",
  height = "35",
  width = "35",
  className,
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.6346 17.0991L14.6336 17.1001L15.9578 18.5347L15.9568 18.5366L26.2772 28.8569C23.5143 31.1298 19.9768 32.4956 16.1199 32.4956C7.28346 32.4956 0.120066 25.332 0.119934 16.4956C0.119934 8.15287 6.50509 1.30172 14.6551 0.562012L14.6346 17.0991Z"
        fill={color}
      />
      <path
        d="M28.8026 6.7417C30.8821 9.44177 32.1199 12.824 32.1199 16.4956C32.1199 20.7551 30.4551 24.6257 27.741 27.4927L17.4598 17.2114L28.8026 6.7417Z"
        fill={color}
      />
      <path
        d="M16.6551 0.504395C20.8876 0.64351 24.7034 2.42691 27.4861 5.23584L16.6365 15.2505L16.6551 0.504395Z"
        fill={color}
      />
    </svg>
  );
};
