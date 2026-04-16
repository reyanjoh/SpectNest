"use client";
import { POSLayout } from "@/layouts/POSLayout";
import React, { useEffect, useState } from "react";
import {
  // Button,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import { Cart } from "@/components/Cart";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../../store/menu/cartStore";
import { PaymentMethodCards } from "@/components/icons/PaymentMethodCards";

const paymentMethod = ["Cash", "G-cash", "Split"] as const;
type PaymentMethodProps = (typeof paymentMethod)[number];

const Page = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    if (cart.length <= 0) {
      router.back();
    }
  }, [cart, router]);

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethodProps>("Cash");

  return (
    <POSLayout>
      <Grid minH="100%" minW="100%" templateColumns="1fr 25rem" gap="2">
        <Flex flexDirection="column" gap={2} minW={0} pt={"1"}>
          <Flex gap={"1"} alignItems={"center"}>
            <BiArrowBack
              size={30}
              color="black"
              cursor={"pointer"}
              onClick={() => {
                router.back();
              }}
            />
            <Text fontSize={"xl"} color={"black"}>
              Back
            </Text>
          </Flex>

          <Flex flexDirection={"column"} gap={"1"} pt={"1"} pb={"3"}>
            <Text fontSize={"4xl"} fontWeight={"extrabold"}>
              Payment Methods
            </Text>
            <Text fontSize={"xl"}>Choose Payment Method</Text>
          </Flex>

          <Grid
            templateColumns={"repeat(auto-fill, minmax(18rem, 1fr))"}
            gap={1.5}
          >
            {paymentMethod.map((paymentMethod) => (
              <PaymentMethodCards
                key={paymentMethod}
                selectedPaymentMethod={selectedPaymentMethod}
                setSelectedPaymentMethod={setSelectedPaymentMethod}
                paymentMethod={paymentMethod}
              />
            ))}
          </Grid>
          {/* <Flex>
            <Button
              size={"lg"}
              w={"auto"}
              bg={"brand"}
              px={"10rem"}
              py={"1ren"}
              color={"white"}
              // fontWeight={"semibold"}
              fontSize={"lg"}
              borderRadius={"full"}
              _hover={{ bg: "#4D00F1" }}
              _active={{ bg: "#4D00F1" }}
            >
              Continue
            </Button>
          </Flex> */}
        </Flex>
        <Cart />
      </Grid>
    </POSLayout>
  );
};

export default Page;
