import { POSLayout } from "@/layouts/POSLayout";
import React from "react";
import { Flex, Grid } from "@chakra-ui/react";

import { ProductsHeader } from "@/components/ProductsHeader";
import { ProductCard } from "./ProductCard";
import { products } from "@/@temp/products";
import { Cart } from "@/components/Cart";

const Page = async () => {
  return (
    <POSLayout>
      <Grid minH="100%" minW="100%" templateColumns="1fr 25rem" gap="2">
        <Flex flexDirection="column" gap={2} minW={0}>
          <ProductsHeader />

          <Grid
            templateColumns={"repeat(auto-fill, minmax(18rem, 1fr))"}
            gap={1.5}
          >
            {products?.map((product) => (
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
