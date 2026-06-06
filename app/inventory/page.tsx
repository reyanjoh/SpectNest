"use client";

import React from "react";
import { InventoryLayout } from "@/layouts/InventoryLayout";
import { Container } from "@/components/Container";
import { Text, Box, Flex, Button } from "@chakra-ui/react";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { products } from "@/@temp/products";
import { SortIcon } from "@/components/icons/SortIcon";
import { AddProductModal } from "./components/AddProductModal";

const page = () => {
  const [lowIndex, setLowIndex] = React.useState<number>(0);
  const [highIndex, setHighIndex] = React.useState<number>(5);

  return (
    <InventoryLayout>
      <Container>
        <Text color="brand" fontSize="xl" fontWeight="bold">
          {/* Main Branch  */}
        </Text>
      </Container>
      <Container>
        <Flex px={1} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize="xl">Products</Text>
          {/* <Button>Add Employee</Button> */}
          <Flex gap={"1"}>
            <AddProductModal />
            <Button variant={"outline"} gap={"0.5rem"}>
              <SortIcon /> Filters
            </Button>
            <Button variant={"outline"}>Download all</Button>
          </Flex>
        </Flex>
        <Box>
          <TableHeader />
          <TableBody
            props={products}
            lowIndex={lowIndex}
            highIndex={highIndex}
          />
        </Box>
        <Flex
          mt={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={1}
        >
          <Button
            variant={"outline"}
            onClick={() => {
              if (lowIndex > 0) {
                setLowIndex(lowIndex - 5);
                setHighIndex(highIndex - 5);
              }
            }}
          >
            Previous
          </Button>
          <Text mx={4} fontSize={"sm"} color="fontGray.1">
            Page {Math.floor(lowIndex / 5) + 1} of{" "}
            {Math.ceil(products.length / 5)}
          </Text>
          <Button
            variant={"outline"}
            onClick={() => {
              if (highIndex < products.length) {
                setLowIndex(lowIndex + 5);
                setHighIndex(highIndex + 5);
              }
            }}
          >
            Next
          </Button>
        </Flex>
      </Container>
    </InventoryLayout>
  );
};

export default page;
