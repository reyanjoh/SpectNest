"use client";

import React from "react";
import { InventoryLayout } from "@/layouts/InventoryLayout";
import { Container } from "@/components/Container";
import { Text, Box, Flex, Button, Grid, Image } from "@chakra-ui/react";
import { EditProductModal } from "./components/EditProductModal";

const page = () => {
  return (
    <InventoryLayout>
      <Container>
        <Flex px={1} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize="xl">Chocolate Cake</Text>
          {/* <Button>Add Employee</Button> */}
          <Flex gap={1}>
            <EditProductModal />
            <Button variant={"outline"}>Download</Button>
          </Flex>
        </Flex>

        <Flex direction={"column"}>
          <Flex borderBottom={"1px solid"} borderColor={"bgGray"}>
            <Flex gap={2}>
              <Button
                variant={"ghost"}
                borderRadius={"none"}
                px={0.5}
                py={".5rem"}
                borderBottom={"2px solid"}
                borderColor={"brand"}
              >
                Overview
              </Button>
              <Button variant={"ghost"} borderRadius={"none"}>
                Purchases
              </Button>
              <Button variant={"ghost"} borderRadius={"none"}>
                Adjustments
              </Button>
              <Button variant={"ghost"} borderRadius={"none"}>
                History
              </Button>
            </Flex>

            <Flex h={"auto"} w={"full"}></Flex>
          </Flex>
          <Grid templateColumns={"1.5fr .5fr"} p={1.5}>
            <Flex flexDirection={"column"}>
              <Flex flexDirection={"column"} gap={2} w={"30rem"}>
                <Text
                  fontSize="lg"
                  fontWeight={"semibold"}
                  // color={"fontGray.2"}
                >
                  Primary Details
                </Text>
                <Grid templateColumns={"1fr 1fr"}>
                  <Text color={"fontGray.1"}>ID</Text>
                  <Text color={"fontGray.1"}>123214541243535343231</Text>
                </Grid>
                <Grid templateColumns={"1fr 1fr"}>
                  <Text color={"fontGray.1"}>Product name</Text>
                  <Text color={"fontGray.1"}>Chocolate Cake</Text>
                </Grid>
                <Grid templateColumns={"1fr 1fr"}>
                  <Text color={"fontGray.1"}>Price</Text>
                  <Text color={"fontGray.1"}>800</Text>
                </Grid>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"3rem"} justifyContent={"center"}>
              <Flex justifyContent={"center"}>
                <Flex
                  p={".5"}
                  border={"2px dashed"}
                  borderColor={"borderGray.1"}
                  borderRadius={"md"}
                >
                  <Image
                    aspectRatio={"1:1"}
                    h={"10rem"}
                    borderRadius={"md"}
                    src={"/images/products/black forest.jpg"}
                  />
                </Flex>
              </Flex>
              <Flex flexDirection={"column"} gap={2}>
                <Grid templateColumns={"1fr .1fr"}>
                  <Text color={"fontGray.1"}>Opening Stock</Text>
                  <Text color={"fontGray.1"}>8</Text>
                </Grid>
                <Grid templateColumns={"1fr .1fr"}>
                  <Text color={"fontGray.1"}>Sold Items</Text>
                  <Text color={"fontGray.1"}>6</Text>
                </Grid>
                <Grid templateColumns={"1fr .1fr"}>
                  <Text color={"fontGray.1"}>Remaining Stock</Text>
                  <Text color={"fontGray.1"}>2</Text>
                </Grid>
                <Grid templateColumns={"1fr .1fr"}>
                  <Text color={"fontGray.1"}>Threshold value</Text>
                  <Text color={"fontGray.1"}>12</Text>
                </Grid>
              </Flex>
            </Flex>
          </Grid>
        </Flex>
      </Container>
    </InventoryLayout>
  );
};

export default page;
