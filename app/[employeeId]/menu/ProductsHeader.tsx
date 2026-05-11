import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@/components/icons/SearchIcon";
import { FilterIcon } from "@/components/icons/FilterIcon";
import { CategoriesCarousel } from "./CategoriesCarousel";

export const ProductsHeader = () => {
  return (
    <Flex
      flexDirection={"column"}
      gap={"1"}
      // py={"1"}
      position={"sticky"}
      top={"-3rem"}
      bg={"bgGray"}
      zIndex={10}
    >
      <Text fontSize={"xl"} fontWeight={"extrabold"} color={"brand"}>
        Items
      </Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        // bg={"red.100"}
        // p={"1"}
        borderRadius={"lg"}
      >
        <Text fontSize={"2xl"} fontWeight={"extrabold"}>
          Deserts
        </Text>

        <Flex gap={"1"} alignItems={"center"}>
          <Flex position={"relative"} bg={"white"} borderRadius={"xl"}>
            <Box position={"absolute"} left={".9rem"} top={".7rem"} h={"full"}>
              <SearchIcon />
            </Box>
            <Input
              borderRadius={"xl"}
              fontSize={"lg"}
              size={"lg"}
              borderColor={"white"}
              border={"none"}
            />
          </Flex>
          <Button
            variant={"ghost"}
            w={"2.8rem"}
            h={"2.7rem"}
            p={0}
            bg={"gray.300"}
            borderRadius={"xl"}
            borderColor={"gray.300"}
          >
            <FilterIcon />
          </Button>
        </Flex>
      </Flex>
      <CategoriesCarousel />
    </Flex>
  );
};
