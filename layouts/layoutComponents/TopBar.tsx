import React from "react";
import { Flex, Image, Input, Button } from "@chakra-ui/react";
import { BellIcon } from "@/components/icons/BellIcon";
import { SearchIcon } from "@/components/icons/SearchIcon";

const TopBar = () => {
  return (
    <Flex
      p={2}
      bg="white"
      justifyContent="space-between"
      alignItems="center"
      w="calc(100dvw - 17.5rem)"
      position={"sticky"}
      top={"0"}
    >
      <Flex position={"relative"}>
        <Input w={"20rem"} placeholder="Search" borderColor="bgGray" />
        <Button
          variant={"ghost"}
          position={"absolute"}
          left={"2px"}
          top={"2px"}
          p={0}
          h={"90%"}
        >
          <SearchIcon />
        </Button>
      </Flex>
      <Flex justifyContent="center" alignItems="center" gap={1}>
        <BellIcon />
        <Flex w="2.5rem" h="2.5rem" borderRadius="full" overflow="hidden">
          <Image src="images/Shoebill.jpg" alt="Profile" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TopBar;
