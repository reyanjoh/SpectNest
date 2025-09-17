import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

type Props = FlexProps & {
  children: React.ReactNode;
  gap?: string;
  w?: string;
  bg?: string;
  borderRadius?: string;
  p?: string;
  flexDirection?: string;
};

export const Card = ({
  children,
  w = "full",
  bg = "white",
  borderRadius = "2xl",
  p = "1",
  gap = "1",
  flexDirection = "column",
  ...rest
}: Props) => {
  return (
    <Flex
      w={w}
      bg={bg}
      borderRadius={borderRadius}
      p={p}
      gap={gap}
      flexDirection={flexDirection}
      {...rest}
    >
      {children}
    </Flex>
  );
};
