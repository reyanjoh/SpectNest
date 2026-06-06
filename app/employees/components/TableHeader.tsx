import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

export const TableHeader = () => {
  return (
    <Box borderBottom={"1px solid"} borderColor="bgGray">
      <Grid
        templateColumns={".8fr .6fr .6fr 1fr  1fr 1fr .5fr .2fr"}
        gap={1}
        py={1}
        px={1}
      >
        {[
          "ID",
          "First Name",
          "Last Name",
          "Phone Number",
          "Branch Assigned",
          "Position",
          "Status",
          "...",
        ].map((item) => (
          <GridItem key={item}>
            <Text fontSize="sm" color="fontGray.1">
              {item}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
