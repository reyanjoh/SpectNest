import React from "react";
import { Box, Grid, GridItem, Image, Text, Flex } from "@chakra-ui/react";
import { TableDropDown } from "./TableDropDown";

type TableBodyProps = {
  props: any[];
  lowIndex: number;
  highIndex: number;
};

export const TableBody = ({ props, lowIndex, highIndex }: TableBodyProps) => {
  return props.slice(lowIndex, highIndex).map((props) => (
    <Box key={props.id} borderBottom={"1px solid"} borderColor="bgGray">
      <Grid
        templateColumns={".5fr .6fr .6fr .5fr .5fr 1fr .5fr .2fr"}
        gap={1}
        py={"0.3rem"}
        px={1}
      >
        {/* <Grid templateColumns={" "} gap={4} mt={4}> */}
        <GridItem>
          <Flex
            alignItems={"center"}
            gap={2}
            overflow={"hidden"}
            h={"60px"}
            w={"80px"}
            borderRadius={"md"}
          >
            <Image
              src={props.imageUrl}
              alt={props.name}
              // boxSize="70px"
              objectFit="cover"
              w={"80px"}
            />
          </Flex>
        </GridItem>

        <GridItem display={"flex"} alignItems={"center"}>
          <Text fontSize="sm">{props.name}</Text>
        </GridItem>
        <GridItem display={"flex"} alignItems={"center"}>
          <Text fontSize="sm">{props.size}</Text>
        </GridItem>
        <GridItem display={"flex"} alignItems={"center"}>
          <Text fontSize="sm">{props.price}</Text>
        </GridItem>
        <GridItem display={"flex"} alignItems={"center"}>
          <Text
            fontSize="sm"
            color={
              props.quantity <= 0
                ? "red"
                : props.quantity <= 5
                  ? "orange.500"
                  : "green.500"
            }
          >
            {props.quantity}
          </Text>
        </GridItem>
        <GridItem display={"flex"} alignItems={"center"}>
          <Text fontSize="sm">{props.lastModified}</Text>
        </GridItem>
        {/* <GridItem>
         <Text fontSize="sm">{props.price}</Text>
        </GridItem> */}

        <GridItem display="flex" alignItems={"center"}>
          {props.quantity <= 0 ? (
            <Text fontSize="sm" color={"red"}>
              Out of stock
            </Text>
          ) : props.quantity <= 5 ? (
            <Text fontSize="sm" color={"orange.500"}>
              Low stock
            </Text>
          ) : (
            <Text fontSize="sm" color={"green.500"}>
              In- stock
            </Text>
          )}
        </GridItem>
        <GridItem overflow={"hidden"} display={"flex"} alignItems={"center"}>
          <TableDropDown />
        </GridItem>
      </Grid>
    </Box>
  ));
};
