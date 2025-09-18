"use client";
import { Card } from "@/components/Card";
import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { ProductType } from "../../../types/ProductType";
import { useCartStore } from "../../../store/menu/cartStore";

type Props = {
  product: ProductType;
};

export const ProductCard = ({ product }: Props) => {
  const addProduct = useCartStore((state) => state.addProduct);
  return (
    <Card minH={"20rem"} borderRadius={"xl"}>
      <Box overflow={"hidden"} h={"15rem"} w={"full"} borderRadius={"lg"}>
        <Image
          src={product.imageUrl}
          alt="Blank Image"
          objectFit={"cover"}
          objectPosition={"center"}
          w={"full"}
        />
      </Box>
      <Flex flexDirection={"column"} gap={"1"}>
        <Text fontSize={"lg"} lineClamp={2} h={"3.5rem"}>
          {product.name}
        </Text>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            ₱{product.price}
          </Text>
          <Button
            size={"xs"}
            w={"auto"}
            p={0}
            m={0}
            bg={"black"}
            borderRadius={"full"}
            onClick={() => {
              addProduct(product);
            }}
          >
            <PlusIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
