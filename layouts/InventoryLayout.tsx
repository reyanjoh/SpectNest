import React from "react";
import { Flex } from "@chakra-ui/react";
import NavBar from "@/layouts/layoutComponents/SideNav";
import TopBar from "./layoutComponents/TopBar";

type Props = {
  children: React.ReactNode;
};

export const InventoryLayout = ({ children }: Props) => {
  return (
    <Flex minH="100dvh" bg="bgGray" gap="2px">
      <NavBar />

      <Flex
        direction={"column"}
        w="calc(100dvw - 17.5rem)"
        position={"relative"}
      >
        <TopBar />
        <Flex direction={"column"} px={2} pt={"1.5rem"} pb={"2"} gap={1}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
