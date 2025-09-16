import { POSLayout } from "@/layouts/POSLayout";
import React from "react";
import { createClient } from "@/backend/client";

const Page = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("products").select("*");

  console.log(data, error);

  return <POSLayout>POS</POSLayout>;
};

export default Page;
