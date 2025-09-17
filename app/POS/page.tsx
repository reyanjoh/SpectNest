import { POSLayout } from "@/layouts/POSLayout";
import React from "react";
import { createClient } from "@/backend/client";
import { Flex, Grid } from "@chakra-ui/react";
import { Cart } from "./Cart";
import { ProductsHeader } from "./ProductsHeader";
import { ProductCard } from "./ProductCard";

const Page = async () => {
  const supabase = createClient();

  const { data } = await supabase.from("products").select("*");
  console.log(data);

  return (
    <POSLayout>
      <Grid minH="100%" minW="100%" templateColumns="1fr 25rem" gap="2">
        <Flex flexDirection="column" gap={2} minW={0}>
          <ProductsHeader />

          <Grid
            templateColumns="repeat(auto-fill, minmax(18rem, 1fr))"
            gap={1.5}
          >
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        </Flex>
        <Cart />
      </Grid>
    </POSLayout>
  );
};

export default Page;
