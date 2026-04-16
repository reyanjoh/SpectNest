import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  color?: string;
  height?: string;
  width?: string;
  className?: string;
  active?: boolean;
};

export const CircleStatusIndicationIcon = ({
  color = "white",
  className,
  active = false,
}: Props) => {
  return (
    <Box
      position={"absolute"}
      top={"1"}
      right={"1"}
      border={"3px solid"}
      borderColor={active ? color : "gray.300"}
      borderRadius={"full"}
      p={0.5}
    >
      <Box
        bg={active ? color : "transparent"}
        p={"0.5rem"}
        borderRadius={"inherit"}
        className={className}
      ></Box>
    </Box>
  );
};
