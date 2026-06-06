import React from "react";
import { Card } from "@/components/Card";
import { Button, Flex, Grid, Image, Input, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@/components/icons/DeleteIcon";

export const ProductCard = () => {
  return (
    <Card
      gap={"2"}
      p="1.5"
      justifyContent={"space-between"}
      h="fit-content"
      alignSelf="start"
      position={"sticky"}
      top={"4rem"}
    >
      <Flex
        w={"full"}
        aspectRatio={"3/2"}
        borderRadius={"8px"}
        overflow={"hidden"}
      >
        <Image
          src={"/images/products/black forest.jpg"}
          h={"full"}
          w={"full"}
          objectFit={"cover"}
        />
      </Flex>
      <Grid gridTemplateColumns={"1fr .15fr"}>
        <Input placeholder="Product Name" px={"1"} />
        <Button p={0}>
          <DeleteIcon />
        </Button>
      </Grid>
      <Grid templateColumns={"1fr 1fr 1fr"} gap={1}>
        <Flex alignItems={"bottom"}>
          <Text
            fontSize={"md"}
            color={"gray.500"}
            alignSelf={"flex-end"}
            mr={".3rem"}
          >
            Size:
          </Text>
          <Input
            placeholder="6'"
            px={".3rem"}
            borderTop={"none"}
            borderRight={"none"}
            borderRadius={"0"}
            alignSelf={"flex-end"}
            py={0}
            borderColor={"gray.300"}
            h={"1.5rem"}
            fontSize={"1rem"}
          />
        </Flex>
        <Flex alignItems={"bottom"}>
          <Text
            fontSize={"md"}
            color={"gray.500"}
            alignSelf={"flex-end"}
            mr={".3rem"}
          >
            QTY::
          </Text>
          <Input
            placeholder="12"
            px={".3rem"}
            borderTop={"none"}
            borderRight={"none"}
            borderRadius={"0"}
            alignSelf={"flex-end"}
            py={0}
            borderColor={"gray.300"}
            h={"1.5rem"}
            fontSize={"1rem"}
          />
        </Flex>
        <Flex alignItems={"bottom"}>
          <Text
            fontSize={"md"}
            color={"gray.500"}
            alignSelf={"flex-end"}
            mr={".3rem"}
          >
            Price:
          </Text>
          <Input
            placeholder="450"
            px={".3rem"}
            borderTop={"none"}
            borderRight={"none"}
            borderRadius={"0"}
            alignSelf={"flex-end"}
            py={0}
            borderColor={"gray.300"}
            h={"1.5rem"}
            fontSize={"1rem"}
          />
        </Flex>
      </Grid>
      <Flex flexDirection={"column"} gap={".8rem"}>
        <Button borderRadius={"full"} bg={"brand"} color={"white"}>
          Save
        </Button>
        <Button borderRadius={"full"} bg={"gray.300"} color={"white"}>
          Cancel
        </Button>
      </Flex>
    </Card>
  );
};
