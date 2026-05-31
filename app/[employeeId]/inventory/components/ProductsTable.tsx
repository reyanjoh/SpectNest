"use client";
import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Flex,
  Grid,
  Text,
  Image,
  Button,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { useProductStore } from "@/store/menu/ProductsStore";
import { ThreeDotIcon } from "@/components/icons/ThreeDotIcon";

type ProductsTableProps = {
  setOpen: (open: boolean) => void;
};

export const ProductsTable = ({ setOpen }: ProductsTableProps) => {
  const products = useProductStore((state) => state.products);
  const getProducts = useProductStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return products?.map((product, index) => {
    return (
      <Grid
        templateColumns={".4fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr .5fr"}
        px={".8rem"}
        py={".5rem"}
        alignItems={"center"}
        key={product.id}
        bg={index % 2 === 0 ? "white" : "blue.50"}
      >
        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
        <Flex
          alignItems={"center"}
          overflow={"hidden"}
          aspectRatio={"3/2"}
          h={"2.8rem"}
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            objectFit={"cover"}
            w={"100%"}
            h={"100%"}
          />
        </Flex>
        <Text fontWeight={"semibold"} fontSize={"sm"} color={"brand"}>
          {product.name}
        </Text>
        <Text fontWeight={"semibold"} fontSize={"sm"}>
          {product.size}
        </Text>
        <Text fontWeight={"semibold"} fontSize={"sm"} color={"brand"}>
          {product.quantity}
        </Text>
        <Text fontWeight={"semibold"} fontSize={"sm"}>
          ${product.price.toFixed(2)}
        </Text>
        <Text fontWeight={"semibold"} fontSize={"sm"}>
          ${product.price.toFixed(2)}
        </Text>
        {product.quantity! <= 0 ? (
          <Text fontWeight={"semibold"} fontSize={"sm"} color={"red.500"}>
            Out of Stock
          </Text>
        ) : product.quantity! < 4 ? (
          <Text fontWeight={"semibold"} fontSize={"sm"} color={"orange"}>
            Low in Stock
          </Text>
        ) : (
          <Text fontWeight={"semibold"} fontSize={"sm"} color={"brand"}>
            In Stock
          </Text>
        )}

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button p={0} w={"1rem"} bg={"transparent"}>
              <ThreeDotIcon />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content p={0} bg={"white"}>
                {["Restock", "Edit", "Delete"].map((option) => (
                  <>
                    <Menu.ItemGroup>
                      <Menu.Item
                        value={option}
                        py={".5rem"}
                        fontSize={"xs"}
                        justifyContent={"center"}
                        color={option === "Delete" ? "red" : "black"}
                        _hover={{ bg: "gray.100" }}
                        fontWeight={"semibold"}
                        onSelect={() => {
                          if (option === "Restock") {
                            setOpen(true);
                          }
                        }}
                      >
                        {option}
                      </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.Separator m={0} borderColor={"gray.100"} />
                  </>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Grid>
    );
  });
};
