"use client";

import { Card } from "@/components/Card";
import {
  Flex,
  Text,
  Image,
  Box,
  Button,
  Dialog,
  Portal,
} from "@chakra-ui/react";
import React, { useState } from "react";
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
  const receipt = useCartStore((state) => state.receipt);
  const change = useCartStore((state) => state.change);
  const updateReceipt = useCartStore((state) => state.updateReceipt);

  const [open, setOpen] = useState(false);

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
          <Dialog.Root
            size={"xs"}
            open={open}
            placement={"center"}
            onOpenChange={(e) => setOpen(e.open)}
          >
            <Dialog.Trigger asChild>
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
                disabled={change < 0}
              >
                Place Order
              </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content bg={"white"} borderRadius={"xl"}>
                  <Dialog.Header
                    p={1}
                    pt={"2"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignContent={"center"}
                  >
                    <Dialog.Title textAlign={"center"}>
                      Transaction Success!
                    </Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body
                    // p={1}
                    // pt={"5"}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={2}
                    justifyContent={"center"}
                    alignContent={"center"}
                  >
                    <Text textAlign={"center"}>Confirm Order</Text>
                  </Dialog.Body>
                  <Dialog.Footer p={1} justifyContent={"center"}>
                    <Dialog.ActionTrigger asChild>
                      <Button
                        // size={"lg"}
                        // w={"full"}
                        bg={"brand"}
                        color={"white"}
                        // fontWeight={"semibold"}
                        fontSize={"lg"}
                        borderRadius={"full"}
                        _hover={{ bg: "#4D00F1" }}
                        _active={{ bg: "#4D00F1" }}
                      >
                        Close
                      </Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        ) : null}
      </Flex>
    </Card>
  );
};
