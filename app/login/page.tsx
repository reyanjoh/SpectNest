"use client";

import { Logo } from "@/components/icons/Logo";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function POSLoginPage() {
  const router = useRouter();

  return (
    <Flex minH="100vh" bg="#f3f3f3" align="center" justify="center">
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        w="full"
        maxW="1400px"
        bg="white"
        borderRadius="32px"
        overflow="hidden"
        boxShadow="xl"
      >
        {/* LEFT SIDE */}
        <GridItem>
          <Flex
            bg="#111111"
            color="white"
            p={{ base: 8, lg: 12 }}
            direction="column"
            justify="space-between"
            position="relative"
            overflow="hidden"
            minH={{ base: "400px", lg: "800px" }}
          >
            <Box>
              <Flex align="center" gap={3} mb={10}>
                <Logo />

                <Box>
                  <Heading size="lg">SpectNest</Heading>
                  <Text color="whiteAlpha.700" fontSize="sm">
                    {/* Modern */}
                    Point of Sale
                  </Text>
                </Box>
              </Flex>

              <Box maxW="520px">
                <Heading
                  fontSize={{ base: "4xl", lg: "6xl" }}
                  lineHeight="1.1"
                  mb={6}
                >
                  Manage your store efficiently.
                </Heading>

                <Text color="whiteAlpha.800" fontSize="lg" lineHeight="tall">
                  Track orders, process payments, manage inventory, and monitor
                  sales in a clean and modern POS experience.
                </Text>
              </Box>
            </Box>

            <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={12}>
              <Box
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="24px"
                p={4}
                backdropFilter="blur(12px)"
              >
                <Text fontSize="2xl" fontWeight="bold">
                  99%
                </Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  Fast Checkout
                </Text>
              </Box>

              <Box
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="24px"
                p={4}
                backdropFilter="blur(12px)"
              >
                <Text fontSize="2xl" fontWeight="bold">
                  24/7
                </Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  Access
                </Text>
              </Box>

              <Box
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                borderRadius="24px"
                p={4}
                backdropFilter="blur(12px)"
              >
                <Text fontSize="2xl" fontWeight="bold">
                  Secure
                </Text>
                <Text fontSize="sm" color="whiteAlpha.700">
                  Authentication
                </Text>
              </Box>
            </Grid>

            {/* <Box
              position="absolute"
              bottom="-100px"
              right="-100px"
              w="300px"
              h="300px"
              bg="whiteAlpha.100"
              borderRadius="full"
              filter="blur(100px)"
            />

            <Box
              position="absolute"
              top="40px"
              right="40px"
              w="140px"
              h="140px"
              bg="#5B21FF33"
              borderRadius="full"
              filter="blur(60px)"
            /> */}
          </Flex>
        </GridItem>

        {/* RIGHT SIDE */}
        <GridItem>
          <Flex
            bg="#fafafa"
            align="center"
            justify="center"
            p={{ base: 8, lg: 16 }}
            minH={{ base: "auto", lg: "800px" }}
          >
            <Box w="full" maxW="450px">
              <Box mb={2}>
                <Heading size="2xl" color="gray.900">
                  Welcome Back
                </Heading>

                <Text color="gray.500">
                  Login to continue managing your store.
                </Text>
              </Box>

              <Stack gap={1}>
                <Box>
                  <Text mb={1} fontSize="sm" fontWeight="medium">
                    Username
                  </Text>

                  <Input
                    type="text"
                    placeholder="storeCashier01"
                    h="56px"
                    borderRadius="20px"
                    borderColor="gray.200"
                    bg="white"
                    _focusVisible={{
                      borderColor: "brand",
                      boxShadow: "0 0 0 1px brand",
                    }}
                  />
                </Box>

                <Box>
                  <Flex align="center" justify="space-between" mb={1}>
                    <Text fontSize="sm" fontWeight="medium">
                      Password
                    </Text>

                    <Button
                      variant="ghost"
                      size="sm"
                      color="brand"
                      _hover={{ bg: "transparent", color: "brand" }}
                      p={0}
                    >
                      Forgot Password?
                    </Button>
                  </Flex>

                  <Input
                    type="password"
                    placeholder="••••••••"
                    h="56px"
                    borderRadius="20px"
                    borderColor="gray.200"
                    bg="white"
                    _focusVisible={{
                      borderColor: "brand",
                      boxShadow: "0 0 0 1px brand",
                    }}
                  />
                </Box>

                <Flex align="center" justify="space-between" mb={2}>
                  <Checkbox.Root>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Remember me</Checkbox.Label>
                  </Checkbox.Root>

                  <Text fontSize="sm" color="gray.400">
                    POS v1.0
                  </Text>
                </Flex>

                <Button
                  h="56px"
                  borderRadius="20px"
                  bg="brand"
                  color="white"
                  fontSize="lg"
                  fontWeight="semibold"
                  _hover={{ bg: "#4A1EDB" }}
                  onClick={() => {
                    router.push("/123/menu");
                  }}
                >
                  Login
                </Button>
              </Stack>

              <VStack
                mt={2}
                pt={2}
                borderTop="1px solid"
                borderColor="gray.200"
                color="gray.500"
                fontSize="sm"
              >
                <Text>
                  Protected by secure authentication and role-based access.
                </Text>
              </VStack>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
