"use client";

import { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/123/menu");
  }, []);
  return <Flex></Flex>;
}
