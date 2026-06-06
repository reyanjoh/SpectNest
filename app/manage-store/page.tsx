import React from "react";
import { InventoryLayout } from "@/layouts/InventoryLayout";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Container } from "@/components/Container";
import { Branch } from "./components/Branch";

const page = () => {
  return (
    <InventoryLayout>
      <Container>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize="xl" fontWeight="medium">
            Manage Store
          </Text>
          <Button
            bg="brand"
            color="white"
            _hover={{ opacity: 0.9 }}
            px={1}
            fontWeight={"medium"}
          >
            Add Store
          </Button>
        </Flex>
        <Flex direction={"column"} pl={1} pr={6} minH={"25rem"} gap={2.5}>
          {/* <Flex
            mt={6}
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            p={4}
            justifyContent={"center"}
          >
            <Text color="fontGray.1">No stores yet.</Text>
          </Flex> */}
          <Branch
            branchName="Branch 1"
            address="123 Main St"
            contact="555-1234"
          />
          <Branch
            branchName="Branch 2"
            address="456 Oak Ave"
            contact="555-5678"
          />
          <Branch
            branchName="Branch 3"
            address="789 Pine Rd"
            contact="555-9012"
          />
        </Flex>
      </Container>
    </InventoryLayout>
  );
};

export default page;
