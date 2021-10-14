import Link from "next/link";
import { Flex } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex w="100%" align="center" justify="center" h="100px">
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Logo" />
        </a>
      </Link>
    </Flex>
  );
}
