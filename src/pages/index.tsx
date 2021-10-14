import Head from "next/head";
import { Flex, Divider } from "@chakra-ui/react";
import { HomeBanner } from "../components/HomeBanner";
import { TravelingTypes } from "../components/TravelingTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip | Home</title>
      </Head>
      <Flex direction="column">
        <HomeBanner />
        <TravelingTypes />
        <Divider w="90px" h="2px" bg="gray.900" mx="auto" />
      </Flex>
    </>
  );
}
