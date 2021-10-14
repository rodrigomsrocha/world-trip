import Head from "next/head";
import { Flex, Divider, Text, Stack } from "@chakra-ui/react";
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
        <Stack fontWeight="medium" fontSize="4xl" textAlign="center" py="52px">
          <Text>Vamos nessa?</Text>
          <Text>Então escolha seu continente</Text>
        </Stack>
      </Flex>
    </>
  );
}
