"use client";

import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo } from "@/components/icons/Logo";
import { PowerIcon } from "@/components/icons/PowerIcon";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { getSideNav } from "@/utils/navigation/getSideNav";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { TagsIcon } from "@/components/icons/TagsIcon";
import { CartIcon } from "@/components/icons/CartIcon";
import { InventoryIcon } from "@/components/icons/InventoryIcon";
import { ChatIcon } from "@/components/icons/ChatIcon";
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/menu/cartStore";
import { ReportsIcon } from "@/components/icons/ReportsIcon";
import { EmployeesIcon } from "@/components/icons/EmployeesIcon";
import { ManageStoreIcon } from "@/components/icons/ManageStoreIcon";

export const SideNav = () => {
  const [active, setActive] = useState<boolean>(false);
  const [settingsActive, setSettingsActive] = useState<boolean>(false);
  const params = useParams();
  const pathname = usePathname();

  const sideNav = getSideNav(params.employeeId as string);

  const { total } = useCartStore((state) => state.receipt);
  console.log(total);

  return (
    <Flex
      h={"100vh"}
      w={"17.5rem"}
      bg="white"
      flexDir="column"
      justifyContent="space-between"
      py={"1.5"}
      px={"1rem"}
      position={"sticky"}
      top={"0"}
    >
      <Flex flexDir="column" gap="4rem">
        <Flex alignItems={"center"} pl={"1rem"} gap={1}>
          <Logo />

          <Text fontSize={"lg"} fontWeight={"medium"} color={"brand"}>
            Inventory thing
          </Text>
        </Flex>
        <Flex flexDir="column" gap="2rem" pl={"1rem"} justifyContent={"center"}>
          {sideNav.map((item) => (
            <Box key={item.id}>
              {item.icon === "HomeIcon" ? (
                <Link href={item.path}>
                  <Flex alignItems={"center"} gap={1}>
                    <HomeIcon
                      color={
                        pathname.startsWith(item.path) ? "#4D00F1" : "#667085"
                      }
                    />
                    <Text
                      fontSize={"md"}
                      fontWeight={"medium"}
                      color={
                        pathname.startsWith(item.path) ? "brand" : "fontGray.1"
                      }
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </Link>
              ) : item.icon === "MenuIcon" ? (
                <Link href={item.path}>
                  <Flex alignItems={"center"} gap={1}>
                    <MenuIcon
                      color={
                        pathname.startsWith(item.path) ? "#4D00F1" : "#667085"
                      }
                    />
                    <Text
                      fontSize={"md"}
                      fontWeight={"medium"}
                      color={
                        pathname.startsWith(item.path) ? "brand" : "fontGray.1"
                      }
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </Link>
              ) : item.icon === "InventoryIcon" ? (
                <Link href={item.path}>
                  <Flex alignItems={"center"} gap={1}>
                    <InventoryIcon
                      color={
                        pathname.startsWith(item.path) ? "#4D00F1" : "#667085"
                      }
                    />
                    <Text
                      fontSize={"md"}
                      fontWeight={"medium"}
                      color={
                        pathname.startsWith(item.path) ? "brand" : "fontGray.1"
                      }
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </Link>
              ) : item.icon === "ReportsIcon" ? (
                <Link href={item.path}>
                  <Flex alignItems={"center"} gap={1}>
                    <ReportsIcon
                      color={
                        pathname.startsWith(item.path) ? "#4D00F1" : "#667085"
                      }
                    />
                    <Text
                      fontSize={"md"}
                      fontWeight={"medium"}
                      color={
                        pathname.startsWith(item.path) ? "brand" : "fontGray.1"
                      }
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </Link>
              ) : item.icon === "EmployeesIcon" ? (
                <Link href={item.path}>
                  <Flex alignItems={"center"} gap={1}>
                    <EmployeesIcon
                      color={
                        pathname.startsWith(item.path) ? "#4D00F1" : "#667085"
                      }
                    />
                    <Text
                      fontSize={"md"}
                      fontWeight={"medium"}
                      color={
                        pathname.startsWith(item.path) ? "brand" : "fontGray.1"
                      }
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </Link>
              ) : item.icon === "ManageStoreIcon" ? (
                <Link href={item.path}>
                  <Flex alignItems={"center"} gap={1}>
                    <ManageStoreIcon
                      color={
                        pathname.startsWith(item.path) ? "#4D00F1" : "#667085"
                      }
                    />
                    <Text
                      fontSize={"md"}
                      fontWeight={"medium"}
                      color={
                        pathname.startsWith(item.path) ? "brand" : "fontGray.1"
                      }
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </Link>
              ) : null}
            </Box>
          ))}
        </Flex>
      </Flex>

      <Flex flexDir="column" gap="2" mb={".5rem"} pl={"1rem"}>
        <Box onClick={() => setSettingsActive(!settingsActive)}>
          <SettingsIcon active={settingsActive} />
        </Box>

        <Box onClick={() => setActive(!active)}>
          <PowerIcon active={active} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default SideNav;
