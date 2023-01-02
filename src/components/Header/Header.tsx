import React from "react";
import { Box, Container, Flex, Image } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box as="header" bg="#2b2d42" py={2} mb={4}>
      <Container maxW={{base: "md", "md": "xl", "lg": "4xl", "xl": "7xl"}}>
        <Flex>
          <Image src="https://anilist.co/img/icons/icon.svg" w={16} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;