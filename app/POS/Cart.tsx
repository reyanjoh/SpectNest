import { Card } from "@/components/Card";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import React from "react";
import { OrderDetails } from "./OrderDetails";
import { Receipt } from "./Receipt";

export const Cart = () => {
  return (
    <Card gap={"2"} p="1.5" justifyContent={"space-between"}>
      <Flex flexDirection={"column"} gap={"2"}>
        <Flex flexDirection={"column"} gap={"2"}>
          <Text fontSize={"2xl"} fontWeight={"extrabold"}>
            Current Order
          </Text>
          <Flex gap={"1"} alignItems={"center"}>
            <Box overflow={"hidden"} h={"8"} w={"8"} borderRadius={"full"}>
              <Image
                src="/images/blankProfile.webp"
                alt="Blank Image"
                objectFit={"cover"}
                objectPosition={"center"}
              />
            </Box>
            <Text fontSize={"md"} fontWeight={"semibold"}>
              John Doe
            </Text>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} gap={"1.5"}>
          <OrderDetails />
          <OrderDetails />
          <OrderDetails />
        </Flex>
      </Flex>

      <Flex flexDirection={"column"} gap={"1.5"}>
        <Receipt />

        <Button
          size={"lg"}
          w={"full"}
          bg={"brand"}
          color={"white"}
          // fontWeight={"semibold"}
          fontSize={"lg"}
          borderRadius={"full"}
          _hover={{ bg: "#4D00F1" }}
          _active={{ bg: "#4D00F1" }}
        >
          Continue
        </Button>
      </Flex>
    </Card>
  );
};
