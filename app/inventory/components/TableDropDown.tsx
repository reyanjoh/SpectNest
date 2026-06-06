import React from "react";
import { Menu, Portal } from "@chakra-ui/react";
import { ThreeDotIcon } from "@/components/icons/ThreeDotIcon";
import Link from "next/link";

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
            <Link
              href={"/inventory/1"}
              style={{ width: "100%", outline: "none" }}
            >
              <Menu.Item
                px={1}
                py={"0.6rem"}
                color="fontGray.1"
                value="view-product"
                _highlighted={{ bg: "bgGray" }}
                cursor="pointer"
              >
                View Product
              </Menu.Item>
            </Link>
            <Menu.Item
              px={1}
              py={"0.6rem"}
              color="brand"
              value="restock"
              _highlighted={{ bg: "bgGray" }}
              cursor="pointer"
            >
              Restock
            </Menu.Item>

            <Menu.Item
              px={1}
              py={"0.6rem"}
              color="green.500"
              value="pullout"
              _highlighted={{ bg: "bgGray" }}
            >
              Pull out
            </Menu.Item>
            <Menu.Item
              px={1}
              py={"0.6rem"}
              color="orange"
              value="edit"
              _highlighted={{ bg: "bgGray" }}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              px={1}
              py={"0.6rem"}
              color="red"
              value="delete"
              _highlighted={{ bg: "bgGray" }}
            >
              Delete
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
