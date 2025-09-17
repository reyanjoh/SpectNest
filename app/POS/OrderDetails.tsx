"use client";

import { MinusIcon } from "@/components/icons/MinusIcon";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { Box, Grid, Flex, Text, Image, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export const OrderDetails = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Grid templateColumns="4rem 1fr" gap={"1"}>
      <Box overflow={"hidden"} h={"full"} w={"full"} borderRadius={"md"}>
        <Image
          src="/images/blankProfile.webp"
          alt="Blank Image"
          objectFit={"cover"}
          objectPosition={"center"}
          h={"full"}
        />
      </Box>
      <Flex flexDir={"column"} gap={"1"}>
        <Text fontSize={"md"} lineClamp={1}>
          Product Name Product Name Product Name Product Name
        </Text>
        <Flex gap={"1"} justifyContent={"space-between"}>
          <Text fontSize={"lg"} fontWeight={"semibold"}>
            ₱10.00
          </Text>
          <Flex gap={".5"} alignItems={"center"}>
            <Button
              size={"2xs"}
              w={"auto"}
              p={0}
              m={0}
              bg={"black"}
              borderRadius={"full"}
              onClick={() => setQuantity(quantity - 1)}
            >
              <MinusIcon />
            </Button>
            <Input
              value={quantity}
              min={1}
              max={10}
              size={"2xs"}
              w={"2"}
              fontSize={"md"}
              fontWeight={"semibold"}
              p={0}
              border={"none"}
              textAlign={"center"}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <Button
              size={"2xs"}
              w={"auto"}
              p={0}
              m={0}
              bg={"black"}
              borderRadius={"full"}
              onClick={() => setQuantity(quantity + 1)}
            >
              <PlusIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Grid>
  );
};
