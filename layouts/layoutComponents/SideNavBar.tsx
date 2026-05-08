"use client";

import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "@/components/icons/Logo";
import { PowerIcon } from "@/components/icons/PowerIcon";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { getSideNav } from "@/utils/navigation/getSideNav";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { TagsIcon } from "@/components/icons/TagsIcon";
import { CartIcon } from "@/components/icons/CartIcon";
import { ChatIcon } from "@/components/icons/ChatIcon";
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/menu/cartStore";

export const SideNavBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [settingsActive, setSettingsActive] = useState<boolean>(false);
  const params = useParams();
  const pathname = usePathname();

  const sideNav = getSideNav(params.employeeId as string);

  const { total } = useCartStore((state) => state.receipt);
  console.log(total);

  return (
    <Flex
      maxH={"calc(100vh - 7rem)"}
      bg="white"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      borderRadius={"full"}
      py={"1.5"}
      px={"1rem"}
      position={"sticky"}
      top={"4rem"}
    >
      <Flex
        flexDir="column"
        gap="4rem"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Logo />
        </Flex>
        <Flex
          flexDir="column"
          gap="2rem"
          alignItems={"center"}
          justifyContent={"center"}
        >
          {sideNav.map((item) => (
            <Box key={item.id}>
              {item.icon === "HomeIcon" ? (
                <Link href={item.path}>
                  <HomeIcon active={pathname === item.path} />
                </Link>
              ) : item.icon === "MenuIcon" ? (
                <Link href={item.path}>
                  <MenuIcon active={pathname === item.path} />
                </Link>
              ) : item.icon === "TagsIcon" ? (
                <Link href={item.path}>
                  <TagsIcon active={pathname === item.path} />
                </Link>
              ) : item.icon === "CartIcon" ? (
                <Link
                  href={item.path}
                  onClick={(e) => {
                    if (total === 0) {
                      e.preventDefault();
                    }
                  }}
                  style={
                    total === 0
                      ? {
                          color: "gray",
                          cursor: "not-allowed",
                        }
                      : {}
                  }
                >
                  <CartIcon active={pathname === item.path} />
                </Link>
              ) : item.icon === "ChatIcon" ? (
                <Link href={item.path}>
                  <ChatIcon active={pathname === item.path} />
                </Link>
              ) : null}
            </Box>
          ))}
        </Flex>
      </Flex>

      <Flex
        flexDir="column"
        gap="2"
        mb={".5rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
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

export default SideNavBar;
