import { Flex, Text, Box, Stack } from "@chakra-ui/react";
import { HomeBanner } from "../components/HomeBanner";

export default function Home() {
  return (
    <Flex direction="column">
      <HomeBanner />
    </Flex>
  );
}
