import React from "react";
import { InventoryLayout } from "@/layouts/InventoryLayout";
import { Container } from "@/components/Container";
import {
  Flex,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  Image,
} from "@chakra-ui/react";

const page = () => {
  return (
    <InventoryLayout>
      <Container flexDirection="row" gap={2} py={2}>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          w="7rem"
          h="7rem"
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src="/images/Shoebill.jpg"
            alt="Profile"
            width={"full"}
            height={"full"}
          />
        </Flex>
        <Grid
          templateRows={"repeat(3, auto)"}
          gap={1}
          pr={4}
          borderRightWidth={1}
          borderColor="bgGray"
        >
          <Text fontSize="xl">Shoebill Stork</Text>
          <Text fontSize="xs" color="fontGray.2">
            Cashier
          </Text>
          <Text fontSize="xs" color="fontGray.2">
            Phone number: 091234567890
          </Text>
        </Grid>
        <Grid
          templateRows={"repeat(3, auto)"}
          gap={1}
          px={4}
          borderRightWidth={1}
          borderColor="bgGray"
        >
          <Text fontSize="md" color={"brand"}>
            Full Time
          </Text>
          <Text fontSize="xs" color="fontGray.2">
            Status: Active
          </Text>
          <Text fontSize="xs" color="fontGray.2">
            Branch Assigned: Main Branch
          </Text>
        </Grid>
        <Flex justifyContent={"center"} alignItems={"center"} px={4}>
          <Text fontSize="xs" color="fontGray.2">
            ID: 231231231231233342
          </Text>
        </Flex>
      </Container>
      <Container>
        <Text fontSize="lg">Overview</Text>
        <Grid
          templateColumns={".7fr 1fr 1fr 1fr "}
          gap={"1px"}
          bg="bgGray"
          p={0}
        >
          <Grid templateRows={"repeat(2, auto)"} gap={1} pr={4} bg="white">
            <Text color={"brand"}>Total Sales</Text>
            <Text fontWeight={"semibold"} fontSize="sm" color="fontGray.2">
              ₱ 25,000
            </Text>
          </Grid>
          <Grid templateRows={"repeat(2, auto)"} gap={1} px={4} bg="white">
            <Text color={"orange"}>Total Items Sold</Text>
            <Text fontWeight={"semibold"} fontSize="sm" color="fontGray.2">
              591
            </Text>
          </Grid>
          <Grid templateRows={"repeat(2, auto)"} gap={1} px={4} bg="white">
            <Text color={"purple"}>Total Incentives</Text>
            <Text fontWeight={"semibold"} fontSize="sm" color="fontGray.2">
              ₱ 2,500
            </Text>
          </Grid>
          <Grid templateRows={"repeat(2, auto)"} gap={1} px={4} bg="white">
            <Text color={"red"}>Total Income</Text>
            <Text fontWeight={"semibold"} fontSize="sm" color="fontGray.2">
              ₱ 2,500
            </Text>
          </Grid>
        </Grid>
      </Container>
      <Container h="27rem" alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={"4xl"}>Resume Copy/Image</Text>
      </Container>
    </InventoryLayout>
  );
};

export default page;
