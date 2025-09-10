import React from "react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const TagsIcon = ({
  color = "#4D00F1",
  height = "35",
  width = "35",
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
      className={className}
    >
      <path
        d="M12.9056 5.88H5.12563C3.41563 5.88 2.01562 7.28 2.01562 8.99V20.35C2.01562 21.8 3.05562 22.42 4.32562 21.71L8.25562 19.52C8.67562 19.29 9.35563 19.29 9.76562 19.52L13.6956 21.71C14.9756 22.41 16.0156 21.8 16.0156 20.35V8.99C16.0156 7.28 14.6156 5.88 12.9056 5.88Z"
        fill={color}
      />
      <path
        d="M22.0157 5.11V16.47C22.0157 17.92 20.9757 18.53 19.7057 17.83L17.7757 16.75C17.6157 16.66 17.5157 16.49 17.5157 16.31V8.99C17.5157 6.45 15.4457 4.38 12.9057 4.38H8.83571C8.46571 4.38 8.20571 3.99 8.37571 3.67C8.89571 2.68 9.93571 2 11.1257 2H18.9057C20.6157 2 22.0157 3.4 22.0157 5.11Z"
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
        d="M12.9056 5.88H5.12561C3.41561 5.88 2.01562 7.27999 2.01562 8.98999V20.35C2.01562 21.8 3.05562 22.42 4.32562 21.71L8.25562 19.52C8.67562 19.29 9.35563 19.29 9.76562 19.52L13.6956 21.71C14.9656 22.42 16.0056 21.8 16.0056 20.35V8.98999C16.0156 7.27999 14.6156 5.88 12.9056 5.88Z"
        stroke="#171717"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0156 8.98999V20.35C16.0156 21.8 14.9756 22.41 13.7056 21.71L9.77563 19.52C9.35563 19.29 8.67562 19.29 8.25562 19.52L4.32562 21.71C3.05562 22.41 2.01562 21.8 2.01562 20.35V8.98999C2.01562 7.27999 3.41561 5.88 5.12561 5.88H12.9056C14.6156 5.88 16.0156 7.27999 16.0156 8.98999Z"
        stroke="#171717"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0156 5.10999V16.47C22.0156 17.92 20.9756 18.53 19.7056 17.83L16.0156 15.77V8.98999C16.0156 7.27999 14.6156 5.88 12.9056 5.88H8.01562V5.10999C8.01562 3.39999 9.41561 2 11.1256 2H18.9056C20.6156 2 22.0156 3.39999 22.0156 5.10999Z"
        stroke="#171717"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
