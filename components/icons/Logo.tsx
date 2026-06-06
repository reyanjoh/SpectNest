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
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 0L44.7846 12V36L24 48L3.21539 36V12L24 0Z" fill="#009ED8" />
      <path
        d="M43.7832 7.86548H29.2803V42.6428H23.3564L23.3555 42.6438L23.3545 42.6428L23.3535 42.6418L11.6572 32.0422L11.6611 32.0383H11.6582V10.9846H17.584V29.4514L23.3535 34.679V7.86548H17.3877C18.1796 7.12547 18.6748 6.0719 18.6748 4.90259C18.6747 3.73302 18.1789 2.67969 17.3867 1.9397H43.7832V7.86548ZM11.8535 1.9397C11.0614 2.67968 10.5655 3.73306 10.5654 4.90259C10.5654 6.07186 11.0607 7.12548 11.8525 7.86548H3.08008V1.9397H11.8535Z"
        fill="#4D00F1"
      />
      <circle cx="14.6685" cy="5.03633" r="3.25252" fill="#F1C40E" />
    </svg>
  );
};
