import { Box, Flex, Stack, Text } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Box bgImg="/home-banner-bg.jpg">
      <Flex w="1200px" px="5" pt="20" pb="16" mx="auto" position="relative">
        <Stack maxW="530px" spacing="5" color="gray.50">
          <Text fontWeight="medium" fontSize="4xl">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="xl">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>
        <Box position="absolute" transform="rotate(3deg)" right="0">
          <img src="/airplane.svg" alt="Avião" />
        </Box>
      </Flex>
    </Box>
  );
}
