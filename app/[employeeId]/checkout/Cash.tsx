import { useState } from "react";
import { Card } from "@/components/Card";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useCartStore } from "../../../store/menu/cartStore";

export const Cash = () => {
  const receipt = useCartStore((state) => state.receipt);
  const change = useCartStore((state) => state.change);
  const updateChange = useCartStore((state) => state.updateChange);

  const [amountReceived, setAmountReceived] = useState(0);

  const handleAmountReceivedChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value === "") {
      updateChange(0);
      return;
    }
    const numericValue = Number(e.target.value.replace(/[^0-9.-]+/g, ""));
    setAmountReceived(numericValue);
    updateChange(numericValue);
  };

  return (
    <Card maxW={"40rem"} minW={"18rem"} gap={".5"}>
      <Text fontSize={"xl"} fontWeight={"semibold"}>
        Payment Details
      </Text>

      <Flex justifyContent={"space-between"} gap={"1"}>
        <Text>Total</Text>
        <Text fontSize={"md"} fontWeight={"semibold"}>
          ₱{receipt.total.toLocaleString()}
        </Text>
      </Flex>

      <Flex flexDirection={"column"}>
        <Text fontSize={"sm"}>Amount Received</Text>
        <Input
          name="amountReceived"
          pl={1}
          placeholder="₱ 0.00"
          border={"none"}
          bg={"gray.100"}
          outline={"none"}
          onChange={handleAmountReceivedChange}
          value={amountReceived ? `₱ ${amountReceived.toLocaleString()}` : ""}
        />

        <Flex gap={1} flexWrap={"wrap"} pt={".5rem"}>
          {[100, 500, 1000, 2000].map((amount) => (
            <Button
              key={amount}
              // size={"sm"}
              px={1}
              py={0}
              h={"1rem"}
              bg={"blue.200"}
              color={"blue"}
              onClick={() => {
                setAmountReceived(amount);
                updateChange(amount);
              }}
            >
              {amount}
            </Button>
          ))}
        </Flex>
      </Flex>
      <Flex flexDirection={"column"}>
        <Text fontSize={"sm"}>Change</Text>
        <Text
          fontSize={"2xl"}
          fontWeight={"semibold"}
          color={change < 0 ? "red" : "brand"}
        >
          {change
            ? `₱${change.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
            : "₱0.00"}
        </Text>
      </Flex>
    </Card>
  );
};
