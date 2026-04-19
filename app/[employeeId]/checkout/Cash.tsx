import { Card } from "@/components/Card";
import { Flex, Input, Text } from "@chakra-ui/react";

export const Cash = () => {
  return (
    <Card w={"35rem"}>
      <Text fontSize={"xl"} fontWeight={"semibold"}>
        Payment Details
      </Text>

      <Flex justifyContent={"space-between"} gap={"1"}>
        <Text>Total</Text>
        <Text fontSize={"md"} fontWeight={"semibold"}>
          ₱850
        </Text>
      </Flex>

      <Flex flexDirection={"column"}>
        <Text fontSize={"sm"}>Amount Received</Text>
        <Input pl={1} placeholder="₱ 0.00" />
      </Flex>
      <Flex flexDirection={"column"}>
        <Text fontSize={"sm"}>Change</Text>
        <Text fontSize={"2xl"} fontWeight={"semibold"} color={"brand"}>
          ₱150
        </Text>
      </Flex>
    </Card>
  );
};
