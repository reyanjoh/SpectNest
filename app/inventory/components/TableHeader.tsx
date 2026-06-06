import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { ThreeDotIcon } from "@/components/icons/ThreeDotIcon";

export const TableHeader = () => {
  return (
    <Box borderBottom={"1px solid"} borderColor="bgGray">
      <Grid
        templateColumns={".5fr .6fr .6fr .5fr .5fr 1fr .5fr .2fr"}
        gap={1}
        py={1}
        px={1}
      >
        {[
          "Image",
          "Name",
          "Size",
          "Price",
          "Quantity",
          "Last Modified",
          "Availability",
        ].map((item) => (
          <GridItem key={item}>
            <Text fontSize="sm" color="fontGray.1">
              {item}
            </Text>
          </GridItem>
        ))}
        <GridItem overflow={"hidden"} display={"flex"} alignItems={"center"}>
          <ThreeDotIcon color="#667085" />
        </GridItem>
      </Grid>
    </Box>
  );
};
