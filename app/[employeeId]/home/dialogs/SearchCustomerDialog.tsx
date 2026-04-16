import React, { useState, useEffect } from "react";

import {
  Flex,
  Text,
  Dialog,
  Portal,
  Input,
  DialogActionTrigger,
  Button,
} from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { SearchCustomerIcon } from "@/components/icons/SearchCustomerIcon";
import { getCustomer } from "@/backend/queries/getCustomer";

// const handleGetCustomer = async (customerName: string) => {
//   const customer = await getCustomer(customerName);
//   console.log(customer);
// };

type User = {
  id: string;
  first_name: string;
  last_name: string;
};

export const SearchCustomerDialog = () => {
  // const [customerName, setCustomerName] = useState<string>("");

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[] | null>();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults(null);
      return;
    }

    const timeout = setTimeout(async () => {
      // setLoading(true);
      getCustomer(query).then(({ data, error }) => {
        // if (!error) setResults(data);
        // setResults(data);
        // setLoading(false);
      });

      // if (!error) setResults(data || []);
      // setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(e.target.value);
  //   // setCustomerName(e.target.value);
  //   setQuery(e.target.value);
  // };

  // console.log(results);

  return (
    <Dialog.Root placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Flex
          flexDirection={"column"}
          gap={"1"}
          h={"14rem"}
          alignItems={"center"}
          cursor={"pointer"}
        >
          <Card
            h={"100%"}
            p={"1.5"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <SearchCustomerIcon color="#0096C3" height="6rem" width="6rem" />
          </Card>

          <Text fontSize={"xl"} fontWeight={"semibold"}>
            Search Customer
          </Text>
        </Flex>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content borderRadius={"2xl"} bg={"white"}>
            <Dialog.Header p={"2rem"}>
              <Input
                placeholder="Search for customer"
                borderRadius={"xl"}
                w={"full"}
                fontSize={"lg"}
                size={"lg"}
                fontWeight={"normal"}
                border={"1px solid"}
                borderColor={"gray.300"}
                px={"1rem"}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  // handleChange(e);
                  setQuery(e.target.value);
                }}
              />
            </Dialog.Header>
            <Dialog.Body></Dialog.Body>
            <Dialog.Footer p={"2rem"}>
              <DialogActionTrigger
                as={Button}
                w={"full"}
                bg={"brand"}
                color={"white"}
                fontSize={"lg"}
                borderRadius={"full"}
                onClick={() => {
                  // handleGetCustomer(customerName);
                }}
              >
                Continue
              </DialogActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
