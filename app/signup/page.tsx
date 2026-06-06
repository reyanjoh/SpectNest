"use client";

import { Logo } from "@/components/icons/Logo";
import { Button, Field, Flex, Grid, Input, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function POSLoginPage() {
  const router = useRouter();

  return (
    <Flex minH="100vh" alignItems="center" justifyContent="center">
      <Grid minW={"75rem"} minH="100vh" templateColumns="1fr 1fr">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
          >
            <Logo height="243" width="243" />
            <Text fontSize="4xl" fontWeight="bold" color="brandVariant.1">
              Inventory Thing
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Logo />
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={1}
            gap={1}
          >
            <Text fontSize="3xl">Create an account</Text>
            <Text color="fontGray.1" fontSize="sm">
              Welcome!
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            gap={1}
            minW="25rem"
          >
            <Field.Root required gap={0.5}>
              <Field.Label color="fontGray.1" fontSize="sm">
                First Name <Field.RequiredIndicator />
              </Field.Label>
              <Input
                px={1}
                borderColor="gray.300"
                placeholder="Enter your first name"
              />
            </Field.Root>
            <Field.Root required gap={0.5}>
              <Field.Label color="fontGray.1" fontSize="sm">
                Last Name <Field.RequiredIndicator />
              </Field.Label>
              <Input
                px={1}
                borderColor="gray.300"
                placeholder="Enter your last name"
              />
            </Field.Root>
            <Field.Root required gap={0.5}>
              <Field.Label color="fontGray.1" fontSize="sm">
                Email <Field.RequiredIndicator />
              </Field.Label>
              <Input
                px={1}
                borderColor="gray.300"
                placeholder="Enter your email"
              />
            </Field.Root>

            <Field.Root required gap={0.5}>
              <Field.Label color="fontGray.1" fontSize="sm">
                Create Password <Field.RequiredIndicator />
              </Field.Label>
              <Input
                px={1}
                type="password"
                borderColor="gray.300"
                placeholder="Create Password"
              />
              <Field.HelperText>
                Must be at least 8 characters.
              </Field.HelperText>
            </Field.Root>
            <Button
              mt={1}
              bg="brand"
              color="white"
              onClick={() => router.push("/employee/1/inventory")}
            >
              Get started
            </Button>
            <Flex justifyContent="center" alignItems="center" mt={1} gap={1}>
              <Text fontSize="sm" color="fontGray.1">
                Already have an account?
              </Text>
              <Link color="brand" fontSize="sm" href="/login">
                Log in
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Grid>
    </Flex>
  );
}
