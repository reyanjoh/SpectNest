"use client";

import React, { useState } from "react";
import { POSLayout } from "@/layouts/POSLayout";
import {
  Button,
  Checkbox,
  CloseButton,
  Dialog,
  Flex,
  Grid,
  Input,
  Portal,
  Text,
} from "@chakra-ui/react";
import { ProductCard } from "./components/ProductCard";
import { ProductsTable } from "./components/ProductsTable";
import { ProductsHeader } from "@/components/ProductsHeader";

const Page = () => {
  const [open, setOpen] = useState(false);
  return (
    <POSLayout>
      <Grid minH="100%" minW="100%" templateColumns="1fr 25rem" gap="2">
        <Flex flexDirection="column" minW={0} gap={2}>
          <ProductsHeader />
          <Flex flexDirection="column" minW={0}>
            <Grid
              templateColumns={".4fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr .5fr"}
              bg={"#5E26FF"}
              py={1}
              px={".8rem"}
              borderTopRadius={"12px"}
            >
              <Checkbox.Root>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
              </Checkbox.Root>
              {[
                "Image",
                "Name",
                "Size",
                "QTY",
                "Price",
                "Last Modified",
                "Status",
                "Action",
              ].map((header) => (
                <Text
                  key={header}
                  fontWeight={"semibold"}
                  color={"white"}
                  fontSize={"sm"}
                >
                  {header}
                </Text>
              ))}
            </Grid>
            <ProductsTable setOpen={setOpen} />
          </Flex>
        </Flex>
        <ProductCard />
      </Grid>
      <Dialog.Root
        lazyMount
        size={"md"}
        open={open}
        placement={"center"}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content
              bg={"white"}
              borderRadius={"12px"}
              py={"2rem"}
              w={"100%"}
              px={"4rem"}
              gap={"1.5rem"}
            >
              <Dialog.Header px={"0"} py={"0"} justifyContent={"center"}>
                <Dialog.Title fontSize={"1.8rem"} fontWeight={"normal"}>
                  Restock
                </Dialog.Title>
              </Dialog.Header>
              <Dialog.Body px={"0"} py={"0"}>
                <Flex
                  gap={".5rem"}
                  alignItems={"bottom"}
                  justifyContent={"center"}
                  mb={"1.5rem"}
                >
                  <Text fontSize={"2rem"} color={"orange"}>
                    ⚠
                  </Text>
                  <Text>Enter only the quantity of newly added stock</Text>
                  <Text fontSize={"2rem"} color={"orange"}>
                    ⚠
                  </Text>
                </Flex>
                <Input
                  placeholder="0"
                  textAlign={"center"}
                  border={"none"}
                  borderBottom={"1px solid gray"}
                  borderRadius={"0"}
                />
              </Dialog.Body>
              <Dialog.Footer
                flexDirection={"column"}
                gap={".8rem"}
                px={"0"}
                py={"0"}
              >
                <Button
                  bg={"brand"}
                  w={"full"}
                  borderRadius={"full"}
                  color={"white"}
                >
                  Save
                </Button>
                <Dialog.ActionTrigger asChild>
                  <Button bg={"gray.200"} w={"full"} borderRadius={"full"}>
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </POSLayout>
  );
};

export default Page;
