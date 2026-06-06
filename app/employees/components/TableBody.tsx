import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { TableDropDown } from "./TableDropDown";

type TableBodyProps = {
  branchAssignedEmployees: any[];
  lowIndex: number;
  highIndex: number;
};

export const TableBody = ({
  branchAssignedEmployees,
  lowIndex,
  highIndex,
}: TableBodyProps) => {
  return branchAssignedEmployees.slice(lowIndex, highIndex).map((employee) => (
    <Box key={employee.id} borderBottom={"1px solid"} borderColor="bgGray">
      <Grid
        templateColumns={".8fr .6fr .6fr 1fr  1fr 1fr .5fr .2fr"}
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

        <GridItem>
          <Text fontSize="sm">{employee.branchAssigned}</Text>
        </GridItem>
        <GridItem overflow={"hidden"}>
          <Text fontSize="sm" truncate>
            {employee.position}
          </Text>
        </GridItem>
        <GridItem display="flex" alignItems={"center"}>
          <Text
            fontSize="sm"
            color={
              employee.employeeStatus === "Active"
                ? "green.500"
                : employee.employeeStatus === "Suspended"
                  ? "orange.500"
                  : employee.employeeStatus === "Inactive"
                    ? "gray.500"
                    : "red.500"
            }
            fontWeight="medium"
          >
            {employee.employeeStatus}
          </Text>
        </GridItem>
        <GridItem overflow={"hidden"}>
          <TableDropDown />
        </GridItem>
      </Grid>
    </Box>
  ));
};
