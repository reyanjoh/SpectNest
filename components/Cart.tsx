"use client";

import { Card } from "@/components/Card";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import React from "react";
import { OrderDetails } from "../app/[employeeId]/menu/OrderDetails";
import { Receipt } from "../app/[employeeId]/menu/Receipt";
import { useCartStore } from "../store/menu/cartStore";
import { usePathname, useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const Cart = () => {
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams();
  const cart = useCartStore((state) => state.cart);
  const updateReceipt = useCartStore((state) => state.updateReceipt);
  React.useEffect(() => {
    updateReceipt();
  }, [cart, updateReceipt]);

  const receipt = useCartStore((state) => state.receipt);

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
        {pathName.endsWith("menu") ? (
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
            onClick={() => {
              if (receipt.total <= 0) return;
              router.push(`/${params.employeeId}/checkout`);
            }}
          >
            Checkout
          </Button>
        ) : pathName.endsWith("checkout") ? (
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
            Place Order
          </Button>
        ) : null}
      </Flex>
    </Card>
  );
};
