"use client";

import React from "react";
import { InventoryLayout } from "@/layouts/InventoryLayout";
import { Container } from "@/components/Container";
import { Flex, Text, Button, Grid, GridItem, Box } from "@chakra-ui/react";
import { branchAssignedEmployees } from "@/@temp/branchAssignedEmployees";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { NewEmployeeModal } from "./components/NewEmployeeModal";

const page = () => {
  const [lowIndex, setLowIndex] = React.useState<number>(0);
  const [highIndex, setHighIndex] = React.useState<number>(5);

  return (
    <InventoryLayout>
      <Container>
        <Text color="brand" fontSize="xl" fontWeight="bold">
          {/* Main Branch  */}
        </Text>
        <Flex></Flex>
      </Container>
      <Container px={0}>
        <Flex px={1} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize="xl">Assigned Employees</Text>
          {/* <Button>Add Employee</Button> */}
          <NewEmployeeModal />
        </Flex>
        <Box>
          <TableHeader />
          <TableBody
            branchAssignedEmployees={branchAssignedEmployees}
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
            {Math.ceil(branchAssignedEmployees.length / 5)}
          </Text>
          <Button
            variant={"outline"}
            onClick={() => {
              if (highIndex < branchAssignedEmployees.length) {
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
