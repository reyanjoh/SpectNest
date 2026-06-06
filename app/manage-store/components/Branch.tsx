"use client";

import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

type Props = {
  branchName?: string;
  address?: string;
  contact?: string;
  imgSrc?: string;
};

export const Branch = (props: Props) => {
  const router = useRouter();
  return (
    <Flex
      border="1px solid"
      borderColor="bgGray"
      borderRadius="md"
      justifyContent={"space-between"}
    >
      <Flex alignItems={"center"} gap={1}>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          bg="bgGray"
          gap={1}
          h="9.5rem"
          w="18rem"
        >
          <Text color="fontGray.1">Store Name</Text>
        </Flex>
        <Flex direction={"column"} gap={1}>
          <Text fontSize={"lg"} color="fontGray.1">
            {props.branchName}
          </Text>
          <Text fontSize="sm" color="fontGray.2">
            {props.address}
          </Text>
          <Text fontSize="sm" color="fontGray.2">
            {props.contact}
          </Text>
        </Flex>
      </Flex>
      <Flex p={1} gap={1}>
        <Button variant={"outline"}>Edit</Button>
        <Button
          onClick={() =>
            router.push(
              `/manage-store/${props.branchName?.replaceAll(" ", "-")}`,
            )
          }
        >
          View
        </Button>
      </Flex>
    </Flex>
  );
};
