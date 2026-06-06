import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

type Props = FlexProps & {
  children: React.ReactNode;
  bg?: string;
  borderRadius?: string;
  flexDirection?: string;
};

export const Container = ({
  children,
  w = "full",
  bg = "white",
  borderRadius = "md",
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
      pt={"1.5rem"}
      gap={gap}
      flexDirection={flexDirection}
      {...rest}
    >
      {children}
    </Flex>
  );
};
