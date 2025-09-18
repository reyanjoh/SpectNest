"use client";

import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "@/components/icons/Logo";
import { PowerIcon } from "@/components/icons/PowerIcon";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { TagsIcon } from "@/components/icons/TagsIcon";
import { CartIcon } from "@/components/icons/CartIcon";
import { ChatIcon } from "@/components/icons/ChatIcon";

export const SideNavBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const [settingsActive, setSettingsActive] = useState<boolean>(false);

  const [homeActive, setHomeActive] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [tagsActive, setTagsActive] = useState<boolean>(false);
  const [cartActive, setCartActive] = useState<boolean>(false);
  const [chatActive, setChatActive] = useState<boolean>(false);

  return (
    <Flex
      // minH="100%"
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
          <Box onClick={() => setHomeActive(!homeActive)}>
            <HomeIcon active={homeActive} />
          </Box>
          <Box onClick={() => setMenuActive(!menuActive)}>
            <MenuIcon active={menuActive} />
          </Box>
          <Box onClick={() => setTagsActive(!tagsActive)}>
            <TagsIcon active={tagsActive} />
          </Box>
          <Box onClick={() => setCartActive(!cartActive)}>
            <CartIcon active={cartActive} />
          </Box>
          <Box onClick={() => setChatActive(!chatActive)}>
            <ChatIcon active={chatActive} />
          </Box>
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
