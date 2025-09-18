"use client";

import React from "react";
import { Button, Flex } from "@chakra-ui/react";

const categories = [
  "All",
  "Cakes",
  "Deserts",
  "Beverages",
  "Main Course",
  "Appetizers",
  "Salads",
  "Soups",
  "Sandwiches",
  "Pasta",
  "Pizza",
  "Breakfast",
  "Specials",
];

export const CategoriesCarousel = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  return (
    <Flex
      gap="1.5"
      overflowX="auto"
      w="full"
      maxW="100%"
      flexShrink={0}
      scrollSnapType="x mandatory"
      css={{
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
      }}
    >
      {categories.map((category, idx) => (
        <Button
          key={idx}
          bg={activeCategory === idx ? "black" : "white"}
          color={activeCategory === idx ? "white" : "black"}
          p="1"
          borderRadius="xl"
          cursor="pointer"
          minW="8rem"
          fontWeight="semibold"
          letterSpacing="wide"
          scrollSnapAlign="start"
          whiteSpace="nowrap"
          onClick={() => {
            setActiveCategory(idx);
          }}
        >
          {category}
        </Button>
      ))}
    </Flex>
  );
};
