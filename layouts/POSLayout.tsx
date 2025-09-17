import React from "react";
import { Grid } from "@chakra-ui/react";
import SideNavBar from "@/layouts/layoutComponents/SideNavBar";

type Props = {
  children: React.ReactNode;
};

export const POSLayout = ({ children }: Props) => {
  return (
    <Grid
      minH="100dvh"
      bg="#EFEFEF"
      p={"1rem"}
      pt={"4rem"}
      templateColumns="4.5rem 1fr"
      gap={"1"}
    >
      <SideNavBar />

      {children}
    </Grid>
  );
};
