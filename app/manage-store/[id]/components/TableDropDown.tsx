import React from "react";
import { Menu, Portal } from "@chakra-ui/react";
import { ThreeDotIcon } from "@/components/icons/ThreeDotIcon";
import { Button } from "@chakra-ui/react";
import { LuChevronRight } from "react-icons/lu";

export const TableDropDown = () => {
  return (
    <Menu.Root>
      <Menu.Trigger _hover={{ cursor: "pointer" }} p={0}>
        <ThreeDotIcon color="#667085" />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            bg="white"
            borderColor="bgGray"
            borderWidth={"1px"}
            borderRadius={"md"}
            p={0}
            minW={"15"}
          >
            <Menu.Root
              positioning={{
                placement: "right-start",
                gutter: 2,
              }}
            >
              <Menu.TriggerItem
                px={1}
                py={"0.6rem"}
                color="black"
                _highlighted={{ bg: "bgGray" }}
              >
                <Button
                  variant={"ghost"}
                  outline={"none"}
                  color="black"
                  gap={1}
                >
                  Re-assign <LuChevronRight />
                </Button>
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content
                    bg="white"
                    borderColor="bgGray"
                    borderWidth={"1px"}
                    borderRadius={"md"}
                    p={0}
                    minW={"15"}
                  >
                    <Menu.Item
                      px={1}
                      py={"0.6rem"}
                      color="black"
                      value="new-txt"
                      _highlighted={{ bg: "bgGray" }}
                    >
                      Main Branch
                    </Menu.Item>
                    <Menu.Item
                      px={1}
                      py={"0.6rem"}
                      color="black"
                      value="new-file"
                      _highlighted={{ bg: "bgGray" }}
                    >
                      Branch 2
                    </Menu.Item>
                    <Menu.Item
                      px={1}
                      py={"0.6rem"}
                      color="black"
                      value="new-win"
                      _highlighted={{ bg: "bgGray" }}
                    >
                      Branch 3
                    </Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item
              px={1}
              py={"0.6rem"}
              color="orange"
              value="new-file"
              _highlighted={{ bg: "bgGray" }}
            >
              Suspend
            </Menu.Item>
            <Menu.Item
              px={1}
              py={"0.6rem"}
              color="red"
              value="new-win"
              _highlighted={{ bg: "bgGray" }}
            >
              Remove
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
