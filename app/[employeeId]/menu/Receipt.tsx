import React from "react";
import { Card } from "@/components/Card";
import { Flex, Text } from "@chakra-ui/react";
import { useCartStore } from "../../../store/menu/cartStore";

export const Receipt = () => {
  const receipt = useCartStore((state) => state.receipt);

  return (
    <Card bg="gray.100" gap=".5">
      <Flex justifyContent={"space-between"}>
        <Text fontSize={"lg"}>Subtotal</Text>
        <Text fontSize={"lg"}>₱{receipt.subtotal.toLocaleString()}</Text>
      </Flex>
      <Flex justifyContent={"space-between"} pb={"1"}>
        <Text fontSize={"lg"}>Discount</Text>
        <Text fontSize={"lg"}>₱{receipt.discount.toLocaleString()}</Text>
      </Flex>

      <Flex
        justifyContent={"space-between"}
        borderTop={"1px dashed "}
        borderColor={"gray.400"}
        position={"relative"}
        pt={"2"}
        _before={{
          content: '""',
          position: "absolute",
          top: "-1rem",
          left: "-1.8rem",
          width: "2rem",
          height: "2rem",
          borderRadius: "full",
          bg: "white",
        }}
        _after={{
          content: '""',
          position: "absolute",
          top: "-1rem",
          right: "-1.8rem",
          width: "2rem",
          height: "2rem",
          borderRadius: "full",
          bg: "white",
        }}
      >
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Total
        </Text>
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          ₱{receipt.total.toLocaleString()}
        </Text>
      </Flex>
    </Card>
  );
};
