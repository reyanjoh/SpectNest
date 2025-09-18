"use client";

import { MinusIcon } from "@/components/icons/MinusIcon";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { Grid, Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import React from "react";
import { ProductType } from "../../../types/ProductType";
import { useCartStore } from "../../../store/menu/cartStore";

type Props = { product: ProductType; quantity: number };

export const OrderDetails = ({ product, quantity }: Props) => {
  const addProduct = useCartStore((state) => state.addProduct);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const inputQuantity = useCartStore((state) => state.inputQuantity);

  return (
    <Grid templateColumns="5rem 1fr" gap={"1"}>
      <Flex overflow={"hidden"} h={"5rem"} w={"5rem"} borderRadius={"md"}>
        <Image
          src={product.imageUrl}
          alt="Blank Image"
          objectFit={"cover"}
          objectPosition={"center"}
          h={"full"}
          w={"full"}
        />
      </Flex>
      <Flex flexDir={"column"} gap={"1"}>
        <Text fontSize={"md"} lineClamp={1}>
          {product.name}
        </Text>
        <Flex gap={"1"} justifyContent={"space-between"}>
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            {/* ₱{product.price * quantity} */}₱{product.price}
          </Text>
          <Flex gap={".5"} alignItems={"center"}>
            <Button
              size={"2xs"}
              w={"auto"}
              p={0}
              m={0}
              bg={"black"}
              borderRadius={"full"}
              onClick={() => removeProduct(product)}
            >
              <MinusIcon />
            </Button>
            <Input
              value={quantity}
              min={1}
              max={10}
              size={"2xs"}
              w={"2"}
              fontSize={"md"}
              fontWeight={"semibold"}
              p={0}
              border={"none"}
              textAlign={"center"}
              onChange={(e) => {
                inputQuantity(product, Number(e.target.value));
              }}
            />
            <Button
              size={"2xs"}
              w={"auto"}
              p={0}
              m={0}
              bg={"black"}
              borderRadius={"full"}
              onClick={() => addProduct(product)}
            >
              <PlusIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
};
