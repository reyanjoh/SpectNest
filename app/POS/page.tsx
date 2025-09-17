import { POSLayout } from "@/layouts/POSLayout";
import React from "react";
// import { createClient } from "@/backend/client";
import { Flex, Grid } from "@chakra-ui/react";
import { Cart } from "./Cart";

const Page = async () => {
  // const supabase = createClient();

  // const { data, error } = await supabase.from("products").select("*");

  // console.log(data, error);

  return (
    <POSLayout>
      <Grid minH={"100%"} minW={"100%"} templateColumns="1fr 25rem" gap={"1"}>
        <Flex></Flex>
        <Flex>
          <Cart />
        </Flex>
      </Grid>
    </POSLayout>
  );
};

export default Page;
