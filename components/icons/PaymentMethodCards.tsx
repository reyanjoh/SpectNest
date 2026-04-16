import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CashIcon } from "./CashIcon";
import { CircleStatusIndicationIcon } from "./CircleStatusIndicationIcon";
import { CreditCardIcon } from "./CreditCardIcon";
import { SplitIcon } from "./SplitIcon";

type Props = {
  selectedPaymentMethod: "Cash" | "G-cash" | "Split";
  setSelectedPaymentMethod: React.Dispatch<
    React.SetStateAction<"Cash" | "G-cash" | "Split">
  >;
  paymentMethod: "Cash" | "G-cash" | "Split";
};

export const PaymentMethodCards = ({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  paymentMethod,
}: Props) => {
  return (
    <Flex
      position={"relative"}
      alignItems={"center"}
      gap={"1"}
      px={"1.5"}
      py={"3.5"}
      borderRadius={"3xl"}
      bg={selectedPaymentMethod === paymentMethod ? "black" : "white"}
      border={"4px solid"}
      borderColor={
        selectedPaymentMethod === paymentMethod ? "none" : "gray.300"
      }
      onClick={() => setSelectedPaymentMethod(paymentMethod)}
    >
      <CircleStatusIndicationIcon
        active={selectedPaymentMethod === paymentMethod}
      />
      {paymentMethod === "Cash" ? (
        <CashIcon height="70" width="70" />
      ) : paymentMethod === "G-cash" ? (
        <CreditCardIcon height="70" width="70" />
      ) : (
        <SplitIcon height="70" width="70" />
      )}
      <Text
        color={selectedPaymentMethod === paymentMethod ? "white" : "black"}
        fontSize={"xl"}
      >
        {paymentMethod}
      </Text>
    </Flex>
  );
};
