"use client";

import { Card } from "@/components/Card";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import React from "react";
import { OrderDetails } from "./OrderDetails";
import { Receipt } from "./Receipt";
import { useCartStore } from "../../../store/menu/cartStore";

export const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const updateReceipt = useCartStore((state) => state.updateReceipt);
  React.useEffect(() => {
    updateReceipt();
  }, [cart, updateReceipt]);

  return (
    <Card
      gap={"2"}
      p="1.5"
      justifyContent={"space-between"}
      h="fit-content"
      alignSelf="start"
      position={"sticky"}
      top={"4rem"}
    >
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
          {cart.map((product) => (
            <OrderDetails
              key={product.product.id}
              product={product.product}
              quantity={product.quantity}
            />
          ))}
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
