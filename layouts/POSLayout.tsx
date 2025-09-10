import React from "react";
import { Flex } from "@chakra-ui/react";
import SideNavBar from "@/layouts/layoutComponents/SideNavBar";

type Props = {
  children: React.ReactNode;
};

export const POSLayout = ({ children }: Props) => {
  return (
    <Flex minH="100dvh" bg="#EFEFEF" p={"1rem"} pt={"4rem"}>
      <SideNavBar />

      {children}
    </Flex>
  );
};
