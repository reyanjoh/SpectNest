"use client";

import React from "react";
import { InventoryLayout } from "@/layouts/InventoryLayout";
import { Container } from "@/components/Container";
import { Flex, Text, Button, Grid, GridItem, Box } from "@chakra-ui/react";
import { branchAssignedEmployees } from "@/@temp/branchAssignedEmployees";
import { TableDropDown } from "./components/TableDropDown";

const page = () => {
  const [lowIndex, setLowIndex] = React.useState<number>(0);
  const [highIndex, setHighIndex] = React.useState<number>(5);

  return (
    <InventoryLayout>
      <Container>
        <Text color="brand" fontSize="xl" fontWeight="bold">
          Main Branch
        </Text>
        <Flex></Flex>
      </Container>
      <Container px={0}>
        <Flex px={1} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize="xl">Assigned Employees</Text>
          <Button>Add Employee</Button>
        </Flex>
        <Box>
          <Box borderBottom={"1px solid"} borderColor="bgGray">
            <Grid
              templateColumns={".8fr .6fr .6fr 1fr 1fr .5fr"}
              gap={1}
              py={1}
              px={1}
            >
              {[
                "ID",
                "First Name",
                "Last Name",
                "Phone Number",
                "Position",
                "Actions",
              ].map((item) => (
                <GridItem key={item}>
                  <Text fontSize="sm" color="fontGray.1">
                    {item}
                  </Text>
                </GridItem>
              ))}
            </Grid>
          </Box>
          {branchAssignedEmployees
            .slice(lowIndex, highIndex)
            .map((employee) => (
              <Box
                key={employee.id}
                borderBottom={"1px solid"}
                borderColor="bgGray"
              >
                <Grid
                  templateColumns={".8fr .6fr .6fr 1fr 1fr .5fr"}
                  gap={1}
                  py={1}
                  px={1}
                >
                  {/* <Grid templateColumns={" "} gap={4} mt={4}> */}
                  <GridItem overflow={"hidden"}>
                    <Text fontSize="sm" truncate>
                      {employee.id}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="sm">{employee.firstName}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="sm">{employee.lastName}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="sm">{employee.phoneNumber}</Text>
                  </GridItem>
                  <GridItem overflow={"hidden"}>
                    <Text fontSize="sm" truncate>
                      {employee.position}
                    </Text>
                  </GridItem>
                  <GridItem display="flex" alignItems={"center"}>
                    <TableDropDown />
                  </GridItem>
                </Grid>
              </Box>
            ))}
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
